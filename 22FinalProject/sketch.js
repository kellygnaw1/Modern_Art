// - - - - - - - - - - - - 
// Art 22 Final - Video Placeholder
// - - - - - - - - - - - - 

var canvas;
var video, song;

// - - - - - - - - - - - - 

function preload(){

	song = loadSound('data/GhostTown.mp3');
}

// - - - - - - - - - - - - 

function setup(){
	video = createVideo(['data/recording.m4v']);
	canvas = createCanvas(800, 600);
	var x = windowWidth/2-width/2;
	var y = 150;
	canvas.position(x, y);
	canvas.style('z-index', '-99');
	background(0, 255, 0);

}

// - - - - - - - - - - - - 

function draw(){
	image(video,0, 0, 800, 600);
	video.loop();
	song.loop();

}

// - - - - - - - - - - - - 