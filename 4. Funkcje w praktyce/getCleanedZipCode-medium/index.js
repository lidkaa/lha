function getCleanedZipCode(value) {
	if (value === 'number') value.toString;
	let properZipCode = '';

	const zipCodePattern = /^\d{2}(-?|\s?)\d{3}$/;

	if (zipCodePattern.test(value)) {
		if (value.includes(' ')) properZipCode = value.replace(' ', '-')
		if (value.length === 5) properZipCode = `${value.slice(0, 2)}-${value.slice(2)}`;
	}

	return properZipCode;
}

console.log(getCleanedZipCode('123'));
