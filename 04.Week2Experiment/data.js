var img1;
var img2;
var angle1, angSpeed1;

function preload(){
	img1 = loadImage("data/landscape1.png");
}

function setup(){
	createCanvas(500,500);
	background(221,157,176);
	angle1 = 45;
	angSpeed1 = 3;

}
function draw(){
	background(221,157,176);
	angle1 += angSpeed1;
	translate(250,250);
	rotate(radians(angle1));
	image(img1,-250,-250,500,500);


}