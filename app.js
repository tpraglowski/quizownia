'use strict';

const app = document.getElementById('app');
const STORE_CUSTOM = 'quizownia.custom';
const STORE_BEST = 'quizownia.best';
const TIMES = [5, 10, 15, 20, 30, 60];

const SHAPES = [
  '<svg class="shape" viewBox="0 0 40 40"><polygon points="20,4 37,35 3,35" fill="#fff"/></svg>',
  '<svg class="shape" viewBox="0 0 40 40"><polygon points="20,2 38,20 20,38 2,20" fill="#fff"/></svg>',
  '<svg class="shape" viewBox="0 0 40 40"><circle cx="20" cy="20" r="17" fill="#fff"/></svg>',
  '<svg class="shape" viewBox="0 0 40 40"><rect x="5" y="5" width="30" height="30" fill="#fff"/></svg>'
];

// ---------- Storage ----------
function load(key, fallback) {
  try { return JSON.parse(localStorage.getItem(key)) ?? fallback; } catch { return fallback; }
}
function save(key, value) {
  try { localStorage.setItem(key, JSON.stringify(value)); } catch { /* brak miejsca / tryb prywatny */ }
}
const customQuizzes = () => load(STORE_CUSTOM, []);
const allQuizzes = () => [...BUILTIN_QUIZZES, ...customQuizzes()];
const findQuiz = id => allQuizzes().find(q => q.id === id);
const isCustom = id => customQuizzes().some(q => q.id === id);

