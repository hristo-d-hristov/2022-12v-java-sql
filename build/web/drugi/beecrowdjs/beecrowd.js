// Това не го копираме
let input = document.getElementById("input").value;

// Копираме от тук надолу
let lines = input.split("\n");

for (let i = 0; i < lines.length; i++) {
	let numbers = lines[i].split(" ");
	let x = Number(numbers[0]);
	let y = Number(numbers[1]);
	if (x > 0 && y > 0) {
		console.log("primeiro");
	} else if (x < 0 && y > 0) {
		console.log("segundo");
	} else if (x < 0 && y < 0) {
		console.log("terceiro");
	} else if (x > 0 && y < 0) {
		console.log("quarto");
	}
}