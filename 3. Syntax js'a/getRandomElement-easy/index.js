import { validation } from "../../validation.js";

function getRandomElement(dataArray) {
    validation({
        'value': dataArray,
        'type': 'Array'
    });
    const arrayLength = dataArray.length;
    const randomNumber = Math.floor(Math.random() * arrayLength);
    const randomElement = dataArray[randomNumber];

    return randomElement;
};

const exampleArray = ["raz", "dwa", "trzy", "cztery", "piec", 2, 3, 5, 8, 9];

console.log(getRandomElement(exampleArray));

