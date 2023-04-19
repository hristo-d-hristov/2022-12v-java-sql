let canvas = document.getElementById("gameCanvas");
let canvasWidth = document.getElementById("canvasWidth").valueAsNumber;
let canvasHeight = document.getElementById("canvasHeight").valueAsNumber;
let sqsize = 50;
canvas.width = canvasWidth * sqsize;
canvas.height = canvasHeight * sqsize;

let context = canvas.getContext("2d");
let herox = 1;
let heroy = 2;

let img = new Image();
img.src = "hero.png";

//context.fillRect(herox * sqsize, heroy * sqsize, sqsize, sqsize);

function drawMapAndHero() {
    // изчистване на платното
    context.fillStyle = "white";
    context.fillRect(0, 0, canvasWidth * sqsize, canvasHeight * sqsize);
    
    // рисуване на героя
	context.drawImage(img, herox * sqsize, heroy * sqsize, sqsize, sqsize);
	
	// рисуване на мрежата
    for (let i = 0; i < canvasWidth; i++) {
	    for (let j = 0; j < canvasHeight; j++) {
		    context.strokeRect(i * sqsize, j * sqsize, sqsize, sqsize);
	    }
    }
}

drawMapAndHero();

canvas.onclick = function(e) {
    // координати на мишката в пиксели
    let mousePosX = e.x - e.originalTarget.offsetLeft;
    let mousePosY = e.y  - e.originalTarget.offsetTop;
    
    // координати на мишката в квадратчета от картата
    herox = Math.floor(mousePosX / sqsize);
    heroy = Math.floor(mousePosY / sqsize);
    
    drawMapAndHero();
}

function moveUp() {
    heroy--;
    drawMapAndHero();
}

function moveDown() {
    console.log("надолу");
}

function moveLeft() {
    console.log("наляво");
}

function moveRight() {
    console.log("надясно");
}

document.onkeypress = function(e) {
    let key = e.key;
    switch(key) {
        case "w": moveUp(); break;
        case "s": moveDown(); break;
        case "a": moveLeft(); break;
        case "d": moveRight(); break;
    }
}


// Радо
//context.strokeRect(0, 0, 50, 50);
//context.strokeRect(50, 0, 50, 50);
//context.strokeRect(100, 0, 50, 50);
//context.strokeRect(150, 0, 50, 50);
//context.strokeRect(200, 0, 50, 50);
//context.strokeRect(250, 0, 50, 50);
//context.strokeRect(0, 50, 50, 50);
//context.strokeRect(50, 50, 50, 50);
//context.strokeRect(100, 50, 50, 50);
//context.strokeRect(150, 50, 50, 50);
//context.strokeRect(200, 50, 50, 50);
//context.strokeRect(250, 50, 50, 50);
//context.strokeRect(0, 100, 50, 50);
//context.strokeRect(50, 100, 50, 50);
//context.strokeRect(100, 100, 50, 50);
//context.strokeRect(150, 100, 50, 50);
//context.strokeRect(200, 100, 50, 50);
//context.strokeRect(250, 100, 50, 50);
//context.fillRect(20, 40, 50, 10);

// Вальо
//context.strokeRect(0, 0, 150, 150);
//context.strokeRect(150, 0, 150, 150);
//context.strokeRect(0, 0, 50, 150);
//context.strokeRect(50, 0, 50, 150);
//context.strokeRect(150, 0, 50, 150);
//context.strokeRect(200, 0, 50, 150);
//context.strokeRect(0, 0, 300, 50);
//context.strokeRect(0, 0, 300, 100);