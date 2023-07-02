function getRandomElement(dataArray) {
    const arrayLength = dataArray.length;

    for (const element of dataArray) {
        const randomNumber = Math.floor(Math.random() * arrayLength);
        const result = dataArray[randomNumber];
        console.log('result', result);
        return result;
        
    }
};

const exampleArray = ["raz", "dwa", "trzy", "cztery", "piec", 2, 3, 5, 8, 9];

getRandomElement(exampleArray);

