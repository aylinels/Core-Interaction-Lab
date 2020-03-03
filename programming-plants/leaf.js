

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

for (i = 0; i < 1; i++){
    function createCircle() {
         var circle = document.createElement("div");
         circle.classList.add("circle");
         circle.style.left = 100 * Math.random() + "vw";
         circle.style.top = 100 * Math.random() + "vh";
         var src = document.getElementById("container");
         if (src.childElementCount < 50){
            src.appendChild(circle);
         console.log(circle);
          }
    }

    setInterval(createCircle, 500);
}




// var circle = document.getElementsByClassName("circle");

// for (i = 0; i < circle.length; i++) {
//      circle[i].classList.add("animation");
// }


