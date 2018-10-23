//
//This is an experiment on animation and free movements 
//
var x; 
var y; 

function setup(){
	//1. Initial settings
	createCanvas(1000,1000);
	background (244, 125, 66);

	//2.starting point 
	x = 0; 
	y = 0;
}
//--------------------------------

function draw(){
	//1. setting up the position 
	y = y + 3;
	// If the circle out of the screen to the right? If so, then move it back to left margin

	if (y > 1000){
		y = 0;
		x = x + 1;
	}

	x = x + 1; 
	// If circle out of screen, relocate left, Y axis

	if  (x > 1000){
		x = 0;
	}
	fill(26, 43, 155);
	ellipse (x,y,10,10);// one way to center an ellipse
	//ellipse (width/2, height/2, 10, 10); // A better way to center an ellipse 
}