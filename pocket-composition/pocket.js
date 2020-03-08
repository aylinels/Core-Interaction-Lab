// function createCircles (){
// var circ = document.createElement("div");
// circ.classList.add("circle");
// var src = document.getElementById("body");
// if (src.childElementCount <30)
// src.appendChild(circ);
// }

// setInterval(createCircles, 1000);

var red = 255;
var green = 0;
var blue = 0;
var width = 0
var height = 0


setInterval(function(){
	for (var i = 0; i < 1; i++){

	var r = Math.round(Math.random()*255);	
	var g = Math.ceil(Math.random()*255);
	var b = Math.floor(Math.random()*255);

	var container = document.getElementById("container");
	container.insertAdjacentHTML('beforeend', `
		<div 
		class="rec"
		style= "width:(${width}vh);
		height: ($){height}vh);
		background-color: rgb(${r}, ${g}, ${b});" 
		></div>
	`)
		width = width + 5;
		heigth = height + 5;
	}
}, 1000)


