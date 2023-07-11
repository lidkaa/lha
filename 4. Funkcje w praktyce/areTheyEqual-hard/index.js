function areTheyEqual(firstValue, secondValue) {

	if (!firstValue || !secondValue) throw new Error('pass a proper value')

	const isTypeObject = typeof (firstValue, secondValue) === 'object' ? true : false;
	const isArray = firstValue instanceof Array && secondValue instanceof Array ? true : false;
	const isArrayLengthEqual = firstValue.length === secondValue.length ? true : false;

	//objects
	if (isTypeObject && !isArray) {
		const firstValueKeys = Object.keys(firstValue).sort();
		const secondValueKeys = Object.keys(secondValue).sort();
		const areKeysLengthEqual = firstValueKeys.length === secondValueKeys.length ? true : false;


		if (areKeysLengthEqual) {
			return firstValueKeys.every(element => {
				console.log(element, firstValue[element], secondValue[element]);
				let equality = firstValue[element] === secondValue[element];
				return equality
			})
		}
	}

	// //arrays
	if (isArray && isArrayLengthEqual) {
		return firstValue.every((element, index) => element === secondValue[index]);
	}

	//primitives vs ...
	return firstValue === secondValue ? true : false;
}


// let firstValue = {
// 	a: 1,
// 	b: 2
// };
// let secondValue = {
// 	b: 2,
// 	a: 1
// };

// let firstValue = [1, 2, 3];
// let secondValue = [1, 2, 3];

let firstValue = 's';
let secondValue = 'a';

console.log(areTheyEqual(firstValue, secondValue));