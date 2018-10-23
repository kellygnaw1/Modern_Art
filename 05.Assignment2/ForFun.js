var x;
var x1;
var x2;
var x3;
var x4;
var x5;
var x6;
var x7;
var x8;

var y;
var y1;
var y2;
var y3;
var y4;
var y5;
var y6;
var y7;
var y8;

var a;
var b;
var c;

var img1;
var angle1, angSpeed1;

function preload(){
	img1 = loadImage("data/roger.png");
}


function setup(){
	angle1 = 45;
	angSpeed1 = 3;
	createCanvas(1000,1000);
	background(0,0,0);
	x=100;
	x1=200;
	x2=300;
	x3=400;
	x4=500;
	x5=600;
	x6=700;
	x7=800;
	x8=900;

	y=0;
	y1=100;
	y2=200;
	y3=300;
	y4=400;
	y5=500;
	y6=600;
	y7=700;
	y8=800;
	
}

//-------------------
function draw(){
	rainbow();
	randomLines1();
	randomLines2();
	randomLines3();
	randomLines4();
	roger1();
	roger2();
	roger3();
	roger4();
	roger5();
}

function rainbow(){
	y = y + 30;
	if (y > 1000){
		y = 0;
		y = y + 20;
	}
	
	y1 = y1 + 30;
	if (y1 > 1000){
		y1 = 0;
		y1 = y1 + 20;
	}

	y2 = y2 + 30;
	if (y2 > 1000){
		y2 = 0;
		y2 = y2 + 20;
	}

	y3 = y3 + 30;
	if (y3 > 1000){
		y3 = 0;
		y3 = y3 + 20;
	}

	y4 = y4 + 30;
	if (y4 > 1000){
		y4 = 0;
		y4 = y4 + 20;
	}

	y5 = y5 + 30;
	if (y5 > 1000){
		y5 = 0;
		y5 = y5 + 20;
	}

	y6 = y6 + 30;
	if (y6 > 1000){
		y6 = 0;
		y6 = y6 + 20;
	}

	y7 = y7 + 30;
	if (y7 > 1000){
		y7 = 0;
		y7 = y7 + 20;
	}

	y8 = y8 + 30;
	if (y8 > 1000){
		y8 = 0;
		y8 = y8 + 20;
	}
	fill(a=255-y/4,b=255-(y/2),c=y);
	ellipse(x, y, 50, 50);
	fill(a=y1/2,b=255-(y1/2),c=255-y1);
	ellipse(x1, y1, 50, 50);
	fill(a=255-y2/4,b=255-(y2/2),c=y2/2);
	ellipse(x2, y2, 50, 50);
	fill(a=y3/4,b=255-(y3/2),c=255-y3);
	ellipse(x3, y3, 50, 50);
	fill(a=255-y4/4,b=255-(y4/2),c=y4/4);
	ellipse(x4, y4, 50, 50);
	fill(a=y5/6,b=255-(y5/2),c=255-y5);
	ellipse(x5, y5, 50, 50);
	fill(a=255-y6/4,b=255-(y6/2),c=y6/6);
	ellipse(x6, y6, 50, 50);
	fill(a=y7/8,b=255-(y7/2),c=255-y7);
	ellipse(x7, y7, 50, 50);
	fill(a=255-y8/4,b=255-(y8/2),c=y8/8);
	ellipse(x8, y8, 50, 50);
	noStroke();

}

function roger1(){
	if (keyIsPressed === true) {
	    push();
		angle1 += angSpeed1;
		translate(250,250);
		rotate(radians(angle1));
		image(img1,-50,-50,100,100);
		pop();
  	} else {
    	rainbow();
  	}
	
}


function roger2(){
if (keyIsPressed === true) {
	    push();
		angle1 += angSpeed1;
		translate(500,500);
		rotate(radians(angle1));
		image(img1,-250,-250,500,500);
		pop();
  	} else {
    	rainbow();
  	}
}

function roger3(){
frameRate(40);
if (keyIsPressed === true) {
	    push();
		angle1 += angSpeed1;
		translate(750,750);
		rotate(radians(angle1));
		image(img1,-50,-50,100,100);
		pop();
  	} else {
    	rainbow();
  	}
}

function roger4() {
if (keyIsPressed === true) {
		push();
		angle1 += angSpeed1;
		translate(750,250);
		rotate(radians(angle1));
		image(img1,-50,-50,100,100);
		pop();

  	} else {
    	rainbow();
  	}
}

function roger5() {
	if (keyIsPressed === true) {
		push();
		angle1 += angSpeed1;
		translate(250,750);
		rotate(radians(angle1));
		image(img1,-50,-50,100,100);
		pop();

  	} else {
    	rainbow();
  	}
	// body...
}

function randomLines1(){
	push();
	stroke(250,250,250);
	line(x,y,y,random(width));
	pop();
}

function randomLines2(){
	push();
	stroke(0,0,0);
	line(x,y,y,random(width));
	pop();
}

function randomLines3() {
	push();
	stroke(0,255,0);
	line(x8,y8,y8,random(width));
	pop();
}

function randomLines4() {
	push();
	noFill();
	stroke(255, 0, 0);
	line(x8,y8,y8,random(width));
	line(x8,y8,y8,random(width));
	stroke(0, 0, 0);
	bezier(85, 20, 10, 10, 90, 90, 15, 80);
	pop();
}
