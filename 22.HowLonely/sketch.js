// - - - - - - - - - - - - - - - - - - - - - - -- \\
// - - - - - - - GRIDS EVERYWHERE - - - - - \\
// - - - - - - - - - - - - - - - - - - - - - - -- \\
// Art 22 - - A lonely individual


// Switches
var tolerance = 4000;
var population = 20; 
var speedMin = 0.2;
var speedMax = 3; 
var sizeI = 7;
var noiseIX = 0.008;
var noiseIY = 0.007;

// - - -  Main Individual
var xI, yI, variationIX, variationIY; 

// - - -  Population
var x = []; 
var y = [];
var speeds = [];



// - - - Sound variables
var song; // song file
var connections; // Connections true/false
var reverb; 

// - - - - - - - - - - - - - - - - - - - - - - -- - -PRELOAD
function preload(){
	// We load our song
    song = loadSound('data/margaretBourkeWhite.mp3');

}

// - - - - - - - - - - - - - - - - - - - - - - -- \\ SETUP

function setup(){

	// 1. Classic Canvas Operations
	canvas = createCanvas(450,450);
	canvas.position(0, 0);
	canvas.style('z-index', '-99');
	canvas.style('margin-left', '250px');
	canvas.style('margin-top', '250px');

	// 2. Start grid & PopulateArrays
	startPopulation();

	// 3. Start our individual's variables xI, yI, varIX, varIY, connections
    xI = 0; 
    yI = 0; 
    variationIX = 0.0;
    variationIY = 0.0;

	// 4. We start the sound
    song.loop();
 	connections = false;
    reverb = new p5.Reverb();
    reverb.process(song, 6, 0.2);
    reverb.amp(4);
}

// - - - - - - - - - - - - - - - - - - - - - - -- \\ DRAW

function draw(){

	//
	background(238,238,238);

	// 
    showPopulation();
    
	// 
    showIndividual();


}
// - - - - - - - - - - - - -- - 

function showIndividual(){
	// 1. We calculate it's position
    variationIX += noiseIX;
    xI = noise(variationIX)*width;
    //could also do it like xI = map(noise(variationIX), 0, 1, 0 width)
    variationIY += noiseIY;
    yI = noise(variationIY)*height; 

	// 2. We draw
    stroke(40);
    strokeWeight(random(3));
    line(xI-sizeI, yI-sizeI, xI+sizeI, yI+sizeI);
    line(xI+sizeI, yI-sizeI, xI-sizeI, yI+sizeI);
    

	// 3. We check the connections- could also include this in draw
	checkConnections();

	// 4. Check sound
	checkSound();
}

// - - - - - - - - - - - - -- - 


function startPopulation(){
    for(var i = 0; i<population; i++){
        x[i]= random(width)
        y[i]= 0;
        speeds[i] = random(speedMin, speedMax);
        
    }


}


// - - - - - - - - - - - - - - -

function showPopulation(){
    for(var i = 0; i < population; i++){
        //1. calculate the positions of ellipse 
        y[i] += speeds[i];

        //2. we draw the population
        noStroke();
        var sizePop = random(2,4);
        fill(90, 90, 90, random(250,250));
        ellipse(x[i], y[i], sizePop, sizePop);
        
        //3. make it come back/ loop 
        if(y[i]> height){
            y[i] = 0;
            x[i] = random(width);
        }
    }
    


}

// - - - - - - - - - - - - - - - 
function checkConnections(){
    connections = false; 
    for( var i = 0; i < population; i++){
        if( dist(x[i], y[i], xI, yI )<tolerance){
            strokeWeight(random(1));
            stroke(0, 0, 0, random(150));
            line(x[i], y[i], xI, yI);
            connections = true;
        }
    }

}

// - - - - - - -
function checkSound(){
	// 1. Volume
    if(connections == true){
        song.amp(1);
    }else{
        song.amp(0);
    }


	// 2. PlayBack Speed
    var playBackSpeed = map(yI, 0, height, 0.1, 2);
    song.rate(playBackSpeed);

}