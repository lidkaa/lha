import { validation } from "../../validation.js";

let sum = 0;
const getArraySum = (numbersArray, initialValue) => {
    if (numbersArray.length > 0) {
        sum += numbersArray[0] + numbersArray[1];
        console.log(sum, numbersArray)
        numbersArray.shift();
        numbersArray.shift();
        console.log(numbersArray)
        getArraySum(numbersArray);
    }


    return sum;
}

const exampleArray = [1, 2, 3, 4, 4, 5, 6, 6];
const startingNumber = 5;
console.log(getArraySum(exampleArray, startingNumber));


// const collatz = (n) => {
//     if (n === 1) return 0;
//     return n % 2 === 0 ? collatz(n / 2) + 1 : collatz(3 * n + 1) + 1;

// };

// console.log(collatz(21));
