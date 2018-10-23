var mySong, fft;
var totalStars;
var y = [];
var x = [];
var yx;
var speedY =[];

function preload(){
	stars = loadImage("data/star.png");
	mySong = loadSound("starshopping.mp3");
}


function setup(){
	canvas = createCanvas(1000,800);
	canvas.position(230,0);
	canvas.style('z-index', '-99');


	mySong.setVolume(0.5);
	mySong.play();
	fft = new p5.FFT();
	totalStars = 40;
	yx=height/2;

	for (var i = 0; i<totalStars; i++){
		x[i]=random(0,width);
		y[i]=random(0,height);
		speedY[i] = 2;
	}

}

function draw(){
	//draw stars
	background(0,7);
	for (var i = 0; i< totalStars; i++){
		speedY[i]=2;
		y[i]=y[i]+speedY[i];
		image(stars, x[i], y[i], 25, 25);

		if (y[i]>height){
			y[i]= 0;
			x[i]=random(0,width);
		}
	}
	//matching waves with sound
	var spectrum = fft.analyze();
	for (var i =0; i <spectrum.length; i++){
		//A calculate the height of each slice
		var h = map(spectrum[i],0,255,0,500);

		//B calculating the x position
		var xx = map(i, 0, spectrum.length, 0, width);

		//C We draw!
		stroke(0,0,255,7);
		line(xx, 0, xx, h);

		var xx1 = map(i, 0, spectrum.length, width, 0);
		stroke(0,0,255,7);
		line(xx1,height,xx1,height-h);

		if(h>0.8){
			stroke(255,0,0,3);
			line(-xx*3,800,1000,h*1.5);
		}

		

	}
}


