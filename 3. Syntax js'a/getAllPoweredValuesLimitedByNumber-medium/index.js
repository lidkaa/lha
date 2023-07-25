import { validation } from "../../validation.js";

function getAllPoweredValuesLimitedByNumber(numberValue = []) {

	validation({
		value: numberValue,
		type: 'Number'
	});

	let n = 0;
	const results = [];
	const maxNumber = Math.round(Math.sqrt(numberValue));

	while (n < maxNumber) {
		n++;
		const poweredValue = n * n
		results.push(poweredValue);
	}

	return results;
}

console.log(getAllPoweredValuesLimitedByNumber(56));
