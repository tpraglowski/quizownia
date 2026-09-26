// Język hiszpański. Format pytań jak w polski.js (o: pierwsza poprawna, t: do wpisania).
// Odpowiedź wpisana bez akcentów (np. "estan") jest zaliczana, ale strona przypomina o akcencie.
SUBJECTS.push({
  id: 'hiszpanski', name: 'Język hiszpański', emoji: '💃', color: '#c2410c',
  grades: {
    7: [
      { id: 'czasowniki-presente', name: 'Czasowniki w czasie teraźniejszym', questions: [
        { l: 1, q: 'Odmień czasownik: yo (hablar) ___', t: ['hablo'], e: 'Czasowniki na -ar: hablo, hablas, habla, hablamos, habláis, hablan.' },
        { l: 1, q: 'Odmień czasownik: tú (comer) ___', t: ['comes'], e: 'Czasowniki na -er: como, comes, come, comemos, coméis, comen.' },
        { l: 1, q: 'Odmień czasownik: nosotros (vivir) ___', t: ['vivimos'], e: 'Czasowniki na -ir: vivo, vives, vive, vivimos, vivís, viven.' },
        { l: 1, q: 'Jaką końcówkę ma czasownik na -ar w 3. osobie liczby pojedynczej (él/ella)?', o: ['-a', '-e', '-o', '-as'], e: 'Él habla, ella trabaja. Czasowniki na -er i -ir mają tu końcówkę -e: come, vive.' },
        { l: 2, q: 'Odmień czasownik nieregularny: yo (tener) ___', t: ['tengo'], e: 'Tener: tengo, tienes, tiene, tenemos, tenéis, tienen.' },
        { l: 2, q: 'Odmień czasownik: ella (ser) ___ simpática.', t: ['es'], e: 'Ser: soy, eres, es, somos, sois, son.' },
        { l: 2, q: 'Odmień czasownik: nosotros (ir) ___ al colegio.', t: ['vamos'], e: 'Ir: voy, vas, va, vamos, vais, van.' },
        { l: 2, q: 'Odmień czasownik: él (querer) ___ un helado.', t: ['quiere'], e: 'Querer zmienia e → ie: quiero, quieres, quiere, queremos, queréis, quieren.' },
        { l: 2, q: 'Yo ___ los deberes. (hacer)', o: ['hago', 'hazo', 'hace', 'haco'], e: 'Hacer jest nieregularny w 1. osobie: hago, haces, hace, hacemos, hacéis, hacen.' },
        { l: 3, q: 'Odmień czasownik zwrotny: yo (levantarse) ___ a las siete.', t: ['me levanto'], e: 'Zaimek zwrotny stoi przed czasownikiem: me levanto, te levantas, se levanta, nos levantamos, os levantáis, se levantan.' },
        { l: 3, q: 'Uzupełnij: ¿Cómo (llamarse) ___ tú?', t: ['te llamas'], e: 'Llamarse: me llamo, te llamas, se llama… „¿Cómo te llamas?” = Jak masz na imię?' },
        { l: 3, q: 'Odmień czasownik: nosotros (ducharse) ___ por la mañana.', t: ['nos duchamos'], e: 'W 1. osobie liczby mnogiej zaimek to „nos”: nos duchamos.' },
        { l: 3, q: 'Odmień czasownik: ellos (poder) ___ jugar.', t: ['pueden'], e: 'Poder zmienia o → ue (oprócz nosotros i vosotros): puedo, puedes, puede, podemos, podéis, pueden.' },
        { l: 3, q: 'Która forma jest poprawna? vosotros (acostarse)', o: ['os acostáis', 'se acostáis', 'os acuestáis', 'nos acostamos'], e: 'Acostarse zmienia o → ue, ale nie w formach nosotros i vosotros. Zaimek dla vosotros to „os”.' }
      ] },
      { id: 'sala-lekcyjna', name: 'Sala lekcyjna: hay i estar', questions: [
        { l: 1, q: '„La pizarra” to po polsku:', o: ['tablica', 'ławka', 'piórnik', 'okno'], e: 'La pizarra = tablica, el pupitre = ławka, el estuche = piórnik, la ventana = okno.' },
        { l: 1, q: 'Jak jest po hiszpańsku „krzesło”?', t: ['silla', 'la silla'], e: 'La silla = krzesło, la mesa = stół (biurko nauczyciela).' },
        { l: 1, q: '„Debajo de” oznacza:', o: ['pod', 'na', 'obok', 'za'], e: 'Debajo de = pod, encima de = na, al lado de = obok, detrás de = za.' },
        { l: 1, q: '„Encima de la mesa” oznacza:', o: ['na stole', 'pod stołem', 'obok stołu', 'przed stołem'], e: 'Encima de = na (na powierzchni czegoś).' },
        { l: 2, q: 'En la clase ___ una pizarra.', o: ['hay', 'está', 'están', 'es'], e: '„Hay” informuje, że coś jest (istnieje). Używamy go z rodzajnikiem nieokreślonym (un, una), liczebnikiem albo bez rodzajnika.' },
        { l: 2, q: 'La mochila ___ debajo de la silla.', o: ['está', 'hay', 'están', 'es'], e: '„Estar” mówi, gdzie coś się znajduje. Z rodzajnikiem określonym (el, la) używamy estar, a nie hay.' },
        { l: 2, q: 'Los libros ___ en la estantería.', o: ['están', 'está', 'hay', 'son'], e: 'Los libros to liczba mnoga, więc „están”. Położenie → estar.' },
        { l: 2, q: 'Jak jest po hiszpańsku „piórnik”?', t: ['estuche', 'el estuche'], e: 'El estuche = piórnik. W środku: el bolígrafo (długopis), el lápiz (ołówek), la goma (gumka), la regla (linijka).' },
        { l: 3, q: 'Które zdanie jest poprawne?', o: ['Hay un ordenador al lado de la ventana.', 'Hay el ordenador al lado de la ventana.', 'Está un ordenador al lado de la ventana.', 'Hay un ordenador al lado del la ventana.'], e: 'Hay + un/una (rodzajnik nieokreślony). Nigdy „hay el/la”.' },
        { l: 3, q: 'Jak powiedzieć: „Tablica jest między oknem a drzwiami”?', o: ['La pizarra está entre la ventana y la puerta.', 'La pizarra hay entre la ventana y la puerta.', 'Hay la pizarra entre la ventana y la puerta.', 'La pizarra está entre de la ventana y la puerta.'], e: 'Konkretna tablica (la pizarra) → está. Po „entre” nie dodajemy „de”.' },
        { l: 3, q: 'Uzupełnij: El bolígrafo está al lado ___ cuaderno. (de + el)', t: ['del'], e: 'De + el łączy się w „del”: al lado del cuaderno. (De + la się nie łączy: al lado de la mesa.)' },
        { l: 3, q: 'En la clase ___ veinte pupitres.', o: ['hay', 'están', 'es', 'está'], e: '„Hay” ma jedną formę dla liczby pojedynczej i mnogiej: hay una silla, hay veinte pupitres.' },
        { l: 3, q: 'Uzupełnij: El mapa está ___ de la pizarra. (za)', t: ['detrás'], e: 'Detrás de = za, delante de = przed. Uwaga: „el mapa” jest rodzaju męskiego!' }
      ] }
    ]
  }
});
