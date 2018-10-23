var circleSize;
var noiseSize = 0.01;
var variation = 0;

function setup(){
	createCanvas(500,500);
	background(255);
}

function draw(){
	background(255);

	variation +=noiseSize;
	circleSize = noise(variation);
	circleSize = map(circleSize,0,1,250,400);

	ellipse(width/2, height/2, circleSize, circleSize);
	fill(0);

}