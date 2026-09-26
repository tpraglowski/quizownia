// Język angielski. Format pytań jak w polski.js (o: pierwsza poprawna, t: do wpisania).
SUBJECTS.push({
  id: 'angielski', name: 'Język angielski', icon: 'dymekEN', color: '#26890c',
  grades: {
    4: [
      { id: 'slowka-4', name: 'Kolory, liczby, zwierzęta', questions: [
        { l: 1, q: 'Jak jest po angielsku „czerwony”?', t: ['red'], e: 'Czerwony = red. Inne kolory: blue, green, yellow, black, white.' },
        { l: 1, q: '„Dog” to po polsku:', o: ['pies', 'kot', 'koń', 'ptak'], e: 'Dog = pies, cat = kot, horse = koń, bird = ptak.' },
        { l: 1, q: 'Jak jest po angielsku liczba 12?', o: ['twelve', 'twenty', 'eleven', 'two'], e: '11 = eleven, 12 = twelve, 20 = twenty.' },
        { l: 2, q: 'Jak jest po angielsku „fioletowy”?', t: ['purple', 'violet'], e: 'Fioletowy = purple (albo violet).' },
        { l: 2, q: 'Wpisz słownie po angielsku liczbę 15.', t: ['fifteen'], e: '15 = fifteen (uwaga: nie „fiveteen”).' },
        { l: 2, q: '„Mouse” w liczbie mnogiej to:', o: ['mice', 'mouses', 'mousees', 'meese'], e: 'Mouse → mice to liczba mnoga nieregularna.' },
        { l: 3, q: 'Wpisz słownie po angielsku liczbę 40.', t: ['forty'], e: '40 = forty (bez „u”, choć four ma „u”!).' },
        { l: 3, q: 'Jak jest po angielsku „żyrafa”?', t: ['giraffe'], e: 'Żyrafa = giraffe (dwa f na końcu).' },
        { l: 3, q: 'Które zwierzę NIE jest ssakiem?', o: ['snake', 'whale', 'bat', 'dolphin'], e: 'Snake (wąż) to gad. Whale (wieloryb), bat (nietoperz) i dolphin (delfin) są ssakami.' }
      ] },
      { id: 'to-be', name: 'Czasownik „to be”', questions: [
        { l: 1, q: 'I ___ a student.', o: ['am', 'is', 'are'], e: 'Z „I” zawsze używamy „am”: I am.' },
        { l: 1, q: 'She ___ my sister.', o: ['is', 'am', 'are'], e: 'He / she / it → is.' },
        { l: 1, q: 'They ___ happy.', o: ['are', 'is', 'am'], e: 'We / you / they → are.' },
        { l: 2, q: 'Wpisz skrót: „I am” = ?', t: ["i'm", 'i’m'], e: 'I am = I’m.' },
        { l: 2, q: 'Uzupełnij przeczenie: He ___ not at school. (jedno słowo)', t: ['is'], e: 'Przeczenie: he is not (he isn’t).' },
        { l: 2, q: '___ you ready?', o: ['Are', 'Is', 'Am'], e: 'W pytaniu przestawiamy czasownik na początek: Are you…?' },
        { l: 3, q: 'Wpisz skrót: „they are not” = they ___', t: ["aren't", 'aren’t'], e: 'Are not = aren’t: they aren’t.' },
        { l: 3, q: 'My friends and I ___ in the park.', o: ['are', 'is', 'am'], e: '„My friends and I” = „we”, więc „are”.' },
        { l: 3, q: 'Które zdanie jest poprawne?', o: ['The dog is hungry.', 'The dog are hungry.', 'The dog am hungry.', 'The dog be hungry.'], e: 'The dog = it, więc „is”.' }
      ] }
    ],
    5: [
      { id: 'present-simple', name: 'Present Simple', questions: [
        { l: 1, q: 'She ___ to school every day.', o: ['goes', 'go', 'going', 'gone'], e: 'W 3. osobie (he/she/it) dodajemy -s lub -es: she goes.' },
        { l: 1, q: 'I ___ football on Saturdays.', o: ['play', 'plays', 'playing', 'played'], e: 'Z „I” czasownik bez końcówki: I play.' },
        { l: 1, q: 'Do którego słowa pasuje Present Simple?', o: ['always', 'now', 'yesterday', 'tomorrow'], e: 'Present Simple opisuje czynności powtarzające się: always, usually, often, every day.' },
        { l: 2, q: 'He ___ like pizza. (przeczenie, jedno słowo)', t: ["doesn't", 'doesn’t', 'does not'], e: 'Przeczenie w 3. osobie: he doesn’t like.' },
        { l: 2, q: '___ they live in London?', o: ['Do', 'Does', 'Are', 'Is'], e: 'Pytanie z they: Do they…? (does tylko dla he/she/it).' },
        { l: 2, q: 'Wpisz poprawną formę: My dad (watch) ___ TV every evening.', t: ['watches'], e: 'Po -ch, -sh, -s, -x, -o dodajemy -es: watches.' },
        { l: 3, q: 'Wpisz poprawną formę: She (study) ___ English.', t: ['studies'], e: 'Spółgłoska + y → -ies: study → studies.' },
        { l: 3, q: 'Które zdanie jest poprawne?', o: ['Does she speak French?', 'Does she speaks French?', 'Do she speak French?', 'She does speaks French?'], e: 'Po „does” czasownik wraca do formy podstawowej: Does she speak…?' },
        { l: 3, q: 'Wpisz formę: He (have) ___ two brothers.', t: ['has'], e: 'Have w 3. osobie to „has”.' }
      ] },
      { id: 'jedzenie', name: 'Jedzenie i there is / there are', questions: [
        { l: 1, q: '„Bread” to:', o: ['chleb', 'masło', 'ser', 'mleko'], e: 'Bread = chleb, butter = masło, cheese = ser, milk = mleko.' },
        { l: 1, q: 'There ___ an apple on the table.', o: ['is', 'are'], e: 'Jedna rzecz → there is.' },
        { l: 1, q: 'There ___ three eggs in the fridge.', o: ['are', 'is'], e: 'Kilka rzeczy → there are.' },
        { l: 2, q: 'Jak jest po angielsku „marchewka”?', t: ['carrot'], e: 'Marchewka = carrot.' },
        { l: 2, q: 'There isn’t ___ milk.', o: ['any', 'some', 'a', 'many'], e: 'W przeczeniach i pytaniach używamy „any”.' },
        { l: 2, q: 'Is there ___ sugar?', o: ['any', 'a', 'many', 'an'], e: 'Sugar jest niepoliczalny, w pytaniu: any.' },
        { l: 3, q: 'How ___ water do you drink?', o: ['much', 'many'], e: 'Water jest niepoliczalna → how much. Policzalne (apples) → how many.' },
        { l: 3, q: 'Wpisz: How ___ apples are there? (much/many)', t: ['many'], e: 'Apples można policzyć → how many.' },
        { l: 3, q: 'Które zdanie jest poprawne?', o: ['There are some bananas.', 'There is some bananas.', 'There are a bananas.', 'There is any bananas.'], e: 'Liczba mnoga → there are; w zdaniu twierdzącym → some.' }
      ] }
    ],
    6: [
      { id: 'past-simple', name: 'Past Simple', questions: [
        { l: 1, q: 'Yesterday I ___ my grandma.', o: ['visited', 'visit', 'visits', 'visiting'], e: 'Czasowniki regularne w Past Simple mają końcówkę -ed.' },
        { l: 1, q: 'Past Simple od „go” to:', o: ['went', 'goed', 'gone', 'goes'], e: 'Go to czasownik nieregularny: go – went – gone.' },
        { l: 1, q: 'Które słowo pasuje do Past Simple?', o: ['last week', 'now', 'every day', 'tomorrow'], e: 'Past Simple: yesterday, last week, ago, in 2010.' },
        { l: 2, q: 'Wpisz Past Simple od „see”.', t: ['saw'], e: 'See – saw – seen.' },
        { l: 2, q: 'She ___ go to the party. (przeczenie)', t: ["didn't", 'didn’t', 'did not'], e: 'Przeczenie w Past Simple: didn’t + forma podstawowa.' },
        { l: 2, q: '___ you watch the film?', o: ['Did', 'Do', 'Was', 'Were'], e: 'Pytanie w Past Simple: Did + podmiot + forma podstawowa.' },
        { l: 3, q: 'Wpisz Past Simple od „buy”.', t: ['bought'], e: 'Buy – bought – bought.' },
        { l: 3, q: 'Które zdanie jest poprawne?', o: ['Did he eat breakfast?', 'Did he ate breakfast?', 'Does he ate breakfast?', 'He did ate breakfast?'], e: 'Po „did” czasownik jest w formie podstawowej: eat, nie ate.' },
        { l: 3, q: 'Wpisz Past Simple od „stop”.', t: ['stopped'], e: 'Krótka sylaba zakończona spółgłoską → podwajamy: stopped.' }
      ] },
      { id: 'stopniowanie', name: 'Stopniowanie przymiotników', questions: [
        { l: 1, q: 'Stopień wyższy od „tall” to:', o: ['taller', 'more tall', 'tallest', 'tallier'], e: 'Krótkie przymiotniki: + -er (taller), + -est (the tallest).' },
        { l: 1, q: 'Stopień najwyższy od „small” to:', o: ['the smallest', 'the more small', 'smaller', 'the smaller'], e: 'Small – smaller – the smallest.' },
        { l: 1, q: 'An elephant is ___ than a dog.', o: ['bigger', 'big', 'biggest', 'more big'], e: 'Big → bigger (podwajamy g), porównanie + than.' },
        { l: 2, q: 'Wpisz stopień wyższy od „good”.', t: ['better'], e: 'Good – better – the best (nieregularny).' },
        { l: 2, q: 'This book is ___ than that one.', o: ['more interesting', 'interestinger', 'most interesting', 'more interestinger'], e: 'Długie przymiotniki: more / the most.' },
        { l: 2, q: 'Wpisz stopień wyższy od „happy”.', t: ['happier'], e: 'Y po spółgłosce → -ier: happier.' },
        { l: 3, q: 'Wpisz stopień najwyższy od „bad” (bez „the”).', t: ['worst', 'the worst'], e: 'Bad – worse – the worst.' },
        { l: 3, q: 'Które zdanie jest poprawne?', o: ['She is the best student in the class.', 'She is the goodest student in the class.', 'She is the better student in the class.', 'She is best student of class.'], e: 'Good – better – the best.' },
        { l: 3, q: 'My bag is as heavy ___ yours.', o: ['as', 'than', 'like', 'so'], e: 'Porównanie równości: as … as.' }
      ] }
    ],
    7: [
      { id: 'present-perfect', name: 'Present Perfect', questions: [
        { l: 1, q: 'I ___ finished my homework.', o: ['have', 'has', 'am', 'did'], e: 'Present Perfect: have/has + III forma. Z „I” — have.' },
        { l: 1, q: 'She ___ been to Paris.', o: ['has', 'have', 'is', 'was'], e: 'He/she/it → has.' },
        { l: 1, q: 'III forma od „write” to:', o: ['written', 'wrote', 'writed', 'writing'], e: 'Write – wrote – written.' },
        { l: 2, q: 'Wpisz III formę od „eat”.', t: ['eaten'], e: 'Eat – ate – eaten.' },
        { l: 2, q: 'Have you ___ seen a whale?', o: ['ever', 'yet', 'ago', 'yesterday'], e: '„Ever” w pytaniach: Have you ever…? (Czy kiedykolwiek…?)' },
        { l: 2, q: 'I haven’t finished ___.', o: ['yet', 'already', 'ever', 'ago'], e: '„Yet” na końcu przeczeń i pytań: jeszcze nie.' },
        { l: 3, q: 'I have lived here ___ 2015.', o: ['since', 'for', 'ago', 'from'], e: 'Since + moment w czasie (since 2015), for + okres (for 5 years).' },
        { l: 3, q: 'Które zdanie jest poprawne?', o: ['I saw that film last week.', 'I have seen that film last week.', 'I have saw that film last week.', 'I seen that film last week.'], e: 'Z określeniem czasu przeszłego (last week) używamy Past Simple, nie Present Perfect.' },
        { l: 3, q: 'Wpisz III formę od „bring”.', t: ['brought'], e: 'Bring – brought – brought.' }
      ] },
      { id: 'future', name: 'Przyszłość: will i going to', questions: [
        { l: 1, q: 'I think it ___ rain tomorrow.', o: ['will', 'is', 'does', 'has'], e: 'Przewidywania oparte na opinii (I think) → will.' },
        { l: 1, q: 'We are ___ to visit Kraków next week.', o: ['going', 'go', 'will', 'went'], e: 'Plany i zamiary → be going to.' },
        { l: 1, q: 'Skrót od „will not” to:', o: ['won’t', 'willn’t', 'wont’', 'don’t'], e: 'Will not = won’t.' },
        { l: 2, q: 'Look at those clouds! It ___ rain.', o: ['is going to', 'will', 'rains', 'rained'], e: 'Przewidywanie na podstawie tego, co widać → going to.' },
        { l: 2, q: 'Wpisz: The phone is ringing. — I ___ answer it! (jedno słowo)', t: ['will', "'ll"], e: 'Decyzja podjęta w chwili mówienia → will.' },
        { l: 2, q: '___ you help me, please?', o: ['Will', 'Are', 'Going', 'Do'], e: 'Prośby: Will you…?' },
        { l: 3, q: 'Które zdanie wyraża wcześniej zaplanowany zamiar?', o: ['I’m going to study medicine.', 'I’ll get you some water.', 'Maybe it will snow.', 'I think you will like it.'], e: 'Zamiar, który już mamy → going to.' },
        { l: 3, q: 'Wpisz brakujące słowo: She ___ going to buy a new bike.', t: ['is', "'s"], e: 'Be going to: she is going to.' },
        { l: 3, q: 'Które zdanie jest poprawne?', o: ['He won’t come to the party.', 'He won’t comes to the party.', 'He willn’t come to the party.', 'He not will come to the party.'], e: 'Po will/won’t czasownik w formie podstawowej.' }
      ] }
    ],
    8: [
      { id: 'conditionals', name: 'Okresy warunkowe', questions: [
        { l: 1, q: 'If you heat ice, it ___.', o: ['melts', 'melted', 'will melted', 'would melt'], e: 'Okres zerowy (prawdy ogólne): If + Present Simple, Present Simple.' },
        { l: 1, q: 'If it rains, we ___ stay at home.', o: ['will', 'would', 'did', 'are'], e: 'I okres (realna przyszłość): If + Present Simple, will + czasownik.' },
        { l: 1, q: 'If I ___ rich, I would buy a boat.', o: ['were', 'am', 'will be', 'be'], e: 'II okres (sytuacja nierealna): If + Past Simple, would + czasownik. Z „I” często „were”.' },
        { l: 2, q: 'Wpisz: If she (study) ___, she will pass the test.', t: ['studies'], e: 'W zdaniu z if w I okresie — Present Simple: she studies.' },
        { l: 2, q: 'If I had wings, I ___ fly.', o: ['would', 'will', 'can', 'am'], e: 'II okres: would + czasownik.' },
        { l: 2, q: 'Który okres opisuje nierealną sytuację w teraźniejszości?', o: ['drugi', 'zerowy', 'pierwszy'], e: 'II okres: If I were you… — nie jestem tobą, więc to nierealne.' },
        { l: 3, q: 'Które zdanie jest poprawne?', o: ['If I see him, I will tell him.', 'If I will see him, I will tell him.', 'If I saw him, I will tell him.', 'If I see him, I would told him.'], e: 'Po „if” w I okresie nie używamy „will”.' },
        { l: 3, q: 'Wpisz: If I ___ you, I would apologize. (to be)', t: ['were', 'was'], e: 'If I were you — klasyczna rada w II okresie.' },
        { l: 3, q: '___ you hurry, you will miss the bus. (= Jeśli się nie pospieszysz…)', o: ['Unless', 'If', 'When', 'Because'], e: 'Unless = if not. „Unless you hurry” znaczy to samo co „If you don’t hurry”.' }
      ] },
      { id: 'passive', name: 'Strona bierna', questions: [
        { l: 1, q: 'The cake ___ made by my mum.', o: ['was', 'were', 'did', 'has'], e: 'Strona bierna: be + III forma. The cake (liczba poj.) → was.' },
        { l: 1, q: 'English ___ spoken all over the world.', o: ['is', 'are', 'does', 'be'], e: 'Present Simple w stronie biernej: is/are + III forma.' },
        { l: 1, q: 'Strona bierna składa się z:', o: ['be + III forma czasownika', 'have + III forma', 'will + bezokolicznik', 'do + czasownik'], e: 'Passive: odpowiednia forma „be” + past participle.' },
        { l: 2, q: 'The windows ___ cleaned every week.', o: ['are', 'is', 'was', 'be'], e: 'The windows (liczba mnoga), Present Simple → are.' },
        { l: 2, q: 'Wpisz III formę: The letter was (write) ___ yesterday.', t: ['written'], e: 'Write – wrote – written.' },
        { l: 2, q: '„Romeo and Juliet” was written ___ Shakespeare.', o: ['by', 'from', 'of', 'with'], e: 'Wykonawcę czynności wprowadzamy przez „by”.' },
        { l: 3, q: 'Zamień na stronę bierną: „They built this bridge in 1900.”', o: ['This bridge was built in 1900.', 'This bridge built in 1900.', 'This bridge is build in 1900.', 'This bridge was build in 1900.'], e: 'Past Simple → was/were + III forma: was built.' },
        { l: 3, q: 'Wpisz brakujące słowo: The work will ___ finished tomorrow.', t: ['be'], e: 'Future passive: will be + III forma.' },
        { l: 3, q: 'The thief ___ caught yet.', o: ['hasn’t been', 'wasn’t', 'isn’t', 'hasn’t'], e: 'Present Perfect passive: has/have been + III forma; „yet” wskazuje Present Perfect.' }
      ] }
    ]
  }
});
