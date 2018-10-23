var totalCircles = 100;
var img1;
var img2;
var y = 0;
var printFirst=true;

function preload(){
       img1 = loadImage("data/kraftwerk.jpg");
       img2 = loadImage("data/polaroid.jpg");
}

function setup(){
	createCanvas(500,500);
	background(245);
	img1.loadPixels();
	img2.loadPixels();
}

function draw(){
	//1. Basic Calculations	
	var circleSize = width/totalCircles;

	//2. we draw the circles 
	var currentCircle = 0; 

	push();
	while(currentCircle<totalCircles){
	    var x = circleSize*currentCircle;
	    currentCircle++;
 
	    var desiredColor = getColor2(x,y);
            if (!printFirst) {
                 desiredColor = getColor(x,y);
            }

	    fill(desiredColor)
	    ellipse(x, y, circleSize,circleSize);
	}
	
        pop();
	y += circleSize; 

	if (y>=500) {         
            y = 0;
	    currentCircle=0;
	    printFirst = !printFirst;
	    totalCircles=random(10,100);
	}
}

function getColor(colorX, colorY){
	var obtainedColor1 = img1.get(floor(colorX), floor(colorY));
	return obtainedColor1;
}

function getColor2(colorX2,colorY2){
	var obtainedColor2 = img2.get(floor(colorX2), floor(colorY2));
	return obtainedColor2;
}