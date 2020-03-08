console.log("Hello!");

// variables
var myString = "this is a string";

var myBoolean = true;
var myOtherBoolean = false;

var myFloat = 1.23445;
var myInteger = 1;

// list
var myArray = ['apple', 'orange', 'pear'];

var myObjects = {  
	key: "a value",
	anArray: ["my","array"],
	aNumber : 22,
 };

var square = document.getElementById("square");


// get multiple elements with the same class name
var circles = document.querySelectorAll(".circle");
// other way to do it, but better to use query selector
var circles = document.getElementsByClassName("circle");
console.log(circles);


// javascript overwrites css if it has not been defined (for ex: saying no border, and applying a border in js won't add it)
// adding and removing classes
square.classList.add("circle")
square.classList.remove("circle")


// starting valuables
var red = 255;
var green = 0;
var blue = 0;

var TowardsBlue = true;

setInterval(function(){
	square.style.backgroundColor = "rgb("+ red + "," + green + "," + blue +")";
	// // same thing
	square.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
	// blue = blue + 40;
	// red = red - 40;

	// if( red <= 0 ){
	// 	red = red + 40;
	// }else{
	// 	red = red - 40;
	// }
	// this system was just looping without never ending

	if (TowardsBlue == true){
		blue = blue + 40;
		red = red - 40;
		}else{
			blue = blue - 40;
			red = red + 40;
	}

// if we reach the maximums, switch direction (starting from if statement, or else statement)
	if ( blue >= 255 && red <= 0) {
		towardsBlue = false;
	}else if (red >= 255 && blue <= blue){
		towardsBlue = true;
	}

}, 500)


// while loop
var j = 0;

while ( j < 10){
console.log(j);
j = j + 1;
}


// for loop
for (var i = 0; i < circles.length; i++) {
	circles[i].style.borderWidth = i + "px";
	// circles[i].style.borderWidth = (i + 10) + "px";
}

//  i = i + 2 if you want to add my two (instead of the i++ = i + 1)

for (var i = 0; i < 100; i++) {
}

var title = document.querySelector("h1");
title.innerHTML = "Helloooo"
title.innerHTML = title.innerHTML + " everyone";


// innerHTML adds content
// insertAdjacentHTML adds new elements


// var container = document.getElementById("container");
// container.insertAdjacentHTML('beforeend', `
// 	<div class="circle></div>`);

var degrees = 0; 

setInterval(function(){
	for (var i = 0; i < 1; i++){

	var r = Math.round(Math.random()*255);	
	var g = Math.ceil(Math.random()*255);
	var b = Math.floor(Math.random()*255);
		//math.ceil will always round up!
		//math.floor will always round up down (ex: 1.9999 = 1)


	var container = document.getElementById("container");
	container.insertAdjacentHTML('beforeend', `
		<div 
		class="circle"
		style= "transform:skew(${degrees}deg);
		background-color: rgb(${r}, ${g}, ${b});" 
		></div>
	`)
	degrees = degrees + 5;
	}
}, 1000)




