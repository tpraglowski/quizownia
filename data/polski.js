// Język polski. Pytanie: l = poziom (1 łatwy, 2 średni, 3 trudny),
// o = odpowiedzi do wyboru (PIERWSZA jest poprawna, kolejność miesza się sama),
// t = odpowiedzi do wpisania (wszystkie akceptowane warianty), e = wyjaśnienie.
SUBJECTS.push({
  id: 'polski', name: 'Język polski', icon: 'ksiazka', color: '#e21b3c',
  grades: {
    4: [
      { id: 'czesci-mowy', name: 'Rzeczownik, czasownik, przymiotnik', questions: [
        { l: 1, q: 'Który wyraz jest rzeczownikiem?', o: ['dom', 'biegać', 'wesoły', 'szybko'], e: 'Rzeczownik nazywa osoby, zwierzęta, rzeczy i zjawiska. Odpowiada na pytania: kto? co?' },
        { l: 1, q: 'Który wyraz jest czasownikiem?', o: ['pisać', 'piękny', 'stół', 'bardzo'], e: 'Czasownik nazywa czynność lub stan. Odpowiada na pytania: co robi? co się z nim dzieje?' },
        { l: 1, q: 'Na jakie pytania odpowiada przymiotnik?', o: ['jaki? jaka? jakie?', 'kto? co?', 'co robi?', 'gdzie? kiedy?'], e: 'Przymiotnik opisuje cechy: jaki kot? — mały, jaka książka? — ciekawa.' },
        { l: 2, q: 'Wpisz przymiotnik ze zdania: „Mały kot śpi na kanapie.”', t: ['mały'], e: 'Jaki kot? — mały. To przymiotnik, bo opisuje cechę rzeczownika.' },
        { l: 2, q: 'Wpisz czasownik ze zdania: „Ola czyta ciekawą książkę.”', t: ['czyta'], e: 'Co robi Ola? — czyta. To czasownik.' },
        { l: 2, q: 'Który wyraz NIE jest rzeczownikiem?', o: ['zielony', 'radość', 'miasto', 'pies'], e: '„Zielony” to przymiotnik (jaki?). „Radość” też jest rzeczownikiem — nazywa uczucie.' },
        { l: 3, q: 'Jaką częścią mowy jest wyraz „bieg” w zdaniu „Bieg trwał godzinę”?', o: ['rzeczownik', 'czasownik', 'przymiotnik', 'przysłówek'], e: 'Co trwało? — bieg. Odpowiada na pytanie „co?”, więc to rzeczownik (czasownikiem byłoby „biec”).' },
        { l: 3, q: 'Podaj bezokolicznik czasownika „piszemy”.', t: ['pisać'], e: 'Bezokolicznik to podstawowa forma czasownika, zwykle zakończona na -ć: pisać.' },
        { l: 3, q: 'Ile rzeczowników jest w zdaniu „Tata kupił mamie kwiaty w kwiaciarni.”?', t: ['4', 'cztery'], e: 'Rzeczowniki: tata, mamie, kwiaty, kwiaciarni — razem 4.' }
      ] },
      { id: 'ortografia', name: 'Ortografia: ó/u, rz/ż', questions: [
        { l: 1, q: 'Która pisownia jest poprawna?', o: ['wóz', 'wuz'], e: 'Ó wymienia się na o: wóz — wozy.' },
        { l: 1, q: 'Która pisownia jest poprawna?', o: ['rzeka', 'żeka'], e: '„Rzeka” to wyraz z rz niewymiennym — jego pisownię trzeba zapamiętać (rzeka, rzeczka, rzeczny).' },
        { l: 1, q: 'Która pisownia jest poprawna?', o: ['stół', 'stuł'], e: 'Ó wymienia się na o: stół — stoły.' },
        { l: 2, q: 'Która pisownia jest poprawna?', o: ['ołówek', 'ołuwek'], e: 'Ó piszemy w zakończeniach -ów, -ówka, -ówek: ołówek, domów, Kraków.' },
        { l: 2, q: 'Która pisownia jest poprawna?', o: ['drzwi', 'dżwi'], e: 'Po spółgłoskach b, p, d, t, g, k, ch, j, w piszemy rz: drzwi, trzy, krzak.' },
        { l: 2, q: 'Która pisownia jest poprawna?', o: ['morze', 'może'], e: 'Rz wymienia się na r: morze — morski. („Może” to inne słowo — od „móc”).' },
        { l: 3, q: 'Który wyraz jest zapisany BŁĘDNIE?', o: ['kożyść', 'wróżka', 'bóbr', 'rzeczka'], e: 'Poprawnie: korzyść. Pozostałe są dobrze: wróżka, bóbr (bobry), rzeczka.' },
        { l: 3, q: 'Która pisownia jest poprawna?', o: ['dróżka', 'drużka', 'drórzka', 'drurzka'], e: 'Droga → ó wymienia się na o, a ż na g: dróżka.' },
        { l: 3, q: 'Która pisownia jest poprawna?', o: ['twórca', 'twurca'], e: 'Ó wymienia się na o: twórca — tworzyć.' }
      ] }
    ],
    5: [
      { id: 'czesci-zdania', name: 'Podmiot i orzeczenie', questions: [
        { l: 1, q: 'Podmiot odpowiada na pytania:', o: ['kto? co?', 'co robi?', 'jaki?', 'gdzie?'], e: 'Podmiot to wykonawca czynności — odpowiada na pytania kto? co?' },
        { l: 1, q: 'Orzeczenie najczęściej jest wyrażone:', o: ['czasownikiem', 'rzeczownikiem', 'przymiotnikiem', 'przyimkiem'], e: 'Orzeczenie mówi, co robi podmiot — zwykle jest czasownikiem w formie osobowej.' },
        { l: 1, q: 'Wpisz podmiot ze zdania: „Pies szczeka głośno.”', t: ['pies'], e: 'Kto szczeka? — pies. To podmiot.' },
        { l: 2, q: 'Wpisz orzeczenie ze zdania: „Wczoraj Kasia napisała list.”', t: ['napisała'], e: 'Co zrobiła Kasia? — napisała. To orzeczenie.' },
        { l: 2, q: 'Jak nazywa się zdanie bez orzeczenia, np. „Cisza!”?', o: ['wypowiedzenie bez czasownika (równoważnik zdania)', 'zdanie złożone', 'zdanie pojedyncze rozwinięte', 'zdanie podrzędne'], e: 'Wypowiedzenie bez osobowej formy czasownika to równoważnik zdania.' },
        { l: 2, q: 'Wpisz podmiot ze zdania: „Nad lasem przeleciały żurawie.”', t: ['żurawie'], e: 'Kto przeleciał? — żurawie. Podmiot nie zawsze stoi na początku zdania!' },
        { l: 3, q: 'Jaki podmiot jest w zdaniu „Poszliśmy do kina.”?', o: ['domyślny (my)', 'kino', 'poszliśmy', 'brak podmiotu i orzeczenia'], e: 'Podmiotu nie ma w zdaniu, ale domyślamy się go z końcówki czasownika: (my) poszliśmy.' },
        { l: 3, q: 'Ile orzeczeń jest w zdaniu „Zjadłem obiad i poszedłem na spacer.”?', t: ['2', 'dwa'], e: 'Orzeczenia: zjadłem, poszedłem — to zdanie złożone z dwóch zdań.' },
        { l: 3, q: 'Wpisz podmiot ze zdania: „Tomek z Olą budowali zamek z piasku.”', t: ['tomek z olą', 'tomek, olą', 'tomek i ola'], e: '„Tomek z Olą” to podmiot szeregowy — dwie osoby wykonują czynność razem (dlatego „budowali”).' }
      ] },
      { id: 'srodki-stylistyczne', name: 'Epitet, porównanie, uosobienie', questions: [
        { l: 1, q: 'Epitet to:', o: ['wyraz określający cechę, np. „złota jesień”', 'porównanie dwóch rzeczy', 'nadanie cech ludzkich rzeczom', 'powtórzenie wyrazu'], e: 'Epitet określa rzeczownik: złota jesień, srebrny księżyc.' },
        { l: 1, q: '„Oczy jak gwiazdy” to:', o: ['porównanie', 'epitet', 'uosobienie', 'wyraz dźwiękonaśladowczy'], e: 'Porównanie zestawia dwie rzeczy za pomocą słów: jak, niby, jakby, niczym.' },
        { l: 1, q: '„Wiatr śpiewa smutną piosenkę” to:', o: ['uosobienie', 'porównanie', 'epitet', 'zdrobnienie'], e: 'Wiatr nie może naprawdę śpiewać — nadano mu cechę człowieka. To uosobienie (personifikacja).' },
        { l: 2, q: 'Wpisz epitet z wyrażenia: „szumiący las”.', t: ['szumiący'], e: 'Jaki las? — szumiący. To epitet.' },
        { l: 2, q: 'Który przykład jest uosobieniem?', o: ['Słońce uśmiecha się do nas.', 'Biały jak śnieg.', 'Zielona łąka.', 'Bum! Trach!'], e: 'Słońce nie może się uśmiechać — dostało cechę człowieka.' },
        { l: 2, q: 'Który przykład to wyraz dźwiękonaśladowczy?', o: ['kukuryku', 'zielony', 'jak lew', 'drzewo szepcze'], e: 'Wyrazy dźwiękonaśladowcze naśladują dźwięki: kukuryku, bęc, szu-szu.' },
        { l: 3, q: '„Rycerz walczył jak lew” — co jest tu porównywane?', o: ['odwaga rycerza do lwa', 'wygląd lwa do rycerza', 'nic, to epitet', 'rycerz do zamku'], e: 'Porównanie podkreśla odwagę i siłę rycerza — walczył jak lew.' },
        { l: 3, q: 'Ile epitetów jest w zdaniu „Stara, mądra sowa siedziała na wysokim dębie”?', t: ['3', 'trzy'], e: 'Epitety: stara, mądra (sowa) i wysokim (dębie) — razem 3.' },
        { l: 3, q: 'Jak nazywa się środek, gdy zwierzę mówi ludzkim głosem, np. w bajce?', o: ['uosobienie (personifikacja)', 'porównanie', 'epitet', 'wyraz dźwiękonaśladowczy'], e: 'Nadawanie zwierzętom ludzkich cech (mowy, myślenia) to uosobienie, często spotykane w bajkach.' }
      ] }
    ],
    6: [
      { id: 'przypadki', name: 'Przypadki rzeczownika', questions: [
        { l: 1, q: 'Ile przypadków ma język polski?', t: ['7', 'siedem'], e: 'Mianownik, dopełniacz, celownik, biernik, narzędnik, miejscownik, wołacz — 7.' },
        { l: 1, q: 'Na jakie pytania odpowiada mianownik?', o: ['kto? co?', 'kogo? czego?', 'komu? czemu?', 'z kim? z czym?'], e: 'Mianownik: kto? co? — to podstawowa forma rzeczownika.' },
        { l: 1, q: 'Który przypadek używamy, zwracając się do kogoś: „Mamo!”?', o: ['wołacz', 'mianownik', 'celownik', 'biernik'], e: 'Wołacz służy do zwracania się: o! Mamo! Tomku!' },
        { l: 2, q: 'W jakim przypadku jest wyraz „kotem” w zdaniu „Bawię się z kotem”?', o: ['narzędnik', 'celownik', 'miejscownik', 'biernik'], e: 'Z kim? z czym? — z kotem. To narzędnik.' },
        { l: 2, q: 'Na jakie pytania odpowiada celownik?', o: ['komu? czemu?', 'kogo? co?', 'o kim? o czym?', 'kogo? czego?'], e: 'Celownik: komu? czemu? — np. daję prezent bratu.' },
        { l: 2, q: 'Wpisz rzeczownik „książka” w miejscowniku (o kim? o czym?).', t: ['książce', 'o książce'], e: 'O czym? — o książce. Miejscownik zawsze używamy z przyimkiem.' },
        { l: 3, q: 'W jakim przypadku jest wyraz „szkoły” w zdaniu „Nie ma dziś szkoły”?', o: ['dopełniacz', 'mianownik', 'biernik', 'narzędnik'], e: 'Nie ma kogo? czego? — szkoły. Po przeczeniu „nie ma” używamy dopełniacza.' },
        { l: 3, q: 'Wpisz wołacz od imienia „Marek”.', t: ['marku'], e: 'Wołacz: Marku! (jak: Tomek → Tomku!).' },
        { l: 3, q: 'W jakim przypadku jest wyraz „list” w zdaniu „Czytam list”?', o: ['biernik', 'mianownik', 'dopełniacz', 'celownik'], e: 'Czytam kogo? co? — list. To biernik (ma tę samą formę co mianownik, ale inne pytanie).' }
      ] },
      { id: 'lektury-6', name: 'Lektury: Hobbit i Narnia', questions: [
        { l: 1, q: 'Kto napisał „Hobbita”?', o: ['J.R.R. Tolkien', 'C.S. Lewis', 'J.K. Rowling', 'Henryk Sienkiewicz'], e: '„Hobbit, czyli tam i z powrotem” napisał J.R.R. Tolkien.' },
        { l: 1, q: 'Jak ma na imię hobbit, główny bohater „Hobbita”?', t: ['bilbo', 'bilbo baggins', 'bilbo bagins'], e: 'Głównym bohaterem jest Bilbo Baggins.' },
        { l: 1, q: 'Przez co dzieci dostały się do Narnii w „Lwie, czarownicy i starej szafie”?', o: ['przez szafę', 'przez lustro', 'przez studnię', 'przez obraz'], e: 'Łucja, a potem jej rodzeństwo weszli do Narnii przez starą szafę.' },
        { l: 2, q: 'Jak nazywa się lew, władca Narnii?', t: ['aslan'], e: 'Aslan to wielki lew, prawowity władca Narnii.' },
        { l: 2, q: 'Jak nazywał się smok w „Hobbicie”?', o: ['Smaug', 'Gollum', 'Thorin', 'Beorn'], e: 'Smok Smaug strzegł skarbu krasnoludów w Samotnej Górze.' },
        { l: 2, q: 'Który z rodzeństwa Pevensie zdradził pozostałych?', o: ['Edmund', 'Piotr', 'Zuzanna', 'Łucja'], e: 'Edmund dał się skusić Białej Czarownicy (m.in. rachatłukum) i zdradził rodzeństwo.' },
        { l: 3, q: 'Co Bilbo znalazł w jaskini Golluma?', o: ['pierścień', 'miecz', 'mapę', 'klejnot Arcyklejnot'], e: 'Bilbo znalazł magiczny pierścień, który czynił go niewidzialnym.' },
        { l: 3, q: 'Kim był pan Tumnus?', o: ['faunem', 'krasnoludem', 'bobrem', 'centaurem'], e: 'Pan Tumnus to faun, którego Łucja spotkała jako pierwszego w Narnii.' },
        { l: 3, q: 'Kto przewodził wyprawie krasnoludów w „Hobbicie”?', t: ['thorin', 'thorin dębowa tarcza'], e: 'Wyprawą przewodził Thorin Dębowa Tarcza, który chciał odzyskać skarb i królestwo.' }
      ] }
    ],
    7: [
      { id: 'obraz-plakat', group: 'Semestr 1', name: 'Analiza obrazu, grafiki i plakatu', questions: [
        { l: 1, q: 'Jak nazywa się obraz przedstawiający krajobraz?', o: ['pejzaż', 'portret', 'martwa natura', 'scena rodzajowa'], e: 'Pejzaż przedstawia krajobraz, portret — człowieka, martwa natura — przedmioty.' },
        { l: 1, q: 'Martwa natura to obraz przedstawiający:', o: ['przedmioty, np. owoce, kwiaty, naczynia', 'zwierzęta w ruchu', 'bitwę', 'krajobraz zimą'], e: 'Martwa natura to kompozycja z nieruchomych przedmiotów.' },
        { l: 1, q: 'Jak nazywa się portret, na którym malarz przedstawił samego siebie?', t: ['autoportret'], e: 'Autoportret — artysta maluje siebie.' },
        { l: 2, q: 'Co to jest pierwszy plan obrazu?', o: ['to, co wydaje się najbliżej oglądającego', 'tło obrazu', 'rama obrazu', 'najjaśniejsza plama barwna'], e: 'Pierwszy plan jest najbliżej widza, dalej są dalsze plany i tło.' },
        { l: 2, q: 'Które barwy nazywamy ciepłymi?', o: ['czerwień, pomarańcz, żółć', 'błękit, zieleń, fiolet', 'biel i czerń', 'szarości'], e: 'Barwy ciepłe kojarzą się z ogniem i słońcem, zimne — z wodą i lodem.' },
        { l: 2, q: 'Jak nazywa się obraz przedstawiający sceny z codziennego życia zwykłych ludzi?', o: ['scena rodzajowa', 'pejzaż', 'martwa natura', 'akt'], e: 'Scena rodzajowa pokazuje codzienność, np. pracę, zabawę, jarmark.' },
        { l: 3, q: 'Co jest najważniejszą cechą plakatu?', o: ['skrótowy, szybki w odbiorze przekaz — hasło, symbol, wyraziste barwy', 'dużo drobnych szczegółów i długi tekst', 'wyłącznie realistyczny rysunek', 'brak jakiegokolwiek tekstu'], e: 'Plakat musi przyciągnąć uwagę w kilka sekund — stosuje symbole, skróty myślowe i krótkie hasła.' },
        { l: 3, q: 'Jak nazywa się sposób rozmieszczenia elementów na obrazie?', t: ['kompozycja'], e: 'Kompozycja może być np. symetryczna, statyczna (spokojna) lub dynamiczna (pełna ruchu).' },
        { l: 3, q: 'Kontrast jasnych i ciemnych partii obrazu, który podkreśla kształty, to:', o: ['światłocień', 'perspektywa', 'faktura', 'rytm'], e: 'Światłocień modeluje bryły i buduje nastrój, np. w obrazach Rembrandta.' }
      ] },
      { id: 'zdania-zlozone', group: 'Semestr 1', name: 'Zdania pojedyncze i złożone', questions: [
        { l: 1, q: 'Zdanie złożone ma:', o: ['co najmniej dwa orzeczenia', 'tylko jedno orzeczenie', 'brak orzeczenia', 'co najmniej dwa podmioty'], e: 'Każde zdanie składowe ma swoje orzeczenie, więc zdanie złożone ma ich co najmniej dwa.' },
        { l: 1, q: 'Zdanie „Padał deszcz, więc zostaliśmy w domu” jest:', o: ['złożone współrzędnie', 'złożone podrzędnie', 'pojedyncze', 'równoważnikiem zdania'], e: '„Więc” to spójnik zdania współrzędnego wynikowego — oba zdania są równorzędne.' },
        { l: 1, q: 'Zdanie „Wiem, że masz rację” jest:', o: ['złożone podrzędnie', 'złożone współrzędnie', 'pojedyncze', 'równoważnikiem zdania'], e: 'Wiem co? — że masz rację. Jedno zdanie zależy od drugiego, więc to zdanie podrzędne.' },
        { l: 2, q: 'Jaki to rodzaj zdania współrzędnego: „Lubię czytać, ale nie lubię pisać”?', o: ['przeciwstawne', 'łączne', 'rozłączne', 'wynikowe'], e: 'Spójnik „ale” wprowadza przeciwstawienie. Na wykresie oba zdania leżą na jednej linii, połączone spójnikiem.' },
        { l: 2, q: 'Jaki to rodzaj zdania współrzędnego: „Pójdziesz do kina albo zostaniesz w domu”?', o: ['rozłączne', 'łączne', 'przeciwstawne', 'wynikowe'], e: 'Spójnik „albo” oznacza wybór jednej możliwości — to zdanie rozłączne.' },
        { l: 2, q: 'Przed którym spójnikiem ZAWSZE stawiamy przecinek?', o: ['ale', 'i', 'lub', 'albo'], e: 'Przed „ale”, „lecz”, „więc”, „że”, „bo” zawsze stawiamy przecinek. Przed pojedynczym „i”, „lub”, „albo” — zwykle nie.' },
        { l: 3, q: 'Jakie to zdanie podrzędne: „Wrócę, gdy skończy się lekcja”?', o: ['okolicznikowe czasu', 'przydawkowe', 'dopełnieniowe', 'podmiotowe'], e: 'Wrócę kiedy? — gdy skończy się lekcja. Na wykresie zdanie podrzędne rysujemy niżej i zapisujemy pytanie, na które odpowiada.' },
        { l: 3, q: 'Jakie to zdanie podrzędne: „Książka, którą czytam, jest ciekawa”?', o: ['przydawkowe', 'okolicznikowe miejsca', 'orzecznikowe', 'dopełnieniowe'], e: 'Która książka? — którą czytam. Zdanie określa rzeczownik, więc jest przydawkowe. Wtrącone zdanie oddzielamy przecinkami z obu stron.' },
        { l: 3, q: 'Ile zdań składowych jest w: „Kiedy wróciłem, mama gotowała, a tata czytał gazetę”?', t: ['3', 'trzy'], e: 'Orzeczenia: wróciłem, gotowała, czytał — trzy zdania składowe.' }
      ] },
      { id: 'imieslowowy-rownowaznik', group: 'Semestr 1', name: 'Imiesłowowy równoważnik zdania', questions: [
        { l: 1, q: 'Imiesłowowy równoważnik zdania zawiera imiesłów:', o: ['przysłówkowy (np. idąc, zjadłszy)', 'przymiotnikowy (np. czytający)', 'bierny (np. napisany)', 'żaden — zawiera czasownik osobowy'], e: 'Imiesłowowy równoważnik zdania opiera się na imiesłowie przysłówkowym: -ąc, -łszy, -wszy.' },
        { l: 1, q: 'Czy imiesłowowy równoważnik zdania oddzielamy przecinkiem?', o: ['tak, zawsze', 'nie, nigdy', 'tylko na początku zdania', 'tylko w pytaniach'], e: '„Wracając do domu, spotkałem kolegę.” — przecinek jest obowiązkowy.' },
        { l: 1, q: 'Wskaż zdanie z imiesłowowym równoważnikiem zdania.', o: ['Czytając książkę, piłem herbatę.', 'Czytałem książkę i piłem herbatę.', 'Książka była ciekawa.', 'Czytający chłopiec pił herbatę.'], e: '„Czytając książkę” to imiesłowowy równoważnik zdania.' },
        { l: 2, q: 'Przekształć: „Kiedy wróciłem do domu, zjadłem obiad.”', o: ['Wróciwszy do domu, zjadłem obiad.', 'Wracając do domu, zjadłem obiad.', 'Wrócony do domu, zjadłem obiad.', 'Wróciwszy do domu zjadłem obiad.'], e: 'Czynność wcześniejsza → imiesłów uprzedni (-wszy). Pamiętaj o przecinku!' },
        { l: 2, q: 'Przekształć: „Słuchając muzyki, odrabiałam lekcje.”', o: ['Kiedy słuchałam muzyki, odrabiałam lekcje.', 'Kiedy słuchałam muzyki odrabiałam lekcje.', 'Słuchałam muzyki, bo odrabiałam lekcje.', 'Muzyka słuchała, gdy odrabiałam lekcje.'], e: 'Imiesłów współczesny (-ąc) → czynności równoczesne → „kiedy/gdy”.' },
        { l: 2, q: 'Imiesłów zakończony na -ąc oznacza czynność:', o: ['równoczesną z czynnością w zdaniu', 'wcześniejszą', 'późniejszą', 'zakazaną'], e: 'Idąc, śpiewał — szedł i śpiewał w tym samym czasie.' },
        { l: 3, q: 'Dlaczego zdanie „Jadąc tramwajem, zepsuł się silnik” jest błędne?', o: ['imiesłów i orzeczenie mają różnych wykonawców', 'brakuje przecinka', 'imiesłów powinien być na końcu', 'tramwaj nie ma silnika'], e: 'Wykonawca czynności imiesłowu musi być taki sam jak podmiot zdania. Silnik nie jechał tramwajem.' },
        { l: 3, q: 'Utwórz imiesłów uprzedni od „przeczytać”.', t: ['przeczytawszy'], e: 'Przeczytawszy książkę, oddałem ją do biblioteki.' },
        { l: 3, q: 'Przekształć na imiesłowowy równoważnik: „Gdy Ola usiadła przy biurku, zaczęła pisać.” (wpisz tylko początek, do przecinka)', t: ['usiadłszy przy biurku'], e: 'Usiadłszy przy biurku, Ola zaczęła pisać. Czynność wcześniejsza → -łszy.' }
      ] },
      { id: 'zemsta', group: 'Semestr 1', name: 'Lektura: Zemsta', questions: [
        { l: 1, q: 'Kto napisał „Zemstę”?', o: ['Aleksander Fredro', 'Adam Mickiewicz', 'Juliusz Słowacki', 'Henryk Sienkiewicz'], e: '„Zemstę” napisał Aleksander Fredro — to komedia.' },
        { l: 1, q: 'O co kłócili się Cześnik i Rejent w „Zemście”?', o: ['o mur graniczny', 'o konia', 'o pieniądze', 'o tron'], e: 'Spór dotyczył muru dzielącego zamek, w którym mieszkali obaj sąsiedzi.' },
        { l: 1, q: 'Jak nazywał się tchórzliwy i przechwalający się bohater „Zemsty”?', t: ['papkin'], e: 'Papkin to samochwała i tchórz, najbardziej komiczna postać „Zemsty”.' },
        { l: 2, q: 'Jak nazywa się Rejent w „Zemście”?', o: ['Milczek', 'Raptusiewicz', 'Papkin', 'Dyndalski'], e: 'Rejent Milczek był przeciwnikiem Cześnika Macieja Raptusiewicza.' },
        { l: 2, q: 'Jakie powiedzonko powtarza Rejent Milczek?', o: ['„Niech się dzieje wola nieba”', '„Mocium panie”', '„Zgoda! Zgoda!”', '„Litwo! Ojczyzno moja!”'], e: 'Rejent udaje pokornego: „Niech się dzieje wola nieba, z nią się zawsze zgadzać trzeba”. „Mocium panie” mówi Cześnik.' },
        { l: 2, q: 'Jakim gatunkiem jest „Zemsta”?', o: ['komedia', 'tragedia', 'ballada', 'nowela'], e: 'To komedia — ma szczęśliwe zakończenie i bawi komizmem postaci, słów i sytuacji.' },
        { l: 3, q: 'Jak kończy się „Zemsta”?', o: ['ślubem Wacława i Klary oraz pogodzeniem się', 'pojedynkiem Cześnika i Rejenta', 'śmiercią Papkina', 'zburzeniem muru'], e: 'Kłótnia kończy się zgodą: Wacław żeni się z Klarą, a Cześnik i Rejent się godzą.' },
        { l: 3, q: 'Komu Cześnik dyktuje list w słynnej scenie?', o: ['Dyndalskiemu', 'Papkinowi', 'Wacławowi', 'Klarze'], e: 'Dyndalski, stary sługa Cześnika, pisze pod dyktando i ciągle przekręca słowa — to komizm słowny i sytuacyjny.' },
        { l: 3, q: 'Kim była Podstolina?', o: ['bogatą wdową, z którą chciał ożenić się Cześnik', 'siostrą Klary', 'matką Papkina', 'służącą Rejenta'], e: 'Podstolina Hanna zaręczyła się z Cześnikiem, ale była wcześniej związana z Wacławem.' }
      ] },
      { id: 'rozprawka', group: 'Semestr 1', name: 'Rozprawka', questions: [
        { l: 1, q: 'Co zawiera wstęp rozprawki?', o: ['tezę lub hipotezę', 'tylko przykłady z lektur', 'podsumowanie argumentów', 'dialog bohaterów'], e: 'We wstępie formułujesz tezę (stanowisko, którego bronisz) lub hipotezę (przypuszczenie).' },
        { l: 1, q: 'Co to jest argument?', o: ['uzasadnienie, które potwierdza tezę', 'tytuł rozprawki', 'opis wyglądu bohatera', 'wstęp do opowiadania'], e: 'Argument to powód, dla którego teza jest prawdziwa; popierasz go przykładem.' },
        { l: 1, q: 'Z ilu głównych części składa się rozprawka?', t: ['3', 'trzy', 'z trzech'], e: 'Wstęp (teza), rozwinięcie (argumenty z przykładami), zakończenie (wniosek).' },
        { l: 2, q: 'Czym różni się hipoteza od tezy?', o: ['hipoteza to przypuszczenie, które sprawdzasz; teza to stanowisko, którego bronisz', 'niczym', 'hipoteza jest zawsze fałszywa', 'teza jest pytaniem'], e: 'Rozprawka z hipotezą kończy się jej potwierdzeniem lub odrzuceniem.' },
        { l: 2, q: 'Które wyrażenie najlepiej rozpoczyna zakończenie rozprawki?', o: ['Podsumowując,', 'Dawno, dawno temu', 'Po pierwsze,', 'Nagle'], e: 'Zakończenie otwierają np.: „Podsumowując”, „Reasumując”, „Na podstawie powyższych argumentów…”.' },
        { l: 2, q: 'Czym należy poprzeć argument?', o: ['przykładem, np. z lektury, historii lub życia', 'rysunkiem', 'dialogiem', 'wyłącznie cytatem z internetu'], e: 'Każdy argument warto zilustrować konkretnym przykładem.' },
        { l: 3, q: 'W jakiej kolejności najlepiej ułożyć argumenty?', o: ['od najsłabszego do najmocniejszego', 'od najmocniejszego do najsłabszego', 'alfabetycznie', 'losowo'], e: 'Gradacja argumentów sprawia, że najmocniejszy zostaje w pamięci na koniec.' },
        { l: 3, q: 'Jak nazywa się argument przeciwny tezie, który warto odeprzeć?', t: ['kontrargument'], e: 'Odparcie kontrargumentu wzmacnia twoje stanowisko.' },
        { l: 3, q: 'Który styl jest odpowiedni dla rozprawki?', o: ['rzeczowy, bez potocznych zwrotów', 'potoczny, jak w SMS-ie', 'baśniowy', 'wierszowany'], e: 'Rozprawka jest wypowiedzią argumentacyjną — liczy się logika i poprawny, rzeczowy język.' }
      ] },
      { id: 'dziady-2', group: 'Semestr 1', name: 'Lektura: Dziady cz. II', questions: [
        { l: 1, q: 'Kto napisał „Dziady” cz. II?', o: ['Adam Mickiewicz', 'Juliusz Słowacki', 'Aleksander Fredro', 'Jan Kochanowski'], e: 'II część „Dziadów” Mickiewicz wydał w 1823 r.' },
        { l: 1, q: 'Czym były dziady?', o: ['ludowym obrzędem przywoływania dusz zmarłych', 'świętem plonów', 'weselem', 'nabożeństwem wielkanocnym'], e: 'Podczas dziadów w kaplicy lub na cmentarzu wywoływano dusze, by im pomóc.' },
        { l: 1, q: 'Kto prowadził obrzęd dziadów?', t: ['guślarz'], e: 'Guślarz wywołuje duchy i pyta, czego potrzebują.' },
        { l: 2, q: 'O co prosiły dzieci, Józio i Rózia?', o: ['o dwa ziarnka gorczycy', 'o chleb i wodę', 'o modlitwę', 'o kwiaty'], e: 'Gorczyca jest gorzka — dzieci za życia nie zaznały goryczy, więc nie mogą trafić do nieba.' },
        { l: 2, q: 'Do której grupy duchów należał Zły Pan?', o: ['ciężkich', 'lekkich', 'pośrednich', 'nie był duchem'], e: 'Duchy: lekkie (dzieci), ciężkie (Zły Pan), pośrednie (pasterka Zosia).' },
        { l: 2, q: 'Dlaczego pasterka Zosia nie mogła trafić do nieba?', o: ['nigdy nikogo nie pokochała i „nie dotknęła ziemi”', 'była okrutna dla ludzi', 'zabiła siostrę', 'zbyt wcześnie umarła'], e: '„Kto nie dotknął ziemi ni razu, ten nigdy nie może być w niebie.”' },
        { l: 3, q: 'Dokończ przestrogę duchów dzieci: „Kto nie doznał goryczy ni razu…”', o: ['ten nie dozna słodyczy w niebie', 'ten nie może być w niebie', 'temu człowiek nic nie pomoże', 'niech się dzieje wola nieba'], e: 'To morał lekkich duchów — cierpienie jest częścią ludzkiego życia.' },
        { l: 3, q: 'Dlaczego nikt nie mógł pomóc Złemu Panu?', o: ['za życia nie był człowiekiem dla innych — był okrutny', 'był dzieckiem', 'nie przyszedł na obrzęd', 'prosił o zbyt wiele'], e: '„Bo kto nie był ni razu człowiekiem, temu człowiek nic nie pomoże.” Ptaki (dawni poddani) nie pozwalają mu jeść.' },
        { l: 3, q: 'Jaki dramat reprezentują „Dziady” cz. II?', o: ['romantyczny', 'antyczny', 'komedię', 'tragedię klasyczną'], e: 'Dramat romantyczny łączy cechy rodzajów, sięga po ludowość i fantastykę, łamie zasadę trzech jedności.' }
      ] },
      { id: 'srodki-stylistyczne-7', group: 'Semestr 1', name: 'Środki stylistyczne', questions: [
        { l: 1, q: '„Oczy jak gwiazdy” to:', o: ['porównanie', 'metafora', 'apostrofa', 'zgrubienie'], e: 'Porównanie łączy dwie rzeczy słowami: jak, niby, jakby, niczym.' },
        { l: 1, q: 'Wyraz „kotek” to:', o: ['zdrobnienie', 'zgrubienie', 'onomatopeja', 'apostrofa'], e: 'Zdrobnienie nazywa coś mniejszego lub wyraża czułość: kotek, domek.' },
        { l: 1, q: 'Wyraz „psisko” to:', o: ['zgrubienie', 'zdrobnienie', 'metafora', 'porównanie'], e: 'Zgrubienie wyraża wielkość lub niechęć: psisko, domisko, chłopisko.' },
        { l: 2, q: '„Litwo! Ojczyzno moja!” to przykład:', o: ['apostrofy', 'onomatopei', 'zgrubienia', 'porównania'], e: 'Apostrofa to bezpośredni, uroczysty zwrot do osoby, rzeczy lub pojęcia.' },
        { l: 2, q: 'Jak nazywa się środek naśladujący dźwięki, np. „szumią, szeleszczą, szepczą”?', t: ['onomatopeja', 'wyraz dźwiękonaśladowczy', 'wyrazy dźwiękonaśladowcze'], e: 'Onomatopeja wykorzystuje brzmienie słów do naśladowania odgłosów.' },
        { l: 2, q: 'Czym jest metafora (przenośnia)?', o: ['połączeniem słów, które razem nabierają nowego, obrazowego znaczenia', 'zwrotem do adresata', 'wyrazem zdrobniałym', 'powtórzeniem tego samego słowa'], e: 'Np. „kołdra mgły okryła miasto” — mgła nie jest dosłownie kołdrą.' },
        { l: 3, q: 'Który przykład jest metaforą?', o: ['„Nad miastem rozpostarła się kołdra mgły.”', '„Biały jak śnieg.”', '„Kap, kap, kap.”', '„Domisko stało na wzgórzu.”'], e: 'Porównanie ma słowo „jak”, metafora — nie. Dlatego „kołdra mgły” to metafora.' },
        { l: 3, q: 'Co tworzy rytm w wierszu?', o: ['regularne powtarzanie się podobnych elementów, np. liczby sylab i akcentów', 'brak rymów', 'duża liczba przymiotników', 'dialog postaci'], e: 'Rytm powstaje np. z jednakowej liczby sylab w wersach, stałych akcentów, rymów i powtórzeń.' },
        { l: 3, q: 'Jaką funkcję pełni powtórzenie w wierszu?', o: ['podkreśla ważne słowa i wzmacnia nastrój', 'skraca utwór', 'zastępuje rym', 'wprowadza narratora'], e: 'Powtórzone słowo lub wers przyciąga uwagę i buduje rytm.' }
      ] },
      { id: 'liryka-gatunki', group: 'Semestr 1', name: 'Gatunki liryczne', questions: [
        { l: 1, q: 'Kto „mówi” w wierszu lirycznym?', o: ['podmiot liryczny', 'narrator', 'autor zawsze osobiście', 'bohater dramatu'], e: 'Podmiot liryczny to osoba mówiąca w wierszu — nie zawsze jest nią sam poeta.' },
        { l: 1, q: 'Krótki, żartobliwy utwór z puentą, np. u Kochanowskiego, to:', o: ['fraszka', 'tren', 'oda', 'sonet'], e: 'Fraszka jest krótka, dowcipna i kończy się zaskakującą puentą.' },
        { l: 1, q: 'Utwór wyrażający żal po zmarłym to:', t: ['tren'], e: 'Najsłynniejsze „Treny” Jan Kochanowski napisał po śmierci córki Urszulki.' },
        { l: 2, q: 'Ile wersów ma sonet?', t: ['14', 'czternaście'], e: 'Sonet ma 14 wersów: dwie strofy czterowersowe i dwie trzywersowe.' },
        { l: 2, q: 'Uroczysty utwór wysławiający Boga, ojczyznę lub ważną ideę to:', o: ['hymn', 'fraszka', 'tren', 'bajka'], e: 'Hymn ma podniosły ton, np. „Czego chcesz od nas, Panie” Kochanowskiego.' },
        { l: 2, q: 'Czym jest strofa?', o: ['grupą wersów wyodrębnioną w wierszu', 'pojedynczą linijką wiersza', 'rymem', 'tytułem'], e: 'Wers to linijka, strofa (zwrotka) to grupa wersów.' },
        { l: 3, q: 'Utwór pochwalny o podniosłym stylu, np. „Oda do młodości” Mickiewicza, to:', o: ['oda', 'fraszka', 'elegia', 'pieśń ludowa'], e: 'Oda wysławia ważną ideę lub osobę w uroczystym tonie.' },
        { l: 3, q: 'Którego gatunku przykładem są „Sonety krymskie” Mickiewicza?', o: ['sonetu', 'trenu', 'fraszki', 'ballady'], e: 'To cykl 18 sonetów napisanych po podróży na Krym.' },
        { l: 3, q: 'Liryka bezpośrednia to taka, w której podmiot liryczny:', o: ['ujawnia się i mówi o sobie w 1. osobie', 'w ogóle się nie ujawnia', 'zwraca się do adresata', 'mówi w imieniu grupy'], e: 'Liryka bezpośrednia: „ja” mówi o swoich uczuciach. Liryka zwrotu do adresata to np. apostrofa do „ty”.' }
      ] },
      { id: 'opowiesc-wigilijna', group: 'Semestr 1', name: 'Lektura: Opowieść wigilijna', questions: [
        { l: 1, q: 'Kto napisał „Opowieść wigilijną”?', o: ['Charles Dickens', 'C.S. Lewis', 'Mark Twain', 'J.R.R. Tolkien'], e: 'Charles Dickens wydał ją w 1843 r.' },
        { l: 1, q: 'Jak nazywa się główny bohater, skąpiec?', t: ['scrooge', 'ebenezer scrooge'], e: 'Ebenezer Scrooge — chciwy, samotny kupiec z Londynu.' },
        { l: 1, q: 'Ile duchów świąt odwiedziło Scrooge’a (nie licząc Marleya)?', t: ['3', 'trzy'], e: 'Duch Wigilijnej Przeszłości, Duch Obecnych Świąt i Duch Przyszłych Świąt.' },
        { l: 2, q: 'Kim był Jacob Marley?', o: ['zmarłym wspólnikiem Scrooge’a', 'jego siostrzeńcem', 'jego pracownikiem', 'duchem przyszłości'], e: 'Duch Marleya, skuty łańcuchami, ostrzega Scrooge’a przed losem skąpca.' },
        { l: 2, q: 'Jak nazywał się pracownik Scrooge’a?', o: ['Bob Cratchit', 'Fred', 'Fezziwig', 'Marley'], e: 'Bob Cratchit był biednym, ale dobrym ojcem rodziny.' },
        { l: 2, q: 'W jakim mieście toczy się akcja?', t: ['londyn', 'w londynie'], e: 'Akcja toczy się w XIX-wiecznym Londynie.' },
        { l: 3, q: 'Kim był Mały Tim?', o: ['chorym synem Boba Cratchita', 'siostrzeńcem Scrooge’a', 'duchem', 'dawnym szefem Scrooge’a'], e: 'Los Małego Tima porusza Scrooge’a i skłania go do pomocy rodzinie Cratchitów.' },
        { l: 3, q: 'Co jest głównym tematem utworu?', o: ['przemiana człowieka i wartość dobroci', 'podróż dookoła świata', 'wojna', 'przygody piratów'], e: 'Scrooge z egoisty zmienia się w hojnego i życzliwego człowieka.' },
        { l: 3, q: 'Co pokazał Scrooge’owi Duch Przyszłych Świąt?', o: ['jego samotną śmierć, której nikt nie żałował', 'jego dzieciństwo', 'święta u Cratchitów w tym roku', 'dawnego szefa Fezziwiga'], e: 'Widok własnego grobu przeraził Scrooge’a i przekonał go do zmiany.' }
      ] },
      { id: 'opowiadanie-tworcze', group: 'Semestr 1', name: 'Opowiadanie twórcze', questions: [
        { l: 1, q: 'Opowiadanie to forma wypowiedzi, która:', o: ['przedstawia wydarzenia ułożone w porządku przyczynowo-skutkowym', 'przekonuje do tezy', 'opisuje tylko wygląd przedmiotu', 'jest listem'], e: 'W opowiadaniu najważniejsza jest akcja — ciąg powiązanych wydarzeń.' },
        { l: 1, q: 'Jak zapisujemy wypowiedź bohatera w dialogu?', o: ['od nowej linii, po myślniku', 'w nawiasie', 'wielkimi literami', 'bez żadnego wyróżnienia'], e: 'Każda kwestia dialogu zaczyna się od nowego akapitu i myślnika.' },
        { l: 1, q: 'Kto opowiada historię w opowiadaniu?', t: ['narrator'], e: 'Narrator może być pierwszoosobowy (uczestnik) lub trzecioosobowy (obserwator).' },
        { l: 2, q: 'Czym jest punkt kulminacyjny?', o: ['momentem największego napięcia', 'pierwszym zdaniem', 'opisem miejsca', 'tytułem'], e: 'Punkt kulminacyjny to najważniejszy, najbardziej emocjonujący moment akcji.' },
        { l: 2, q: 'Co odróżnia opowiadanie twórcze od zwykłego?', o: ['własna, oryginalna fabuła lub twórcze rozwinięcie historii', 'brak bohaterów', 'forma listu', 'obowiązek pisania wierszem'], e: 'W opowiadaniu twórczym wymyślasz nowe wydarzenia, np. dalsze losy bohatera lektury.' },
        { l: 2, q: 'Który element NIE jest potrzebny w opowiadaniu?', o: ['teza i argumenty', 'bohaterowie', 'miejsce i czas akcji', 'wydarzenia'], e: 'Teza i argumenty należą do rozprawki.' },
        { l: 3, q: 'Jak nazywa się przywołanie wydarzeń z przeszłości w trakcie opowiadania?', o: ['retrospekcja', 'puenta', 'dygresja', 'apostrofa'], e: 'Retrospekcja to „cofnięcie się” w czasie, np. wspomnienie bohatera.' },
        { l: 3, q: 'Co ożywia opowiadanie?', o: ['dialogi, opisy przeżyć i zwroty akcji', 'wyłącznie wyliczanie faktów', 'ciągłe powtarzanie „potem”', 'brak akapitów'], e: 'Dialog, opisy emocji i niespodziewane zwroty akcji przyciągają czytelnika.' },
        { l: 3, q: 'Zaskakujące zakończenie utworu to:', t: ['puenta', 'pointa'], e: 'Puenta to celne, zaskakujące zakończenie.' }
      ] },
      { id: 'balladyna', group: 'Semestr 2', name: 'Lektura: Balladyna', questions: [
        { l: 1, q: 'Kto napisał „Balladynę”?', o: ['Juliusz Słowacki', 'Adam Mickiewicz', 'Aleksander Fredro', 'Henryk Sienkiewicz'], e: '„Balladyna” to dramat Juliusza Słowackiego (wydany w 1839 r.).' },
        { l: 1, q: 'Jak miała na imię siostra Balladyny?', t: ['alina'], e: 'Balladyna i Alina były córkami ubogiej wdowy.' },
        { l: 1, q: 'Jaki był warunek Kirkora przy wyborze żony?', o: ['ta, która zbierze więcej malin', 'ta, która ładniej zaśpiewa', 'ta, która ma posag', 'ta, która pierwsza przyjdzie'], e: 'Matka wymyśliła próbę: żoną Kirkora zostanie ta, która pierwsza zbierze dzban malin.' },
        { l: 2, q: 'Kim była Goplana?', o: ['nimfą, królową jeziora Gopło', 'siostrą Kirkora', 'matką Balladyny', 'królową Polski'], e: 'Goplana zakochała się w Grabcu i swoimi czarami mieszała w losach ludzi.' },
        { l: 2, q: 'Co pojawiło się na czole Balladyny po zabójstwie siostry?', o: ['krwawa plama (znamię)', 'korona', 'blizna od miecza', 'nic'], e: 'Plama przypominała sok z malin — była znakiem winy.' },
        { l: 2, q: 'Jak zginęła Balladyna?', o: ['od pioruna', 'w bitwie', 'z rąk Kirkora', 'utonęła w jeziorze'], e: 'Jako królowa wydała na siebie wyrok śmierci — i zginęła rażona piorunem.' },
        { l: 3, q: 'Kim naprawdę był Pustelnik?', o: ['wygnanym królem Popielem III', 'ojcem Balladyny', 'Grabcem', 'Kostrynem'], e: 'Pustelnik to prawowity król, który ukrywał koronę.' },
        { l: 3, q: 'Który bohater był wspólnikiem zbrodni Balladyny?', o: ['Kostryn', 'Filon', 'Skierka', 'Grabiec'], e: 'Kostryn pomagał Balladynie w dojściu do władzy, a potem sam zginął z jej ręki.' },
        { l: 3, q: 'Co łączy „Balladynę” z balladą?', o: ['fantastyka, ludowość i motyw winy i kary', 'forma wiersza czternastowersowego', 'szczęśliwe zakończenie', 'brak postaci fantastycznych'], e: 'Świat baśniowych postaci i nieuchronna kara za zbrodnię to cechy ballad romantycznych.' }
      ] },
      { id: 'charakterystyka-porownawcza', group: 'Semestr 2', name: 'Charakterystyka porównawcza', questions: [
        { l: 1, q: 'Co porównujemy w charakterystyce porównawczej?', o: ['dwie postacie — ich podobieństwa i różnice', 'dwa krajobrazy', 'dwie książki pod względem ceny', 'dwa argumenty'], e: 'Charakterystyka porównawcza zestawia dwie postacie.' },
        { l: 1, q: 'Które wyrażenie wskazuje na różnicę?', o: ['w przeciwieństwie do', 'podobnie jak', 'tak samo jak', 'obaj'], e: 'Różnice: w przeciwieństwie do, natomiast, zaś. Podobieństwa: podobnie jak, obaj, zarówno… jak i.' },
        { l: 1, q: 'Które wyrażenie wskazuje na podobieństwo?', o: ['podobnie jak', 'natomiast', 'w odróżnieniu od', 'zaś'], e: '„Podobnie jak Alina, Balladyna była…” — wskazujemy cechę wspólną.' },
        { l: 2, q: 'Co zwykle znajduje się na początku charakterystyki porównawczej?', o: ['przedstawienie obu postaci (kim są, skąd je znamy)', 'ocena postaci', 'lista różnic', 'dialog'], e: 'Kolejność: przedstawienie, wygląd, cechy charakteru i zachowanie, ocena.' },
        { l: 2, q: 'Czym należy potwierdzić cechę charakteru postaci?', o: ['przykładem jej zachowania lub cytatem', 'rysunkiem', 'własnym wymysłem', 'niczym'], e: 'Np. „Balladyna była okrutna — zabiła siostrę dla korzyści”.' },
        { l: 2, q: 'Co jest na końcu charakterystyki porównawczej?', o: ['ocena postaci i wniosek z porównania', 'teza', 'opis miejsca akcji', 'nowa postać'], e: 'W zakończeniu oceniasz obie postacie i podsumowujesz podobieństwa oraz różnice.' },
        { l: 3, q: 'Na czym polega układ równoległy charakterystyki porównawczej?', o: ['porównujemy postacie cecha po cesze', 'najpierw całkiem opisujemy jedną, potem drugą', 'opisujemy tylko wygląd', 'wypisujemy cytaty bez komentarza'], e: 'Układ równoległy: wygląd A i B, potem charakter A i B itd. Można też opisać kolejno każdą postać, a potem je porównać.' },
        { l: 3, q: 'Które zdanie najlepiej wskazuje różnicę między siostrami z „Balladyny”?', o: ['Alina była łagodna i dobra, natomiast Balladyna — ambitna i bezwzględna.', 'Obie siostry zbierały maliny.', 'Obie były córkami wdowy.', 'Alina i Balladyna mieszkały w chacie.'], e: 'Pozostałe zdania mówią o podobieństwach.' },
        { l: 3, q: 'Jakie słowo zastąpi „ale” przy wskazywaniu różnicy w stylu pisemnym (…, ___ Balladyna…)?', t: ['natomiast', 'zaś', 'podczas gdy'], e: '„Alina była pracowita, natomiast Balladyna leniwa.”' }
      ] },
      { id: 'dramat-cechy', group: 'Semestr 2', name: 'Cechy utworów dramatycznych', questions: [
        { l: 1, q: 'Do czego przeznaczony jest dramat?', o: ['do wystawienia na scenie', 'wyłącznie do śpiewania', 'do czytania w gazecie', 'do opowiadania przez narratora'], e: 'Dramat pisze się z myślą o teatrze.' },
        { l: 1, q: 'Jak nazywają się wskazówki autora dotyczące scenografii i zachowania postaci?', t: ['didaskalia', 'tekst poboczny'], e: 'Didaskalia (tekst poboczny) zwykle zapisuje się kursywą lub w nawiasie.' },
        { l: 1, q: 'Kogo NIE ma w dramacie?', o: ['narratora', 'bohaterów', 'dialogów', 'akcji'], e: 'Akcję poznajemy z wypowiedzi postaci, bez narratora.' },
        { l: 2, q: 'Co to jest tekst główny dramatu?', o: ['wypowiedzi postaci: dialogi i monologi', 'wskazówki reżyserskie', 'spis treści', 'recenzja'], e: 'Tekst główny wypowiadają aktorzy na scenie.' },
        { l: 2, q: 'Na jakie części dzieli się dramat?', o: ['akty i sceny', 'rozdziały i strofy', 'wersy i rymy', 'księgi i pieśni'], e: 'Akty dzielą się na sceny.' },
        { l: 2, q: 'Wypowiedź jednej postaci, np. do samej siebie, to:', t: ['monolog'], e: 'Monolog to dłuższa wypowiedź jednej osoby; dialog — rozmowa co najmniej dwóch.' },
        { l: 3, q: 'Na czym polega zasada trzech jedności?', o: ['jedność czasu, miejsca i akcji', 'trzy akty i trzech bohaterów', 'trzy sceny w każdym akcie', 'trzech narratorów'], e: 'Zasada pochodzi z antyku; dramat romantyczny ją łamał.' },
        { l: 3, q: 'Jak nazywa się spis postaci na początku dramatu?', o: ['osoby dramatu', 'didaskalia', 'prolog', 'epilog'], e: '„Osoby” wymieniają wszystkich bohaterów przed tekstem.' },
        { l: 3, q: 'Czym komedia różni się od tragedii?', o: ['bawi i kończy się szczęśliwie', 'nie ma dialogów', 'jest zawsze krótsza', 'ma narratora'], e: 'Tragedia pokazuje nieuchronną klęskę bohatera, komedia wywołuje śmiech.' }
      ] },
      { id: 'synkretyczne', group: 'Semestr 2', name: 'Gatunki synkretyczne', questions: [
        { l: 1, q: 'Utwór synkretyczny to taki, który:', o: ['łączy cechy liryki, epiki i dramatu', 'jest tylko wierszem', 'ma tylko dialogi', 'nie ma bohaterów'], e: 'Synkretyzm to łączenie cech różnych rodzajów literackich.' },
        { l: 1, q: 'Który gatunek jest synkretyczny?', o: ['ballada', 'fraszka', 'sonet', 'bajka'], e: 'Ballada ma fabułę (epika), wersy i nastrój (liryka) oraz dialogi (dramat).' },
        { l: 1, q: 'Kto napisał „Ballady i romanse”?', t: ['adam mickiewicz', 'mickiewicz'], e: 'Tomik z 1822 r. rozpoczął romantyzm w Polsce.' },
        { l: 2, q: 'Jaką cechę epiki ma ballada?', o: ['fabułę — opowiadaną historię', 'rymy', 'dialogi', 'didaskalia'], e: 'W balladzie ktoś opowiada zdarzenia — to cecha epiki.' },
        { l: 2, q: 'Jaką cechę dramatu ma ballada?', o: ['dialogi postaci', 'narratora', 'wersy', 'strofy'], e: 'Postacie ballady często rozmawiają ze sobą.' },
        { l: 2, q: 'Który utwór zaczyna się słowami „Słuchaj, dzieweczko!”?', o: ['Romantyczność', 'Świtezianka', 'Lilije', 'Pan Tadeusz'], e: 'To początek ballady „Romantyczność” Mickiewicza.' },
        { l: 3, q: 'Jaki spór prowadzi ballada „Romantyczność”?', o: ['wiara i uczucie kontra rozum i nauka', 'szlachta kontra chłopi', 'młodzi kontra starzy', 'Polska kontra zaborcy'], e: 'Mickiewicz przeciwstawia „czucie i wiarę” (Karusia, lud) „szkiełku i oku” (Starzec).' },
        { l: 3, q: 'Który dramat z lektur klasy 7 ma cechy synkretyczne?', o: ['„Dziady” cz. II', '„Zemsta”', '„Latarnik”', '„Opowieść wigilijna”'], e: '„Dziady” cz. II łączą elementy liryczne (pieśni chóru), epickie i dramatyczne.' },
        { l: 3, q: 'Jaką cechę liryki ma ballada?', o: ['podmiot liryczny, wersy i nastrój (np. grozy)', 'podział na akty', 'narrator w prozie', 'argumentację'], e: 'Ballada jest pisana wierszem i buduje nastrój tajemniczości lub grozy.' }
      ] },
      { id: 'fonetyka', group: 'Semestr 2', name: 'Fonetyka: upodobnienia i uproszczenia', questions: [
        { l: 1, q: 'Jak wymawiamy słowo „chleb”?', o: ['[chlep]', '[chleb]', '[hleb]', '[chlef]'], e: 'Na końcu wyrazu spółgłoski dźwięczne tracą dźwięczność: b → p.' },
        { l: 1, q: 'Która spółgłoska jest dźwięczna?', o: ['b', 'p', 't', 'k'], e: 'Pary: b–p, d–t, g–k, w–f, z–s, ż–sz.' },
        { l: 1, q: 'Ile głosek jest w słowie „chata”?', t: ['4', 'cztery'], e: 'ch-a-t-a — „ch” to dwie litery, ale jedna głoska.' },
        { l: 2, q: 'Jak wymawiamy „ławka”?', o: ['[łafka]', '[ławka]', '[ławga]', '[łauka]'], e: 'Bezdźwięczne k ubezdźwięcznia poprzedzające w. To upodobnienie wsteczne.' },
        { l: 2, q: 'W słowie „kwiat” wymawiamy [kfiat]. Jakie to upodobnienie?', o: ['postępowe', 'wsteczne', 'uproszczenie grupy spółgłoskowej', 'nie ma upodobnienia'], e: 'Wcześniejsza głoska (k) wpływa na następną (w) — upodobnienie postępowe.' },
        { l: 2, q: 'Jak wymawiamy „jabłko”?', o: ['[japko]', '[jabłko]', '[jabko]', '[japłko]'], e: 'Ł zanika (uproszczenie grupy spółgłoskowej), a b ubezdźwięcznia się przed k.' },
        { l: 3, q: 'Upodobnienie wsteczne polega na tym, że:', o: ['głoska następna wpływa na poprzednią', 'głoska poprzednia wpływa na następną', 'znika jedna głoska', 'dodajemy samogłoskę'], e: 'Wstecz = od tyłu do przodu: w „babka” [bapka] k wpływa na b.' },
        { l: 3, q: 'Jak wymawiamy „przyjaciel”?', o: ['[pszyjaciel]', '[przyjaciel]', '[bżyjaciel]', '[pżyjaciel]'], e: 'Bezdźwięczne p ubezdźwięcznia rz → [sz]. To upodobnienie postępowe.' },
        { l: 3, q: 'Dlaczego w mowie powstają upodobnienia i uproszczenia?', o: ['ułatwiają i przyspieszają wymowę', 'są błędem ortograficznym', 'wymusza je pisownia', 'pochodzą z obcych języków'], e: 'To tzw. ekonomia mowy — mówimy łatwiej, ale piszemy zgodnie z ortografią.' }
      ] },
      { id: 'slowotworstwo', group: 'Semestr 2', name: 'Słowotwórstwo', questions: [
        { l: 1, q: 'Od jakiego wyrazu pochodzi „domek”?', t: ['dom'], e: 'Wyraz podstawowy: dom. Wyraz pochodny: domek.' },
        { l: 1, q: 'Jak nazywa się część wyrazu pochodnego, która tworzy nowe znaczenie (np. -ek, prze-)?', t: ['formant'], e: 'Formant może być przedrostkiem (prze-pisać) lub przyrostkiem (dom-ek).' },
        { l: 1, q: 'Wyrazy pochodzące od tego samego rdzenia to:', o: ['rodzina wyrazów', 'synonimy', 'antonimy', 'związek frazeologiczny'], e: 'Np. las, lasek, leśny, leśniczy, zalesić.' },
        { l: 2, q: 'Jaki formant ma wyraz „przepisać”?', o: ['przedrostek prze-', 'przyrostek -ać', 'przyrostek -sać', 'nie ma formantu'], e: 'Podstawa: pisać, formant: prze- (przedrostek).' },
        { l: 2, q: 'Jakie znaczenie ma formant -arz w wyrazach piekarz, kucharz?', o: ['wykonawca czynności', 'zdrobnienie', 'miejsce', 'cecha'], e: 'Piekarz — ten, kto piecze; kucharz — ten, kto gotuje.' },
        { l: 2, q: 'Jaki formant ma wyraz „nauczyciel”?', o: ['-ciel', 'na-', '-uczy-', 'nie ma formantu'], e: 'Nauczyciel — ten, kto naucza. Podstawa: naucz-, formant: -ciel (wykonawca czynności).' },
        { l: 3, q: 'Jak nazywa się wyraz powstały z połączenia dwóch wyrazów, np. „długopis”?', o: ['złożenie', 'zdrobnienie', 'zgrubienie', 'skrótowiec'], e: 'Wyrazy złożone: złożenia (długopis), zrosty (Wielkanoc), zestawienia (maszyna do pisania).' },
        { l: 3, q: 'Jaka oboczność występuje w parze „las — leśny”?', o: ['a : e oraz s : ś', 'l : ł', 'brak oboczności', 'n : ń'], e: 'Obocznością nazywamy wymianę głosek w rdzeniu tego samego wyrazu.' },
        { l: 3, q: 'Wpisz wyraz podstawowy dla „czytelnik”.', t: ['czytać'], e: 'Czytelnik — ten, kto czyta. Formant: -elnik.' }
      ] },
      { id: 'latarnik', group: 'Semestr 2', name: 'Lektura: Latarnik', questions: [
        { l: 1, q: 'Kto napisał „Latarnika”?', o: ['Henryk Sienkiewicz', 'Bolesław Prus', 'Adam Mickiewicz', 'Juliusz Słowacki'], e: 'Nowelę „Latarnik” Henryk Sienkiewicz napisał w 1880 r.' },
        { l: 1, q: 'Jak nazywał się latarnik?', t: ['skawiński', 'skawinski'], e: 'Skawiński — stary Polak, tułacz, który walczył w wielu krajach.' },
        { l: 1, q: 'Jakim gatunkiem jest „Latarnik”?', o: ['nowela', 'powieść', 'dramat', 'ballada'], e: 'Nowela ma jeden wątek, zwartą akcję i wyraźny punkt kulminacyjny.' },
        { l: 2, q: 'Gdzie znajdowała się latarnia?', o: ['w Aspinwall (Panama)', 'w Gdańsku', 'w Nowym Jorku', 'w Londynie'], e: 'Latarnia stała na skalistej wysepce przy Aspinwall w Ameryce Środkowej.' },
        { l: 2, q: 'Jaką książkę otrzymał Skawiński?', o: ['„Pana Tadeusza”', '„Zemstę”', '„Balladynę”', '„Krzyżaków”'], e: 'Paczka zawierała polskie książki, w tym „Pana Tadeusza” Mickiewicza.' },
        { l: 2, q: 'Dlaczego Skawiński stracił posadę?', o: ['zaczytany, nie zapalił wieczorem latarni', 'uciekł z latarni', 'pokłócił się z konsulem', 'zasnął na służbie po alkoholu'], e: 'Lektura przeniosła go myślami do ojczyzny i zapomniał o obowiązku.' },
        { l: 3, q: 'Czym jest „sokół” noweli (motyw zwrotny) w „Latarniku”?', o: ['książka — „Pan Tadeusz”', 'latarnia', 'statek', 'mewa'], e: 'Sokół to przedmiot lub motyw, który zmienia bieg akcji noweli.' },
        { l: 3, q: 'Jakie uczucie jest głównym tematem noweli?', o: ['tęsknota za ojczyzną', 'zazdrość', 'chciwość', 'zemsta'], e: 'Skawiński był wiecznym tułaczem — polska książka obudziła w nim tęsknotę.' },
        { l: 3, q: 'Dokąd udał się Skawiński po utracie posady?', o: ['statkiem do Nowego Jorku', 'do Polski', 'do Londynu', 'został w Aspinwall'], e: 'Wyruszył w dalszą tułaczkę, z książką przy piersi.' }
      ] },
      { id: 'mowa-zalezna', group: 'Semestr 2', name: 'Mowa zależna i niezależna', questions: [
        { l: 1, q: 'Mowa niezależna to:', o: ['dosłowne przytoczenie czyichś słów', 'streszczenie słów własnymi słowami', 'opis przyrody', 'zdanie pojedyncze'], e: 'Ola powiedziała: „Jestem zmęczona”. — to mowa niezależna.' },
        { l: 1, q: 'Jakiego znaku używamy przed mową niezależną?', o: ['dwukropka', 'średnika', 'wykrzyknika', 'nawiasu'], e: 'Po czasowniku mówienia stawiamy dwukropek i cudzysłów (lub myślnik w dialogu).' },
        { l: 1, q: 'Który spójnik najczęściej wprowadza mowę zależną w zdaniu oznajmującym?', t: ['że'], e: 'Ola powiedziała, że jest zmęczona.' },
        { l: 2, q: 'Przekształć na mowę zależną: Ola powiedziała: „Jestem zmęczona.”', o: ['Ola powiedziała, że jest zmęczona.', 'Ola powiedziała, że jestem zmęczona.', 'Ola powiedziała: jest zmęczona.', 'Ola powiedziała że jest zmęczona.'], e: 'Zmieniamy osobę (jestem → jest) i dodajemy przecinek przed „że”.' },
        { l: 2, q: 'Przekształć: Tomek zapytał mnie: „Czy idziesz do kina?”', o: ['Tomek zapytał mnie, czy idę do kina.', 'Tomek zapytał mnie, że idę do kina.', 'Tomek zapytał mnie, czy idziesz do kina?', 'Tomek zapytał mnie czy idę do kina.'], e: 'Pytanie → spójnik „czy”, zmiana osoby, na końcu kropka zamiast pytajnika.' },
        { l: 2, q: 'Przekształć rozkaz: Mama powiedziała do mnie: „Posprzątaj pokój!”', o: ['Mama kazała mi, żebym posprzątał pokój.', 'Mama powiedziała, że posprzątaj pokój.', 'Mama kazała mi posprzątaj pokój.', 'Mama powiedziała, czy posprzątam pokój.'], e: 'Rozkaz → „żeby/aby”, czasownik w trybie przypuszczającym.' },
        { l: 3, q: 'Przekształć na mowę niezależną: Kasia powiedziała, że jutro pojedzie do babci.', o: ['Kasia powiedziała: „Jutro pojadę do babci”.', 'Kasia powiedziała: „Jutro pojedzie do babci”.', 'Kasia powiedziała, „jutro pojadę do babci”.', 'Kasia: że jutro pojedzie do babci.'], e: 'W mowie niezależnej bohater mówi o sobie w 1. osobie: pojadę.' },
        { l: 3, q: 'Co zmienia się przy przekształcaniu mowy niezależnej w zależną?', o: ['osoby czasowników i zaimki, znaki interpunkcyjne', 'tylko wielkie litery', 'nic się nie zmienia', 'kolejność wszystkich słów na odwrotną'], e: 'Np. „mój” → „jego”, „idę” → „idzie”, znika cudzysłów.' },
        { l: 3, q: 'Uzupełnij mowę zależną: Piotr zapytał: „Kiedy wrócisz?” → Piotr zapytał, ___ wrócę. (jedno słowo)', t: ['kiedy'], e: 'Pytanie z zaimkiem pytającym zachowuje ten zaimek: Piotr zapytał, kiedy wrócę.' }
      ] },
      { id: 'oskar-i-pani-roza', group: 'Semestr 2', name: 'Lektura: Oskar i pani Róża', questions: [
        { l: 1, q: 'Kto napisał „Oskara i panią Różę”?', o: ['Éric-Emmanuel Schmitt', 'Charles Dickens', 'Antoine de Saint-Exupéry', 'Henryk Sienkiewicz'], e: 'Francuski pisarz Éric-Emmanuel Schmitt wydał książkę w 2002 r.' },
        { l: 1, q: 'Do kogo Oskar pisał listy?', o: ['do Pana Boga', 'do rodziców', 'do pani Róży', 'do Peggy Blue'], e: 'Pani Róża zaproponowała mu pisanie listów do Boga.' },
        { l: 1, q: 'Na jaką chorobę chorował Oskar?', t: ['białaczka', 'na białaczkę', 'białaczkę'], e: 'Dziesięcioletni Oskar leżał w szpitalu z powodu białaczki.' },
        { l: 2, q: 'Kim była pani Róża?', o: ['wolontariuszką w szpitalu', 'lekarką', 'babcią Oskara', 'nauczycielką'], e: 'Była jedną z „różowych pań” — wolontariuszek odwiedzających chore dzieci.' },
        { l: 2, q: 'Co zaproponowała Oskarowi pani Róża?', o: ['żeby każdy dzień traktował jak dziesięć lat życia', 'żeby uciekł ze szpitala', 'żeby przestał pisać listy', 'żeby unikał rodziców'], e: 'Dzięki tej grze Oskar w ciągu kilku dni „przeżył” całe życie.' },
        { l: 2, q: 'Jak miała na imię dziewczynka, którą pokochał Oskar?', t: ['peggy blue', 'peggy'], e: 'Peggy Blue miała chorobę serca i niebieskawą skórę.' },
        { l: 3, q: 'Za kogo podawała się pani Róża w opowieściach?', o: ['za dawną zapaśniczkę', 'za lekarkę', 'za królową', 'za pisarkę'], e: 'Opowiadała o walkach jako „Dusicielka z Langwedocji”, by rozśmieszyć i wzmocnić Oskara.' },
        { l: 3, q: 'Kto napisał ostatni list w książce?', o: ['pani Róża', 'Oskar', 'rodzice Oskara', 'Peggy Blue'], e: 'Po śmierci Oskara pani Róża napisała list do Boga.' },
        { l: 3, q: 'W jakiej formie napisana jest książka?', o: ['listów (forma epistolarna)', 'dramatu', 'wiersza', 'pamiętnika matki'], e: 'Cała historia składa się z listów Oskara.' }
      ] }
    ],
    8: [
      { id: 'pan-tadeusz', name: 'Pan Tadeusz', questions: [
        { l: 1, q: 'Kto napisał „Pana Tadeusza”?', t: ['adam mickiewicz', 'mickiewicz'], e: '„Pana Tadeusza” napisał Adam Mickiewicz na emigracji w Paryżu (wydany 1834).' },
        { l: 1, q: 'Jak zaczyna się „Pan Tadeusz”?', o: ['Litwo! Ojczyzno moja!', 'Słuchaj, dzieweczko!', 'Bogurodzica, dziewica', 'Jeszcze Polska nie zginęła'], e: 'Inwokacja zaczyna się od słów „Litwo! Ojczyzno moja! ty jesteś jak zdrowie”.' },
        { l: 1, q: 'Jak nazywa się dworek Sopliców?', t: ['soplicowo'], e: 'Akcja toczy się głównie w Soplicowie na Litwie.' },
        { l: 2, q: 'Kim naprawdę był ksiądz Robak?', o: ['Jackiem Soplicą, ojcem Tadeusza', 'Gerwazym', 'Hrabią', 'Stolnikiem Horeszką'], e: 'Ksiądz Robak to Jacek Soplica, który jako zakonnik odkupywał winę zabicia Stolnika.' },
        { l: 2, q: 'Ile ksiąg ma „Pan Tadeusz”?', t: ['12', 'dwanaście'], e: 'Epopeja ma 12 ksiąg.' },
        { l: 2, q: 'Kto dał słynny koncert na cymbałach?', o: ['Jankiel', 'Wojski', 'Gerwazy', 'Protazy'], e: 'Koncert Jankiela w księdze XII opowiada muzyką historię Polski.' },
        { l: 3, q: 'Kogo poślubił Tadeusz na końcu?', o: ['Zosię', 'Telimenę', 'Klarę', 'Oleńkę'], e: 'Tadeusz zaręcza się z Zosią, a z okazji zaręczyn uwłaszcza chłopów.' },
        { l: 3, q: 'Jaki to gatunek literacki?', o: ['epopeja', 'ballada', 'komedia', 'nowela'], e: '„Pan Tadeusz” to epopeja narodowa — długi utwór pokazujący życie całej społeczności.' },
        { l: 3, q: 'Kto trzymał klucz i pragnął zemsty na Soplicach?', t: ['gerwazy', 'gerwazy rębajło', 'klucznik'], e: 'Gerwazy Rębajło, klucznik Horeszków, chciał pomścić śmierć Stolnika.' }
      ] },
      { id: 'imieslowy', name: 'Imiesłowy', questions: [
        { l: 1, q: 'Który wyraz jest imiesłowem przymiotnikowym czynnym?', o: ['czytający', 'czytany', 'czytając', 'przeczytawszy'], e: 'Imiesłów przymiotnikowy czynny ma przyrostek -ący: czytający, śpiewający.' },
        { l: 1, q: 'Który wyraz jest imiesłowem przysłówkowym współczesnym?', o: ['idąc', 'idący', 'poszedłszy', 'pójście'], e: 'Imiesłów przysłówkowy współczesny kończy się na -ąc: idąc, czytając.' },
        { l: 1, q: 'Który wyraz jest imiesłowem przymiotnikowym biernym?', o: ['napisany', 'piszący', 'pisząc', 'napisawszy'], e: 'Imiesłów bierny ma przyrostki -ny, -ony, -ty: napisany, umyty.' },
        { l: 2, q: 'Jak piszemy: „nie” + „czytając”?', o: ['nie czytając (osobno)', 'nieczytając (razem)'], e: '„Nie” z imiesłowami przysłówkowymi piszemy osobno: nie czytając, nie wiedząc.' },
        { l: 2, q: 'Jak piszemy: „nie” + „umyty”?', o: ['nieumyty (razem)', 'nie umyty (osobno)'], e: '„Nie” z imiesłowami przymiotnikowymi piszemy łącznie: nieumyty, niepiszący.' },
        { l: 2, q: 'Utwórz imiesłów przysłówkowy uprzedni od „przeczytać”.', t: ['przeczytawszy'], e: 'Imiesłów uprzedni ma przyrostek -wszy lub -łszy: przeczytawszy, zjadłszy.' },
        { l: 3, q: 'Które zdanie jest błędne?', o: ['Idąc do szkoły, padał deszcz.', 'Idąc do szkoły, spotkałem kolegę.', 'Czytając książkę, jadłem jabłko.', 'Wróciwszy do domu, zjadłem obiad.'], e: 'Imiesłów przysłówkowy musi dotyczyć wykonawcy czynności. Deszcz nie szedł do szkoły!' },
        { l: 3, q: 'Utwórz imiesłów przymiotnikowy czynny od „śpiewać”.', t: ['śpiewający'], e: 'Od 3 os. l. mn. „śpiewają” + -cy: śpiewający.' },
        { l: 3, q: 'Od jakich czasowników NIE utworzymy imiesłowu biernego?', o: ['nieprzechodnich, np. spać', 'przechodnich, np. pisać', 'dokonanych, np. zrobić', 'wszystkich można'], e: 'Imiesłów bierny tworzymy tylko od czasowników przechodnich (z dopełnieniem w bierniku). Nie ma „spany”.' }
      ] }
    ]
  }
});
