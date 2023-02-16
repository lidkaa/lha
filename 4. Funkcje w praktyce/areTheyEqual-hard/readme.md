<h2 align="center">Opis zadania areTheyEqual</h2>

<br>

## Wymagana wiedza

- Podstawowa znajomość JS-a.

## Cele główne

- [ ] Napisz funkcję, która przyjmuje 2 argumenty - firstValue, secondValue.
- [ ] Zadaniem funkcji jest zwrócenie czy przekazane wartości są równe ze względu na ich wartość jak i typ.
- [ ] Zakładamy, że do funkcji mogą trafić typy proste oraz złożone.
- [ ] Zakładamy, że porównanie odbywa się maksymalnie 1-poziomowe (shallowComparision).

## Cele opcjonalne do wykonania

- [ ] Zamiast porównywania 1-poziomowego, funkcja będzie działała również wielo-poziomowo (deepComparision / nested)

## Przydatne linki

- Instrukcje warunkowe w JS - http://kursjs.pl/kurs/super-podstawy/instrukcje-warunkowe
- Funkcja w JS - http://kursjs.pl/kurs/super-podstawy/funkcje
- Rekurencja - http://kursjs.pl/kurs/super-podstawy/funkcje-tematy-dodatkowe#rekurencja
- Object methods w JS - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object
- Porównywanie różnych typów danych - https://www.freecodecamp.org/news/javascript-comparison-operators-how-to-compare-objects-for-equality-in-js/

## Kawałek kodu dla lepszego początku!

```javascript
const areTheyEqual = (firstValue, secondValue) => {};
```

## Przykładowy wynik po użyciu funkcji

```javascript
areTheyEqual("8", "8"); // true
areTheyEqual("8", 8); // false
areTheyEqual("Hi there", "Hi there."); // false
```
