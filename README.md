# Quizownia

Lekcje z pytaniami dla klas 4–8: **wybierz przedmiot → klasę → temat** i rozpocznij lekcję.

- Pytania do wyboru (A/B/C/D) i do wpisania
- Po błędzie system wyjaśnia, dlaczego odpowiedź jest inna
- **Poziom dopasowuje się**: 2 dobre odpowiedzi z rzędu → trudniejsze pytania, błąd → łatwiejsze
- Gwiazdki i postęp dla każdego tematu (zapisywane w przeglądarce)
- Po lekcji: lista błędów z wyjaśnieniami i przycisk „Powtórz błędy”
- Matematyka: zadania generowane losowo — nigdy się nie kończą

Strona jest statyczna (HTML + CSS + JS) i działa na GitHub Pages bez serwera.

## Dodawanie pytań

Pytania są w folderze `data/` — jeden plik na przedmiot. Każdy temat to:

```js
{ id: 'ulamki', name: 'Ułamki', questions: [
  // wybór: PIERWSZA odpowiedź jest poprawna (kolejność miesza się sama)
  { l: 1, q: 'Ile to 1/2 + 1/2?', o: ['1', '2/4', '1/4', '2'], e: 'Połówka i połówka to całość.' },
  // wpisywanie: wszystkie akceptowane odpowiedzi
  { l: 2, q: 'Stolica Polski?', t: ['warszawa'], e: 'Warszawa jest stolicą od 1596 r.' }
] }
```

`l` to poziom (1 łatwy, 2 średni, 3 trudny), `e` to wyjaśnienie pokazywane po błędzie. Wielkość liter i spacje nie mają znaczenia, a liczby można wpisać z przecinkiem lub jako ułamek.

Nowy przedmiot: dodaj plik w `data/` z `SUBJECTS.push({ id, name, emoji, color, grades: { 4: [...], 5: [...] } })` i dołącz go w `index.html`.
