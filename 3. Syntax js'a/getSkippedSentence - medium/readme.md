<h2 align="center">Opis zadania getSkippedSentence</h2>

<br>

## Wymagana wiedza

- Podstawowa znajomość JS-a.

## Cele główne

- [ ] Napisz funkcję, która przyjmuje 2 argumenty - sentence (string), skip (number).
- [ ] Zadaniem funkcji jest zwrócenie zmodyfikowanej wartości argumentu sentence, w której pomijamy jakikolwiek znak w zależności od tego czy jego pozycja (lokalizacja w sentence) jest wielokrotnością wartości skip.
- [ ] Pamiętaj o przewidzeniu podstawowej walidacji dla przekazanych argumentów.

## Cele opcjonalne do wykonania

- [ ] Brak

## Przydatne linki

- Instrukcje warunkowe w JS - http://kursjs.pl/kurs/super-podstawy/instrukcje-warunkowe
- Pętle w JS - http://kursjs.pl/kurs/super-podstawy/petle
- Funkcja w JS - http://kursjs.pl/kurs/super-podstawy/funkcje
- String methods w JS - https://developer.mozilla.org/pl/docs/Web/JavaScript/Reference/Global_Objects/String

## Kawałek kodu dla lepszego początku!

```javascript
const getSkippedSentence = (sentence, skip) => {};
```

## Przykładowy wynik po użyciu funkcji

```javascript
const result1 = getSkippedSentence("abcdefghijk", 2);
// result1 === 'acegik'
const result2 = getSkippedSentence("this is my new sentence", 2);
// result2 === 'ti sm e etne'
```
