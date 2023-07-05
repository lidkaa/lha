import { validation } from "../../validation.js";

function getSkippedSentence(sentence, skip) {
	validation(
		{
			value: sentence,
			type: 'String'
		},
		{
			value: skip,
			type: 'Number'
		}
	)

	let result = '';
	let elementsArray = sentence.split('');

	result = elementsArray.reduce((accumulator, currentElement, index) => {

		if (index % skip != 0) accumulator += currentElement;
		return accumulator;
	}, '');

	return result;
}

console.log(getSkippedSentence("0123456789_1_3_4", 3));


	//old solution
	// for (const [index, element] of sentence.split('').entries()) {
	// 	if (index % skip !== 0 && index < sentence.length) {
	// 		const qwe = sentence.slice(index, index + 1);
	// 		result += qwe
	// 	}
	// }