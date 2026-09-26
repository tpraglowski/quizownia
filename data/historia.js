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
      { id: 'rozbiory', name: 'Rozbiory i Konstytucja 3 maja', questions: [
        { l: 1, q: 'W którym roku uchwalono Konstytucję 3 maja?', t: ['1791'], e: 'Konstytucja 3 maja 1791 r. — pierwsza w Europie i druga na świecie.' },
        { l: 1, q: 'Ile było rozbiorów Polski?', t: ['3', 'trzy'], e: 'Trzy rozbiory: 1772, 1793, 1795.' },
        { l: 1, q: 'Które państwa dokonały rozbiorów Polski?', o: ['Rosja, Prusy i Austria', 'Szwecja, Rosja i Turcja', 'Francja, Anglia i Prusy', 'Litwa, Rosja i Austria'], e: 'Zaborcami były Rosja, Prusy i Austria.' },
        { l: 2, q: 'Kto był ostatnim królem Polski przed rozbiorami?', o: ['Stanisław August Poniatowski', 'Jan III Sobieski', 'August II Mocny', 'Stanisław Leszczyński'], e: 'Stanisław August Poniatowski abdykował w 1795 r.' },
        { l: 2, q: 'W którym roku był III rozbiór Polski?', t: ['1795'], e: 'Po III rozbiorze w 1795 r. Polska zniknęła z mapy na 123 lata.' },
        { l: 2, q: 'W jakiej bitwie kosynierzy zdobyli rosyjskie armaty w 1794 roku?', o: ['pod Racławicami', 'pod Grunwaldem', 'pod Wiedniem', 'pod Maciejowicami'], e: 'Bitwa pod Racławicami — zwycięstwo insurekcji kościuszkowskiej.' },
        { l: 3, q: 'Jak nazywała się konfederacja przeciwników Konstytucji 3 maja?', o: ['targowicka', 'barska', 'warszawska', 'radomska'], e: 'Konfederacja targowicka (1792) wezwała na pomoc Rosję — słowo „targowica” oznacza zdradę.' },
        { l: 3, q: 'W którym roku był I rozbiór Polski?', t: ['1772'], e: 'I rozbiór — 1772 r.' },
        { l: 3, q: 'Co wprowadzała Konstytucja 3 maja?', o: ['trójpodział władzy i zniesienie liberum veto', 'zniesienie pańszczyzny', 'wybór króla przez chłopów', 'unię z Litwą'], e: 'Konstytucja wprowadziła trójpodział władzy, zniosła liberum veto i wolną elekcję.' }
      ] },
      { id: 'powstania', name: 'Powstania i niepodległość', questions: [
        { l: 1, q: 'W którym roku wybuchło powstanie listopadowe?', t: ['1830'], e: 'Powstanie listopadowe wybuchło 29 listopada 1830 r.' },
        { l: 1, q: 'W którym roku wybuchło powstanie styczniowe?', t: ['1863'], e: 'Powstanie styczniowe wybuchło 22 stycznia 1863 r.' },
        { l: 1, q: 'Którego dnia obchodzimy Narodowe Święto Niepodległości?', o: ['11 listopada', '3 maja', '1 sierpnia', '15 sierpnia'], e: '11 listopada 1918 r. Polska odzyskała niepodległość.' },
        { l: 2, q: 'Gdzie powstał Mazurek Dąbrowskiego?', o: ['we Włoszech (Legiony Polskie)', 'w Warszawie', 'w Paryżu', 'w Krakowie'], e: 'Józef Wybicki napisał go w 1797 r. dla Legionów Polskich we Włoszech.' },
        { l: 2, q: 'Kto napisał słowa Mazurka Dąbrowskiego?', t: ['józef wybicki', 'wybicki'], e: 'Autorem słów jest Józef Wybicki.' },
        { l: 2, q: 'Przeciwko któremu zaborcy wybuchły oba wielkie powstania (1830 i 1863)?', o: ['Rosji', 'Prusom', 'Austrii', 'Szwecji'], e: 'Oba powstania wybuchły w zaborze rosyjskim.' },
        { l: 3, q: 'Kto był ostatnim dyktatorem powstania styczniowego?', o: ['Romuald Traugutt', 'Józef Piłsudski', 'Tadeusz Kościuszko', 'Józef Chłopicki'], e: 'Romuald Traugutt został stracony na stokach Cytadeli w 1864 r.' },
        { l: 3, q: 'Jak nazywały się tajne władze powstania styczniowego?', o: ['Rząd Narodowy', 'Rada Stanu', 'Sejm Czteroletni', 'Rada Regencyjna'], e: 'Rząd Narodowy kierował powstaniem w konspiracji.' },
        { l: 3, q: 'W którym roku zakończyła się I wojna światowa?', t: ['1918'], e: 'I wojna światowa zakończyła się w 1918 r. — wtedy Polska odzyskała niepodległość.' }
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
