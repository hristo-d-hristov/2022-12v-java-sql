let a = document.getElementById("numberA").valueAsNumber;
let b = document.getElementById("numberB").valueAsNumber;
let answer = document.getElementById("answer");
document.getElementById("sum").onclick = function () {
	answer.innerText = a + b;
};
document.getElementById("sub").onclick = function () {
    console.log(a - b);
};
document.getElementById("mul").onclick = function () {
    console.log(a * b);
};
document.getElementById("div").onclick = function () {
    console.log(a / b);
};
