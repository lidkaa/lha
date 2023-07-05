import { validation } from '../../validation.js'

const changeFirstLetters = (text) => {

    validation({
        value: text,
        type: 'String'
    })

    const textArray = text.split(' ');

    let result = textArray.reduce((sentence, word) => {
        const firstLetter = word.charAt(0);
        const slicedWord = word.slice(1);
        const isLowerCase = firstLetter === firstLetter.toLowerCase();
        const newWordUpper = firstLetter.toUpperCase() + slicedWord;
        const newWordLower = firstLetter.toLowerCase() + slicedWord;
        let newWord = '';

        isLowerCase ? newWord = newWordUpper : newWord = newWordLower;

        sentence += ` ${newWord}`;

        return sentence;

    }, '');

    return result;

};

const exampleText = "The toUpperCase() method converts a string to uppercase letters.";

console.log(changeFirstLetters(exampleText));