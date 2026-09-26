'use strict';

const app = document.getElementById('app');
const STORE_PROGRESS = 'quizownia.progress';
const STORE_GRADE = 'quizownia.grade';
const LEVELS = ['', 'łatwy', 'średni', 'trudny'];
const LETTERS = ['A', 'B', 'C', 'D'];

// ---------- Storage ----------
function load(key, fallback) {
  try { return JSON.parse(localStorage.getItem(key)) ?? fallback; } catch { return fallback; }
}
function save(key, value) {
  try { localStorage.setItem(key, JSON.stringify(value)); } catch { /* tryb prywatny / brak miejsca */ }
}
const progressKey = (s, g, t) => `${s}/${g}/${t}`;

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
const findSubject = id => SUBJECTS.find(s => s.id === id);
const gradesOf = subject => Object.keys(subject.grades).map(Number).sort((a, b) => a - b);
const starsHtml = n => '★'.repeat(n) + '<span class="off">' + '★'.repeat(3 - n) + '</span>';
const gradeRange = subject => {
  const g = gradesOf(subject);
  return g.length === 1 ? `klasa ${g[0]}` : `klasy ${g[0]}–${g[g.length - 1]}`;
};

let keyHandler = null;
function setKeys(fn) {
  if (keyHandler) document.removeEventListener('keydown', keyHandler);
  keyHandler = fn;
  if (fn) document.addEventListener('keydown', fn);
}

