

var button = document.getElementById('button');
button.addEventListener("click", drawLeaf);


function createImgDiv (){
var img = document.createElement("img");
img.src = "img/leaf.png";
img.classList.add("img");
var src = document.getElementById("body");
if (src.childElementCount <30)
src.appendChild(img);
}

function drawLeaf(){
setInterval(createImgDiv, 300);
}

// var circle = document.getElementsByClassName("circle");

// for (i = 0; i < circle.length; i++) {
//      circle[i].classList.add("animation");
// }


