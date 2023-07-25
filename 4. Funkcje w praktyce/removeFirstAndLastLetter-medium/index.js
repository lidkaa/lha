import { validation } from '../../validation.js'

function removeFirstAndLastLetter(textValue) {
	validation({
		value: textValue,
		type: 'String'
	})

	// solution 01
	let result1 = textValue.slice(1, textValue.length - 1);

	const textValueArray = textValue.split('');

	// solution 02
	let result2 = textValueArray.reduce((accu, currentValue, index) => {
		if (index != 0) return accu += currentValue
		return accu;
		// drugi warunek (index != arr.length -1) ???
	}, '')

	// solution 03
	let copyOfTextValueArray = textValueArray.map((el) => el);
	copyOfTextValueArray.splice(0, 1);
	copyOfTextValueArray.splice(textValueArray.length - 1, 1);
	let result3 = copyOfTextValueArray.join('');

	//solution 04 
	let result4 = textValueArray.map((el, index, arr) => {
		if (index != 0 && index != arr.length - 1) {
			return el;
		}
	}).join('');


	let results = [result1, result2, result3, result4]

	return results;
}

console.log(removeFirstAndLastLetter('Javascript'))