// ---------- Sprawdzanie odpowiedzi ----------
const stripDiacritics = s => s.normalize('NFD').replace(/[̀-ͯ]/g, '').replace(/ł/g, 'l');
function normalize(s) {
  return String(s).toLowerCase().trim()
    .replace(/[’`]/g, "'").replace(/−/g, '-')
    .replace(/\s+/g, ' ').replace(/[.!]+$/, '');
}
function asNumber(s) {
  const v = normalize(s).replace(/\s/g, '').replace(',', '.').replace(/°$/, '');
  if (/^-?\d+(\.\d+)?$/.test(v)) return Number(v);
  const f = v.match(/^(-?\d+)\/(\d+)$/);
  if (f && +f[2] !== 0) return f[1] / f[2];
  return null;
}
// Zwraca: 'ok' | 'ok-diacritics' | 'bad'
function checkTyped(input, accepted) {
  const n = normalize(input);
  if (!n) return 'bad';
  for (const a of accepted) {
    const x = asNumber(n), y = asNumber(a);
    if (x !== null && y !== null && Math.abs(x - y) < 1e-9) return 'ok';
    if (n === normalize(a)) return 'ok';
  }
  for (const a of accepted) {
    if (stripDiacritics(n) === stripDiacritics(normalize(a))) return 'ok-diacritics';
  }
  return 'bad';
}

// ---------- Routing ----------
function go(hash) {
  if (location.hash === hash) route(); else location.hash = hash;
}
function route() {
  const [view, ...args] = location.hash.replace(/^#\/?/, '').split('/').map(decodeURIComponent);
  setKeys(null);
  if (view === 'przedmiot' && findSubject(args[0])) return renderSubject(args[0], +args[1]);
  if (view === 'lekcja' && findSubject(args[0])) {
    const topic = findSubject(args[0]).grades[args[1]]?.find(t => t.id === args[2]);
    if (topic) return startLesson(args[0], +args[1], topic);
  }
  renderHome();
}
window.addEventListener('hashchange', route);

// ---------- Strona główna: wybór przedmiotu ----------
function renderHome() {
  const progress = load(STORE_PROGRESS, {});
  app.innerHTML = `
    <header class="hero">
      <h1 class="logo">Quizownia</h1>
      <p class="tagline">Wybierz przedmiot, klasę i temat — i zacznij lekcję. Pytania dopasują się do Twojego poziomu.</p>
    </header>
    <div class="subjects">
      ${SUBJECTS.map(s => {
        let stars = 0, max = 0;
        for (const g of gradesOf(s)) for (const t of s.grades[g]) {
          max += 3;
          stars += progress[progressKey(s.id, g, t.id)]?.stars || 0;
        }
        return `
          <a class="subject-tile" href="#/przedmiot/${s.id}" style="--c:${s.color}">
            <span class="emoji">${s.emoji}</span>
            <span class="name">${esc(s.name)}</span>
            <span class="meta">${gradeRange(s)} · ★ ${stars}/${max}</span>
          </a>`;
      }).join('')}
    </div>`;
}

// ---------- Przedmiot: wybór klasy i tematu ----------
function renderSubject(subjectId, grade) {
  const s = findSubject(subjectId);
  const grades = gradesOf(s);
  if (!grades.includes(grade)) {
    const remembered = load(STORE_GRADE, null);
    grade = grades.includes(remembered) ? remembered : grades[0];
  } else {
    save(STORE_GRADE, grade);
  }
  const progress = load(STORE_PROGRESS, {});
  const topics = s.grades[grade];

  app.innerHTML = `
    <nav class="crumbs"><a href="#/">← Przedmioty</a></nav>
    <div class="subject-head" style="--c:${s.color}">
      <span class="emoji">${s.emoji}</span>
      <h1>${esc(s.name)}</h1>
    </div>
    <div class="grade-tabs" role="tablist">
      ${grades.map(g => `<a role="tab" aria-selected="${g === grade}" class="${g === grade ? 'active' : ''}" href="#/przedmiot/${s.id}/${g}" style="--c:${s.color}">Klasa ${g}</a>`).join('')}
    </div>
    <div class="topics">
      ${topics.map(t => {
        const p = progress[progressKey(s.id, grade, t.id)];
        return `
          <div class="topic">
            <div class="topic-info">
              <h3>${esc(t.name)}</h3>
              <div class="meta">
                ${t.gen ? '♾️ zadania bez końca' : `${t.questions.length} pytań w bazie`}
                ${p ? ` · najlepiej ${p.best}% · ${p.plays}× ukończona` : ' · jeszcze nie ćwiczone'}
              </div>
            </div>
            <div class="stars" title="${p ? p.stars : 0} z 3 gwiazdek">${starsHtml(p ? p.stars : 0)}</div>
            <a class="btn primary" href="#/lekcja/${s.id}/${grade}/${t.id}" style="--c:${s.color}">${p ? 'Ćwicz dalej' : 'Rozpocznij lekcję'}</a>
          </div>`;
      }).join('')}
    </div>`;
}

// ---------- Lekcja ----------
let lesson = null;

function startLesson(subjectId, grade, topic, onlyQuestions) {
  const bank = onlyQuestions || topic.questions;
  lesson = {
    subject: findSubject(subjectId),
    grade,
    topic,
    bank,
    retry: !!onlyQuestions,
    total: topic.gen && !onlyQuestions ? 10 : Math.min(8, bank.length),
    used: new Set(),
    level: onlyQuestions ? 2 : 1,
    streak: 0,
    maxLevel: 1,
    points: 0,
    history: []
  };
  nextQuestion();
}

function pickQuestion() {
  const L = lesson;
  if (L.topic.gen && !L.retry) {
    // Generator: kilka prób, żeby nie trafić dwa razy na to samo pytanie
    for (let i = 0; i < 10; i++) {
      const q = { ...L.topic.gen(L.level), l: L.level };
      if (!L.used.has(q.q)) { L.used.add(q.q); return q; }
    }
    return { ...L.topic.gen(L.level), l: L.level };
  }
  let pool = L.bank.filter(q => !L.used.has(q));
  if (!pool.length) { L.used.clear(); pool = L.bank; }
  const dist = q => Math.abs((q.l || 1) - L.level);
  const best = Math.min(...pool.map(dist));
  const q = shuffle(pool.filter(q => dist(q) === best))[0];
  L.used.add(q);
  return q;
}

function nextQuestion() {
  const L = lesson;
  if (L.history.length >= L.total) return renderResults();
  const q = pickQuestion();
  const shown = q.o ? { ...q, options: shuffle(q.o) } : q;
  L.current = shown;
  renderQuestion(shown);
}

function lessonTop(answered = false) {
  const L = lesson;
  const n = L.history.length;
  const shownNumber = answered ? n : Math.min(n + 1, L.total);
  return `
    <div class="lesson-top" style="--c:${L.subject.color}">
      <button class="icon-btn" id="quit" title="Zakończ lekcję">✕</button>
      <div class="progress"><div style="width:${n / L.total * 100}%"></div></div>
      <span class="count">${shownNumber}/${L.total}</span>
    </div>
    <div class="lesson-meta">
      <span>${L.subject.emoji} ${esc(L.subject.name)} · kl. ${L.grade} · ${esc(L.topic.name)}</span>
      <span class="level lv${L.level}" title="Poziom trudności">${'●'.repeat(L.level)}${'○'.repeat(3 - L.level)} ${LEVELS[L.level]}</span>
    </div>`;
}

function bindQuit() {
  app.querySelector('#quit').onclick = () => {
    if (lesson.history.length === 0 || confirm('Zakończyć lekcję? Postęp z tej lekcji nie zostanie zapisany.')) {
      go(`#/przedmiot/${lesson.subject.id}/${lesson.grade}`);
    }
  };
}

