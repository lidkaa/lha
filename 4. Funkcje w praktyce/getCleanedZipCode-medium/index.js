function getCleanedZipCode(value) {
	if (value === 'number') value.toString();
	let properZipCode = '';

	const zipCodePattern = /^\d{2}(-?|\s?)\d{3}$/;

	if (zipCodePattern.test(value)) {
		if (value.includes(' ')) properZipCode = value.replace(' ', '-')

		return `${value.slice(0, 2)}-${value.slice(2)}`;
	}

	return properZipCode;
}

const value = '12 345' // 1-2-3-4-5
console.log(getCleanedZipCode(value));
