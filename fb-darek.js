for (var itteration = 1; itteration <= 100; itteration++) {
	var modulo3;
	var modulo5;

	modulo3 = itteration % 3;
	modulo5 = itteration % 5;

	if (modulo3 === 0 && modulo5 !== 0) {
		console.log(itteration, "Fizz");
	} else if (modulo5 === 0 && modulo3 !== 0) {
		console.log(itteration, "Buzz");
	} else if (modulo3 === 0 && modulo5 === 0) {
		console.log(itteration, "FizzBuzz");
	} else {
		console.log(itteration);
	}
}

