var img1, angle1, speed1; //variable for img1
var img2, angle2, speed2; //variable for img2
var angle3, angle4, speed3, speed4,lineSize, lineSize2;
var f;

function preload(){
	img1= loadImage("data/landscape1.png");
	img2= loadImage("data/landscape2.png");

}
function setup(){
	createCanvas(500,500);
	background(255);
	angle1 = 30;
	speed1 = 2;

	angle2 = 30;
	speed2 = 3;

	angle3 = 45;
	speed3 = 2.6;

	angle4 = 60;
	speed4 = 5;

	lineSize = 130;
	lineSize2 = 50;

}
function draw(){
	background(255);
	placeImage1();
	placeImage2();
	drawAClock();
}

function placeImage1(){
	push();
	angle1+= speed1;
	translate(250,250);
	rotate(radians(angle1));
	image(img1,-250,-250,500,500);
	pop();
}

function placeImage2(){
	push();
	angle2 += -speed2;
	translate(250,250);
	rotate(radians(angle2));
	tint(255,0,0);
	image(img2, -250, -250, 500, 500);
	pop();

}

function drawAClock(){
	push();
	angle3 += speed3;
	stroke(255);
	translate(250,250);
	rotate(radians(angle3));
	line(0,0,0,lineSize);
	ellipse(0,0,5,5);
	ellipse(0,lineSize,5,5);
		push();
		stroke(255);
		translate(0,lineSize);
		rotate(radians(angle3))
		line(0,0,lineSize2,0);
		ellipse(lineSize2,0,5,5);
		pop();
	pop();

}

function mouseReleased(){
	saveCanvas("test", "png");
}
