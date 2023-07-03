function getSkippedSentence(sentence, skip) {
	if (!sentence || typeof(sentence) !== 'string') {return};
	if (!skip || typeof(skip) !== 'number') {return};
	if (skip >= sentence.length) {return};
	let i = 0;
	let result = '';

	for (const element of sentence) {
		i++
		if (i % skip != 0 && i < sentence.length) {
			result = result + sentence.slice(i, i + 1);
		}
	}

	console.log(result);
}

getSkippedSentence("0123456789",2);