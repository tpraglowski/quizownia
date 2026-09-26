// Przyroda (kl. 4), biologia i geografia (kl. 5–8). Format pytań jak w polski.js.
SUBJECTS.push({
  id: 'przyroda', name: 'Przyroda', emoji: '🌿', color: '#2a9d8f',
  grades: {
    4: [
      { id: 'kierunki', name: 'Kierunki i mapa', questions: [
        { l: 1, q: 'Po której stronie nieba wschodzi Słońce?', o: ['na wschodzie', 'na zachodzie', 'na północy', 'na południu'], e: 'Słońce wschodzi na wschodzie, a zachodzi na zachodzie.' },
        { l: 1, q: 'Jakim przyrządem wyznaczamy kierunki?', t: ['kompas', 'kompasem', 'busola', 'busolą'], e: 'Igła magnetyczna kompasu wskazuje północ.' },
        { l: 1, q: 'W którą stronę wskazuje igła kompasu?', o: ['na północ', 'na południe', 'na wschód', 'na zachód'], e: 'Namagnesowana igła ustawia się w kierunku północ–południe, jej zaznaczony koniec wskazuje północ.' },
        { l: 2, q: 'Jak nazywa się rysunek pokazujący kierunki świata?', t: ['róża wiatrów'], e: 'Róża wiatrów pokazuje kierunki główne (N, S, E, W) i pośrednie.' },
        { l: 2, q: 'Jaki kierunek leży pomiędzy północą a wschodem?', o: ['północny wschód', 'południowy wschód', 'północny zachód', 'południowy zachód'], e: 'Kierunek pośredni między N i E to NE — północny wschód.' },
        { l: 2, q: 'Gdzie jest Słońce w południe (w Polsce)?', o: ['na południu', 'na północy', 'na wschodzie', 'na zachodzie'], e: 'W Polsce w południe Słońce jest najwyżej, po stronie południowej nieba.' },
        { l: 3, q: 'Na planie skala 1:100 oznacza, że 1 cm na planie to w terenie:', o: ['1 m', '100 m', '1 km', '10 cm'], e: '1 cm · 100 = 100 cm = 1 m.' },
        { l: 3, q: 'Jak wyznaczysz północ w południe za pomocą cienia?', o: ['cień wskazuje północ', 'cień wskazuje południe', 'cień wskazuje wschód', 'cienia nie ma w południe'], e: 'W południe Słońce jest na południu, więc cień pada na północ.' },
        { l: 3, q: 'Jak na mapie oznacza się kolorem niebieskim?', o: ['wody: rzeki, jeziora, morza', 'lasy', 'góry', 'drogi'], e: 'Kolor niebieski na mapie to wody.' }
      ] },
      { id: 'woda-pogoda', name: 'Woda i pogoda', questions: [
        { l: 1, q: 'W jakiej temperaturze zamarza woda?', o: ['0°C', '10°C', '−10°C', '100°C'], e: 'Woda zamarza w 0°C, a wrze w 100°C.' },
        { l: 1, q: 'Jakim przyrządem mierzymy temperaturę?', t: ['termometr', 'termometrem'], e: 'Temperaturę mierzymy termometrem.' },
        { l: 1, q: 'Woda występuje w trzech stanach. Który to stan gazowy?', o: ['para wodna', 'lód', 'woda w rzece', 'śnieg'], e: 'Stany skupienia: stały (lód), ciekły (woda), gazowy (para wodna).' },
        { l: 2, q: 'Jak nazywa się przejście wody w parę wodną?', o: ['parowanie', 'skraplanie', 'krzepnięcie', 'topnienie'], e: 'Parowanie: ciecz → gaz.' },
        { l: 2, q: 'Jak nazywa się przejście lodu w wodę?', t: ['topnienie', 'topnienie się'], e: 'Topnienie: ciało stałe → ciecz.' },
        { l: 2, q: 'Jakim przyrządem mierzy się ilość opadów?', o: ['deszczomierzem', 'barometrem', 'wiatromierzem', 'termometrem'], e: 'Deszczomierz mierzy opady, barometr — ciśnienie, wiatromierz — wiatr.' },
        { l: 3, q: 'Jak nazywa się przejście pary wodnej w ciecz (np. rosa na trawie)?', t: ['skraplanie', 'kondensacja', 'skraplanie się'], e: 'Skraplanie: gaz → ciecz. Tak powstaje rosa i chmury.' },
        { l: 3, q: 'Jak nazywa się obieg wody w przyrodzie napędzany przez Słońce?', o: ['obieg wody (cykl hydrologiczny)', 'fotosynteza', 'erozja', 'krzepnięcie'], e: 'Woda paruje, skrapla się w chmurach, spada jako opad i wraca do rzek i mórz.' },
        { l: 3, q: 'Jakim przyrządem mierzy się ciśnienie atmosferyczne?', o: ['barometrem', 'termometrem', 'deszczomierzem', 'kompasem'], e: 'Ciśnienie mierzy barometr (w hektopaskalach, hPa).' }
      ] }
    ]
  }
});

