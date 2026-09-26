# Quizownia

Quizy do nauki w stylu Kahoot: pytania z czterema kolorowymi odpowiedziami, odliczanie czasu, punkty za szybkość, serie poprawnych odpowiedzi i podium.

- **Gra solo lub kilka osób na zmianę** na jednym urządzeniu
- **Tryb nauki**: po grze omówienie każdego pytania i przycisk „Powtórz błędne”
- **Własne quizy**: edytor pytań, zapis w przeglądarce, eksport/import do pliku `.json`
- Skróty klawiszowe 1–4 do odpowiadania

Strona jest statyczna (HTML + CSS + JS) i działa na GitHub Pages bez żadnego serwera.

## Format pliku quizu

```json
{
  "title": "Mój quiz",
  "emoji": "📚",
  "questions": [
    { "q": "Ile to 2 + 2?", "a": ["3", "4", "5", "22"], "c": 1, "t": 20 }
  ]
}
```

`c` to numer poprawnej odpowiedzi (od 0), `t` to czas w sekundach (5, 10, 15, 20, 30 lub 60).
