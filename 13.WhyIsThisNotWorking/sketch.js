
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
// A line rotating inside a circle, a clock with just one hand
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

var angle, rotationSpeed, circleSize, lineSize;
var canvas;

function setup(){

	// 1. Classic Canvas Operation
	canvas = createCanvas(500,500);
	canvas.position(0, 0);
	canvas.style('z-index', '-99');

	background('#eeeeee')

	// 2. Starting the variables
	angle = 45;
	rotationSpeed = 1;
	circleSize = 250; // Diameter
	lineSize = 250/2;

}

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
function draw(){

	background('#eeeeee');


	// 1. We draw the circle
	fill(255);
	ellipse( width/2, height/2, circleSize, circleSize);
	fill(0);
	ellipse(width/2, height/2, 5, 5);
	push();
	angle += rotationSpeed;
	stroke(0);
	translate(250,250);
	rotate(radians(angle));
	line(0,0,0,lineSize);
	ellipse(0,0,5,5);
	// 2. Rotating operations

	pop();

}

