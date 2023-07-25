function areTheyEqual(firstValue, secondValue) {

	const isFirstValueObjectType = Object.prototype.toString.call(firstValue) === '[object Object]'
	const isSecondValueObjectType = Object.prototype.toString.call(firstValue) === '[object Object]'
	const areBothValuesObjects = isFirstValueObjectType && isSecondValueObjectType

	if (areBothValuesObjects) {
		const firstValueKeys = Object.keys(firstValue);
		return firstValueKeys.every(key => firstValue[key] === secondValue[key]);
	}

	const areBothValuesArrayType = Array.isArray(firstValue) && Array.isArray(secondValue);
	if (areBothValuesArrayType) {
		const isArrayLengthEqual = firstValue.length === secondValue.length;
		if (!isArrayLengthEqual) return;

		return firstValue.every((element, index) => element === secondValue[index]);
	}

	return firstValue === secondValue;
}


// const firstValue = {
// 	a: 1,
// 	b: 2
// };
// const secondValue = {
// 	b: 2,
// 	a: 1
// };

let firstValue = [1, 2, 4];
let secondValue = [1, 2, 3];

// let firstValue = 's';
// let secondValue = 'a';

console.log(areTheyEqual(firstValue, secondValue));