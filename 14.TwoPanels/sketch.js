//--------------------------------------------------//

//---------------Canvas1---------------------------//
var canvas1 = function(sketch){

	sketch.setup = function(){
		canvas = sketch.createCanvas(500,500);
		canvas.style('z-index', '1');
		canvas.position(0,0);
		sketch.background(255,0,0,20);

	};

	sketch.draw = function(){

	};
};

var myCanvas1 = new p5(canvas1, "PositionA");
//--------------------------------------------------//

//------------------Canvas 2-----------------------//
var canvas2 = function(sketch){
	var lineSize = 245;
	var angle = 0;


	sketch.setup = function(){
		canvas = sketch.createCanvas(500,500);
		canvas.style('z-index', '1');
		canvas.position(500,0);
		sketch.background(0,255,0,150);

	};

	sketch.draw = function(){
		sketch.push();
		sketch.translate(500/2, 500/2);
		angle = sketch.map(sketch.mouseX, 0, 500, 0, 1);
		sketch.rotate(angle);
		sketch.line(-lineSize, 0, lineSize, 0);
		sketch.fill(0);
		sketch.ellipse(-lineSize, 0, 2, 2);
		sketch.ellipse(lineSize, 0, 2, 2);
		sketch.pop();


	};
};

var myCanvas2 = new p5(canvas2, "PositionB");
//--------------------------------------------------//

//------------------Canvas 3-----------------------//
var canvas3 = function(sketch){

	sketch.setup = function(){
		canvas = sketch.createCanvas(500,500);
		canvas.style('z-index', '1');
		canvas.position(1000,0);
		sketch.background(0,0,255,100);

	};

	sketch.draw = function(){
		
		sketch.rect(sketch.mouseX, sketch.mouseY, 30, 30);
		sketch.noFill();
	};
};

var myCanvas3 = new p5(canvas3, "PositionC");
//--------------------------------------------------//

//------------------Canvas 4-----------------------//
var canvas4 = function(sketch){

	sketch.setup = function(){
		canvas = sketch.createCanvas(500,500);
		canvas.style('z-index', '1');
		canvas.position(0,500);
		sketch.background(0,0,0,100);

	};

	sketch.draw = function(){
		sketch.ellipse(sketch.mouseX, sketch.mouseY,sketch.random(30),30);
		sketch.fill(sketch.random(255),sketch.random(128),0);

	};
};

var myCanvas4 = new p5(canvas4, "PositionD");
//--------------------------------------------------//

//------------------Canvas 5-----------------------//
var canvas5 = function(sketch){
	var img1;

	sketch.preload = function(){
		img1 = sketch.loadImage("data/pug.png")
	}
	sketch.setup = function(){
		canvas = sketch.createCanvas(500,500);
		canvas.style('z-index', '1');
		canvas.position(500,500);
		sketch.background(0,255,0,20);

	};

	sketch.draw = function(){
		sketch.background(160,160,160,20);
		sketch.image(img1,sketch.mouseX, sketch.mouseY,100,100);

	};
};

var myCanvas5 = new p5(canvas5, "PositionE");
//--------------------------------------------------//

//------------------Canvas 6-----------------------//
var canvas6 = function(sketch){

	var frameCount = 1;

	sketch.setup = function(){
		canvas = sketch.createCanvas(500,500, sketch.WEBGL);
		canvas.style('z-index', '1');
		canvas.position(1000,500);
		sketch.background(0,0,255,20);

	};

	sketch.draw = function(){
		sketch.background(0,0,255,20);

		sketch.rotateX(sketch.frameCount * 0.01);
		sketch.rotateY(sketch.frameCount * 0.01);
		sketch.box(sketch.mouseX, 50, 50);

	};
};

var myCanvas6 = new p5(canvas6, "PositionF");

