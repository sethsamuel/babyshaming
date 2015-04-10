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
	if(!/\w/.test(input.value)) return;
	context.fillStyle = "#3d6bdf";
	context.font = "28pt Handlee";
	var lines = input.value.split(/\n/);
	var x = 260;
	var y = 340;
	var maxWidth = 210;
	for(var i = 0; i < lines.length; i++){
		var text = lines[i].trim();
		context.save();
		context.globalCompositeOperation = "multiply";
		context.rotate(3.5* Math.PI/180);
		context.globalAlpha = 0.5;
		context.fillText(text, x, y, maxWidth);
		context.globalAlpha = 0.05;
		context.fillText(text, x-2, y, maxWidth);
		context.globalAlpha = 0.05;
		context.fillText(text, x+1, y, maxWidth);
		context.restore();
		y += 40;
	}
});

var download = document.getElementById("download");
download.addEventListener("click", function(e){
	var data = context.createImageData(640, 640);
	download.href = canvas.toDataURL();
	download.download = "baby" + input.value.toLowerCase().replace(/[^\w]/g, "") + ".png";
});