
var mySong, fft;
var y;
function preload(){
	mySong = loadSound("Cherry.mp3");
}

function setup(){
	createCanvas(1000,500);
	background('#eeeeee');

	// play the sound
	mySong.setVolume(0.5);
	mySong.play();
	fft = new p5.FFT();

	y = height/2;

}

function draw(){

	var spectrum = fft.analyze();
	for (var i =0; i <spectrum.length; i++){
		//A calculate the height of each slice
		var h = map(spectrum[i],0,255,0,80);

		//B calculating the x position
		var x = map(i, 0, spectrum.length, 0, width);

		//C We draw!
		stroke(0,0,0,20);
		line(x, y, x, y+h);

	}

	y += 0.1;
	if (y>height){
		y = height/4;
	}
}