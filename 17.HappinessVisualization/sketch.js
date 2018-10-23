// - - - - - - - - - - - - - - - - - - - - - - -- \\
// - - - - - - - DRINKING WATER DATAVIZ - - - - - \\
// - - - - - - - - - - - - - - - - - - - - - - -- \\

// Art 22 - - A personal visualization of happiness over my years

var maxCircleSize = 150;
var timerDuration = 23;
var canvas;
var dataSet; 
var table, totalRows;
// Arrays:
var year = [];
var level = [];
var x = [];
var circleCurrentSize = [];
var circleFinalSize = [];
var circleVisible = [];
// // Slideshow variables
var currentCircle = -1;
var timer = 0;

// SOUND VARIABLES
var maxFreq = 900;
var minFreq = 80;
var noteDuration = 1;
var osc;
var noteTimer = 0;

// - - - - - - - - - - - - - - - - - - - - - - -- \\ PRELOAD

function preload(){
	// 1. We load the dataSet
	dataSet = loadTable("data/kw_happiness.csv", 'csv', 'header');

}

// - - - - - - - - - - - - - - - - - - - - - - -- \\ SETUP

function setup(){

	// 1. Classic Canvas Operations
	canvas = createCanvas(1000,450);
	canvas.position(0, 0);
	canvas.style('z-index', '-99');

	// 2. Reading the data
	totalRows = dataSet.getRowCount();
	print(">> Total Rows: "+totalRows);
	print(">> Total Columns: "+dataSet.getColumnCount());
	print(">> Year for Position [0] is "+dataSet.getString(0, 0));
	print(">> Level for Position [0] is "+dataSet.getString(0, 1));
	print("- -" );
	print(">> Year for Last Item ["+(totalRows-1)+"] is "+dataSet.getString((totalRows-1),0));

 	// 3. Populate Arrays
 	populateArrays();

 	// 4. Start sound
 	startSound();

}

// - - - - - - - - - - - - - - - - - - - - - - -- \\ DRAW

function draw(){
	// - 
	background('#eeeeee');

	// A. Slideshow
	slideShow();

	// B. Show circles
	showCircles();

	// C. Sound operations
	monitoringSound();
}

// - - - - - - - - - - - - - - -

function populateArrays(){
	// We go ONE by ONE filling the data
	for(var i = 0; i < totalRows; i++){
		year[i] = dataSet.getString(i, 0);
		level[i] = int(dataSet.getString(i, 1));
		x[i] = map(i, 0, totalRows, 100, width-100);
		circleCurrentSize[i] = 0.0;
		circleFinalSize[i] = map(level[i], 0, 100, 0, maxCircleSize);
		circleVisible[i] = false; // Boolean
	}
}


// - - - - - - - - - - - - - - -
function showCircles(){

	// We go ONE BY ONE
	for(var i = 0; i < totalRows; i++){
		// 1 Circle Visible?
		// if(circleVisible[i] == true){
		if(circleVisible[i]){
			// 2 What is the size?

			// 3 We draw the circle
			fill(0, 0, 0, 200);
			noStroke();
			ellipse(x[i], height/2, circleFinalSize[i], circleFinalSize[i]);

			// 4 Text
			fill(255);
			textAlign(CENTER);
			textSize(10);
			text(year[i], x[i], height/2);
		}
	}		

}

// - - - - - - - - - - - - - - 

function slideShow(){

	// A Ask if timer is zero
	if(timer == 0){
		// A1 We increase the current Circle
		currentCircle++;
		// A2 We check that it doesn't go beyond the Array's limits
		if(currentCircle == totalRows){
			currentCircle = 0;
			resetCircleSizes();
		}
		// A3 New Timer! WE turn it on! We Set the current size to 0!
		timer = timerDuration;
		circleVisible[currentCircle] = true;		

		// A4 We execute a note
		var desiredNote = map(level[currentCircle], 0, 100, minFreq, maxFreq);
		playNote(desiredNote, noteDuration);

	}else{
		// B If timer is not zero, then we decrease it
		timer -= 1;
	}

}
// - - - - - - - - - - - - - -
function resetCircleSizes(){
	// ONE BY ONE RESETING CIRCLE SIZE!
	for(var i = 0; i < totalRows; i++){
		circleVisible[i] = false;	
	}

}
// - - - - - - - - - - -- - - -
function startSound(){
	// 1 New Oscillator
	osc = new p5.TriOsc();
	// 2 We start it
	osc.start();

	// 3 Zero volume
	osc.amp(0);
}
// - - - - - - - - - - - - -- 
function monitoringSound(){
	if(noteTimer < 0.1){
		// turn it off or lower it down 
		// osc. amp(0.0);// not so elegant way 
		// fades the sound(ultimate value, how fast?)
		osc.fade(0.0, 1.5);// an elegant way 
	}else{
		noteTimer -=0.1;
	}

}

// - - - - - - - - - - - - - -
function playNote(frequency, duration){
	// 1 We set the new Frequency 
	osc.freq(frequency)

	// 2 We fade in the volume
	osc.amp(0.5);

	// 3 We set the noteTimer
	noteTimer = duration; 

	
}
// - - - - - - - - -- - - - - - 


function keyTyped(){
	// 3 Different timer Durations
	 if(key == '0') timerDuration = 100;
	 if(key == '1') timerDuration = 23;
	 if(key == '2') timerDuration = 3;

}