function renderQuestion(q) {
  app.innerHTML = `
    ${lessonTop()}
    <div class="card question">${esc(q.q)}</div>
    ${q.options ? `
      <div class="options">
        ${q.options.map((o, i) => `<button class="option" data-i="${i}"><span class="letter">${LETTERS[i]}</span><span>${esc(o)}</span></button>`).join('')}
      </div>
      <p class="hint">Możesz też nacisnąć klawisz ${q.options.map((_, i) => i + 1).join(', ')}</p>`
    : `
      <form class="typed" autocomplete="off">
        <input type="text" id="answer" placeholder="Wpisz odpowiedź…" autocapitalize="off" spellcheck="false" aria-label="Twoja odpowiedź">
        <button type="submit" class="btn primary" style="--c:${lesson.subject.color}">Sprawdź</button>
      </form>
      <p class="hint">Liczby możesz wpisać z przecinkiem (2,5), a ułamki ze skośnikiem (3/4)</p>`}
  `;
  bindQuit();

  if (q.options) {
    const answer = i => {
      setKeys(null);
      const chosen = q.options[i];
      finishQuestion(chosen === q.o[0] ? 'ok' : 'bad', chosen, q.o[0]);
    };
    app.querySelectorAll('.option').forEach(b => b.onclick = () => answer(+b.dataset.i));
    setKeys(e => {
      const n = +e.key;
      if (n >= 1 && n <= q.options.length) answer(n - 1);
    });
  } else {
    const input = app.querySelector('#answer');
    input.focus();
    app.querySelector('form').onsubmit = e => {
      e.preventDefault();
      if (!input.value.trim()) return input.focus();
      finishQuestion(checkTyped(input.value, q.t), input.value.trim(), q.t[0]);
    };
  }
}

function finishQuestion(result, given, correctAnswer) {
  const L = lesson;
  const q = L.current;
  const ok = result !== 'bad';
  const levelBefore = L.level;
  let levelMsg = '';

  if (ok) {
    L.points += 10 * L.level;
    L.streak++;
    if (L.streak >= 2 && L.level < 3) {
      L.level++;
      L.streak = 0;
      levelMsg = '🔼 Świetnie idzie — poziom w górę!';
    }
  } else {
    L.streak = 0;
    if (L.level > 1) {
      L.level--;
      levelMsg = '🔽 Spokojnie — następne pytanie będzie łatwiejsze.';
    }
  }
  L.maxLevel = Math.max(L.maxLevel, L.level);
  L.history.push({ q, ok, given, correctAnswer, level: levelBefore });

  const header = ok
    ? `<div class="big">✔ ${pickPraise()}</div><div class="pts">+${10 * levelBefore} pkt</div>`
    : `<div class="big">✘ Niestety, źle</div>
       <div class="correct">Poprawna odpowiedź: <b>${esc(correctAnswer)}</b></div>
       ${q.t ? `<div class="yours">Twoja odpowiedź: ${esc(given)}</div>` : ''}`;

  app.innerHTML = `
    ${lessonTop(true)}
    <div class="card question small">${esc(q.q)}</div>
    ${q.options ? `
      <div class="options answered">
        ${q.options.map((o, i) => `<div class="option ${o === correctAnswer ? 'right' : o === given ? 'wrong' : 'dim'}"><span class="letter">${LETTERS[i]}</span><span>${esc(o)}</span></div>`).join('')}
      </div>` : ''}
    <div class="feedback ${ok ? 'ok' : 'bad'}">
      ${header}
      ${result === 'ok-diacritics' ? '<div class="note">Uważaj na polskie znaki: poprawnie <b>' + esc(correctAnswer) + '</b></div>' : ''}
      ${q.e ? `<div class="explain"><span>💡</span><div>${esc(q.e)}</div></div>` : ''}
      ${levelMsg ? `<div class="level-msg">${levelMsg}</div>` : ''}
    </div>
    <div class="row center"><button class="btn primary big-btn" id="next" style="--c:${L.subject.color}">${L.history.length >= L.total ? 'Zobacz wynik' : 'Dalej →'}</button></div>`;

  bindQuit();
  const next = app.querySelector('#next');
  next.onclick = nextQuestion;
  // Enter w polu tekstowym właśnie wysłał odpowiedź — przycisk „Dalej” łapie dopiero kolejne naciśnięcie
  setTimeout(() => next.focus(), 0);
}

