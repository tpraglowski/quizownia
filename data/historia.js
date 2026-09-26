// Historia. Format pytań jak w polski.js (o: pierwsza poprawna, t: do wpisania).
SUBJECTS.push({
  id: 'historia', name: 'Historia', emoji: '🏰', color: '#b8641c',
  grades: {
    4: [
      { id: 'poczatki-polski', name: 'Początki państwa polskiego', questions: [
        { l: 1, q: 'W którym roku Mieszko I przyjął chrzest?', t: ['966'], e: 'Chrzest Polski odbył się w 966 roku.' },
        { l: 1, q: 'Jak miała na imię czeska księżniczka, żona Mieszka I?', o: ['Dobrawa', 'Jadwiga', 'Bona', 'Anna'], e: 'Dobrawa (Dąbrówka) była żoną Mieszka I i przyczyniła się do chrztu.' },
        { l: 1, q: 'Z jakiej dynastii pochodzili pierwsi władcy Polski?', o: ['Piastów', 'Jagiellonów', 'Wazów', 'Habsburgów'], e: 'Pierwszą dynastią byli Piastowie, od legendarnego Piasta Kołodzieja.' },
        { l: 2, q: 'Kto był pierwszym koronowanym królem Polski?', o: ['Bolesław Chrobry', 'Mieszko I', 'Kazimierz Wielki', 'Władysław Jagiełło'], e: 'Bolesław Chrobry koronował się w 1025 roku.' },
        { l: 2, q: 'W którym roku odbył się zjazd gnieźnieński?', t: ['1000'], e: 'W 1000 roku do Gniezna przybył cesarz Otto III.' },
        { l: 2, q: 'Który cesarz przybył na zjazd gnieźnieński?', o: ['Otto III', 'Karol Wielki', 'Juliusz Cezar', 'Fryderyk Barbarossa'], e: 'Cesarz Otto III przybył do grobu św. Wojciecha w Gnieźnie.' },
        { l: 3, q: 'W którym roku koronował się Bolesław Chrobry?', t: ['1025'], e: 'Koronacja Bolesława Chrobrego — 1025 rok, niedługo przed jego śmiercią.' },
        { l: 3, q: 'Który biskup-męczennik został patronem Polski?', o: ['św. Wojciech', 'św. Stanisław', 'św. Mikołaj', 'św. Jerzy'], e: 'Św. Wojciech zginął podczas misji u Prusów w 997 roku.' },
        { l: 3, q: 'Dlaczego chrzest był ważny dla państwa Mieszka?', o: ['Polska weszła do grona państw chrześcijańskich Europy', 'Mieszko został cesarzem', 'Polska dostała dostęp do morza', 'Zakończył wojny z Litwą'], e: 'Chrzest wzmocnił pozycję Polski w Europie i utrudnił najazdy pod pretekstem nawracania.' }
      ] },
      { id: 'wielcy-polacy', name: 'Wielcy Polacy', questions: [
        { l: 1, q: 'Kto „wstrzymał Słońce, ruszył Ziemię”?', o: ['Mikołaj Kopernik', 'Fryderyk Chopin', 'Tadeusz Kościuszko', 'Jan Matejko'], e: 'Mikołaj Kopernik udowodnił, że to Ziemia krąży wokół Słońca.' },
        { l: 1, q: 'Kto był wybitnym polskim kompozytorem i pianistą?', o: ['Fryderyk Chopin', 'Mikołaj Kopernik', 'Józef Piłsudski', 'Lech Wałęsa'], e: 'Fryderyk Chopin komponował m.in. mazurki i polonezy.' },
        { l: 1, q: 'Kto dwukrotnie otrzymał Nagrodę Nobla?', t: ['maria skłodowska-curie', 'maria skłodowska curie', 'skłodowska-curie', 'maria skłodowska', 'skłodowska'], e: 'Maria Skłodowska-Curie — Nobel z fizyki (1903) i chemii (1911).' },
        { l: 2, q: 'Jakie pierwiastki odkryła Maria Skłodowska-Curie?', o: ['polon i rad', 'tlen i wodór', 'złoto i srebro', 'uran i żelazo'], e: 'Polon nazwała na cześć Polski, a drugi pierwiastek to rad.' },
        { l: 2, q: 'Kto dowodził insurekcją w 1794 roku?', o: ['Tadeusz Kościuszko', 'Józef Piłsudski', 'Jan III Sobieski', 'Józef Bem'], e: 'Tadeusz Kościuszko — naczelnik insurekcji, wcześniej bohater wojny o niepodległość USA.' },
        { l: 2, q: 'Kto był marszałkiem i twórcą Legionów Polskich podczas I wojny światowej?', t: ['józef piłsudski', 'piłsudski'], e: 'Józef Piłsudski odegrał kluczową rolę w odzyskaniu niepodległości w 1918 r.' },
        { l: 3, q: 'Kto namalował „Bitwę pod Grunwaldem”?', o: ['Jan Matejko', 'Józef Chełmoński', 'Stanisław Wyspiański', 'Jacek Malczewski'], e: 'Jan Matejko malował wielkie obrazy z historii Polski.' },
        { l: 3, q: 'Kto był przywódcą „Solidarności” i później prezydentem?', o: ['Lech Wałęsa', 'Józef Piłsudski', 'Tadeusz Mazowiecki', 'Jan Paweł II'], e: 'Lech Wałęsa — elektryk ze Stoczni Gdańskiej, laureat Pokojowej Nagrody Nobla.' },
        { l: 3, q: 'Kto w 1978 roku został papieżem?', t: ['jan paweł ii', 'jan paweł 2', 'karol wojtyła', 'wojtyła', 'jan paweł drugi'], e: 'Karol Wojtyła został papieżem Janem Pawłem II.' }
      ] }
    ],
    5: [
      { id: 'starozytnosc', name: 'Egipt, Grecja i Rzym', questions: [
        { l: 1, q: 'Jak nazywali się władcy starożytnego Egiptu?', o: ['faraonowie', 'cesarze', 'królowie', 'konsulowie'], e: 'Faraon był uważany za boga na ziemi.' },
        { l: 1, q: 'Nad jaką rzeką rozwinął się Egipt?', t: ['nil', 'nilem'], e: 'Wylewy Nilu użyźniały ziemię — dlatego Egipt nazywano „darem Nilu”.' },
        { l: 1, q: 'W którym greckim mieście narodziła się demokracja?', o: ['Ateny', 'Sparta', 'Rzym', 'Troja'], e: 'Demokracja („władza ludu”) narodziła się w Atenach.' },
        { l: 2, q: 'Jak nazywało się pismo egipskie?', o: ['hieroglify', 'alfabet grecki', 'pismo klinowe', 'runy'], e: 'Egipcjanie pisali hieroglifami — znakami obrazkowymi.' },
        { l: 2, q: 'Gdzie odbywały się starożytne igrzyska?', t: ['olimpia', 'w olimpii', 'olimpii'], e: 'Igrzyska odbywały się w Olimpii ku czci Zeusa.' },
        { l: 2, q: 'Kto był najważniejszym bogiem Greków?', o: ['Zeus', 'Posejdon', 'Ares', 'Hermes'], e: 'Zeus — władca Olimpu, bóg nieba i piorunów.' },
        { l: 3, q: 'Jak według legendy założono Rzym?', o: ['Założyli go bracia Romulus i Remus', 'Założył go Juliusz Cezar', 'Założyli go Grecy z Troi', 'Założył go faraon'], e: 'Według legendy Rzym założyli w 753 r. p.n.e. bracia wykarmieni przez wilczycę.' },
        { l: 3, q: 'Jak nazywała się rzymska budowla do walk gladiatorów?', o: ['Koloseum', 'Partenon', 'Piramida', 'Akropol'], e: 'Koloseum w Rzymie mieściło około 50 tysięcy widzów.' },
        { l: 3, q: 'Kto był pierwszym cesarzem rzymskim?', o: ['Oktawian August', 'Juliusz Cezar', 'Neron', 'Romulus'], e: 'Oktawian August został pierwszym cesarzem w 27 r. p.n.e. Juliusz Cezar był dyktatorem, nie cesarzem.' }
      ] },
      { id: 'piastowie-jagiellonowie', name: 'Polska Piastów i Jagiellonów', questions: [
        { l: 1, q: 'W którym roku odbyła się bitwa pod Grunwaldem?', t: ['1410'], e: '15 lipca 1410 — wielkie zwycięstwo nad Krzyżakami.' },
        { l: 1, q: 'Kto dowodził wojskami polsko-litewskimi pod Grunwaldem?', o: ['Władysław Jagiełło', 'Kazimierz Wielki', 'Bolesław Chrobry', 'Zygmunt Stary'], e: 'Król Władysław Jagiełło razem z księciem Witoldem.' },
        { l: 1, q: 'O którym królu mówi się, że „zastał Polskę drewnianą, a zostawił murowaną”?', o: ['Kazimierz Wielki', 'Mieszko I', 'Władysław Łokietek', 'Stefan Batory'], e: 'Kazimierz Wielki zbudował wiele zamków i miast.' },
        { l: 2, q: 'W którym roku Kazimierz Wielki założył Akademię Krakowską?', t: ['1364'], e: 'Akademia Krakowska (dziś Uniwersytet Jagielloński) powstała w 1364 r.' },
        { l: 2, q: 'Kogo poślubiła królowa Jadwiga po unii w Krewie (1385)?', o: ['Jagiełłę, księcia Litwy', 'Kazimierza Wielkiego', 'Zygmunta Augusta', 'Mieszka I'], e: 'Królowa Jadwiga poślubiła wielkiego księcia litewskiego Jagiełłę.' },
        { l: 2, q: 'Z kim walczyła Polska pod Grunwaldem?', t: ['krzyżacy', 'z krzyżakami', 'krzyżakami', 'zakon krzyżacki'], e: 'Z zakonem krzyżackim.' },
        { l: 3, q: 'Kto był ostatnim królem z dynastii Piastów?', o: ['Kazimierz Wielki', 'Władysław Łokietek', 'Bolesław Krzywousty', 'Przemysł II'], e: 'Kazimierz Wielki zmarł w 1370 r. bez syna.' },
        { l: 3, q: 'Kto był ostatnim królem z dynastii Jagiellonów?', o: ['Zygmunt II August', 'Zygmunt I Stary', 'Władysław Warneńczyk', 'Stefan Batory'], e: 'Zygmunt II August zmarł w 1572 r., kończąc dynastię Jagiellonów.' },
        { l: 3, q: 'Co zapoczątkowało rozbicie dzielnicowe w 1138 roku?', o: ['testament Bolesława Krzywoustego', 'testament Mieszka I', 'pokój toruński', 'unia w Krewie'], e: 'W 1138 r. Bolesław Krzywousty podzielił kraj między synów.' }
      ] }
    ],
    6: [
      { id: 'odkrycia-renesans', name: 'Odkrycia geograficzne i renesans', questions: [
        { l: 1, q: 'Kto w 1492 roku dopłynął do Ameryki?', o: ['Krzysztof Kolumb', 'Vasco da Gama', 'Ferdynand Magellan', 'Marco Polo'], e: 'Krzysztof Kolumb myślał, że dopłynął do Indii.' },
        { l: 1, q: 'Kto wynalazł druk z ruchomą czcionką?', o: ['Jan Gutenberg', 'Leonardo da Vinci', 'Galileusz', 'Kopernik'], e: 'Jan Gutenberg ok. 1450 r. — książki stały się tańsze i powszechniejsze.' },
        { l: 1, q: 'Jak nazywa się epoka po średniowieczu, która „odrodziła” kulturę antyczną?', t: ['renesans', 'odrodzenie'], e: 'Renesans oznacza „odrodzenie”.' },
        { l: 2, q: 'Czyja wyprawa jako pierwsza opłynęła Ziemię?', o: ['Ferdynanda Magellana', 'Krzysztofa Kolumba', 'Jamesa Cooka', 'Amerigo Vespucciego'], e: 'Wyprawa Magellana (1519–1522) — sam Magellan zginął po drodze.' },
        { l: 2, q: 'Kto namalował „Mona Lisę”?', o: ['Leonardo da Vinci', 'Michał Anioł', 'Rafael', 'Rembrandt'], e: 'Leonardo da Vinci — malarz, wynalazca, uczony.' },
        { l: 2, q: 'Kto jako pierwszy dopłynął morzem do Indii wokół Afryki?', o: ['Vasco da Gama', 'Kolumb', 'Magellan', 'Bartolomeu Dias'], e: 'Vasco da Gama dotarł do Indii w 1498 r.' },
        { l: 3, q: 'Jak nazywał się król, za którego panowania Wawel przebudowano w stylu renesansowym?', o: ['Zygmunt Stary', 'Kazimierz Wielki', 'Jan III Sobieski', 'Bolesław Chrobry'], e: 'Zygmunt Stary i królowa Bona sprowadzili włoskich artystów.' },
        { l: 3, q: 'Który polski poeta napisał „Treny”?', t: ['jan kochanowski', 'kochanowski'], e: 'Jan Kochanowski napisał „Treny” po śmierci córki Urszulki.' },
        { l: 3, q: 'Kim byli humaniści?', o: ['uczonymi zainteresowanymi człowiekiem i antykiem', 'rycerzami zakonnymi', 'kupcami z Wenecji', 'odkrywcami nowych lądów'], e: 'Humaniści stawiali w centrum człowieka i wzorowali się na starożytności.' }
      ] },
      { id: 'rzeczpospolita', name: 'Rzeczpospolita szlachecka', questions: [
        { l: 1, q: 'W którym roku zawarto unię lubelską?', t: ['1569'], e: 'Unia lubelska (1569) utworzyła Rzeczpospolitą Obojga Narodów.' },
        { l: 1, q: 'Kto dowodził odsieczą wiedeńską w 1683 roku?', o: ['Jan III Sobieski', 'Stefan Batory', 'Zygmunt III Waza', 'Stanisław August'], e: 'Król Jan III Sobieski rozbił Turków pod Wiedniem.' },
        { l: 1, q: 'Jak nazywał się najazd Szwedów na Polskę (1655–1660)?', o: ['potop szwedzki', 'wielka smuta', 'hołd pruski', 'wojna trzydziestoletnia'], e: 'Potop szwedzki — wielki najazd, w którym broniła się m.in. Jasna Góra.' },
        { l: 2, q: 'Jak nazywał się sposób wybierania króla przez całą szlachtę?', t: ['wolna elekcja', 'elekcja'], e: 'Od 1573 r. króla wybierała szlachta na wolnej elekcji.' },
        { l: 2, q: 'Kto był pierwszym królem wybranym w wolnej elekcji?', o: ['Henryk Walezy', 'Stefan Batory', 'Zygmunt August', 'Jan Kazimierz'], e: 'Henryk Walezy, Francuz — po kilku miesiącach uciekł do Francji.' },
        { l: 2, q: 'Co to było liberum veto?', o: ['prawo jednego posła do zerwania sejmu', 'prawo króla do wypowiedzenia wojny', 'podatek na wojsko', 'przywilej dla mieszczan'], e: 'Sprzeciw jednego posła zrywał sejm — to bardzo osłabiało państwo.' },
        { l: 3, q: 'W którym roku po raz pierwszy zerwano sejm przez liberum veto?', t: ['1652'], e: 'W 1652 r. poseł Władysław Siciński zerwał sejm.' },
        { l: 3, q: 'Które miasto broniło się przed Szwedami pod wodzą przeora Kordeckiego?', o: ['Jasna Góra (Częstochowa)', 'Kraków', 'Gdańsk', 'Lwów'], e: 'Obrona Jasnej Góry w 1655 r. dodała otuchy walczącym ze Szwedami.' },
        { l: 3, q: 'Jak nazywały się zasady, które musiał zaprzysiąc każdy król elekcyjny?', o: ['artykuły henrykowskie', 'konstytucja Nihil novi', 'statut wiślicki', 'prawo magdeburskie'], e: 'Artykuły henrykowskie ograniczały władzę króla.' }
      ] }
    ],
    7: [
      { id: 'kongres-wiosna-ludow', name: 'Europa po kongresie wiedeńskim i Wiosna Ludów', questions: [
        { l: 1, q: 'W jakich latach obradował kongres wiedeński?', o: ['1814–1815', '1791–1792', '1830–1831', '1848–1849'], e: 'Kongres wiedeński (1814–1815) ustalił nowy porządek w Europie po klęsce Napoleona.' },
        { l: 1, q: 'Kto przegrał bitwę pod Waterloo w 1815 roku?', t: ['napoleon', 'napoleon bonaparte', 'napoleon i'], e: 'Pod Waterloo Napoleon ostatecznie przegrał i został zesłany na Wyspę Świętej Heleny.' },
        { l: 1, q: 'W którym roku wybuchła Wiosna Ludów?', t: ['1848'], e: 'Wiosna Ludów to fala rewolucji w Europie w latach 1848–1849.' },
        { l: 2, q: 'Jak nazywał się sojusz Rosji, Prus i Austrii z 1815 roku, broniący porządku ustalonego w Wiedniu?', o: ['Święte Przymierze', 'Trójporozumienie', 'Liga Narodów', 'Związek Reński'], e: 'Święte Przymierze miało tłumić rewolucje i ruchy narodowe.' },
        { l: 2, q: 'Który austriacki minister odgrywał główną rolę na kongresie wiedeńskim?', o: ['Klemens von Metternich', 'Otto von Bismarck', 'Talleyrand', 'Aleksander I'], e: 'Klemens von Metternich był gospodarzem kongresu i symbolem polityki konserwatywnej.' },
        { l: 2, q: 'Która zasada była jedną z zasad kongresu wiedeńskiego?', o: ['legitymizm — władza wraca do prawowitych dynastii', 'demokracja — władza ludu', 'prawo narodów do niepodległości', 'zniesienie monarchii'], e: 'Zasady kongresu: legitymizm, restauracja (przywrócenie dawnych porządków) i równowaga sił.' },
        { l: 3, q: 'W którym państwie rewolucja lutowa 1848 roku obaliła monarchię?', o: ['we Francji', 'w Rosji', 'w Anglii', 'w Hiszpanii'], e: 'We Francji obalono króla Ludwika Filipa i proklamowano republikę.' },
        { l: 3, q: 'Który naród w latach 1848–1849 walczył z Austrią, a Polacy (m.in. gen. Józef Bem) mu pomagali?', o: ['Węgrzy', 'Czesi', 'Włosi', 'Irlandczycy'], e: 'Węgrzy walczyli o niepodległość; powstanie stłumiła Austria z pomocą Rosji.' },
        { l: 3, q: 'Kto w 1848 roku ogłosił „Manifest komunistyczny”?', o: ['Karol Marks i Fryderyk Engels', 'Metternich i Aleksander I', 'Napoleon III', 'Adam Mickiewicz'], e: 'Marks i Engels wzywali robotników do walki z kapitalizmem.' }
      ] },
      { id: 'ziemie-polskie-1815-1848', name: 'Ziemie polskie w latach 1815–1848', questions: [
        { l: 1, q: 'Jakie państwo utworzono z większości ziem Księstwa Warszawskiego na kongresie wiedeńskim?', o: ['Królestwo Polskie (Kongresowe)', 'Wielkie Księstwo Poznańskie', 'Rzeczpospolitą Obojga Narodów', 'Galicję'], e: 'Królestwo Polskie było połączone z Rosją unią personalną.' },
        { l: 1, q: 'Kto był królem Królestwa Polskiego?', o: ['car Rosji', 'król Prus', 'cesarz Austrii', 'wybrany przez sejm Polak'], e: 'Królem Polski był car — pierwszym Aleksander I.' },
        { l: 1, q: 'W którym roku wybuchło powstanie listopadowe?', t: ['1830'], e: 'Powstanie wybuchło w nocy 29 listopada 1830 r.' },
        { l: 2, q: 'Jak nazywało się małe państwo utworzone w 1815 roku wokół Krakowa?', o: ['Rzeczpospolita Krakowska (Wolne Miasto Kraków)', 'Księstwo Krakowskie', 'Królestwo Galicji', 'Małopolska'], e: 'Wolne Miasto Kraków było pod opieką trzech zaborców; w 1846 r. włączono je do Austrii.' },
        { l: 2, q: 'W którym zaborze leżało Wielkie Księstwo Poznańskie?', o: ['pruskim', 'rosyjskim', 'austriackim'], e: 'Wielkie Księstwo Poznańskie należało do Prus.' },
        { l: 2, q: 'Który minister skarbu Królestwa Polskiego założył Bank Polski?', o: ['Franciszek Ksawery Drucki-Lubecki', 'Adam Jerzy Czartoryski', 'Józef Chłopicki', 'Aleksander Wielopolski'], e: 'Drucki-Lubecki uzdrowił finanse i rozwijał przemysł Królestwa.' },
        { l: 3, q: 'Jak nazywamy wyjazd tysięcy Polaków na Zachód (głównie do Francji) po upadku powstania listopadowego?', t: ['wielka emigracja'], e: 'Na Wielkiej Emigracji byli m.in. Mickiewicz, Słowacki i Chopin.' },
        { l: 3, q: 'Klęska w której bitwie w 1831 roku przesądziła o upadku powstania listopadowego?', o: ['pod Ostrołęką', 'pod Racławicami', 'pod Grunwaldem', 'pod Olszynką Grochowską'], e: 'Po przegranej pod Ostrołęką (maj 1831) Rosjanie ruszyli na Warszawę i zdobyli ją we wrześniu.' },
        { l: 3, q: 'Jak nazywa się wystąpienie chłopów przeciw szlachcie w Galicji w 1846 roku?', t: ['rabacja galicyjska', 'rabacja'], e: 'Władze austriackie wykorzystały niechęć chłopów do szlachty, by stłumić powstanie.' }
      ] },
      { id: 'powstanie-styczniowe', name: 'Powstanie styczniowe', questions: [
        { l: 1, q: 'Kiedy wybuchło powstanie styczniowe?', o: ['22 stycznia 1863', '29 listopada 1830', '1 sierpnia 1944', '3 maja 1791'], e: 'Powstanie styczniowe wybuchło 22 stycznia 1863 r.' },
        { l: 1, q: 'Przeciwko któremu zaborcy wybuchło powstanie styczniowe?', t: ['rosji', 'rosja', 'przeciw rosji', 'rosjanom'], e: 'Powstanie wybuchło w zaborze rosyjskim.' },
        { l: 1, q: 'Jaki był główny sposób walki powstańców styczniowych?', o: ['walka partyzancka w małych oddziałach', 'wielkie bitwy regularnych armii', 'walki na morzu', 'obrona twierdz'], e: 'Powstańcy nie mieli armii, więc walczyli w oddziałach partyzanckich, często w lasach.' },
        { l: 2, q: 'Co to była branka?', o: ['przymusowy pobór młodych mężczyzn do wojska rosyjskiego', 'podatek od ziemi', 'zakaz używania języka polskiego', 'wybór dyktatora'], e: 'Branka miała rozbić spiskowców — przyspieszyła wybuch powstania.' },
        { l: 2, q: 'Które stronnictwo dążyło do szybkiego wybuchu powstania?', o: ['Czerwoni', 'Biali', 'Targowiczanie', 'Stańczycy'], e: 'Czerwoni chcieli walki zbrojnej, Biali — reform bez powstania.' },
        { l: 2, q: 'Kto był ostatnim dyktatorem powstania styczniowego?', t: ['romuald traugutt', 'traugutt'], e: 'Romuald Traugutt kierował powstaniem od października 1863 r.' },
        { l: 3, q: 'Kto był inicjatorem branki?', o: ['Aleksander Wielopolski', 'Romuald Traugutt', 'Ludwik Mierosławski', 'Józef Piłsudski'], e: 'Margrabia Aleksander Wielopolski chciał brankę wymierzyć w młodzież spiskową.' },
        { l: 3, q: 'Co ogłosił Tymczasowy Rząd Narodowy w dniu wybuchu powstania?', o: ['uwłaszczenie chłopów', 'zniesienie monarchii w Rosji', 'unię z Litwą', 'wybór króla'], e: 'Dekrety uwłaszczeniowe miały przyciągnąć chłopów do powstania.' },
        { l: 3, q: 'W którym roku stracono Romualda Traugutta?', t: ['1864'], e: 'Traugutt został stracony 5 sierpnia 1864 r. na stokach Cytadeli Warszawskiej.' }
      ] },
      { id: 'pod-zaborami', name: 'Przemiany na ziemiach polskich pod zaborami', questions: [
        { l: 1, q: 'Co to była rusyfikacja?', o: ['narzucanie Polakom języka i kultury rosyjskiej', 'budowa kolei w Rosji', 'uwłaszczenie chłopów', 'walka z Kościołem w Prusach'], e: 'Rusyfikacja nasiliła się po powstaniu styczniowym, np. rosyjski język w szkołach.' },
        { l: 1, q: 'W którym zaborze Polacy mieli najwięcej swobód (autonomia Galicji)?', o: ['austriackim', 'rosyjskim', 'pruskim'], e: 'W Galicji były polskie szkoły, urzędy i uniwersytety w Krakowie i Lwowie.' },
        { l: 1, q: 'O co strajkowały dzieci we Wrześni w 1901 roku?', o: ['o naukę religii po polsku', 'o krótsze lekcje', 'o darmowe podręczniki', 'o wakacje'], e: 'Uczniowie odmówili odpowiadania po niemiecku na lekcjach religii.' },
        { l: 2, q: 'Jak nazywała się walka Bismarcka z Kościołem katolickim w Prusach?', t: ['kulturkampf'], e: 'Kulturkampf („walka o kulturę”) uderzał też w polskość.' },
        { l: 2, q: 'Który chłop zamieszkał w wozie cyrkowym, bo Prusacy nie pozwolili mu zbudować domu?', t: ['michał drzymała', 'drzymała'], e: 'Wóz Drzymały stał się symbolem oporu przeciw germanizacji.' },
        { l: 2, q: 'Co oznaczało hasło „pracy organicznej”?', o: ['rozwój gospodarki, oświaty i kultury zamiast walki zbrojnej', 'nowe powstanie narodowe', 'emigrację do Ameryki', 'współpracę z zaborcami przeciw chłopom'], e: 'Polacy mieli wzmacniać społeczeństwo „od środka”, np. zakładając spółki i szkoły.' },
        { l: 3, q: 'Kto był przywódcą Narodowej Demokracji (endecji)?', o: ['Roman Dmowski', 'Józef Piłsudski', 'Wincenty Witos', 'Ignacy Daszyński'], e: 'Roman Dmowski — twórca ruchu narodowego.' },
        { l: 3, q: 'Jaka partia założona w 1892 roku łączyła hasła socjalistyczne i niepodległościowe (działał w niej Piłsudski)?', o: ['Polska Partia Socjalistyczna (PPS)', 'Stronnictwo Ludowe', 'Narodowa Demokracja', 'Proletariat'], e: 'PPS walczyła o prawa robotników i niepodległą Polskę.' },
        { l: 3, q: 'W którym roku wybuchła rewolucja w Rosji i Królestwie Polskim (trwająca do 1907)?', t: ['1905'], e: 'Rewolucja 1905–1907 przyniosła m.in. zgodę na prywatne szkoły z językiem polskim.' }
      ] },
      { id: 'swiat-xix-wiek', name: 'Świat w II połowie XIX wieku', questions: [
        { l: 1, q: 'Czego dotyczył główny spór w wojnie secesyjnej w USA?', o: ['niewolnictwa', 'podatku od herbaty', 'kolonii w Afryce', 'religii'], e: 'Wojna Północy z Południem (1861–1865) zakończyła się zniesieniem niewolnictwa.' },
        { l: 1, q: 'Który prezydent USA rządził podczas wojny secesyjnej?', t: ['abraham lincoln', 'lincoln'], e: 'Abraham Lincoln ogłosił zniesienie niewolnictwa; zginął w zamachu w 1865 r.' },
        { l: 1, q: 'Kogo nazywano „żelaznym kanclerzem”, twórcą zjednoczenia Niemiec?', o: ['Otto von Bismarcka', 'Napoleona III', 'Metternicha', 'Wilhelma II'], e: 'Bismarck zjednoczył Niemcy „krwią i żelazem”, czyli przez wojny.' },
        { l: 2, q: 'W którym roku ogłoszono powstanie Cesarstwa Niemieckiego?', t: ['1871'], e: 'W 1871 r. w Wersalu proklamowano Cesarstwo Niemieckie.' },
        { l: 2, q: 'Kto dowodził wyprawą „tysiąca czerwonych koszul” podczas zjednoczenia Włoch?', o: ['Giuseppe Garibaldi', 'Camillo Cavour', 'Wiktor Emanuel II', 'Mussolini'], e: 'Garibaldi zdobył Sycylię i południe Włoch.' },
        { l: 2, q: 'Kto opatentował telefon w 1876 roku?', o: ['Alexander Graham Bell', 'Thomas Edison', 'Nikola Tesla', 'Guglielmo Marconi'], e: 'Telefon Bella zrewolucjonizował komunikację; Edison słynie m.in. z żarówki.' },
        { l: 3, q: 'Na jakiej konferencji w latach 1884–1885 państwa europejskie ustaliły zasady podziału Afryki?', o: ['berlińskiej', 'wiedeńskiej', 'paryskiej', 'jałtańskiej'], e: 'Konferencja berlińska przyspieszyła kolonialny „wyścig o Afrykę”.' },
        { l: 3, q: 'Który Polak skonstruował lampę naftową?', t: ['ignacy łukasiewicz', 'łukasiewicz'], e: 'Ignacy Łukasiewicz (1853) — twórca przemysłu naftowego.' },
        { l: 3, q: 'Jak nazywa się okres szybkiej modernizacji Japonii od 1868 roku?', o: ['era Meiji', 'szogunat', 'era samurajów', 'rewolucja kulturalna'], e: 'W erze Meiji Japonia wzorowała się na Zachodzie i szybko uprzemysłowiła się.' }
      ] }
    ],
    8: [
      { id: 'ii-wojna', name: 'II wojna światowa', questions: [
        { l: 1, q: 'Kiedy Niemcy napadły na Polskę?', o: ['1 września 1939', '11 listopada 1918', '1 sierpnia 1944', '17 września 1939'], e: '1 września 1939 r. rozpoczęła się II wojna światowa.' },
        { l: 1, q: 'Które państwo napadło na Polskę 17 września 1939 roku?', t: ['zsrr', 'związek radziecki', 'związek sowiecki', 'rosja sowiecka'], e: '17 września 1939 r. do Polski wkroczyła Armia Czerwona (ZSRR).' },
        { l: 1, q: 'W którym roku wybuchło Powstanie Warszawskie?', t: ['1944'], e: 'Powstanie Warszawskie wybuchło 1 sierpnia 1944 r. i trwało 63 dni.' },
        { l: 2, q: 'Gdzie polscy żołnierze gen. Andersa zdobyli klasztor w 1944 roku?', o: ['Monte Cassino', 'Narwik', 'Tobruk', 'Arnhem'], e: 'Bitwa o Monte Cassino we Włoszech — maj 1944 r.' },
        { l: 2, q: 'Jak nazywała się niemiecka maszyna szyfrująca złamana przez polskich matematyków?', t: ['enigma'], e: 'Enigmę złamali Marian Rejewski, Jerzy Różycki i Henryk Zygalski.' },
        { l: 2, q: 'Jak nazywała się największa podziemna armia w okupowanej Polsce?', o: ['Armia Krajowa', 'Armia Czerwona', 'Wehrmacht', 'Legiony Polskie'], e: 'Armia Krajowa (AK) liczyła ok. 380 tys. żołnierzy.' },
        { l: 3, q: 'Gdzie w 1940 roku NKWD zamordowało polskich oficerów?', o: ['w Katyniu', 'w Oświęcimiu', 'w Palmirach', 'na Westerplatte'], e: 'Zbrodnia katyńska — ok. 22 tys. ofiar.' },
        { l: 3, q: 'Kiedy zakończyła się II wojna światowa w Europie?', o: ['8 maja 1945', '1 września 1945', '11 listopada 1945', '6 sierpnia 1945'], e: 'Niemcy skapitulowały 8 maja 1945 r.' },
        { l: 3, q: 'Które miejsce broniło się 7 dni na początku wojny w 1939 roku?', t: ['westerplatte'], e: 'Załoga Westerplatte broniła się od 1 do 7 września 1939 r.' }
      ] },
      { id: 'prl-solidarnosc', name: 'PRL i Solidarność', questions: [
        { l: 1, q: 'W którym roku powstała „Solidarność”?', t: ['1980'], e: 'NSZZ „Solidarność” powstał po strajkach w sierpniu 1980 r.' },
        { l: 1, q: 'Kto przewodził strajkom w Stoczni Gdańskiej w 1980 roku?', o: ['Lech Wałęsa', 'Wojciech Jaruzelski', 'Tadeusz Mazowiecki', 'Edward Gierek'], e: 'Lech Wałęsa został przewodniczącym „Solidarności”.' },
        { l: 1, q: 'Kiedy wprowadzono stan wojenny?', o: ['13 grudnia 1981', '4 czerwca 1989', '1 maja 2004', '31 sierpnia 1980'], e: 'Stan wojenny ogłosił gen. Wojciech Jaruzelski 13 grudnia 1981 r.' },
        { l: 2, q: 'W którym roku obradował Okrągły Stół?', t: ['1989'], e: 'Rozmowy władzy z opozycją trwały od lutego do kwietnia 1989 r.' },
        { l: 2, q: 'Kto był pierwszym niekomunistycznym premierem po 1989 roku?', o: ['Tadeusz Mazowiecki', 'Lech Wałęsa', 'Jan Olszewski', 'Aleksander Kwaśniewski'], e: 'Tadeusz Mazowiecki został premierem w sierpniu 1989 r.' },
        { l: 2, q: 'W którym roku Polska wstąpiła do Unii Europejskiej?', t: ['2004'], e: '1 maja 2004 r. Polska weszła do UE.' },
        { l: 3, q: 'W którym roku Polska wstąpiła do NATO?', t: ['1999'], e: 'Polska jest w NATO od 12 marca 1999 r.' },
        { l: 3, q: 'Co to był skrót PRL?', o: ['Polska Rzeczpospolita Ludowa', 'Polska Republika Ludzi', 'Partia Robotników Lewicy', 'Polski Ruch Ludowy'], e: 'PRL — Polska Rzeczpospolita Ludowa (1952–1989).' },
        { l: 3, q: 'Kiedy odbyły się częściowo wolne wybory do Sejmu?', o: ['4 czerwca 1989', '13 grudnia 1981', '11 listopada 1989', '3 maja 1990'], e: 'W wyborach 4 czerwca 1989 r. „Solidarność” zdobyła prawie wszystkie wolne mandaty.' }
      ] }
    ]
  }
});
