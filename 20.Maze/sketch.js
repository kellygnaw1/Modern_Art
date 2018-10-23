var cols, rows;
var w = 40; 
var grid = [];

function setup(){
	createCanvas(400,400);
	//floor the cols and rows 
	cols = floor(width/w); 
	rows = floor(height/w);
	//nested loops to put into the array
	for(var j= 0; j<rows; j++){
		for(var i = 0; i<cols; i++){
			var cell = new Cell(i,j);
			grid.push(cell)

		}
	}
}

function draw(){
	background(51);
	for(var i = 0; i < grid.length; i++){
		grid[i].show();
	}
}

function Cell(i,j){
	//i = col
	//j = row
	this.i = i; 
	this.j = j;

	this.show= function(){
		var x = this.i*w;
		var y = this.j*w;
		stroke(255);
		//creating four lines 
		//line 1. going from 0,0 to x+w and y. Y stays the same x changes
		line(x, y, x + w, y);
		//line 2. going from the last line vertically down 
		line(x + w, y, x + w, y + w);
		//line 3. bottom right to bottom left 
		line(x + w, y + w, x, y + w);
		//line 4. bottom left to starting point, (0,0)
		line(x, y + w, x, y);
		//noFill();
		//rect(x,y,w,w);
	}

}