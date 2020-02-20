function createImgDiv (){
var img = document.createElement("img");
img.src = "img/leaf.png";
img.classList.add("img");
var src = document.getElementById("body");
if (src.childElementCount <30)
src.appendChild(img);
}


for (i = 0; i < 22; i++){
console.log([i])
}

setInterval(createImgDiv, 300);
// var img = document.createElement("img");
// img.src = "img/leaf.png";

// for (i = 0; i < img.length; i++) {
//   img[i].classList.add("img_style");
// }
