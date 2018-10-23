var cellSizes = 40; 
var speedMin = 1;
var speedMax = 13;
var columns, rows, totalCells; 
var x = [];
var y = [];
var speeds = [];
var angles = [];
var sizes = [];

function setup(){
	canvas = createCanvas(1000,450);
	canvas.position(0,0);
	canvas.style('z-index', '-99');
	canvas.style('margin-left', '250px');
	canvas.style('margin-top', '250px');

	startGrid();
	populateArrays();

}

function draw(){
	if(random(100)>99.9)background(238,238,238);
	showGrid();

	if(random(100)>90)resetBackground();

}

function startGrid(){
	//1. Calculation
	columns = floor(width/cellSizes);
	rows = floor(height/cellSizes);
	totalCells= rows*columns;

	print(">>GRID SYSTEM STARTED");
	print(">>Total columns: " + columns);
	print(">>Total rows: "+ rows);
	print(">>total cells: "+ totalCells);
}

function populateArrays(){

	//1. Create Temporary Arrays 
	xT = [];
	yT = [];
	speedsT = [];
	anglesT = [];
	sizesT = [];

	//2.
	print(">>Array Population Started.");
	var counter = 0;
	for(var i = 0; i < rows; i++){
		for (var j = 0; j < columns; j++){
			yT[counter] = i*cellSizes;// the y position
			xT[counter] = j*cellSizes;// the x position
			speedsT[counter] = random(speedMin, speedMax);
			anglesT[counter] = 0.0; 
			sizesT[counter] = random(cellSizes); 
			counter++; 
		}
	}

	//3. We make the arrays the same
	x = xT;
	y = yT;
	speeds = speedsT;
	angles = anglesT;
	sizes = sizesT;

}

function showGrid(){
	for (var i = 0; i < totalCells; i++){
		push();

		//Rotational Operations
		angles[i]+=speeds[i];

		//Translation Operations
		translate(x[i], y[i]);
		rotate(radians(angles[i]));


		//Center 
		noStroke();
		fill(0,0,0,random(150));
		ellipse(0,0,3,3);

		//Rotating lines
		stroke(0,0,0, random(178));
		line(0,0, sizes[i], sizes[i]);

		//outer Ellipse
		noFill();
		stroke(0,0,0,random(20));
		ellipse(0,0,cellSizes, cellSizes);


		pop();
	}
}

function resetBackground(){
	cellSizes = floor(random(30,80));
	startGrid();
	populateArrays();

	noStroke();
	fill(238,238,238,20);
	rect(0,0,width,height);

}

function keyTyped(){

}








