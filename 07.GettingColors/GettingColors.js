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
	var columnY = height/2;
	var rowX = 0;
	var columnsTotal = 9;
	//var pointSize = 55.5;
	//var pointSize = 500/9;
	//var pointSize = 500/columnTotal;
	var pointSize = width/columnsTotal;
	var currentColumn = 0;

	while(currentColumn < columnsTotal){
		rowX = pointSize * currentColumn;
		ellipse(rowX,columnY,pointSize,pointSize);
		currentColumn++;

	}

}