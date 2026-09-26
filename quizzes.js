// Wbudowane quizy. Format pytania: { q, a: [4 odpowiedzi], c: indeks poprawnej, t: czas w s }
const BUILTIN_QUIZZES = [
  {
    id: 'mat-podstawy',
    title: 'Matematyka: tabliczka i ułamki',
    emoji: '🧮',
    questions: [
      { q: 'Ile to 7 × 8?', a: ['54', '56', '64', '48'], c: 1, t: 15 },
      { q: 'Ile to 144 : 12?', a: ['11', '14', '12', '13'], c: 2, t: 15 },
      { q: 'Która liczba jest pierwsza?', a: ['21', '27', '29', '33'], c: 2, t: 20 },
      { q: '1/2 + 1/4 = ?', a: ['2/6', '3/4', '1/8', '2/4'], c: 1, t: 20 },
      { q: 'Ile stopni ma kąt prosty?', a: ['45°', '180°', '90°', '360°'], c: 2, t: 10 },
      { q: 'Suma kątów w trójkącie wynosi:', a: ['180°', '360°', '90°', '270°'], c: 0, t: 15 },
      { q: '25% z 80 to:', a: ['25', '20', '40', '16'], c: 1, t: 20 },
      { q: 'Pole kwadratu o boku 6 cm:', a: ['24 cm²', '12 cm²', '36 cm²', '30 cm²'], c: 2, t: 20 }
    ]
  },
  {
    id: 'geo-polska',
    title: 'Geografia Polski',
    emoji: '🗺️',
    questions: [
      { q: 'Najdłuższa rzeka w Polsce to:', a: ['Odra', 'Warta', 'Wisła', 'Bug'], c: 2, t: 15 },
      { q: 'Najwyższy szczyt Polski to:', a: ['Śnieżka', 'Rysy', 'Giewont', 'Babia Góra'], c: 1, t: 15 },
      { q: 'Ile województw ma Polska?', a: ['14', '16', '18', '12'], c: 1, t: 15 },
      { q: 'Nad jakim morzem leży Polska?', a: ['Północnym', 'Czarnym', 'Bałtyckim', 'Śródziemnym'], c: 2, t: 10 },
      { q: 'Stolica województwa pomorskiego to:', a: ['Szczecin', 'Gdańsk', 'Olsztyn', 'Bydgoszcz'], c: 1, t: 15 },
      { q: 'Największe jezioro w Polsce to:', a: ['Mamry', 'Śniardwy', 'Hańcza', 'Gopło'], c: 1, t: 20 },
      { q: 'Z którym krajem Polska NIE graniczy?', a: ['Litwa', 'Słowacja', 'Węgry', 'Białoruś'], c: 2, t: 20 }
    ]
  },
  {
    id: 'ang-slowka',
    title: 'Angielski: słówka',
    emoji: '🇬🇧',
    questions: [
      { q: '„Jabłko” po angielsku to:', a: ['apple', 'orange', 'pear', 'plum'], c: 0, t: 10 },
      { q: '„Library” oznacza:', a: ['księgarnia', 'biblioteka', 'laboratorium', 'szkoła'], c: 1, t: 15 },
      { q: 'Przeszła forma „go” to:', a: ['goed', 'gone', 'went', 'going'], c: 2, t: 15 },
      { q: '„Wednesday” to:', a: ['wtorek', 'czwartek', 'środa', 'piątek'], c: 2, t: 10 },
      { q: '„Brave” oznacza:', a: ['odważny', 'mądry', 'szybki', 'wesoły'], c: 0, t: 15 },
      { q: 'Liczba mnoga od „child”:', a: ['childs', 'children', 'childes', 'childrens'], c: 1, t: 15 },
      { q: '„Nauczyciel” po angielsku to:', a: ['student', 'teacher', 'headmaster', 'tutorial'], c: 1, t: 10 }
    ]
  },
  {
    id: 'przyroda',
    title: 'Przyroda i biologia',
    emoji: '🌿',
    questions: [
      { q: 'Która planeta jest najbliżej Słońca?', a: ['Wenus', 'Mars', 'Merkury', 'Ziemia'], c: 2, t: 15 },
      { q: 'Proces wytwarzania pokarmu przez rośliny to:', a: ['oddychanie', 'fotosynteza', 'trawienie', 'parowanie'], c: 1, t: 15 },
      { q: 'Ile nóg ma pająk?', a: ['6', '8', '10', '4'], c: 1, t: 10 },
      { q: 'Woda wrze (na poziomie morza) w temperaturze:', a: ['90°C', '100°C', '110°C', '120°C'], c: 1, t: 15 },
      { q: 'Wieloryb to:', a: ['ryba', 'płaz', 'ssak', 'gad'], c: 2, t: 10 },
      { q: 'Który narząd pompuje krew?', a: ['płuca', 'wątroba', 'serce', 'nerki'], c: 2, t: 10 }
    ]
  }
];
