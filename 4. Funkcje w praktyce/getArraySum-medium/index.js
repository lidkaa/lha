import { validation } from "../../validation.js";

let sum = 0;

const getArraySum = (numbersArray, initialValue) => {

    validation(
        {
            value: numbersArray,
            type: 'Array'

        },
        {
            value: initialValue,
            type: 'Number'

        })

    if (numbersArray.length > 1) {

        if (numbersArray.length > 0) {
            sum += numbersArray[0] + numbersArray[1];
            numbersArray.shift();
            numbersArray.shift();
            if (numbersArray.length != 0) getArraySum(numbersArray, 0);
        }

        if (numbersArray.length === 1) {
            sum += numbersArray[0];
            numbersArray.shift();
        }

    }

    return sum + initialValue;
}

const exampleArray = [1, 1, 5, 1, 1, 1, 1];
const startingNumber = 5;
console.log(getArraySum(exampleArray, startingNumber));



// to explain (?)
// const collatz = (n) => {
//     if (n === 1) return 0;
//     return n % 2 === 0 ? collatz(n / 2) + 1 : collatz(3 * n + 1) + 1;

// };

// console.log(collatz(4));


// jak to zrobić bez definiowania sum przed funkcją?


