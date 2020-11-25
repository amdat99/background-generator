var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient")
var button = document.querySelector("button");



function setGradient(){body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";

	css.textContent = body.style.background + ";";
}

function setRandomGradient(){
     color1.value +randomNumberRgb();
     color2.value +randomNumberRgb();
	body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";

	css.textContent = body.style.background + ";";
}

function randomNumberRgb() {
  var red = Math.floor(Math.random() *256);
  var green = Math.floor(Math.random() *256);
  var blue = Math.floor(Math.random() *256);
  return red + green +blue;
}





setGradient();

color1.addEventListener("input", setGradient
	)




color2.addEventListener("input", setGradient
	)

button.addEventListener("click", setRandomGradient)



