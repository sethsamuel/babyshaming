var canvas = document.getElementById("canvas");
var context = canvas.getContext("2d");
var img = new Image();
img.onload = function(){
	context.drawImage(img, 0, 0, 640, 640);
}
img.src = "./baby_template.jpg";

var input = document.getElementById("input");
input.addEventListener("input", function(e){
	console.log(input.value);
	context.drawImage(img, 0, 0, 640, 640);
	context.fillStyle = "#3d6bdf";
	context.fillText(input.value, 240, 310, 160);
});