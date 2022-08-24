var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var button = document.querySelector("button");

function setGradient() {
	body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";

	css.textContent = body.style.background + ";";
}

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

window.addEventListener('load', setGradient);

button.addEventListener("click", setGradient2);


function random1() {
	const randomBetween = (min, max) => min + Math.floor(Math.random() * (max - min + 1));
	const r1 = randomBetween(0, 255);
	const g1 = randomBetween(0, 255);
	const b1 = randomBetween(0, 255);
	return rgb1 = `rgb(${r1},${g1},${b1})`;
}

function random2() {
	const randomBetween = (min, max) => min + Math.floor(Math.random() * (max - min + 1));
	const r2 = randomBetween(0, 255);
	const g2 = randomBetween(0, 255);
	const b2 = randomBetween(0, 255);
	return rgb2 = `rgb(${r2},${g2},${b2})`;
}

function setGradient2() {
	body.style.background = 
	"linear-gradient(to right, " 
	+ random1() 
	+ ", " 
	+ random2() 
	+ ")";
	css.textContent = body.style.background + ";";
}