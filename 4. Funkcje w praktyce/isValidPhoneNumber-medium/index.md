<h2 align="center">Opis zadania isValidPhoneNumber</h2>

<br>

## Wymagana wiedza

-   Podstawowa znajomość JS-a.

## Cele główne

-   [ ] Napisz funkcję, która przyjmuje 1 argument - value (number lub string).
-   [ ] Zadaniem funkcji jest zwrócenie czy przekazana wartość argumentu to poprwany numer telefonu.
-   [ ] Zakładamy, że warunek zostanie spełniony dla wartości value bez wykorzystania spacji, z wykorzystaniem spacjami lub oddzielony '-'.
-   [ ] Pamiętaj o przewidzeniu podstawowej walidacji dla przekazanego argumentu.

## Cele opcjonalne do wykonania

-   [ ] Brak

## Przydatne linki

-   Funkcja w JS - http://kursjs.pl/kurs/super-podstawy/funkcje
-   String methods w JS - https://developer.mozilla.org/pl/docs/Web/JavaScript/Reference/Global_Objects/String
-   Regexp w JS - https://developer.mozilla.org/pl/docs/Web/JavaScript/Reference/Global_Objects/RegExp
-   Playground dla Regexpów - https://regex101.com/

## Kawałek kodu dla lepszego początku!

```javascript
const isValidPhoneNumber = (value) => {}
```

## Przykładowy wynik po użyciu funkcji

```javascript
isValidPhoneNumber(123123123) // true
isValidPhoneNumber("123123123") // true
isValidPhoneNumber("123-123-123") // true
isValidPhoneNumber("123 123 123") // true
isValidPhoneNumber("123-123 123") // false
```
