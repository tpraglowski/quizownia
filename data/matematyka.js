// Matematyka: zadania generowane losowo, więc lekcja nigdy się nie powtarza.
// Każda funkcja gen(level) zwraca pytanie: { q, t: [odpowiedzi] } (wpisywane) albo { q, o: [poprawna, ...złe] } (wybór), plus e: wyjaśnienie.
(() => {
  const rnd = (a, b) => a + Math.floor(Math.random() * (b - a + 1));
  const pick = arr => arr[Math.floor(Math.random() * arr.length)];
  const fmt = x => String(Math.round(x * 1000) / 1000).replace('.', ',').replace('-', '−');
  const sup = n => String(n).split('').map(d => '⁰¹²³⁴⁵⁶⁷⁸⁹'[d]).join('');
  const neg = n => (n < 0 ? `(${fmt(n)})` : fmt(n));
  const gcd = (a, b) => (b ? gcd(b, a % b) : a);
  const frac = (a, b) => { const g = gcd(a, b); return b / g === 1 ? String(a / g) : `${a / g}/${b / g}`; };
  const typed = (q, ans, e) => ({ q, t: [String(ans)], e });
  const choice = (q, right, wrong, e) => ({ q, o: [right, ...[...new Set(wrong)].filter(w => w !== right).slice(0, 3)], e });

  SUBJECTS.push({
    id: 'matematyka', name: 'Matematyka', emoji: '🧮', color: '#1368ce',
    grades: {
      4: [
        { id: 'dodawanie', name: 'Dodawanie i odejmowanie', gen: l => {
          if (l === 1) { const a = rnd(12, 89), b = rnd(11, 99 - a); return typed(`Oblicz: ${a} + ${b}`, a + b, `Dodaj osobno dziesiątki i jedności: ${a} + ${b} = ${a + b}.`); }
          if (l === 2) { const a = rnd(300, 999), b = rnd(101, a - 50); return typed(`Oblicz: ${a} − ${b}`, a - b, `Odejmuj pisemnie od jedności: ${a} − ${b} = ${a - b}. Sprawdź: ${a - b} + ${b} = ${a}.`); }
          const x = rnd(250, 600), y = rnd(80, 200), z = rnd(30, 120);
          return typed(`W bibliotece było ${x} książek. Wypożyczono ${y}, a potem oddano ${z}. Ile książek jest teraz w bibliotece?`, x - y + z, `${x} − ${y} = ${x - y}, potem ${x - y} + ${z} = ${x - y + z}.`);
        } },
        { id: 'mnozenie', name: 'Mnożenie i dzielenie', gen: l => {
          if (l === 1) { const a = rnd(2, 9), b = rnd(2, 9); return typed(`Oblicz: ${a} · ${b}`, a * b, `Z tabliczki mnożenia: ${a} · ${b} = ${a * b}.`); }
          if (l === 2) { const a = rnd(3, 9), b = rnd(4, 12); return typed(`Oblicz: ${a * b} : ${a}`, b, `Dzielenie sprawdzasz mnożeniem: ${a} · ${b} = ${a * b}, więc ${a * b} : ${a} = ${b}.`); }
          const a = rnd(12, 39), b = rnd(11, 19);
          return typed(`Oblicz: ${a} · ${b}`, a * b, `Rozbij drugi czynnik: ${a} · ${b} = ${a} · 10 + ${a} · ${b - 10} = ${a * 10} + ${a * (b - 10)} = ${a * b}.`);
        } },
        { id: 'ulamki', name: 'Ułamki zwykłe', gen: l => {
          if (l === 1) { const n = rnd(3, 10), k = rnd(1, n - 1); return typed(`Tort podzielono na ${n} równych kawałków. Zjedzono ${k}. Jaką część tortu zjedzono? (zapisz jako ułamek, np. 2/5)`, `${k}/${n}`, `Mianownik (na dole) to liczba wszystkich części: ${n}. Licznik (na górze) to zjedzone części: ${k}. Odpowiedź: ${k}/${n}.`); }
          if (l === 2) { const n = rnd(5, 12), a = rnd(1, n - 2), b = rnd(1, n - 1 - a); return typed(`Oblicz: ${a}/${n} + ${b}/${n}`, `${a + b}/${n}`, `Gdy mianowniki są takie same, dodajesz tylko liczniki: ${a} + ${b} = ${a + b}, więc wynik to ${a + b}/${n}.`); }
          const n = pick([2, 3, 4, 5, 6, 8, 10]), k = rnd(1, n - 1), N = n * rnd(2, 9);
          return typed(`Oblicz ${k}/${n} z liczby ${N}.`, N / n * k, `Najpierw 1/${n} z ${N}: ${N} : ${n} = ${N / n}. Potem razy ${k}: ${N / n} · ${k} = ${N / n * k}.`);
        } }
      ],
      5: [
        { id: 'dziesietne', name: 'Ułamki dziesiętne', gen: l => {
          if (l === 1) { const a = rnd(11, 89) / 10, b = rnd(11, 89) / 10; return typed(`Oblicz: ${fmt(a)} + ${fmt(b)}`, fmt(a + b), `Zapisz liczby przecinek pod przecinkiem i dodaj: ${fmt(a)} + ${fmt(b)} = ${fmt(a + b)}.`); }
          if (l === 2) { const a = rnd(101, 999) / 100, m = pick([10, 100, 1000]); return typed(`Oblicz: ${fmt(a)} · ${m}`, fmt(a * m), `Mnożenie przez ${m} przesuwa przecinek o ${String(m).length - 1} ${m === 10 ? 'miejsce' : 'miejsca'} w prawo: ${fmt(a * m)}.`); }
          const a = rnd(11, 99) / 20, k = rnd(3, 8);
          return typed(`Oblicz: ${fmt(a)} · ${k}`, fmt(a * k), `Pomnóż jak liczby naturalne, a potem wstaw przecinek: ${fmt(a)} · ${k} = ${fmt(a * k)}.`);
        } },
        { id: 'pola', name: 'Pola figur', gen: l => {
          if (l === 1) { const a = rnd(3, 12), b = rnd(2, 9); return typed(`Prostokąt ma boki ${a} cm i ${b} cm. Ile cm² wynosi jego pole?`, a * b, `Pole prostokąta = a · b = ${a} · ${b} = ${a * b} cm².`); }
          if (l === 2) { const a = 2 * rnd(2, 8), h = rnd(3, 11); return typed(`Trójkąt ma podstawę ${a} cm i wysokość ${h} cm. Ile cm² wynosi jego pole?`, a * h / 2, `Pole trójkąta = a · h : 2 = ${a} · ${h} : 2 = ${a * h / 2} cm².`); }
          const a = rnd(5, 12), b = rnd(2, a - 1), h = 2 * rnd(2, 6);
          return typed(`Trapez ma podstawy ${a} cm i ${b} cm, a wysokość ${h} cm. Ile cm² wynosi jego pole?`, (a + b) * h / 2, `Pole trapezu = (a + b) · h : 2 = (${a} + ${b}) · ${h} : 2 = ${(a + b) * h / 2} cm².`);
        } },
        { id: 'katy', name: 'Kąty i trójkąty', gen: l => {
          if (l === 1) {
            const [x, right] = pick([[rnd(10, 85), 'ostry'], [90, 'prosty'], [rnd(95, 175), 'rozwarty'], [180, 'półpełny']]);
            return choice(`Kąt ma miarę ${x}°. Jaki to kąt?`, right, ['ostry', 'prosty', 'rozwarty', 'półpełny'], 'Ostry: mniej niż 90°. Prosty: 90°. Rozwarty: między 90° a 180°. Półpełny: 180°.');
          }
          if (l === 2) { const a = rnd(30, 80), b = rnd(30, 150 - a); return typed(`Dwa kąty trójkąta mają ${a}° i ${b}°. Ile stopni ma trzeci kąt?`, 180 - a - b, `Suma kątów w trójkącie to 180°: 180° − ${a}° − ${b}° = ${180 - a - b}°.`); }
          const x = 2 * rnd(15, 60);
          return typed(`W trójkącie równoramiennym kąt między ramionami ma ${x}°. Ile stopni ma każdy z kątów przy podstawie?`, (180 - x) / 2, `Kąty przy podstawie są równe: (180° − ${x}°) : 2 = ${(180 - x) / 2}°.`);
        } }
      ],
      6: [
        { id: 'calkowite', name: 'Liczby ujemne', gen: l => {
          if (l === 1) { const a = -rnd(2, 15), b = rnd(2, 20); return typed(`Oblicz: ${fmt(a)} + ${b}`, a + b, `Na osi liczbowej zacznij od ${fmt(a)} i przesuń się o ${b} w prawo. Wynik: ${fmt(a + b)}.`); }
          if (l === 2) { const a = rnd(-12, 8), b = rnd(3, 15); return typed(`Oblicz: ${fmt(a)} − ${b}`, a - b, `Odejmowanie to przesunięcie w lewo: ${fmt(a)} − ${b} = ${fmt(a - b)}.`); }
          const a = -rnd(2, 9), b = pick([-1, 1]) * rnd(2, 9);
          return Math.random() < .5
            ? typed(`Oblicz: ${neg(a)} · ${neg(b)}`, a * b, `Minus razy minus daje plus, minus razy plus daje minus. ${neg(a)} · ${neg(b)} = ${fmt(a * b)}.`)
            : typed(`Oblicz: ${fmt(a * b)} : ${neg(b)}`, a, `Znaki takie same → wynik dodatni, różne → ujemny. ${fmt(a * b)} : ${neg(b)} = ${fmt(a)}.`);
        } },
        { id: 'predkosc', name: 'Droga, prędkość, czas', gen: l => {
          if (l === 1) { const v = 10 * rnd(4, 12), t = rnd(2, 5); return typed(`Samochód jedzie ${v} km/h przez ${t} h. Ile kilometrów przejedzie?`, v * t, `Droga = prędkość · czas = ${v} · ${t} = ${v * t} km.`); }
          if (l === 2) { const v = 5 * rnd(2, 20), t = rnd(2, 6); return typed(`Pociąg przejechał ${v * t} km w ${t} h. Z jaką średnią prędkością jechał (w km/h)?`, v, `Prędkość = droga : czas = ${v * t} : ${t} = ${v} km/h.`); }
          const v = pick([12, 15, 18, 20, 24, 30]), m = pick([10, 20, 30, 40, 50, 60].filter(m => v * m % 60 === 0)), s = v * m / 60;
          return typed(`Rowerzysta jedzie ${v} km/h. Ile minut zajmie mu przejechanie ${s} km?`, m, `Czas = droga : prędkość = ${s} : ${v} h. W minutach: ${s} : ${v} · 60 = ${m} min.`);
        } },
        { id: 'wyrazenia', name: 'Wyrażenia algebraiczne', gen: l => {
          if (l === 1) { const a = rnd(2, 6), b = rnd(1, 9), x = rnd(2, 9); return typed(`Oblicz wartość wyrażenia ${a}x + ${b} dla x = ${x}.`, a * x + b, `Wstaw ${x} w miejsce x: ${a} · ${x} + ${b} = ${a * x} + ${b} = ${a * x + b}.`); }
          if (l === 2) { const a = rnd(2, 9), b = rnd(2, 9); return choice(`Uprość wyrażenie: ${a}a + ${b}a`, `${a + b}a`, [`${a * b}a`, `${a + b}a²`, `${a + b + 1}a`, `${a + b}`], `Dodajesz wyrazy podobne: ${a}a + ${b}a = (${a} + ${b})a = ${a + b}a.`); }
          const x = -rnd(2, 5), a = rnd(2, 3);
          return typed(`Oblicz wartość wyrażenia ${a}x² − x dla x = ${fmt(x)}.`, a * x * x - x, `${a} · ${neg(x)}² − ${neg(x)} = ${a} · ${x * x} + ${-x} = ${a * x * x - x}. Kwadrat liczby ujemnej jest dodatni!`);
        } }
      ],
      7: [
        { id: 'procenty', name: 'Procenty', gen: l => {
          if (l === 1) { const p = pick([10, 20, 25, 50]), N = 20 * rnd(2, 20); return typed(`Oblicz ${p}% z liczby ${N}.`, N * p / 100, `${p}% to ${p}/100. ${N} · ${p} : 100 = ${N * p / 100}.`); }
          if (l === 2) { const p = pick([10, 20, 25, 50]), X = 20 * rnd(3, 25); return typed(`Kurtka kosztowała ${X} zł. Cenę obniżono o ${p}%. Ile kosztuje teraz (w zł)?`, X * (100 - p) / 100, `Obniżka: ${p}% z ${X} = ${X * p / 100} zł. Nowa cena: ${X} − ${X * p / 100} = ${X * (100 - p) / 100} zł.`); }
          const b = pick([20, 25, 40, 50, 200]), p = pick([5, 10, 15, 20, 25, 30, 40, 60, 75].filter(p => b * p % 100 === 0)), a = b * p / 100;
          return typed(`Jakim procentem liczby ${b} jest liczba ${a}? (podaj samą liczbę)`, p, `${a} : ${b} = ${fmt(a / b)}, a to razy 100% daje ${p}%.`);
        } },
        { id: 'potegi', name: 'Potęgi', gen: l => {
          if (l === 1) { const [a, n] = Math.random() < .6 ? [rnd(2, 12), 2] : [rnd(2, 5), 3]; return typed(`Oblicz: ${a}${sup(n)}`, a ** n, `${a}${sup(n)} = ${Array(n).fill(a).join(' · ')} = ${a ** n}.`); }
          if (l === 2) { const a = rnd(2, 7), m = rnd(2, 8), n = rnd(2, 8); return typed(`${a}${sup(m)} · ${a}${sup(n)} = ${a}^? Podaj wykładnik.`, m + n, `Przy mnożeniu potęg o tej samej podstawie dodajesz wykładniki: ${m} + ${n} = ${m + n}.`); }
          const a = rnd(2, 7), m = rnd(2, 5), n = rnd(2, 4);
          return Math.random() < .5
            ? typed(`(${a}${sup(m)})${sup(n)} = ${a}^? Podaj wykładnik.`, m * n, `Potęgę potęgi liczysz, mnożąc wykładniki: ${m} · ${n} = ${m * n}.`)
            : typed(`${a}${sup(m + n + 3)} : ${a}${sup(n)} = ${a}^? Podaj wykładnik.`, m + 3, `Przy dzieleniu potęg o tej samej podstawie odejmujesz wykładniki: ${m + n + 3} − ${n} = ${m + 3}.`);
        } },
        { id: 'rownania', name: 'Równania', gen: l => {
          if (l === 1) { const x = rnd(2, 30), a = rnd(3, 25); return typed(`Rozwiąż równanie: x + ${a} = ${x + a}`, x, `Odejmij ${a} od obu stron: x = ${x + a} − ${a} = ${x}.`); }
          if (l === 2) { const x = rnd(-5, 10), a = rnd(2, 9), b = rnd(1, 20); return typed(`Rozwiąż równanie: ${a}x + ${b} = ${a * x + b}`, x, `${a}x = ${a * x + b} − ${b} = ${a * x}, więc x = ${a * x} : ${a} = ${fmt(x)}.`); }
          const x = rnd(-4, 9), a = rnd(4, 9), c = rnd(1, a - 1), b = rnd(1, 12), d = a * x + b - c * x;
          return typed(`Rozwiąż równanie: ${a}x + ${b} = ${c}x ${d < 0 ? '−' : '+'} ${Math.abs(d)}`, x, `Przenieś x na lewo, liczby na prawo: ${a}x − ${c}x = ${fmt(d)} − ${b}, czyli ${a - c}x = ${fmt(d - b)}, więc x = ${fmt(x)}.`);
        } }
      ],
      8: [
        { id: 'pitagoras', name: 'Twierdzenie Pitagorasa', gen: l => {
          const [p, q, r] = pick([[3, 4, 5], [6, 8, 10], [5, 12, 13], [8, 15, 17], [9, 12, 15], [7, 24, 25], [12, 16, 20]]);
          if (l === 1) return typed(`Przyprostokątne trójkąta prostokątnego mają ${p} i ${q}. Ile wynosi przeciwprostokątna?`, r, `a² + b² = c²: ${p * p} + ${q * q} = ${r * r}, więc c = √${r * r} = ${r}.`);
          if (l === 2) return typed(`Przeciwprostokątna ma ${r}, a jedna przyprostokątna ${p}. Ile wynosi druga przyprostokątna?`, q, `b² = c² − a² = ${r * r} − ${p * p} = ${q * q}, więc b = ${q}.`);
          const a = rnd(2, 9);
          return choice(`Jaką długość ma przekątna kwadratu o boku ${a}?`, `${a}√2`, [`${2 * a}`, `${a}√3`, `${a * a}`, `2√${a}`], `d² = ${a}² + ${a}² = 2 · ${a * a}, więc d = ${a}√2. Przekątna kwadratu zawsze wynosi a√2.`);
        } },
        { id: 'pierwiastki', name: 'Pierwiastki', gen: l => {
          if (l === 1) { const n = rnd(2, 15); return typed(`Oblicz: √${n * n}`, n, `${n} · ${n} = ${n * n}, więc √${n * n} = ${n}.`); }
          if (l === 2) {
            if (Math.random() < .5) { const n = rnd(2, 6); return typed(`Oblicz: ∛${n ** 3}`, n, `${n} · ${n} · ${n} = ${n ** 3}, więc ∛${n ** 3} = ${n}.`); }
            const a = pick([2, 3, 5]), k = rnd(2, 4); return typed(`Oblicz: √${a} · √${a * k * k}`, a * k, `√${a} · √${a * k * k} = √${a * a * k * k} = ${a * k}.`);
          }
          const m = pick([2, 3, 5, 6, 7]), k = rnd(2, 5);
          return choice(`Wyłącz czynnik przed pierwiastek: √${k * k * m}`, `${k}√${m}`, [`${m}√${k}`, `${k * k}√${m}`, `${k * m}`, `${k}√${m * k}`], `√${k * k * m} = √${k * k} · √${m} = ${k}√${m}.`);
        } },
        { id: 'prawdopodobienstwo', name: 'Prawdopodobieństwo', gen: l => {
          if (l === 1) {
            const k = rnd(1, 4);
            return pick([
              typed('Rzucasz kostką do gry. Jakie jest prawdopodobieństwo wyrzucenia liczby parzystej? (np. 1/3)', '1/2', 'Parzyste to 2, 4, 6 — 3 z 6 wyników. 3/6 = 1/2.'),
              typed(`Rzucasz kostką do gry. Jakie jest prawdopodobieństwo wyrzucenia liczby większej niż ${k}? (np. 1/3)`, frac(6 - k, 6), `Sprzyjających wyników jest ${6 - k} z 6, więc P = ${6 - k}/6${frac(6 - k, 6) !== `${6 - k}/6` ? ' = ' + frac(6 - k, 6) : ''}.`)
            ]);
          }
          if (l === 2) { const r = rnd(2, 8), b = rnd(2, 8), g = rnd(1, 6), n = r + b + g; return typed(`W worku jest ${r} czerwonych, ${b} niebieskich i ${g} zielonych kul. Losujesz jedną. Jakie jest prawdopodobieństwo, że będzie czerwona?`, frac(r, n), `Wszystkich kul: ${n}, czerwonych: ${r}. P = ${r}/${n}${frac(r, n) !== `${r}/${n}` ? ' = ' + frac(r, n) : ''}.`); }
          return pick([
            typed('Rzucasz dwiema monetami. Jakie jest prawdopodobieństwo, że wypadną dwa orły?', '1/4', 'Możliwe wyniki: OO, OR, RO, RR — 4. Dwa orły tylko raz: 1/4.'),
            typed('Rzucasz dwiema monetami. Jakie jest prawdopodobieństwo, że wypadnie co najmniej jeden orzeł?', '3/4', 'Wyniki: OO, OR, RO, RR. Tylko RR nie ma orła, więc 3/4.'),
            typed('Rzucasz dwiema kostkami. Jakie jest prawdopodobieństwo, że suma oczek wyniesie 7?', '1/6', 'Wszystkich par jest 36. Suma 7: (1,6), (2,5), (3,4), (4,3), (5,2), (6,1) — 6 par. 6/36 = 1/6.'),
            typed('Rzucasz dwiema kostkami. Jakie jest prawdopodobieństwo, że suma oczek wyniesie 12?', '1/36', 'Tylko para (6,6) daje 12, a wszystkich par jest 36. P = 1/36.')
          ]);
        } }
      ]
    }
  });
})();