// ---------- Helpers ----------
const esc = s => String(s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
const shuffle = arr => {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
};
function toast(msg) {
  const t = document.createElement('div');
  t.className = 'toast';
  t.textContent = msg;
  document.body.appendChild(t);
  setTimeout(() => t.remove(), 2200);
}
function questionsLabel(n) {
  if (n === 1) return '1 pytanie';
  const d = n % 10, h = n % 100;
  return `${n} ${d >= 2 && d <= 4 && (h < 12 || h > 14) ? 'pytania' : 'pytań'}`;
}

let timerId = null;
let keyHandler = null;
function clearGameHooks() {
  clearInterval(timerId);
  timerId = null;
  if (keyHandler) document.removeEventListener('keydown', keyHandler);
  keyHandler = null;
}

// ---------- Home ----------
function renderHome() {
  clearGameHooks();
  const best = load(STORE_BEST, {});
  const card = q => `
    <div class="quiz-card">
      <div class="emoji">${esc(q.emoji || '❓')}</div>
      <h3>${esc(q.title)}</h3>
      <div class="meta">${questionsLabel(q.questions.length)}${best[q.id] != null ? ` · rekord: ${best[q.id]} pkt` : ''}</div>
      <div class="actions">
        <button class="play" data-play="${esc(q.id)}">▶ Graj</button>
        ${isCustom(q.id)
          ? `<button data-edit="${esc(q.id)}" title="Edytuj quiz">Edytuj</button>`
          : `<button data-copy="${esc(q.id)}" title="Skopiuj i edytuj">Kopiuj</button>`}
        <button data-export="${esc(q.id)}" title="Pobierz jako plik .json">Pobierz</button>
      </div>
    </div>`;

  const custom = customQuizzes();
  app.innerHTML = `
    <h1 class="logo">Quizownia</h1>
    <p class="tagline">Ucz się, grając. Rozwiązuj quizy sam albo rywalizuj ze znajomymi.</p>

    <h2 class="section-title">Twoje quizy</h2>
    <div class="grid">
      ${custom.map(card).join('')}
      <div class="quiz-card new" id="new-quiz"><div class="emoji">＋</div><strong>Stwórz quiz</strong></div>
    </div>
    <div class="row" style="margin-top:12px">
      <button class="ghost" id="import-btn">⬆️ Wczytaj quiz z pliku</button>
      <input type="file" id="import-file" accept=".json,application/json" hidden>
    </div>

    <h2 class="section-title">Gotowe quizy</h2>
    <div class="grid">${BUILTIN_QUIZZES.map(card).join('')}</div>
  `;

  app.querySelector('#new-quiz').onclick = () => renderEditor(null);
  app.querySelectorAll('[data-play]').forEach(b => b.onclick = () => renderSetup(b.dataset.play));
  app.querySelectorAll('[data-edit]').forEach(b => b.onclick = () => renderEditor(b.dataset.edit));
  app.querySelectorAll('[data-copy]').forEach(b => b.onclick = () => {
    const src = findQuiz(b.dataset.copy);
    renderEditor(null, { ...structuredClone(src), title: src.title + ' (kopia)' });
  });
  app.querySelectorAll('[data-export]').forEach(b => b.onclick = () => exportQuiz(findQuiz(b.dataset.export)));

  const fileInput = app.querySelector('#import-file');
  app.querySelector('#import-btn').onclick = () => fileInput.click();
  fileInput.onchange = async () => {
    const file = fileInput.files[0];
    if (!file) return;
    try {
      const quiz = validateQuiz(JSON.parse(await file.text()));
      quiz.id = 'q' + Date.now();
      save(STORE_CUSTOM, [...customQuizzes(), quiz]);
      toast('Wczytano quiz „' + quiz.title + '”');
      renderHome();
    } catch (e) {
      toast('Nie udało się wczytać: ' + e.message);
    }
  };
}

function validateQuiz(data) {
  if (!data || typeof data.title !== 'string' || !Array.isArray(data.questions) || !data.questions.length) {
    throw new Error('zły format pliku');
  }
  return {
    title: data.title.slice(0, 80),
    emoji: typeof data.emoji === 'string' ? data.emoji.slice(0, 4) : '❓',
    questions: data.questions.map(q => {
      if (typeof q.q !== 'string' || !Array.isArray(q.a) || q.a.length !== 4 || !(q.c >= 0 && q.c <= 3)) {
        throw new Error('błędne pytanie');
      }
      return { q: q.q, a: q.a.map(String), c: Number(q.c), t: TIMES.includes(q.t) ? q.t : 20 };
    })
  };
}

function exportQuiz(quiz) {
  const { title, emoji, questions } = quiz;
  const blob = new Blob([JSON.stringify({ title, emoji, questions }, null, 2)], { type: 'application/json' });
  const a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  a.download = title.replace(/[^\p{L}\p{N}]+/gu, '-').replace(/^-|-$/g, '').toLowerCase() + '.json';
  a.click();
  URL.revokeObjectURL(a.href);
}

// ---------- Editor ----------
function renderEditor(id, preset) {
  const existing = id ? findQuiz(id) : null;
  const draft = structuredClone(existing || preset || {
    title: '', emoji: '📚', questions: [{ q: '', a: ['', '', '', ''], c: 0, t: 20 }]
  });

  const draw = () => {
    app.innerHTML = `
      <div class="panel">
        <div class="row">
          <h2 style="margin:0">${existing ? 'Edytuj quiz' : 'Nowy quiz'}</h2>
          <span class="spacer"></span>
          <button class="ghost" style="color:var(--text);background:#eee" id="cancel">Anuluj</button>
          ${existing ? '<button class="danger" id="delete">Usuń</button>' : ''}
          <button class="primary" id="save">Zapisz</button>
        </div>
        <div class="row" style="align-items:flex-end">
          <div style="width:90px"><label>Ikona</label><input type="text" id="emoji" maxlength="4" value="${esc(draft.emoji)}"></div>
          <div style="flex:1;min-width:200px"><label>Tytuł quizu</label><input type="text" id="title" maxlength="80" placeholder="np. Historia: średniowiecze" value="${esc(draft.title)}"></div>
        </div>
        <div id="questions">
          ${draft.questions.map((q, i) => `
            <div class="q-edit" data-i="${i}">
              <div class="head">
                <strong>Pytanie ${i + 1}</strong>
                <button data-up="${i}" ${i === 0 ? 'disabled' : ''} title="W górę">↑</button>
                <button data-down="${i}" ${i === draft.questions.length - 1 ? 'disabled' : ''} title="W dół">↓</button>
                <button data-del="${i}" ${draft.questions.length === 1 ? 'disabled' : ''} title="Usuń pytanie">✕</button>
              </div>
              <input type="text" data-field="q" value="${esc(q.q)}" placeholder="Treść pytania">
              <div class="answers">
                ${q.a.map((a, j) => `
                  <div class="ans c${j}">
                    <input type="radio" name="c${i}" value="${j}" ${q.c === j ? 'checked' : ''} title="Poprawna odpowiedź">
                    <input type="text" data-ans="${j}" value="${esc(a)}" placeholder="Odpowiedź ${j + 1}">
                  </div>`).join('')}
              </div>
              <div class="time">⏱ Czas:
                <select data-field="t">${TIMES.map(t => `<option value="${t}" ${q.t === t ? 'selected' : ''}>${t} s</option>`).join('')}</select>
                <span style="color:var(--muted)">· zaznacz kółkiem poprawną odpowiedź</span>
              </div>
            </div>`).join('')}
        </div>
        <div class="row" style="margin-top:16px"><button id="add-q">＋ Dodaj pytanie</button></div>
      </div>`;

    const sync = () => {
      draft.title = app.querySelector('#title').value;
      draft.emoji = app.querySelector('#emoji').value;
      app.querySelectorAll('.q-edit').forEach(el => {
        const q = draft.questions[+el.dataset.i];
        q.q = el.querySelector('[data-field=q]').value;
        q.t = +el.querySelector('[data-field=t]').value;
        q.a = [...el.querySelectorAll('[data-ans]')].map(inp => inp.value);
        q.c = +el.querySelector('input[type=radio]:checked').value;
      });
    };
    const move = (i, d) => {
      sync();
      const qs = draft.questions;
      [qs[i], qs[i + d]] = [qs[i + d], qs[i]];
      draw();
    };

    app.querySelector('#add-q').onclick = () => {
      sync();
      draft.questions.push({ q: '', a: ['', '', '', ''], c: 0, t: 20 });
      draw();
      app.querySelector('.q-edit:last-child [data-field=q]').focus();
    };
    app.querySelectorAll('[data-up]').forEach(b => b.onclick = () => move(+b.dataset.up, -1));
    app.querySelectorAll('[data-down]').forEach(b => b.onclick = () => move(+b.dataset.down, 1));
    app.querySelectorAll('[data-del]').forEach(b => b.onclick = () => {
      sync();
      draft.questions.splice(+b.dataset.del, 1);
      draw();
    });
    app.querySelector('#cancel').onclick = renderHome;
    if (existing) {
      app.querySelector('#delete').onclick = () => {
        if (!confirm('Usunąć quiz „' + existing.title + '”?')) return;
        save(STORE_CUSTOM, customQuizzes().filter(q => q.id !== id));
        renderHome();
      };
    }
    app.querySelector('#save').onclick = () => {
      sync();
      if (!draft.title.trim()) return toast('Podaj tytuł quizu');
      const bad = draft.questions.findIndex(q => !q.q.trim() || q.a.some(a => !a.trim()));
      if (bad >= 0) return toast(`Uzupełnij pytanie ${bad + 1} i wszystkie odpowiedzi`);
      const list = customQuizzes();
      const quiz = { ...draft, title: draft.title.trim(), id: id || 'q' + Date.now() };
      const idx = list.findIndex(q => q.id === quiz.id);
      if (idx >= 0) list[idx] = quiz; else list.push(quiz);
      save(STORE_CUSTOM, list);
      toast('Zapisano!');
      renderHome();
    };
  };
  draw();
}

// ---------- Setup ----------
let lastPlayers = load('quizownia.players', ['Gracz 1']);

function renderSetup(quizId) {
  const quiz = findQuiz(quizId);
  let players = [...lastPlayers];

  const draw = () => {
    app.innerHTML = `
      <div class="panel narrow">
        <div style="font-size:2.5rem">${esc(quiz.emoji || '❓')}</div>
        <h2>${esc(quiz.title)}</h2>
        <p style="color:var(--muted);margin-top:0">${questionsLabel(quiz.questions.length)}</p>

        <label>Gracze (na zmianę na jednym urządzeniu)</label>
        <div class="player-list">
          ${players.map((p, i) => `
            <div class="row">
              <input type="text" data-p="${i}" value="${esc(p)}" maxlength="20">
              ${players.length > 1 ? `<button data-rm="${i}" title="Usuń gracza">✕</button>` : ''}
            </div>`).join('')}
        </div>
        ${players.length < 8 ? '<button id="add-p" style="margin-top:8px">＋ Dodaj gracza</button>' : ''}

        <label>Kolejność</label>
        <div class="mode-pick">
          <label><input type="radio" name="order" value="normal" checked><span><strong>Po kolei</strong>Pytania jak w quizie</span></label>
          <label><input type="radio" name="order" value="shuffle"><span><strong>Losowo</strong>Mieszaj pytania i odpowiedzi</span></label>
        </div>

        <div class="row" style="margin-top:22px">
          <button class="ghost" style="color:var(--text);background:#eee" id="back">← Wróć</button>
          <span class="spacer"></span>
          <button class="primary" id="start">Start!</button>
        </div>
      </div>`;

    const sync = () => {
      players = [...app.querySelectorAll('[data-p]')].map(i => i.value);
    };
    const addBtn = app.querySelector('#add-p');
    if (addBtn) addBtn.onclick = () => { sync(); players.push('Gracz ' + (players.length + 1)); draw(); };
    app.querySelectorAll('[data-rm]').forEach(b => b.onclick = () => { sync(); players.splice(+b.dataset.rm, 1); draw(); });
    app.querySelector('#back').onclick = renderHome;
    app.querySelector('#start').onclick = () => {
      sync();
      const names = players.map((p, i) => p.trim() || 'Gracz ' + (i + 1));
      lastPlayers = names;
      save('quizownia.players', names);
      const shuffled = app.querySelector('input[name=order]:checked').value === 'shuffle';
      startGame(quiz, names, shuffled ? prepareShuffled(quiz.questions) : quiz.questions);
    };
  };
  draw();
}

function prepareShuffled(questions) {
  return shuffle(questions).map(q => {
    const order = shuffle([0, 1, 2, 3]);
    return { ...q, a: order.map(i => q.a[i]), c: order.indexOf(q.c) };
  });
}

// ---------- Game ----------
let game = null;

function startGame(quiz, names, questions) {
  game = {
    quiz,
    questions,
    players: names.map(name => ({ name, score: 0, streak: 0, bestStreak: 0, answers: [] })),
    qi: 0,
    pi: 0
  };
  nextTurn();
}

const multi = () => game.players.length > 1;

function nextTurn() {
  if (multi()) renderHandoff(); else renderQuestion();
}

function renderHandoff() {
  clearGameHooks();
  const p = game.players[game.pi];
  app.innerHTML = `
    <div class="game-top"><span class="pill">Pytanie ${game.qi + 1} / ${game.questions.length}</span></div>
    <div class="handoff">
      <div>Teraz odpowiada</div>
      <div class="who">${esc(p.name)}</div>
      <button class="primary" id="ready">Jestem gotowy!</button>
    </div>`;
  app.querySelector('#ready').onclick = renderQuestion;
  app.querySelector('#ready').focus();
}

function renderQuestion() {
  clearGameHooks();
  const q = game.questions[game.qi];
  const p = game.players[game.pi];
  const start = performance.now();
  let answered = false;

  app.innerHTML = `
    <div class="game-top">
      <span class="pill">Pytanie ${game.qi + 1} / ${game.questions.length}</span>
      <span class="pill">${esc(p.name)} · ${p.score} pkt${p.streak >= 2 ? ` · 🔥${p.streak}` : ''}</span>
    </div>
    <div class="question-box">${esc(q.q)}</div>
    <div class="timer-wrap">
      <div class="timer" id="timer">${q.t}</div>
      <div class="timer-bar"><div id="bar" style="width:100%"></div></div>
    </div>
    <div class="answers-grid">
      ${q.a.map((a, i) => `<button class="answer-btn c${i}" data-a="${i}">${SHAPES[i]}<span>${esc(a)}</span></button>`).join('')}
    </div>
    <p style="text-align:center;opacity:.6;font-size:.8rem;margin-top:14px">Skróty klawiszowe: 1 2 3 4</p>`;

  const timerEl = app.querySelector('#timer');
  const barEl = app.querySelector('#bar');

  const finish = choice => {
    if (answered) return;
    answered = true;
    clearGameHooks();
    const elapsed = Math.min((performance.now() - start) / 1000, q.t);
    const correct = choice === q.c;
    let points = 0;
    if (correct) {
      p.streak++;
      p.bestStreak = Math.max(p.bestStreak, p.streak);
      points = Math.round(1000 * (1 - elapsed / q.t / 2)) + Math.min(p.streak - 1, 5) * 100;
    } else {
      p.streak = 0;
    }
    p.score += points;
    p.answers[game.qi] = { choice, correct, points, time: elapsed };
    renderFeedback(choice, points);
  };

  app.querySelectorAll('[data-a]').forEach(b => b.onclick = () => finish(+b.dataset.a));
  keyHandler = e => {
    const n = +e.key;
    if (n >= 1 && n <= 4) finish(n - 1);
  };
  document.addEventListener('keydown', keyHandler);

  timerId = setInterval(() => {
    const left = q.t - (performance.now() - start) / 1000;
    if (left <= 0) return finish(null);
    timerEl.textContent = Math.ceil(left);
    barEl.style.width = (left / q.t * 100) + '%';
  }, 100);
}

function renderFeedback(choice, points) {
  const q = game.questions[game.qi];
  const p = game.players[game.pi];
  const correct = choice === q.c;
  const title = correct ? 'Dobrze!' : choice === null ? 'Koniec czasu!' : 'Źle!';

  app.innerHTML = `
    <div class="game-top">
      <span class="pill">Pytanie ${game.qi + 1} / ${game.questions.length}</span>
      <span class="pill">${esc(p.name)} · ${p.score} pkt</span>
    </div>
    <div class="feedback ${correct ? 'ok' : 'bad'}">
      <div class="big">${correct ? '✔' : '✘'} ${title}</div>
      ${correct
        ? `<div class="pts">+${points} pkt${p.streak >= 2 ? ` · seria 🔥${p.streak}` : ''}</div>`
        : '<div style="margin-top:8px;font-weight:500">Poprawna odpowiedź jest zaznaczona poniżej</div>'}
    </div>
    ${multi() ? '' : `<div class="question-box" style="font-size:1.2rem;margin-bottom:14px">${esc(q.q)}</div>`}
    <div class="answers-grid">
      ${q.a.map((a, i) => `
        <div class="answer-btn c${i} ${i === q.c ? 'right' : 'dim'}">${SHAPES[i]}<span>${esc(a)}</span>
          <span class="mark">${i === q.c ? '✔' : i === choice ? '✘' : ''}</span></div>`).join('')}
    </div>
    <div class="row center" style="margin-top:22px"><button class="primary" id="next">Dalej →</button></div>`;

  const next = app.querySelector('#next');
  next.focus();
  next.onclick = () => {
    if (game.pi < game.players.length - 1) {
      game.pi++;
      return nextTurn();
    }
    game.pi = 0;
    if (multi()) renderScoreboard();
    else advanceQuestion();
  };
}

function advanceQuestion() {
  game.qi++;
  if (game.qi < game.questions.length) nextTurn();
  else renderResults();
}

function ranked() {
  return [...game.players].sort((a, b) => b.score - a.score);
}

function renderScoreboard() {
  const last = game.qi === game.questions.length - 1;
  app.innerHTML = `
    <h2 style="text-align:center">Ranking po pytaniu ${game.qi + 1}</h2>
    <div class="scoreboard">
      ${ranked().map((p, i) => {
        const ans = p.answers[game.qi];
        return `<div class="score-row">
          <span class="place">${i + 1}.</span>
          <span class="name">${esc(p.name)} ${ans.correct ? '✔' : '✘'}</span>
          ${p.streak >= 2 ? `<span class="streak">🔥${p.streak}</span>` : ''}
          <span class="pts">${p.score}</span>
        </div>`;
      }).join('')}
    </div>
    <div class="row center" style="margin-top:22px"><button class="primary" id="next">${last ? 'Zobacz podium 🏆' : 'Następne pytanie →'}</button></div>`;
  const next = app.querySelector('#next');
  next.focus();
  next.onclick = advanceQuestion;
}

function renderResults() {
  clearGameHooks();
  const { quiz, questions, players } = game;
  const top = ranked();

  // rekord zapisujemy tylko dla pełnego quizu (nie dla powtórki błędów)
  if (!game.isRetry) {
    const best = load(STORE_BEST, {});
    if (top[0].score > (best[quiz.id] ?? -1)) {
      best[quiz.id] = top[0].score;
      save(STORE_BEST, best);
    }
  }

  let head;
  if (multi()) {
    const step = (p, cls, medal) => p ? `<div class="step ${cls}"><div class="medal">${medal}</div><div class="n">${esc(p.name)}</div><div>${p.score} pkt</div></div>` : '';
    head = `
      <h1 class="logo">Podium</h1>
      <div class="podium">${step(top[1], 'p2', '🥈')}${step(top[0], 'p1', '🥇')}${step(top[2], 'p3', '🥉')}</div>
      <div class="scoreboard">${top.slice(3).map((p, i) => `
        <div class="score-row"><span class="place">${i + 4}.</span><span class="name">${esc(p.name)}</span><span class="pts">${p.score}</span></div>`).join('')}
      </div>`;
  } else {
    const p = players[0];
    const good = p.answers.filter(a => a.correct).length;
    const pct = Math.round(good / questions.length * 100);
    const msg = pct === 100 ? 'Perfekcyjnie! 🎉' : pct >= 75 ? 'Świetna robota! 💪' : pct >= 50 ? 'Nieźle, jeszcze trochę praktyki!' : 'Powtórz materiał i spróbuj znowu 📖';
    head = `
      <h1 class="logo">${msg}</h1>
      <div class="stats">
        <div class="stat"><div class="v">${p.score}</div><div class="l">punktów</div></div>
        <div class="stat"><div class="v">${good} / ${questions.length}</div><div class="l">poprawnych (${pct}%)</div></div>
        <div class="stat"><div class="v">🔥 ${p.bestStreak}</div><div class="l">najdłuższa seria</div></div>
      </div>`;
  }

  const wrongQs = questions.filter((_, i) => players.some(p => !p.answers[i].correct));
  const review = questions.map((q, i) => {
    const anyWrong = players.some(p => !p.answers[i].correct);
    const who = players.map(p => {
      const a = p.answers[i];
      const txt = a.choice === null ? 'brak odpowiedzi' : esc(q.a[a.choice]);
      return `${multi() ? esc(p.name) + ': ' : 'Twoja odpowiedź: '}${a.correct ? '✔' : '✘'} ${txt}`;
    }).join('<br>');
    return `<div class="review-item ${anyWrong ? 'wrong' : ''}">
      <div class="q">${i + 1}. ${esc(q.q)}</div>
      <div class="a">Poprawna: <b>${esc(q.a[q.c])}</b><br>${who}</div>
    </div>`;
  }).join('');

  app.innerHTML = `
    ${head}
    <div class="row center" style="margin:24px 0">
      <button id="home">🏠 Menu</button>
      <button id="again">🔄 Zagraj ponownie</button>
      ${wrongQs.length ? `<button class="primary" id="retry">📖 Powtórz błędne (${wrongQs.length})</button>` : ''}
    </div>
    <h2 class="section-title">Omówienie odpowiedzi</h2>
    ${review}`;

  app.querySelector('#home').onclick = renderHome;
  app.querySelector('#again').onclick = () => renderSetup(quiz.id);
  const retry = app.querySelector('#retry');
  if (retry) retry.onclick = () => {
    startGame(quiz, players.map(p => p.name), prepareShuffled(wrongQs));
    game.isRetry = true;
  };
  window.scrollTo(0, 0);
}

renderHome();
