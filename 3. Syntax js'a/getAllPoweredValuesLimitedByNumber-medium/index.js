function getAllPoweredValuesLimitedByNumber(value) {
	if (!value || typeof(value) !== 'number') {return};
	const arrayResults = [];
	let n = 0;
	const maxNumber = Math.floor(Math.sqrt(value));

	while (n < maxNumber) {
	n++;
	arrayResults.push(n*n);
	}
	
	console.log(arrayResults);
	return arrayResults;
}

getAllPoweredValuesLimitedByNumber(56);



// big o notion


// brak varow / brak starych forow / bardzo rzadko pozwalam na forEach

// validacja
// const > let
// ES6 + for ( const qwe of asd ) + for ( const qwe in asd ) + arr.entries()
// mdn

// npm init -y
// npm -> nodemon
