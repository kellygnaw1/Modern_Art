
var totalP = 10;
var canvas;
//our arrays system
var x=[]; 
var y=[]; 
var speedX = [];
var speedY = [];
var directionX = [];
var directionY = [];


function setup(){
	canvas = createCanvas(500,500);
	canvas.position(300,0);
	canvas.style('z-index', '-99');
	background('#eeeeee');

	for(var i = 0; i < totalP; i++){
		x[i] = width/2;
		y[i] = height/2;
		speedX[i] = random(1,3);
		speedY[i] = random(1,6);
		directionX[i] = 1;
		directionY[i] = 1; 
	}

}

function draw(){

	background('#eeeeee');

	for(var i = 0; i < totalP; i++){
		//1. calculate the position
		x[i] += speedX[i]*directionX[i];
		y[i] += speedY[i]*directionY[i];

		//2. make it not go off the screen
		if(x[i] > width) directionX[i] = -1;
		if(x[i] < 0) directionX[i] = 1;
		if(y[i] > height) directionY[i] = -1;
		if(y[i] < 0) directionY[i] = 1;

		noStroke();
		fill(0,0,0,200);
		ellipse(x[i],y[i],5,5);
	}
}

function mouseReleased(){
	// we add a new memeber to each array
	append( x, mouseX);
	append( y, mouseY);
	append( speedX, random(4));
	append( speedY, random(10));
	append( directionX, 1);
	append( directionY, 1);
	totalP++;
}