function pickPraise() {
  const list = ['Dobrze!', 'Brawo!', 'Świetnie!', 'Tak jest!', 'Super!', 'Znakomicie!'];
  return list[Math.floor(Math.random() * list.length)];
}

// ---------- Wynik ----------
function renderResults() {
  setKeys(null);
  const L = lesson;
  const good = L.history.filter(h => h.ok).length;
  const pct = Math.round(good / L.history.length * 100);
  const stars = pct >= 90 ? 3 : pct >= 70 ? 2 : pct >= 50 ? 1 : 0;
  const mistakes = L.history.filter(h => !h.ok);

  if (!L.retry) {
    const all = load(STORE_PROGRESS, {});
    const key = progressKey(L.subject.id, L.grade, L.topic.id);
    const prev = all[key] || { stars: 0, best: 0, plays: 0, maxLevel: 1 };
    all[key] = {
      stars: Math.max(prev.stars, stars),
      best: Math.max(prev.best, pct),
      plays: prev.plays + 1,
      maxLevel: Math.max(prev.maxLevel, L.maxLevel)
    };
    save(STORE_PROGRESS, all);
  }

  const msg = pct === 100 ? 'Perfekcyjnie! 🎉' : pct >= 70 ? 'Świetna robota! 💪' : pct >= 50 ? 'Dobrze, ćwicz dalej! 👍' : 'Warto powtórzyć ten temat 📖';
  const topics = L.subject.grades[L.grade];
  const nextTopic = topics[topics.indexOf(L.topic) + 1];

  app.innerHTML = `
    <div class="results" style="--c:${L.subject.color}">
      <div class="big-stars">${starsHtml(stars)}</div>
      <h1>${msg}</h1>
      <p class="sub">${L.subject.emoji} ${esc(L.subject.name)} · klasa ${L.grade} · ${esc(L.topic.name)}${L.retry ? ' · powtórka błędów' : ''}</p>
      <div class="stats">
        <div class="stat"><div class="v">${good}/${L.history.length}</div><div class="l">poprawnych (${pct}%)</div></div>
        <div class="stat"><div class="v">${L.points}</div><div class="l">punktów</div></div>
        <div class="stat"><div class="v">${LEVELS[L.maxLevel]}</div><div class="l">najwyższy poziom</div></div>
      </div>
      <div class="row center">
        ${mistakes.length ? `<button class="btn primary" id="retry" style="--c:${L.subject.color}">📖 Powtórz błędy (${mistakes.length})</button>` : ''}
        <button class="btn" id="again">🔄 Jeszcze raz</button>
        ${nextTopic ? `<a class="btn" href="#/lekcja/${L.subject.id}/${L.grade}/${nextTopic.id}">Następny temat →</a>` : ''}
        <a class="btn" href="#/przedmiot/${L.subject.id}/${L.grade}">Lista tematów</a>
      </div>
    </div>
    ${mistakes.length ? `
      <h2 class="section-title">Czego się nauczyć</h2>
      ${mistakes.map(h => `
        <div class="review">
          <div class="q">${esc(h.q.q)}</div>
          <div class="a">Twoja odpowiedź: <s>${esc(h.given)}</s> · Poprawna: <b>${esc(h.correctAnswer)}</b></div>
          ${h.q.e ? `<div class="e">💡 ${esc(h.q.e)}</div>` : ''}
        </div>`).join('')}` : ''}`;

  const retry = app.querySelector('#retry');
  if (retry) retry.onclick = () => startLesson(L.subject.id, L.grade, L.topic, mistakes.map(h => h.q));
  app.querySelector('#again').onclick = () => startLesson(L.subject.id, L.grade, L.topic);
  window.scrollTo(0, 0);
}

route();
