import { validation } from "../../validation.js";

function isValidPhoneNumber(value) {
	const errorMessage = 'Pass valid phone number: "123456789", "123-123-123", "123 123 123"';
	const valueType = typeof (value);
	let checked = false
	let properValue = typeof (value) === 'number' ? value.toString() : value;

	if (valueType != 'string' && valueType != 'number') throw new Error(errorMessage);

	validation({
		value: properValue,
		type: 'String'
	});

	let phoneNumberPatterns = [
		/^\d{9}$/,
		/^\d\d\d-\d\d\d-\d\d\d$/,
		/^\d\d\d \d\d\d \d\d\d$/
	];

	for (const pattern of phoneNumberPatterns) {
		if (pattern.test(properValue)) checked = true;
	}

	if (checked === false) throw new Error(errorMessage);

	return checked;
}

console.log(isValidPhoneNumber(123456789));