SUBJECTS.push({
  id: 'biologia', name: 'Biologia', emoji: '🧬', color: '#66bf39',
  grades: {
    5: [
      { id: 'komorka', name: 'Komórka i organizmy', questions: [
        { l: 1, q: 'Podstawowa jednostka budowy organizmu to:', t: ['komórka'], e: 'Wszystkie organizmy zbudowane są z komórek.' },
        { l: 1, q: 'Która część komórki kieruje jej pracą?', o: ['jądro komórkowe', 'ściana komórkowa', 'wakuola', 'chloroplast'], e: 'Jądro zawiera DNA i kieruje życiem komórki.' },
        { l: 1, q: 'Gdzie w komórce roślinnej zachodzi fotosynteza?', o: ['w chloroplastach', 'w jądrze', 'w mitochondriach', 'w ścianie komórkowej'], e: 'Chloroplasty zawierają zielony barwnik — chlorofil.' },
        { l: 2, q: 'Które elementy ma komórka roślinna, a nie ma zwierzęca?', o: ['ściana komórkowa i chloroplasty', 'jądro i błona', 'mitochondria i cytoplazma', 'błona komórkowa'], e: 'Tylko komórki roślinne mają ścianę komórkową i chloroplasty.' },
        { l: 2, q: 'Jak nazywa się część komórki, w której zachodzi oddychanie (wytwarzanie energii)?', t: ['mitochondrium', 'mitochondria'], e: 'Mitochondria to „elektrownie” komórki.' },
        { l: 2, q: 'Jakim przyrządem oglądamy komórki?', o: ['mikroskopem', 'teleskopem', 'lupą', 'barometrem'], e: 'Komórki są zwykle za małe, by zobaczyć je gołym okiem — potrzebny mikroskop.' },
        { l: 3, q: 'Bakterie nie mają:', o: ['jądra komórkowego', 'błony komórkowej', 'cytoplazmy', 'materiału genetycznego'], e: 'Bakterie są organizmami bezjądrowymi — ich DNA leży swobodnie w cytoplazmie.' },
        { l: 3, q: 'Jak nazywa się proces, w którym rośliny wytwarzają glukozę z wody i dwutlenku węgla?', t: ['fotosynteza'], e: 'Fotosynteza: dwutlenek węgla + woda + światło → glukoza + tlen.' },
        { l: 3, q: 'Grzyby odżywiają się:', o: ['cudzożywnie', 'samożywnie, jak rośliny', 'tylko światłem', 'wyłącznie wodą'], e: 'Grzyby nie mają chlorofilu i nie przeprowadzają fotosyntezy — pobierają gotowe pokarmy.' }
      ] },
      { id: 'rosliny', name: 'Rośliny', questions: [
        { l: 1, q: 'Która część rośliny pobiera wodę z gleby?', o: ['korzeń', 'liść', 'kwiat', 'łodyga'], e: 'Korzeń pobiera wodę z solami mineralnymi i utrzymuje roślinę w glebie.' },
        { l: 1, q: 'Jaki gaz wydzielają rośliny podczas fotosyntezy?', t: ['tlen'], e: 'Rośliny wydzielają tlen, a pobierają dwutlenek węgla.' },
        { l: 1, q: 'Która roślina jest drzewem iglastym?', o: ['sosna', 'dąb', 'brzoza', 'lipa'], e: 'Sosna to roślina nagonasienna (iglasta). Dąb, brzoza i lipa są liściaste.' },
        { l: 2, q: 'Które rośliny rozmnażają się przez zarodniki, nie przez nasiona?', o: ['mchy i paprocie', 'drzewa owocowe', 'zboża', 'sosny i świerki'], e: 'Mchy i paprotniki nie wytwarzają nasion — rozmnażają się przez zarodniki.' },
        { l: 2, q: 'Jak nazywa się przeniesienie pyłku na znamię słupka?', t: ['zapylenie', 'zapylanie'], e: 'Zapylenie może odbywać się dzięki owadom lub wiatrowi.' },
        { l: 2, q: 'Rośliny okrytonasienne mają nasiona ukryte w:', o: ['owocu', 'szyszce', 'zarodni', 'korzeniu'], e: 'U okrytonasiennych nasiona są w owocu, u nagonasiennych — np. w szyszkach.' },
        { l: 3, q: 'Przez jakie otwory w liściu roślina wymienia gazy?', o: ['aparaty szparkowe', 'włośniki', 'słoje', 'pąki'], e: 'Aparaty szparkowe (szparki) wpuszczają CO₂ i wypuszczają tlen i parę wodną.' },
        { l: 3, q: 'Jak nazywa się tkanka przewodząca wodę od korzeni do liści?', o: ['drewno', 'łyko', 'skórka', 'miękisz'], e: 'Drewno przewodzi wodę w górę, łyko rozprowadza produkty fotosyntezy.' },
        { l: 3, q: 'Które rośliny nie mają prawdziwych korzeni, tylko chwytniki?', t: ['mchy', 'mech'], e: 'Mchy mają chwytniki, które przytwierdzają je do podłoża.' }
      ] }
    ],
    6: [
      { id: 'bezkregowce', name: 'Bezkręgowce', questions: [
        { l: 1, q: 'Ile nóg ma owad?', t: ['6', 'sześć'], e: 'Owady mają 6 nóg i ciało z trzech części: głowa, tułów, odwłok.' },
        { l: 1, q: 'Ile nóg ma pająk?', t: ['8', 'osiem'], e: 'Pajęczaki mają 8 nóg.' },
        { l: 1, q: 'Które zwierzę jest owadem?', o: ['mrówka', 'pająk', 'ślimak', 'dżdżownica'], e: 'Mrówka ma 6 nóg. Pająk to pajęczak, ślimak — mięczak, dżdżownica — pierścienica.' },
        { l: 2, q: 'Do jakiej grupy należy ślimak?', o: ['mięczaki', 'owady', 'pierścienice', 'skorupiaki'], e: 'Ślimaki, małże i głowonogi to mięczaki.' },
        { l: 2, q: 'Do jakiej grupy należy rak?', o: ['skorupiaki', 'owady', 'pajęczaki', 'mięczaki'], e: 'Raki, kraby i krewetki to skorupiaki.' },
        { l: 2, q: 'Jak nazywa się przemiana: jajo → larwa → poczwarka → dorosły owad?', o: ['przeobrażenie zupełne', 'przeobrażenie niezupełne', 'podział komórki', 'pączkowanie'], e: 'Tak rozwija się np. motyl — to przeobrażenie zupełne (z poczwarką).' },
        { l: 3, q: 'Do jakiej grupy należy meduza?', o: ['parzydełkowce', 'mięczaki', 'gąbki', 'skorupiaki'], e: 'Meduzy, stułbie i koralowce to parzydełkowce.' },
        { l: 3, q: 'Jak nazywa się pierścienica spulchniająca glebę?', t: ['dżdżownica'], e: 'Dżdżownica drąży korytarze i napowietrza glebę.' },
        { l: 3, q: 'Co to jest tasiemiec?', o: ['płaziniec pasożyt jelita', 'owad latający', 'mięczak morski', 'skorupiak słodkowodny'], e: 'Tasiemiec to płaziniec żyjący jako pasożyt w jelicie.' }
      ] },
      { id: 'kregowce', name: 'Kręgowce', questions: [
        { l: 1, q: 'Czym oddychają ryby?', t: ['skrzela', 'skrzelami'], e: 'Ryby pobierają tlen z wody przez skrzela.' },
        { l: 1, q: 'Które zwierzę jest ssakiem?', o: ['delfin', 'rekin', 'żaba', 'krokodyl'], e: 'Delfin karmi młode mlekiem — to ssak. Rekin to ryba.' },
        { l: 1, q: 'Które zwierzęta mają pióra?', o: ['ptaki', 'gady', 'płazy', 'ssaki'], e: 'Tylko ptaki mają pióra.' },
        { l: 2, q: 'Jak nazywa się larwa żaby?', t: ['kijanka'], e: 'Z jaj żaby wylęgają się kijanki, które przechodzą przeobrażenie.' },
        { l: 2, q: 'Które kręgowce są stałocieplne?', o: ['ptaki i ssaki', 'ryby i płazy', 'gady i płazy', 'wszystkie'], e: 'Tylko ptaki i ssaki utrzymują stałą temperaturę ciała.' },
        { l: 2, q: 'Do jakiej grupy należy jaszczurka?', o: ['gady', 'płazy', 'ssaki', 'ryby'], e: 'Jaszczurka ma suchą skórę pokrytą łuskami — to gad.' },
        { l: 3, q: 'Który ssak potrafi latać?', o: ['nietoperz', 'wiewiórka', 'kret', 'jeż'], e: 'Nietoperz to jedyny ssak zdolny do aktywnego lotu.' },
        { l: 3, q: 'Dlaczego płazy mają wilgotną skórę?', o: ['oddychają też przez skórę', 'żeby się nie przegrzać', 'żeby pływać szybciej', 'żeby odstraszać wrogów'], e: 'Płazy wchłaniają tlen także przez cienką, wilgotną skórę.' },
        { l: 3, q: 'Który ssak składa jaja?', o: ['dziobak', 'kangur', 'wieloryb', 'koala'], e: 'Dziobak to stekowiec — ssak składający jaja.' }
      ] }
    ],
    7: [
      { id: 'krazenie-oddychanie', name: 'Krążenie i oddychanie', questions: [
        { l: 1, q: 'Który narząd pompuje krew?', t: ['serce'], e: 'Serce to mięsień pompujący krew do całego ciała.' },
        { l: 1, q: 'Jaki gaz pobieramy przy wdechu?', o: ['tlen', 'dwutlenek węgla', 'azot', 'wodór'], e: 'Pobieramy tlen, a wydychamy więcej dwutlenku węgla.' },
        { l: 1, q: 'W jakim narządzie zachodzi wymiana gazowa?', o: ['w płucach', 'w sercu', 'w żołądku', 'w wątrobie'], e: 'W pęcherzykach płucnych tlen przechodzi do krwi.' },
        { l: 2, q: 'Ile jam (komór i przedsionków razem) ma serce człowieka?', t: ['4', 'cztery'], e: 'Serce ma 2 przedsionki i 2 komory.' },
        { l: 2, q: 'Które naczynia wynoszą krew z serca?', o: ['tętnice', 'żyły', 'naczynia włosowate', 'nerwy'], e: 'Tętnice wynoszą krew z serca, żyły wprowadzają ją do serca.' },
        { l: 2, q: 'Które krwinki przenoszą tlen?', o: ['czerwone (erytrocyty)', 'białe (leukocyty)', 'płytki krwi', 'osocze'], e: 'Erytrocyty zawierają hemoglobinę, która wiąże tlen.' },
        { l: 3, q: 'Jak nazywa się mięsień oddzielający klatkę piersiową od jamy brzusznej?', t: ['przepona'], e: 'Skurcz przepony powoduje wdech.' },
        { l: 3, q: 'Za co odpowiadają płytki krwi?', o: ['krzepnięcie krwi', 'transport tlenu', 'walkę z bakteriami', 'trawienie'], e: 'Płytki krwi (trombocyty) tamują krwawienie.' },
        { l: 3, q: 'Która komora serca pompuje krew do całego ciała?', o: ['lewa', 'prawa', 'obie po równo', 'żadna — robią to przedsionki'], e: 'Lewa komora ma najgrubszą ścianę i tłoczy krew do aorty.' }
      ] },
      { id: 'trawienie', name: 'Trawienie i odżywianie', questions: [
        { l: 1, q: 'Gdzie zaczyna się trawienie?', o: ['w jamie ustnej', 'w żołądku', 'w jelicie grubym', 'w wątrobie'], e: 'Już w ustach ślina zaczyna trawić skrobię.' },
        { l: 1, q: 'Który składnik pokarmu jest głównym budulcem ciała?', o: ['białka', 'cukry', 'tłuszcze', 'woda'], e: 'Białka budują mięśnie i inne tkanki.' },
        { l: 1, q: 'Jak nazywa się przewód łączący gardło z żołądkiem?', t: ['przełyk'], e: 'Przełyk przesuwa pokarm do żołądka.' },
        { l: 2, q: 'Gdzie wchłania się najwięcej składników pokarmowych?', o: ['w jelicie cienkim', 'w żołądku', 'w jelicie grubym', 'w przełyku'], e: 'Jelito cienkie ma kosmki jelitowe, przez które składniki trafiają do krwi.' },
        { l: 2, q: 'Który narząd wytwarza żółć?', t: ['wątroba'], e: 'Żółć z wątroby rozdrabnia tłuszcze.' },
        { l: 2, q: 'Brak witaminy D u dzieci może powodować:', o: ['krzywicę', 'szkorbut', 'kurzą ślepotę', 'anemię'], e: 'Witamina D jest potrzebna do budowy kości.' },
        { l: 3, q: 'Jak nazywa się enzym w ślinie trawiący skrobię?', o: ['amylaza', 'pepsyna', 'lipaza', 'insulina'], e: 'Amylaza ślinowa rozkłada skrobię.' },
        { l: 3, q: 'Brak której witaminy powoduje szkorbut?', t: ['c', 'witamina c', 'witaminy c'], e: 'Witamina C — jej źródłem są m.in. owoce cytrusowe i papryka.' },
        { l: 3, q: 'Jaką rolę pełni jelito grube?', o: ['wchłania wodę i formuje kał', 'trawi białka', 'wytwarza żółć', 'rozkłada skrobię'], e: 'W jelicie grubym wchłania się woda, a żyjące tam bakterie wytwarzają niektóre witaminy.' }
      ] }
    ],
    8: [
      { id: 'genetyka', name: 'Genetyka', questions: [
        { l: 1, q: 'Skrót nośnika informacji genetycznej to:', t: ['dna'], e: 'DNA — kwas deoksyrybonukleinowy.' },
        { l: 1, q: 'Ile chromosomów ma komórka ciała człowieka?', o: ['46', '23', '48', '44'], e: 'Człowiek ma 46 chromosomów (23 pary).' },
        { l: 1, q: 'Odcinek DNA niosący informację o jednej cesze to:', o: ['gen', 'chromosom', 'komórka', 'białko'], e: 'Gen zawiera informację o budowie jednego białka (cechy).' },
        { l: 2, q: 'Ile chromosomów ma komórka jajowa lub plemnik?', t: ['23', 'dwadzieścia trzy'], e: 'Gamety mają połowę chromosomów — 23.' },
        { l: 2, q: 'Jak nazywa się podział komórki, w wyniku którego powstają gamety?', o: ['mejoza', 'mitoza', 'fotosynteza', 'mutacja'], e: 'Mejoza zmniejsza liczbę chromosomów o połowę.' },
        { l: 2, q: 'Allel, który ujawnia się zawsze, gdy jest obecny, to allel:', o: ['dominujący', 'recesywny', 'mutacyjny', 'płciowy'], e: 'Allel dominujący (A) „przykrywa” recesywny (a).' },
        { l: 3, q: 'Jaki jest układ chromosomów płci u mężczyzny?', t: ['xy'], e: 'Mężczyzna: XY, kobieta: XX.' },
        { l: 3, q: 'Rodzice mają genotypy Aa i Aa. Jaka część dzieci może mieć cechę recesywną (aa)?', o: ['1/4', '1/2', '3/4', 'żadne'], e: 'Krzyżówka Aa × Aa: AA, Aa, Aa, aa — tylko 1 z 4 to aa.' },
        { l: 3, q: 'Trwała zmiana w materiale genetycznym to:', t: ['mutacja'], e: 'Mutacje mogą być szkodliwe, obojętne lub korzystne.' }
      ] },
      { id: 'ekologia', name: 'Ekologia', questions: [
        { l: 1, q: 'Kto w łańcuchu pokarmowym wytwarza pokarm z energii słonecznej?', o: ['producenci (rośliny)', 'konsumenci', 'destruenci', 'drapieżniki'], e: 'Producenci to organizmy samożywne, głównie rośliny.' },
        { l: 1, q: 'Kto rozkłada martwe szczątki organizmów?', o: ['destruenci (np. bakterie, grzyby)', 'producenci', 'roślinożercy', 'drapieżniki'], e: 'Destruenci zamieniają martwą materię w związki mineralne.' },
        { l: 1, q: 'Uzupełnij łańcuch: trawa → zając → ?', o: ['lis', 'dżdżownica', 'mysz', 'grzyb'], e: 'Lis zjada zająca — to konsument II rzędu.' },
        { l: 2, q: 'Jak nazywa się zależność, w której oba organizmy korzystają?', o: ['mutualizm (symbioza)', 'pasożytnictwo', 'drapieżnictwo', 'konkurencja'], e: 'Np. porost: grzyb i glon wzajemnie sobie pomagają.' },
        { l: 2, q: 'Kleszcz żywiący się krwią psa to przykład:', t: ['pasożytnictwa', 'pasożytnictwo', 'pasożyt'], e: 'Pasożyt korzysta, a żywiciel traci.' },
        { l: 2, q: 'Zespół organizmów wszystkich gatunków na danym terenie to:', o: ['biocenoza', 'populacja', 'biotop', 'gatunek'], e: 'Biocenoza — wszystkie populacje; biotop — nieożywione środowisko.' },
        { l: 3, q: 'Osobniki jednego gatunku żyjące na danym terenie to:', t: ['populacja'], e: 'Populacja to grupa osobników tego samego gatunku w jednym miejscu.' },
        { l: 3, q: 'Biocenoza + biotop razem tworzą:', o: ['ekosystem', 'populację', 'łańcuch pokarmowy', 'niszę'], e: 'Ekosystem to organizmy żywe razem z ich środowiskiem.' },
        { l: 3, q: 'Dlaczego w łańcuchu pokarmowym jest zwykle mało drapieżników szczytowych?', o: ['na każdym poziomie traci się dużo energii', 'drapieżniki szybko się męczą', 'rośliny je zjadają', 'mają za dużo młodych'], e: 'Na wyższy poziom przechodzi tylko ok. 10% energii, więc drapieżników może być niewiele.' }
      ] }
    ]
  }
});

