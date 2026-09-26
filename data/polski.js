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
      { id: 'zdania-zlozone', name: 'Zdania złożone', questions: [
        { l: 1, q: 'Zdanie złożone ma:', o: ['co najmniej dwa orzeczenia', 'tylko jedno orzeczenie', 'brak orzeczenia', 'co najmniej dwa podmioty'], e: 'Każde zdanie składowe ma swoje orzeczenie, więc zdanie złożone ma ich co najmniej dwa.' },
        { l: 1, q: 'Zdanie „Padał deszcz, więc zostaliśmy w domu” jest:', o: ['złożone współrzędnie', 'złożone podrzędnie', 'pojedyncze', 'równoważnikiem zdania'], e: '„Więc” to spójnik zdania współrzędnego wynikowego — oba zdania są równorzędne.' },
        { l: 1, q: 'Zdanie „Wiem, że masz rację” jest:', o: ['złożone podrzędnie', 'złożone współrzędnie', 'pojedyncze', 'równoważnikiem zdania'], e: 'Wiem co? — że masz rację. Jedno zdanie zależy od drugiego, więc to zdanie podrzędne.' },
        { l: 2, q: 'Jaki to rodzaj zdania współrzędnego: „Lubię czytać, ale nie lubię pisać”?', o: ['przeciwstawne', 'łączne', 'rozłączne', 'wynikowe'], e: 'Spójnik „ale” wprowadza przeciwstawienie — to zdanie przeciwstawne.' },
        { l: 2, q: 'Jaki to rodzaj zdania współrzędnego: „Pójdziesz do kina albo zostaniesz w domu”?', o: ['rozłączne', 'łączne', 'przeciwstawne', 'wynikowe'], e: 'Spójnik „albo” oznacza wybór jednej możliwości — to zdanie rozłączne.' },
        { l: 2, q: 'Przed którym spójnikiem ZAWSZE stawiamy przecinek?', o: ['ale', 'i', 'lub', 'albo'], e: 'Przed „ale”, „lecz”, „więc”, „że”, „bo” zawsze stawiamy przecinek. Przed pojedynczym „i”, „lub”, „albo” — zwykle nie.' },
        { l: 3, q: 'Jakie to zdanie podrzędne: „Wrócę, gdy skończy się lekcja”?', o: ['okolicznikowe czasu', 'przydawkowe', 'dopełnieniowe', 'podmiotowe'], e: 'Wrócę kiedy? — gdy skończy się lekcja. Pytanie „kiedy?” wskazuje okolicznik czasu.' },
        { l: 3, q: 'Jakie to zdanie podrzędne: „Książka, którą czytam, jest ciekawa”?', o: ['przydawkowe', 'okolicznikowe miejsca', 'orzecznikowe', 'dopełnieniowe'], e: 'Która książka? — którą czytam. Zdanie określa rzeczownik, więc jest przydawkowe.' },
        { l: 3, q: 'Ile zdań składowych jest w: „Kiedy wróciłem, mama gotowała, a tata czytał gazetę”?', t: ['3', 'trzy'], e: 'Orzeczenia: wróciłem, gotowała, czytał — trzy zdania składowe.' }
      ] },
      { id: 'lektury-7', name: 'Lektury: Ballady i Zemsta', questions: [
        { l: 1, q: 'Kto napisał „Zemstę”?', o: ['Aleksander Fredro', 'Adam Mickiewicz', 'Juliusz Słowacki', 'Henryk Sienkiewicz'], e: '„Zemstę” napisał Aleksander Fredro — to komedia.' },
        { l: 1, q: 'Kto napisał „Ballady i romanse”?', t: ['adam mickiewicz', 'mickiewicz'], e: 'Tomik „Ballady i romanse” Adama Mickiewicza wydany w 1822 roku rozpoczął romantyzm w Polsce.' },
        { l: 1, q: 'O co kłócili się Cześnik i Rejent w „Zemście”?', o: ['o mur graniczny', 'o konia', 'o pieniądze', 'o tron'], e: 'Spór dotyczył muru dzielącego zamek, w którym mieszkali obaj sąsiedzi.' },
        { l: 2, q: 'Jak nazywał się tchórzliwy i przechwalający się bohater „Zemsty”?', t: ['papkin'], e: 'Papkin to samochwała i tchórz, najbardziej komiczna postać „Zemsty”.' },
        { l: 2, q: 'Jaki gatunek literacki łączy cechy liryki, epiki i dramatu?', o: ['ballada', 'fraszka', 'bajka', 'nowela'], e: 'Ballada ma cechy wszystkich trzech rodzajów literackich — to gatunek synkretyczny.' },
        { l: 2, q: 'Który utwór rozpoczyna się słowami „Słuchaj, dzieweczko!”?', o: ['Romantyczność', 'Świtezianka', 'Lilije', 'Pan Tadeusz'], e: 'To początek ballady „Romantyczność” Adama Mickiewicza.' },
        { l: 3, q: 'Jak nazywa się Rejent w „Zemście”?', o: ['Milczek', 'Raptusiewicz', 'Papkin', 'Dyndalski'], e: 'Rejent Milczek był przeciwnikiem Cześnika Raptusiewicza.' },
        { l: 3, q: 'Jak kończy się „Zemsta”?', o: ['ślubem Wacława i Klary oraz pogodzeniem się', 'pojedynkiem Cześnika i Rejenta', 'śmiercią Papkina', 'zburzeniem muru'], e: 'Kłótnia kończy się zgodą: Wacław żeni się z Klarą, a Cześnik i Rejent się godzą.' },
        { l: 3, q: 'Który spór prowadzi ballada „Romantyczność”?', o: ['wiara i uczucie kontra rozum i nauka', 'szlachta kontra chłopi', 'młodzi kontra starzy', 'Polska kontra zaborcy'], e: 'Mickiewicz przeciwstawia „czucie i wiarę” (lud, Karusia) „szkiełku i oku” (Starzec, rozum).' }
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
