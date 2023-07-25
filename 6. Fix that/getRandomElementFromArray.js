const arrayFromString = "abcdefgh".split("")

const getRandomElementFromArray = arr => {
	let randomPosition = Math.floor(Math.random() * arr.length);
	return arr[randomPosition];
}

console.log(getRandomElementFromArray(arrayFromString));


// const myArray = "abcdefgh".split("")

// const fn = (arr) => {
// 	return myArray[Math.floor(Math.random())]
// }
