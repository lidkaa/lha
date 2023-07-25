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


	const elementsArray = sentence.split('');
	const result = elementsArray.reduce((accumulator, currentElement, index) => {
		const isCleanRestAfterDividing = index % skip === 0

		if (!isCleanRestAfterDividing) return accumulator += currentElement;

		// DUZO INNYCH FUNCKJONALNOSCI

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