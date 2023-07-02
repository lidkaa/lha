function getSkippedSentence(sentence, skip) {
	if (!sentence || typeof(sentence) !== 'string') {return};
	if (!skip || typeof(skip) !== 'number') {return};
	if (skip >= sentence.length) {return};
	let i = -1;
	let arr = [];
	let result = '';

	if (skip != 1) {
		arr.push(sentence[0]);
	}

	for (const element of sentence) {
		i++
		if (i % skip != 0) {
			arr.push(sentence[i]);
		}
	}

	for (const element of arr) {
		result = result.concat(element);
	}

	console.log(result);
}

getSkippedSentence("abcdefghijk", 2);
