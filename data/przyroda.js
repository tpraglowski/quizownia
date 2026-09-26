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
      { id: 'skora', name: 'Skóra', questions: [
        { l: 1, q: 'Jaki jest największy narząd człowieka?', t: ['skóra'], e: 'Skóra ma u dorosłego ok. 1,5–2 m² powierzchni.' },
        { l: 1, q: 'Jaki barwnik nadaje kolor skórze i chroni przed promieniowaniem UV?', o: ['melanina', 'hemoglobina', 'chlorofil', 'keratyna'], e: 'Melanina powstaje w naskórku — dlatego opalamy się na słońcu.' },
        { l: 1, q: 'Które gruczoły skóry pomagają ochłodzić ciało?', o: ['potowe', 'łojowe', 'ślinowe', 'mlekowe'], e: 'Pot paruje z powierzchni skóry i odbiera ciału ciepło.' },
        { l: 2, q: 'Która z wymienionych NIE jest funkcją skóry?', o: ['wytwarzanie żółci', 'ochrona przed drobnoustrojami', 'regulacja temperatury ciała', 'odbieranie bodźców (dotyk, ciepło, ból)'], e: 'Żółć wytwarza wątroba. Skóra chroni, reguluje temperaturę, odbiera bodźce i wydala pot.' },
        { l: 2, q: 'Jak nazywa się zewnętrzna warstwa skóry?', t: ['naskórek'], e: 'Naskórek stale się złuszcza i odnawia.' },
        { l: 2, q: 'Jaka witamina powstaje w skórze pod wpływem słońca?', t: ['d', 'witamina d', 'witaminy d'], e: 'Witamina D jest potrzebna do budowy kości.' },
        { l: 3, q: 'Jaka jest kolejność warstw skóry od zewnątrz?', o: ['naskórek → skóra właściwa → tkanka podskórna', 'skóra właściwa → naskórek → tkanka podskórna', 'tkanka podskórna → naskórek → skóra właściwa', 'naskórek → tkanka podskórna → skóra właściwa'], e: 'W skórze właściwej są naczynia, gruczoły i receptory, a w tkance podskórnej — tłuszcz.' },
        { l: 3, q: 'Co dzieje się z naczyniami krwionośnymi skóry, gdy jest nam gorąco?', o: ['rozszerzają się i oddają więcej ciepła', 'zwężają się, żeby zatrzymać ciepło', 'zamykają się całkowicie', 'nic się nie zmienia'], e: 'Rozszerzone naczynia sprawiają, że skóra się czerwieni i szybciej traci ciepło.' },
        { l: 3, q: 'Oparzenie z pęcherzami wypełnionymi płynem to oparzenie:', o: ['II stopnia', 'I stopnia', 'III stopnia', 'IV stopnia'], e: 'I stopień: zaczerwienienie; II: pęcherze; III: zniszczenie wszystkich warstw skóry.' }
      ] },
      { id: 'uklad-ruchu', name: 'Układ ruchu', questions: [
        { l: 1, q: 'Ile kości ma szkielet dorosłego człowieka?', o: ['ok. 206', 'ok. 106', 'ok. 306', 'ok. 50'], e: 'Dorosły ma ok. 206 kości; noworodek więcej, bo część później się zrasta.' },
        { l: 1, q: 'Jak nazywa się ruchome połączenie kości, np. w kolanie?', t: ['staw'], e: 'Staw łączy kości ruchomo — np. kolanowy, łokciowy, biodrowy.' },
        { l: 1, q: 'Która kość jest najdłuższa w ciele człowieka?', o: ['kość udowa', 'kość ramienna', 'żebro', 'kość piszczelowa'], e: 'Kość udowa jest najdłuższa i jedna z najmocniejszych.' },
        { l: 2, q: 'Czym mięśnie szkieletowe są przyczepione do kości?', t: ['ścięgna', 'ścięgnami', 'ścięgno'], e: 'Ścięgna przenoszą siłę skurczu mięśnia na kość.' },
        { l: 2, q: 'Z ilu odcinków składa się kręgosłup?', t: ['5', 'pięciu', 'pięć'], e: 'Odcinki: szyjny, piersiowy, lędźwiowy, krzyżowy i guziczny.' },
        { l: 2, q: 'Który mięsień kurczy się niezależnie od naszej woli i pracuje całe życie bez odpoczynku?', o: ['mięsień sercowy', 'mięsień szkieletowy', 'biceps', 'mięsień czworogłowy uda'], e: 'Tkanki mięśniowe: szkieletowa (zależna od woli), gładka i sercowa (niezależne od woli).' },
        { l: 3, q: 'Co nadaje kościom twardość?', o: ['sole mineralne, głównie wapnia', 'woda', 'tłuszcz', 'szpik kostny'], e: 'Sole mineralne dają twardość, a związki organiczne (osseina) — elastyczność.' },
        { l: 3, q: 'Co powstaje w czerwonym szpiku kostnym?', o: ['krwinki', 'hormony', 'enzymy trawienne', 'ścięgna'], e: 'Czerwony szpik wytwarza krwinki czerwone, białe i płytki krwi.' },
        { l: 3, q: 'Który mięsień prostuje rękę w stawie łokciowym?', o: ['trójgłowy ramienia (triceps)', 'dwugłowy ramienia (biceps)', 'mięsień sercowy', 'mięsień naramienny'], e: 'Biceps zgina, triceps prostuje — działają antagonistycznie (przeciwstawnie).' }
      ] },
      { id: 'uklad-krazenia', name: 'Układ krążenia', questions: [
        { l: 1, q: 'Który narząd pompuje krew?', t: ['serce'], e: 'Serce to mięsień pompujący krew do całego ciała.' },
        { l: 1, q: 'Które naczynia wynoszą krew z serca?', o: ['tętnice', 'żyły', 'naczynia włosowate', 'nerwy'], e: 'Tętnice wynoszą krew z serca, żyły wprowadzają ją do serca.' },
        { l: 1, q: 'Które krwinki przenoszą tlen?', o: ['czerwone (erytrocyty)', 'białe (leukocyty)', 'płytki krwi', 'osocze'], e: 'Erytrocyty zawierają hemoglobinę, która wiąże tlen.' },
        { l: 2, q: 'Ile jam (komór i przedsionków razem) ma serce człowieka?', t: ['4', 'cztery'], e: 'Serce ma 2 przedsionki i 2 komory.' },
        { l: 2, q: 'Jak nazywa się białko w krwinkach czerwonych, które wiąże tlen?', t: ['hemoglobina'], e: 'Hemoglobina zawiera żelazo i nadaje krwi czerwony kolor.' },
        { l: 2, q: 'Za co odpowiadają płytki krwi?', o: ['krzepnięcie krwi', 'transport tlenu', 'walkę z bakteriami', 'trawienie'], e: 'Płytki krwi (trombocyty) tamują krwawienie.' },
        { l: 3, q: 'Która komora serca pompuje krew do całego ciała?', o: ['lewa', 'prawa', 'obie po równo', 'żadna — robią to przedsionki'], e: 'Lewa komora ma najgrubszą ścianę i tłoczy krew do aorty.' },
        { l: 3, q: 'Dokąd płynie krew w małym (płucnym) obiegu?', o: ['z serca do płuc i z powrotem do serca', 'z serca do całego ciała', 'z płuc do nerek', 'z wątroby do jelit'], e: 'W płucach krew oddaje CO₂ i pobiera tlen, a potem wraca do lewego przedsionka.' },
        { l: 3, q: 'Która grupa krwi to „uniwersalny dawca”?', o: ['0 Rh−', 'AB Rh+', 'A Rh+', 'B Rh−'], e: 'Krew 0 Rh− można w nagłych przypadkach przetoczyć osobom z każdą grupą.' }
      ] },
      { id: 'uklad-odpornosciowy', name: 'Układ odpornościowy', questions: [
        { l: 1, q: 'Które krwinki bronią organizm przed drobnoustrojami?', o: ['białe (leukocyty)', 'czerwone (erytrocyty)', 'płytki krwi', 'żadne'], e: 'Leukocyty rozpoznają i niszczą bakterie oraz wirusy.' },
        { l: 1, q: 'Co zawiera szczepionka?', o: ['osłabione lub zabite drobnoustroje albo ich fragmenty', 'gotowe antybiotyki', 'witaminy', 'krwinki czerwone'], e: 'Szczepionka „uczy” organizm rozpoznawać zarazek, zanim naprawdę zachorujemy.' },
        { l: 1, q: 'Jak nazywa się lek zwalczający infekcje bakteryjne?', t: ['antybiotyk', 'antybiotyki'], e: 'Antybiotyki działają na bakterie — pierwszym była penicylina.' },
        { l: 2, q: 'Który narząd należy do układu odpornościowego?', o: ['śledziona', 'trzustka', 'nerka', 'żołądek'], e: 'Do układu odpornościowego należą m.in. śledziona, grasica, węzły chłonne i migdałki.' },
        { l: 2, q: 'Jak nazywają się białka wytwarzane przez limfocyty, które unieszkodliwiają antygeny?', t: ['przeciwciała', 'przeciwciało'], e: 'Przeciwciała łączą się z antygenami drobnoustrojów i pomagają je zniszczyć.' },
        { l: 2, q: 'Na co NIE działają antybiotyki?', o: ['na wirusy', 'na bakterie', 'na paciorkowce', 'na gronkowce'], e: 'Grypy i przeziębienia (wirusy) nie leczy się antybiotykami.' },
        { l: 3, q: 'Jaki rodzaj odporności uzyskujemy po szczepieniu?', o: ['sztuczną czynną', 'naturalną czynną', 'naturalną bierną', 'sztuczną bierną'], e: 'Sztuczna — bo dzięki szczepionce; czynna — bo organizm sam wytwarza przeciwciała.' },
        { l: 3, q: 'Wirus HIV niszczy limfocyty i może wywołać chorobę o nazwie:', t: ['aids'], e: 'AIDS to zespół nabytego niedoboru odporności.' },
        { l: 3, q: 'Czym jest alergia?', o: ['nadmierną reakcją układu odpornościowego na nieszkodliwe substancje', 'brakiem białych krwinek', 'chorobą bakteryjną', 'niedoborem witamin'], e: 'Alergeny to np. pyłki, sierść czy roztocza.' }
      ] },
      { id: 'uklad-pokarmowy', name: 'Układ pokarmowy', questions: [
        { l: 1, q: 'Gdzie zaczyna się trawienie?', o: ['w jamie ustnej', 'w żołądku', 'w jelicie grubym', 'w wątrobie'], e: 'Już w ustach ślina zaczyna trawić skrobię.' },
        { l: 1, q: 'Który składnik pokarmu jest głównym budulcem ciała?', o: ['białka', 'cukry', 'tłuszcze', 'woda'], e: 'Białka budują mięśnie i inne tkanki.' },
        { l: 1, q: 'Jak nazywa się przewód łączący gardło z żołądkiem?', t: ['przełyk'], e: 'Przełyk przesuwa pokarm do żołądka.' },
        { l: 2, q: 'Gdzie wchłania się najwięcej składników pokarmowych?', o: ['w jelicie cienkim', 'w żołądku', 'w jelicie grubym', 'w przełyku'], e: 'Jelito cienkie ma kosmki jelitowe, przez które składniki trafiają do krwi.' },
        { l: 2, q: 'Który narząd wytwarza żółć?', t: ['wątroba'], e: 'Żółć z wątroby rozdrabnia (emulguje) tłuszcze.' },
        { l: 2, q: 'Brak witaminy D u dzieci może powodować:', o: ['krzywicę', 'szkorbut', 'kurzą ślepotę', 'anemię'], e: 'Witamina D jest potrzebna do budowy kości.' },
        { l: 3, q: 'Jak nazywa się enzym w ślinie trawiący skrobię?', o: ['amylaza', 'pepsyna', 'lipaza', 'insulina'], e: 'Amylaza ślinowa rozkłada skrobię. Pepsyna trawi białka w żołądku, lipaza — tłuszcze.' },
        { l: 3, q: 'Brak której witaminy powoduje szkorbut?', t: ['c', 'witamina c', 'witaminy c'], e: 'Witamina C — jej źródłem są m.in. owoce cytrusowe i papryka.' },
        { l: 3, q: 'Jaką rolę pełni jelito grube?', o: ['wchłania wodę i formuje kał', 'trawi białka', 'wytwarza żółć', 'rozkłada skrobię'], e: 'W jelicie grubym wchłania się woda, a żyjące tam bakterie wytwarzają niektóre witaminy.' }
      ] },
      { id: 'uklad-wydalniczy', name: 'Układ wydalniczy', questions: [
        { l: 1, q: 'Jakie narządy oczyszczają krew i wytwarzają mocz?', t: ['nerki', 'nerka'], e: 'Nerki filtrują krew i usuwają z niej zbędne substancje.' },
        { l: 1, q: 'Gdzie gromadzi się mocz przed wydaleniem?', o: ['w pęcherzu moczowym', 'w nerkach', 'w żołądku', 'w jelicie grubym'], e: 'Pęcherz moczowy magazynuje mocz.' },
        { l: 1, q: 'Ile nerek ma zdrowy człowiek?', t: ['2', 'dwie'], e: 'Nerki leżą po obu stronach kręgosłupa, w okolicy lędźwiowej.' },
        { l: 2, q: 'Jaki szkodliwy związek, powstający z rozkładu białek, jest usuwany z moczem?', t: ['mocznik'], e: 'Mocznik powstaje w wątrobie i jest wydalany przez nerki.' },
        { l: 2, q: 'Jak nazywają się przewody prowadzące mocz z nerek do pęcherza?', o: ['moczowody', 'cewka moczowa', 'jajowody', 'tętnice nerkowe'], e: 'Moczowody prowadzą mocz do pęcherza, a cewka moczowa — na zewnątrz.' },
        { l: 2, q: 'Jak nazywa się podstawowa jednostka nerki, w której filtruje się krew?', t: ['nefron'], e: 'Każda nerka ma ok. miliona nefronów.' },
        { l: 3, q: 'Które narządy oprócz nerek biorą udział w wydalaniu?', o: ['płuca (CO₂) i skóra (pot)', 'serce i mózg', 'żołądek i przełyk', 'kości i mięśnie'], e: 'Płuca usuwają dwutlenek węgla, a skóra — wodę i sole z potem.' },
        { l: 3, q: 'Jak nazywa się zabieg oczyszczania krwi przy niewydolności nerek („sztuczna nerka”)?', o: ['dializa', 'transfuzja', 'szczepienie', 'biopsja'], e: 'Podczas dializy krew przepływa przez urządzenie, które ją filtruje.' },
        { l: 3, q: 'Ile moczu wydala w przybliżeniu dorosły człowiek w ciągu doby?', o: ['ok. 1,5 litra', 'ok. 0,1 litra', 'ok. 10 litrów', 'ok. 50 litrów'], e: 'Nerki filtrują ok. 180 l krwi na dobę, ale większość wody wraca do krwi.' }
      ] },
      { id: 'uklad-hormonalny', name: 'Układ hormonalny', questions: [
        { l: 1, q: 'Jaki hormon obniża poziom cukru (glukozy) we krwi?', t: ['insulina'], e: 'Insulina umożliwia komórkom pobieranie glukozy z krwi.' },
        { l: 1, q: 'Który narząd wytwarza insulinę?', o: ['trzustka', 'wątroba', 'tarczyca', 'nerka'], e: 'Insulinę wytwarzają wyspy trzustkowe (Langerhansa).' },
        { l: 1, q: 'Czym hormony są transportowane po organizmie?', o: ['z krwią', 'nerwami', 'przez skórę', 'przez przewód pokarmowy'], e: 'Gruczoły dokrewne wydzielają hormony prosto do krwi.' },
        { l: 2, q: 'Który gruczoł nazywa się „nadrzędnym”, bo kieruje pracą innych gruczołów?', o: ['przysadka mózgowa', 'tarczyca', 'nadnercza', 'grasica'], e: 'Przysadka wydziela m.in. hormon wzrostu i hormony sterujące innymi gruczołami.' },
        { l: 2, q: 'Jak nazywa się hormon stresu z nadnerczy, przygotowujący do „walki lub ucieczki”?', t: ['adrenalina'], e: 'Adrenalina przyspiesza pracę serca i oddech.' },
        { l: 2, q: 'Jak nazywa się choroba spowodowana niedoborem insuliny?', t: ['cukrzyca'], e: 'W cukrzycy poziom glukozy we krwi jest zbyt wysoki.' },
        { l: 3, q: 'Jaki pierwiastek jest potrzebny tarczycy do wytwarzania hormonów?', o: ['jod', 'żelazo', 'wapń', 'sód'], e: 'Dlatego sól kuchenna jest jodowana.' },
        { l: 3, q: 'Nadmiar hormonu wzrostu w dzieciństwie powoduje:', o: ['gigantyzm', 'karłowatość', 'cukrzycę', 'krzywicę'], e: 'Niedobór hormonu wzrostu powoduje karłowatość, nadmiar — gigantyzm.' },
        { l: 3, q: 'Jak działa glukagon?', o: ['podwyższa poziom glukozy we krwi', 'obniża poziom glukozy we krwi', 'przyspiesza wzrost kości', 'reguluje ilość wapnia'], e: 'Glukagon i insulina działają przeciwstawnie — razem utrzymują stały poziom cukru.' }
      ] },
      { id: 'uklad-nerwowy-zmysly', name: 'Układ nerwowy i narządy zmysłów', questions: [
        { l: 1, q: 'Jaki jest najważniejszy narząd układu nerwowego?', t: ['mózg', 'mózgowie'], e: 'Mózgowie steruje pracą całego organizmu.' },
        { l: 1, q: 'Jak nazywa się komórka nerwowa?', t: ['neuron'], e: 'Neuron przewodzi impulsy nerwowe.' },
        { l: 1, q: 'Jaki zmysł, oprócz słuchu, ma swój narząd w uchu wewnętrznym?', o: ['równowaga', 'węch', 'smak', 'dotyk'], e: 'W uchu wewnętrznym jest narząd równowagi (błędnik).' },
        { l: 2, q: 'Jak nazywa się szybka, automatyczna reakcja, np. cofnięcie ręki od gorącego garnka?', o: ['odruch', 'nawyk', 'hormon', 'instynkt społeczny'], e: 'Odruch bezwarunkowy przebiega przez łuk odruchowy, bez udziału świadomości.' },
        { l: 2, q: 'W której części oka znajdują się komórki odbierające światło?', o: ['w siatkówce', 'w rogówce', 'w tęczówce', 'w soczewce'], e: 'Siatkówka zawiera fotoreceptory: pręciki i czopki.' },
        { l: 2, q: 'Co tworzy ośrodkowy układ nerwowy?', o: ['mózgowie i rdzeń kręgowy', 'nerwy i zwoje', 'oczy i uszy', 'serce i naczynia'], e: 'Nerwy wychodzące z mózgowia i rdzenia tworzą obwodowy układ nerwowy.' },
        { l: 3, q: 'Jakimi soczewkami koryguje się krótkowzroczność?', o: ['rozpraszającymi (wklęsłymi)', 'skupiającymi (wypukłymi)', 'płaskimi', 'kolorowymi'], e: 'U krótkowidza obraz powstaje przed siatkówką — soczewka rozpraszająca go przesuwa.' },
        { l: 3, q: 'Która część mózgowia odpowiada za równowagę i koordynację ruchów?', t: ['móżdżek'], e: 'Móżdżek pozwala np. utrzymać równowagę na rowerze.' },
        { l: 3, q: 'Które receptory w siatkówce pozwalają widzieć barwy?', o: ['czopki', 'pręciki', 'kubki smakowe', 'ciałka dotykowe'], e: 'Czopki odpowiadają za widzenie barw, pręciki — za widzenie przy słabym świetle.' }
      ] },
      { id: 'uklad-rozrodczy', name: 'Układ rozrodczy', questions: [
        { l: 1, q: 'Jak nazywa się męska komórka rozrodcza?', t: ['plemnik'], e: 'Plemniki powstają w jądrach.' },
        { l: 1, q: 'Jak nazywają się żeńskie gruczoły płciowe, w których powstają komórki jajowe?', o: ['jajniki', 'jądra', 'macica', 'jajowody'], e: 'Jajniki wytwarzają komórki jajowe i hormony płciowe.' },
        { l: 1, q: 'W którym narządzie rozwija się dziecko podczas ciąży?', o: ['w macicy', 'w jajniku', 'w jajowodzie', 'w pęcherzu'], e: 'Macica to narząd, w którym rozwija się zarodek, a potem płód.' },
        { l: 2, q: 'Gdzie najczęściej dochodzi do zapłodnienia?', o: ['w jajowodzie', 'w macicy', 'w jajniku', 'w pochwie'], e: 'Zapłodniona komórka jajowa wędruje z jajowodu do macicy.' },
        { l: 2, q: 'Jak nazywa się okres dojrzewania płciowego?', t: ['pokwitanie', 'dojrzewanie płciowe', 'dojrzewanie'], e: 'W okresie pokwitania ciało zmienia się pod wpływem hormonów płciowych.' },
        { l: 2, q: 'Ile w przybliżeniu trwa ciąża u człowieka?', o: ['ok. 9 miesięcy (40 tygodni)', 'ok. 3 miesiące', 'ok. 12 miesięcy', 'ok. 6 miesięcy'], e: 'Ciąża trwa ok. 280 dni, czyli 40 tygodni.' },
        { l: 3, q: 'Jak nazywa się narząd, przez który płód otrzymuje od matki tlen i pokarm?', t: ['łożysko'], e: 'Łożysko łączy się z płodem przez pępowinę.' },
        { l: 3, q: 'Czym jest owulacja?', o: ['uwolnieniem komórki jajowej z jajnika', 'połączeniem plemnika z komórką jajową', 'złuszczeniem błony śluzowej macicy', 'porodem'], e: 'Owulacja zachodzi zwykle w połowie cyklu miesiączkowego.' },
        { l: 3, q: 'Jak nazywa się główny męski hormon płciowy?', o: ['testosteron', 'estrogen', 'insulina', 'adrenalina'], e: 'Testosteron powstaje w jądrach; żeńskie hormony to m.in. estrogeny i progesteron.' }
      ] },
      { id: 'uklad-oddechowy', name: 'Układ oddechowy', questions: [
        { l: 1, q: 'Jaki gaz pobieramy przy wdechu?', o: ['tlen', 'dwutlenek węgla', 'azot', 'wodór'], e: 'Pobieramy tlen, a wydychamy więcej dwutlenku węgla.' },
        { l: 1, q: 'W jakim narządzie zachodzi wymiana gazowa?', o: ['w płucach', 'w sercu', 'w żołądku', 'w wątrobie'], e: 'W płucach tlen przechodzi do krwi, a dwutlenek węgla — z krwi do powietrza.' },
        { l: 1, q: 'Dlaczego lepiej oddychać przez nos niż przez usta?', o: ['nos ogrzewa, nawilża i oczyszcza powietrze', 'przez nos wpada więcej tlenu', 'usta nie łączą się z płucami', 'nos wytwarza tlen'], e: 'Włoski i śluz w jamie nosowej zatrzymują kurz i drobnoustroje.' },
        { l: 2, q: 'Jak nazywa się mięsień oddzielający klatkę piersiową od jamy brzusznej?', t: ['przepona'], e: 'Skurcz przepony powoduje wdech.' },
        { l: 2, q: 'Co zamyka wejście do krtani podczas połykania?', o: ['nagłośnia', 'język', 'tchawica', 'przełyk'], e: 'Nagłośnia chroni drogi oddechowe przed zakrztuszeniem.' },
        { l: 2, q: 'W jakich strukturach płuc zachodzi wymiana gazowa?', t: ['pęcherzyki płucne', 'pęcherzyki', 'w pęcherzykach płucnych'], e: 'Pęcherzyki płucne są oplecione naczyniami włosowatymi.' },
        { l: 3, q: 'Jaka jest droga powietrza podczas wdechu?', o: ['jama nosowa → gardło → krtań → tchawica → oskrzela → płuca', 'jama nosowa → krtań → gardło → oskrzela → tchawica → płuca', 'jama ustna → przełyk → tchawica → płuca', 'jama nosowa → tchawica → gardło → krtań → płuca'], e: 'Z gardła powietrze trafia do krtani, tchawicy i przez oskrzela do płuc.' },
        { l: 3, q: 'Co znajduje się w krtani i pozwala nam mówić?', o: ['struny (fałdy) głosowe', 'pęcherzyki płucne', 'nagłośnia', 'migdałki'], e: 'Drgające struny głosowe wytwarzają dźwięki.' },
        { l: 3, q: 'Gdzie w komórce zachodzi oddychanie komórkowe (uwalnianie energii)?', o: ['w mitochondriach', 'w jądrze', 'w chloroplastach', 'w błonie komórkowej'], e: 'W mitochondriach glukoza jest rozkładana z udziałem tlenu i powstaje energia.' }
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
