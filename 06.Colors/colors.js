//GETTING COLORS- - - - - - - - - - 
//This code will grab colors from an image
//Colors from Peter Greenwood's work: https://www.instagram.com/petergreenwooduk/
//

var img1;
//
function preload(){
	img1 = loadImage("data/kraftwerk.jpg");
}

function setup(){
	createCanvas(500,500);
	background(240);
	img1.loadPixels();

}

function draw(){
	//1. We will pick a random point 
	var x = floor(random(width));
	var y = floor(random(height));

	//2. Color Operations
	var desiredColor = img1.get(x,y);
	//map(value, min, max, minMappedOutput, maxMappedOutput)
	//map(value, 0, 1, 0, 255)
	var pointSize = map(mouseX, 0, width, 0.25, 100);

	//3. drawing the point 
	noStroke();
	fill(desiredColor);
	ellipse(x,y,pointSize,pointSize);


}