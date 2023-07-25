import { validation } from '../../validation.js'

const changeFirstLetters = (text) => {

    validation({
        value: text,
        type: 'String'
    })

    const textArray = text.split(' ');

    const result = textArray.reduce((accumulator, currentValue) => {
        const firstLetter = currentValue.charAt(0);
        const restOfTheWord = currentValue.slice(1);
        const firstLetterLowerCased = firstLetter.toLowerCase();
        const firstLetterUpperCased = firstLetter.toUpperCase();

        const isFirstLetterSmall = firstLetter === firstLetterLowerCased
        const correctFirstLetter = isFirstLetterSmall ? firstLetterUpperCased : firstLetterLowerCased

        return accumulator += ` ${correctFirstLetter}${restOfTheWord}`;
    }, '').trimStart();

    return result;

};

const exampleText = "The toUpperCase() method converts a string to uppercase letters.";

console.log(changeFirstLetters(exampleText));