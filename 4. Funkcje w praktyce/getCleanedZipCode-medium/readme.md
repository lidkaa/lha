<h2 align="center">Opis zadania getCleanedZipCode</h2>

<br>

## Wymagana wiedza

-   Podstawowa znajomość JS-a.

## Cele główne

-   [ ] Napisz funkcję, która przyjmuje 1 argument - value (number lub string).
-   [ ] Zadaniem funkcji jest zwrócenie stringa w strukturze AB-CDE gdzie pojedyńcza litera stanowi kolejną cyfrę z przekazanej do funkcji value.
-   [ ] Pamiętaj o przewidzeniu podstawowej walidacji dla przekazanego argumentu.

## Cele opcjonalne do wykonania

-   [ ] Wykonaj to zadanie przy wykorzystaniu RegExpa

## Przydatne linki

-   Funkcja w JS - http://kursjs.pl/kurs/super-podstawy/funkcje
-   String methods w JS - https://developer.mozilla.org/pl/docs/Web/JavaScript/Reference/Global_Objects/String
-   Regexp w JS - https://developer.mozilla.org/pl/docs/Web/JavaScript/Reference/Global_Objects/RegExp
-   Playground dla Regexpów - https://regex101.com/

## Kawałek kodu dla lepszego początku!

```javascript
const getCleanedZipCode = (value) => {}
```

## Przykładowy wynik po użyciu funkcji

```javascript
getCleanedZipCode("") // ""
getCleanedZipCode("123") // ""
getCleanedZipCode(123) // ""
getCleanedZipCode("1-2-3-4-5") // ""
getCleanedZipCode("12-345") // "12-345"
getCleanedZipCode("12 345") // "12-345"
getCleanedZipCode("12345") // "12-345"
getCleanedZipCode(12345) // "12-345"
getCleanedZipCode("123456") // ""
```
