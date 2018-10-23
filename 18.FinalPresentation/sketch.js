
var canvas1 = function(sketch){
	var img1;
	var img2;
	var img3;
	sketch.preload = function(){
		img1 = sketch.loadImage("data/time.png")
		img2 = sketch.loadImage("data/choices.png")
		img3 = sketch.loadImage("data/highway.png")
	}
	
	sketch.setup = function(){
		canvas = sketch.createCanvas(1000,1000);
		canvas.style('z-index', '1');
		canvas.position(300,200);
		sketch.background(0,255,0,150);

	};

	sketch.draw = function(){
		sketch.image(img1,250,0,500,500);
		sketch.image(img2,0,500,500,500);
		sketch.image(img3,500,650,500,200);
	};
};

var myCanvas5 = new p5(canvas1, "PositionA");

//---------------------------------------------------------------------------//
//---------------------------------------------------------------------------//

var canvas2 = function(sketch){
	var img1
	sketch.preload = function(){
		img1 = sketch.loadImage("data/maps.png")
	}
	
	sketch.setup = function(){
		canvas = sketch.createCanvas(1000,1000);
		canvas.style('z-index', '1');
		canvas.position(1400,200);
		sketch.background(0,255,0,150);

	};

	sketch.draw = function(){
		sketch.image(img1,0,0,1000,1000);

	};
};

var myCanvas5 = new p5(canvas2, "PositionB");