SUBJECTS.push({
  id: 'geografia', name: 'Geografia', emoji: '🌍', color: '#d89e00',
  grades: {
    5: [
      { id: 'mapa', name: 'Mapa i skala', questions: [
        { l: 1, q: 'Jak nazywa się linia dzieląca Ziemię na półkulę północną i południową?', t: ['równik'], e: 'Równik ma szerokość geograficzną 0°.' },
        { l: 1, q: 'Skala 1:100 000 oznacza, że 1 cm na mapie to:', o: ['1 km', '100 m', '10 km', '100 km'], e: '100 000 cm = 1000 m = 1 km.' },
        { l: 1, q: 'Kolor zielony na mapie hipsometrycznej oznacza:', o: ['niziny', 'góry', 'morza', 'lasy'], e: 'Na mapie hipsometrycznej zielony to niziny, żółty i brązowy — wyżyny i góry.' },
        { l: 2, q: 'Linie łączące punkty o tej samej wysokości to:', t: ['poziomice', 'poziomica', 'izohipsy'], e: 'Poziomice (izohipsy) pokazują ukształtowanie terenu.' },
        { l: 2, q: 'Przez jakie miasto przebiega południk zerowy?', o: ['Londyn (Greenwich)', 'Paryż', 'Rzym', 'Warszawa'], e: 'Południk zerowy przechodzi przez obserwatorium w Greenwich w Londynie.' },
        { l: 2, q: 'Gęste poziomice na mapie oznaczają:', o: ['strome zbocze', 'łagodne zbocze', 'płaski teren', 'jezioro'], e: 'Im bliżej siebie poziomice, tym bardziej stromy teren.' },
        { l: 3, q: 'Odległość na mapie w skali 1:50 000 wynosi 4 cm. Ile km to w terenie?', t: ['2', '2 km'], e: '4 cm · 50 000 = 200 000 cm = 2 km.' },
        { l: 3, q: 'Która mapa jest bardziej szczegółowa?', o: ['1:10 000', '1:1 000 000', '1:500 000', 'wszystkie tak samo'], e: 'Im mniejszy mianownik skali, tym większa skala i więcej szczegółów.' },
        { l: 3, q: 'Wysokość bezwzględna to wysokość mierzona od:', o: ['poziomu morza', 'podnóża góry', 'najbliższej rzeki', 'środka Ziemi'], e: 'Wysokość bezwzględną podajemy w m n.p.m. (nad poziomem morza).' }
      ] },
      { id: 'krajobrazy-swiata', name: 'Krajobrazy świata', questions: [
        { l: 1, q: 'Jaka jest największa gorąca pustynia świata?', t: ['sahara'], e: 'Sahara w północnej Afryce.' },
        { l: 1, q: 'Gdzie występuje wilgotny las równikowy?', o: ['w pobliżu równika', 'za kołem podbiegunowym', 'w Polsce', 'na Antarktydzie'], e: 'Lasy równikowe rosną tam, gdzie jest gorąco i wilgotno przez cały rok.' },
        { l: 1, q: 'Które zwierzę żyje na sawannie?', o: ['żyrafa', 'pingwin', 'niedźwiedź polarny', 'renifer'], e: 'Sawanna to trawiasty krajobraz z drzewami — żyją tam żyrafy, lwy, zebry.' },
        { l: 2, q: 'Jak nazywa się krajobraz z mchami i porostami za kołem podbiegunowym?', t: ['tundra'], e: 'W tundrze jest zimno, a grunt jest stale zamarznięty (wieczna zmarzlina).' },
        { l: 2, q: 'Jak nazywa się las iglasty strefy umiarkowanej chłodnej?', o: ['tajga', 'dżungla', 'sawanna', 'step'], e: 'Tajga — rozległe lasy iglaste w Rosji, Kanadzie, Skandynawii.' },
        { l: 2, q: 'Jaki krajobraz pokrywa lodowiec kontynentalny?', o: ['Antarktyda', 'Sahara', 'Amazonia', 'Syberia'], e: 'Antarktyda jest prawie cała pokryta lądolodem.' },
        { l: 3, q: 'Jak nazywa się pora w klimacie sawanny, gdy pada najwięcej deszczu?', o: ['pora deszczowa', 'pora sucha', 'zima polarna', 'monsun zimowy'], e: 'Na sawannie są dwie pory: deszczowa i sucha.' },
        { l: 3, q: 'Jak nazywa się miejsce na pustyni z wodą i roślinnością?', t: ['oaza'], e: 'Oaza powstaje tam, gdzie wody podziemne wypływają na powierzchnię.' },
        { l: 3, q: 'Która rzeka płynie przez największy las równikowy świata?', o: ['Amazonka', 'Nil', 'Wołga', 'Missisipi'], e: 'Amazonka płynie przez Amazonię w Ameryce Południowej.' }
      ] }
    ],
    6: [
      { id: 'ruchy-ziemi', name: 'Ruchy Ziemi', questions: [
        { l: 1, q: 'Ile czasu trwa pełny obrót Ziemi wokół własnej osi?', o: ['ok. 24 godziny', 'ok. 365 dni', 'ok. 30 dni', 'ok. 12 godzin'], e: 'Ruch obrotowy trwa ok. 24 godzin — to przyczyna dnia i nocy.' },
        { l: 1, q: 'Ile dni trwa obieg Ziemi wokół Słońca?', t: ['365', '365 dni', '365,25', '366'], e: 'Ok. 365 dni i 6 godzin — dlatego co 4 lata jest rok przestępny.' },
        { l: 1, q: 'Skutkiem ruchu obrotowego Ziemi jest:', o: ['następowanie dnia i nocy', 'zmiana pór roku', 'zaćmienie Słońca', 'przypływy'], e: 'Ziemia obraca się, więc raz jesteśmy po stronie oświetlonej, raz w cieniu.' },
        { l: 2, q: 'Kiedy w Polsce jest najdłuższy dzień w roku?', o: ['21/22 czerwca', '21/22 grudnia', '21 marca', '23 września'], e: 'Przesilenie letnie — Słońce jest najwyżej nad horyzontem.' },
        { l: 2, q: 'Jak nazywa się dzień, gdy dzień i noc trwają tyle samo?', t: ['równonoc'], e: 'Równonoc wiosenna (ok. 21 marca) i jesienna (ok. 23 września).' },
        { l: 2, q: 'W którą stronę obraca się Ziemia?', o: ['z zachodu na wschód', 'ze wschodu na zachód', 'z północy na południe', 'z południa na północ'], e: 'Dlatego Słońce „wędruje” po niebie ze wschodu na zachód.' },
        { l: 3, q: 'Co jest główną przyczyną pór roku?', o: ['nachylenie osi Ziemi i ruch obiegowy', 'zmiana odległości od Słońca', 'ruch obrotowy', 'fazy Księżyca'], e: 'Oś Ziemi jest nachylona, więc półkule na zmianę dostają więcej światła.' },
        { l: 3, q: 'Co to jest dzień polarny?', o: ['Słońce nie zachodzi przez całą dobę', 'Słońce nie wschodzi przez całą dobę', 'dzień bez chmur', 'najkrótszy dzień'], e: 'Za kołem podbiegunowym latem Słońce nie zachodzi nawet w nocy.' },
        { l: 3, q: 'Kiedy w Polsce jest najkrótszy dzień w roku?', o: ['21/22 grudnia', '21/22 czerwca', '1 stycznia', '21 marca'], e: 'Przesilenie zimowe — Słońce jest najniżej.' }
      ] },
      { id: 'wspolrzedne', name: 'Współrzędne geograficzne', questions: [
        { l: 1, q: 'Jaką szerokość geograficzną ma równik?', t: ['0', '0°', 'zero'], e: 'Równik to 0° — od niego liczymy szerokość na północ i południe.' },
        { l: 1, q: 'Szerokość geograficzna mówi, jak daleko jesteśmy od:', o: ['równika', 'południka zerowego', 'bieguna północnego', 'Polski'], e: 'Szerokość geograficzna to odległość od równika (N lub S).' },
        { l: 1, q: 'Jaką szerokość geograficzną ma biegun północny?', o: ['90°N', '0°', '180°', '45°N'], e: 'Bieguny mają szerokość 90° (N lub S).' },
        { l: 2, q: 'Długość geograficzną liczymy od:', o: ['południka zerowego', 'równika', 'zwrotnika', 'bieguna'], e: 'Długość geograficzna: od 0° do 180° na wschód (E) lub zachód (W).' },
        { l: 2, q: 'Jaka jest największa możliwa długość geograficzna?', t: ['180', '180°'], e: 'Długość geograficzna ma maksymalnie 180° (E lub W).' },
        { l: 2, q: 'Polska leży na półkulach:', o: ['północnej i wschodniej', 'południowej i wschodniej', 'północnej i zachodniej', 'południowej i zachodniej'], e: 'Polska leży na N od równika i na E od południka zerowego.' },
        { l: 3, q: 'Które współrzędne mogą należeć do Polski?', o: ['52°N, 21°E', '52°S, 21°E', '21°N, 52°W', '10°N, 80°E'], e: 'Warszawa ma ok. 52°N, 21°E.' },
        { l: 3, q: 'Jak nazywa się równoleżnik 23°26′N?', o: ['zwrotnik Raka', 'zwrotnik Koziorożca', 'koło podbiegunowe', 'równik'], e: 'Zwrotnik Raka na półkuli północnej, zwrotnik Koziorożca — na południowej.' },
        { l: 3, q: 'Punkt leży na 0° szerokości i 0° długości. Gdzie jest?', o: ['w Zatoce Gwinejskiej (Ocean Atlantycki)', 'w Londynie', 'na biegunie', 'w Afryce na Saharze'], e: 'Przecięcie równika z południkiem zerowym wypada w Zatoce Gwinejskiej.' }
      ] }
    ],
    7: [
      { id: 'srodowisko-polski', name: 'Środowisko Polski', questions: [
        { l: 1, q: 'Jaki jest najwyższy szczyt Polski?', t: ['rysy'], e: 'Rysy w Tatrach — 2499 m n.p.m.' },
        { l: 1, q: 'Jaka jest najdłuższa rzeka Polski?', t: ['wisła'], e: 'Wisła — ok. 1047 km długości.' },
        { l: 1, q: 'Nad jakim morzem leży Polska?', o: ['Bałtyckim', 'Północnym', 'Czarnym', 'Śródziemnym'], e: 'Polska ma ok. 500 km wybrzeża Bałtyku.' },
        { l: 2, q: 'Jakie jest największe jezioro w Polsce?', o: ['Śniardwy', 'Mamry', 'Hańcza', 'Gopło'], e: 'Śniardwy mają ok. 113 km². Najgłębsze jest Hańcza.' },
        { l: 2, q: 'Jaki klimat ma Polska?', o: ['umiarkowany przejściowy', 'podzwrotnikowy', 'równikowy', 'polarny'], e: 'Ścierają się nad nią wpływy oceaniczne i kontynentalne.' },
        { l: 2, q: 'Jakie góry leżą na granicy Polski i Czech?', o: ['Sudety', 'Tatry', 'Bieszczady', 'Pieniny'], e: 'Sudety — z najwyższym szczytem Śnieżką (1603 m).' },
        { l: 3, q: 'Gdzie jest najniżej położony punkt Polski?', o: ['Raczki Elbląskie', 'Hel', 'Żuławy Gdańskie — Gdańsk', 'Zalew Szczeciński'], e: 'Raczki Elbląskie na Żuławach Wiślanych — ok. 1,8 m p.p.m.' },
        { l: 3, q: 'Jaka jest w przybliżeniu powierzchnia Polski?', o: ['312 tys. km²', '120 tys. km²', '500 tys. km²', '1 mln km²'], e: 'Polska ma ok. 312,7 tys. km².' },
        { l: 3, q: 'Jaki wiatr wieje w Tatrach, powodując nagłe ocieplenie?', t: ['halny', 'wiatr halny'], e: 'Halny to ciepły, suchy wiatr fenowy.' }
      ] },
      { id: 'ludnosc-gospodarka', name: 'Ludność i gospodarka Polski', questions: [
        { l: 1, q: 'Jakie jest największe miasto Polski?', t: ['warszawa'], e: 'Warszawa — stolica, ok. 1,8 mln mieszkańców.' },
        { l: 1, q: 'Ilu mniej więcej mieszkańców ma Polska?', o: ['ok. 38 mln', 'ok. 10 mln', 'ok. 80 mln', 'ok. 150 mln'], e: 'Polska liczy ok. 37–38 mln mieszkańców.' },
        { l: 1, q: 'W którym regionie wydobywa się najwięcej węgla kamiennego?', o: ['na Górnym Śląsku', 'na Pomorzu', 'na Mazurach', 'na Podlasiu'], e: 'Górnośląskie Zagłębie Węglowe.' },
        { l: 2, q: 'W pobliżu którego miasta jest największa kopalnia węgla brunatnego i elektrownia?', o: ['Bełchatów', 'Kraków', 'Gdańsk', 'Lublin'], e: 'Elektrownia Bełchatów to jedna z największych w Europie.' },
        { l: 2, q: 'Który z tych portów NIE jest polskim portem morskim?', o: ['Kłajpeda', 'Gdańsk', 'Gdynia', 'Szczecin'], e: 'Kłajpeda leży na Litwie.' },
        { l: 2, q: 'Jak nazywamy przenoszenie się ludności ze wsi do miast?', t: ['urbanizacja'], e: 'Urbanizacja — wzrost liczby mieszkańców miast.' },
        { l: 3, q: 'Które województwo ma największą gęstość zaludnienia?', o: ['śląskie', 'mazowieckie', 'podlaskie', 'warmińsko-mazurskie'], e: 'Śląskie ma ponad 350 os./km², podlaskie — najmniej.' },
        { l: 3, q: 'Co to jest przyrost naturalny?', o: ['różnica między liczbą urodzeń a zgonów', 'liczba imigrantów', 'liczba ślubów', 'wzrost liczby miast'], e: 'Przyrost naturalny = urodzenia − zgony.' },
        { l: 3, q: 'W którym regionie Polski wydobywa się miedź?', o: ['Legnicko-Głogowski Okręg Miedziowy', 'Górny Śląsk', 'Pomorze', 'Podkarpacie'], e: 'KGHM wydobywa miedź w okolicach Legnicy, Lubina i Głogowa.' }
      ] }
    ],
    8: [
      { id: 'kontynenty', name: 'Kontynenty i oceany', questions: [
        { l: 1, q: 'Jaki jest największy kontynent?', t: ['azja'], e: 'Azja zajmuje ok. 30% lądów Ziemi.' },
        { l: 1, q: 'Jaki jest największy ocean?', o: ['Spokojny', 'Atlantycki', 'Indyjski', 'Arktyczny'], e: 'Ocean Spokojny (Pacyfik) jest większy niż wszystkie lądy razem.' },
        { l: 1, q: 'Jaki jest najmniejszy kontynent?', o: ['Australia', 'Europa', 'Antarktyda', 'Ameryka Południowa'], e: 'Australia to najmniejszy kontynent.' },
        { l: 2, q: 'Jak nazywa się najwyższy szczyt Ziemi?', t: ['mount everest', 'everest', 'czomolungma'], e: 'Mount Everest w Himalajach — ok. 8849 m n.p.m.' },
        { l: 2, q: 'Ile jest kontynentów?', t: ['7', 'siedem'], e: 'Azja, Afryka, Ameryka Płn., Ameryka Płd., Antarktyda, Europa, Australia.' },
        { l: 2, q: 'Na jakim kontynencie leży Egipt?', o: ['Afryka', 'Azja', 'Europa', 'Australia'], e: 'Egipt leży w północno-wschodniej Afryce (półwysep Synaj — w Azji).' },
        { l: 3, q: 'Jak nazywa się najgłębsze miejsce oceanów?', o: ['Rów Mariański', 'Rów Atakamski', 'Morze Martwe', 'Zatoka Meksykańska'], e: 'Rów Mariański na Pacyfiku — ok. 11 km głębokości.' },
        { l: 3, q: 'Jaki jest najniżej położony obszar lądowy na Ziemi?', o: ['depresja Morza Martwego', 'Holandia', 'Dolina Śmierci', 'Morze Kaspijskie'], e: 'Brzeg Morza Martwego leży ok. 430 m p.p.m.' },
        { l: 3, q: 'Które góry oddzielają Europę od Azji?', t: ['ural', 'góry ural'], e: 'Umowna granica Europy i Azji biegnie m.in. wzdłuż Uralu.' }
      ] },
      { id: 'regiony-swiata', name: 'Regiony świata', questions: [
        { l: 1, q: 'Który kraj ma najwięcej mieszkańców?', o: ['Indie', 'Chiny', 'USA', 'Rosja'], e: 'Od 2023 r. Indie wyprzedziły Chiny.' },
        { l: 1, q: 'Stolicą Japonii jest:', t: ['tokio', 'tokyo'], e: 'Tokio — jedna z największych aglomeracji świata.' },
        { l: 1, q: 'Który kraj jest największy powierzchniowo?', o: ['Rosja', 'Kanada', 'Chiny', 'USA'], e: 'Rosja ma ok. 17 mln km².' },
        { l: 2, q: 'Jak nazywają się sezonowe wiatry przynoszące ulewne deszcze w Azji?', t: ['monsun', 'monsuny'], e: 'Monsun letni przynosi deszcze potrzebne do uprawy ryżu.' },
        { l: 2, q: 'Dlaczego w Japonii często są trzęsienia ziemi?', o: ['leży na styku płyt litosfery', 'ma dużo rzek', 'jest wyspą tropikalną', 'ma dużo lasów'], e: 'Japonia leży w Pacyficznym Pierścieniu Ognia.' },
        { l: 2, q: 'Który kanał łączy Ocean Atlantycki z Oceanem Spokojnym?', o: ['Panamski', 'Sueski', 'Kiloński', 'La Manche'], e: 'Kanał Panamski skraca drogę statków o tysiące kilometrów.' },
        { l: 3, q: 'Jak nazywa się pas na południe od Sahary zagrożony pustynnieniem?', t: ['sahel'], e: 'W Sahelu susze i nadmierny wypas prowadzą do pustynnienia.' },
        { l: 3, q: 'Gdzie leży Dolina Krzemowa — centrum firm technologicznych?', o: ['w USA (Kalifornia)', 'w Japonii', 'w Indiach', 'w Niemczech'], e: 'Silicon Valley w Kalifornii — siedziby m.in. Apple i Google.' },
        { l: 3, q: 'Jak nazywał się system segregacji rasowej w RPA?', o: ['apartheid', 'kastowy', 'feudalizm', 'kolonializm'], e: 'Apartheid zniesiono na początku lat 90. XX w.; Nelson Mandela został prezydentem w 1994 r.' }
      ] }
    ]
  }
});
