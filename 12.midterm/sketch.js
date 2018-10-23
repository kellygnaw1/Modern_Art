var x;
var y;
var ySound;
var a;
var b;
var img1; 
var song;

function preload(){
	img1 = loadImage("data/rolex.png");
	song = loadSound("cig.mp3");
}

function setup(){
	canvas=createCanvas(500,800);
	canvas.position(500,0);
	canvas.style('z-index', '-99');
	background(0,25);
	x = 350;
	y = 100;
	a = 0.75;
	b = 0.75;
	song.setVolume(0.5);
	song.play();
	fft = new p5.FFT();
	ySound = height/2;
	
}

function draw(){
	x = x + a;

		if (x>500){
			a = -a;	
			x = x + a;
		}

	x = x + a;

		if (x<0){
			a = -a;
			x = x + a;
		}

	y = y + (2.3*b);

		if (y>800){
			b = -b;
			y = y + b;
		}

	y = y + (2.3*b);

		if (y<0){
			b = -b;
			y = y + b;
		}

	
	image(img1,x+30,y+30,100,100);
	draw2();
	
}

function draw2(){
	var spectrum = fft.analyze();
	for (var i =0; i <spectrum.length; i++){
		//A calculate the height of each slice
		var h = map(spectrum[i],0,255,0,80);

		//B calculating the x position
		var x = map(i, 0, spectrum.length/4, 0, width);

		//C We draw!
		stroke(50,0,0,20);
		strokeWeight(4);
		line(x, ySound, x, ySound+h)

	}

	ySound += 0.1;
	if (ySound>height){
		ySound = height/4;
	}

}


