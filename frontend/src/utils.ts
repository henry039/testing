export const shuffle = (input: Array<string>): Array<string> => {
	let currentIndex = input.length;
	let tmpVal;
	let randomIndex;

	while (currentIndex > 0) {
		randomIndex = Math.floor(Math.random() * currentIndex);
		currentIndex -= 1;
		tmpVal = input[currentIndex];
		input[currentIndex] = input[randomIndex];
		input[randomIndex] = tmpVal;
	}
	return input;
};
