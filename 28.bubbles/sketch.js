var sA = function( sketch ){
    var canvas;

sketch. setup = function(){
    sketch.createCanvas(800, 480, sketch.WEBGL);
    //sketch.position(0, 0);
	//sketch.style('z-index', '-99');

};

sketch.draw = function(){
    sketch.background(209,228,255);
    sketch.rotateY(sketch.frameCount * 0.01);

    for(var j = 0; j < 5; j++){
        sketch.push();
        for(var i = 0; i < 80; i++){
            sketch.translate(sketch.sin(sketch.frameCount * 0.001 + j) * 100, sketch.sin(sketch.frameCount * 0.001 + j) * 100, i * 0.1);
            sketch.rotateZ(sketch.frameCount * 0.002);
            sketch.push();
                sketch.sphere(8, 6, 4); 
            sketch.pop();
        };
        sketch.pop();
    };
};
};

var mySketchA = new p5(sA, 'positionA');

var sB = function( sketch ){
    var canvas;

sketch. setup = function(){
    sketch.createCanvas(800, 480, sketch.WEBGL);
    //sketch.position(0, 0);
	//sketch.style('z-index', '-99');

};

sketch.draw = function(){
    sketch.background(209,228,255);
    sketch.rotateY(sketch.frameCount * 0.01);

    for(var j = 0; j < 5; j++){
        sketch.push();
        for(var i = 0; i < 80; i++){
            sketch.translate(sketch.sin(sketch.frameCount * 0.001 + j) * 100, sketch.sin(sketch.frameCount * 0.001 + j) * 100, i * 0.1);
            sketch.rotateZ(sketch.frameCount * 0.002);
            sketch.push();
                sketch.sphere(8, 6, 4); 
            sketch.pop();
        };
        sketch.pop();
    };
};
};

var mySketchB = new p5(sB, 'positionB');

//var sA = function( sketch ) {
//	// 1. Variables
//	var lineSize = 245;
//	var angle = 0;
//
//	// 2. Setup
//	sketch.setup = function(){
//		sketch.createCanvas(500,500);
//		sketch.background('#eeeeee');
//
//	};
//
//	// 3. Draw
//	sketch.draw = function(){
//		sketch.background('#eeeeee');
//		sketch.push();
//		sketch.translate(500/2, 500/2);
//		angle = sketch.map(sketch.mouseX, 0, 500, 0, 1);
//		sketch.rotate(angle);
//		sketch.line(-lineSize, 0, lineSize, 0);
//		sketch.fill(0);
//		sketch.ellipse(-lineSize, 0, 2, 2);
//		sketch.ellipse(lineSize, 0, 2, 2);
//		sketch.pop();
//
//	};
//
//};
//// We start the sketch and add a div tag (so we can position it inside our html)
//var mySketchA = new p5(sA, 'positionA');
//
//
//// - - - - - - - - - - - - - - - - - - - - - - - - - - - /
//// - - - - - - CANVAS #2 - - - - - - - - - - - - - - - - \
//// - - - - - - - - - - - - - - - - - - - - - - - - - - - /
//
//var sB = function(sketch){
//	// 1. Variables
//	var angle = 0;
//	var angleSpeed = 0.05;
//
//	// 2. Setup
//	sketch.setup = function(){
//		sketch.createCanvas(100,100);
//		sketch.background('#eeeeee');
//	};
//
//	// 3. We Draw
//	sketch.draw = function(){
//		sketch.background('#eeeeee');
//		sketch.push();
//		sketch.translate(150/2, 150/2);
//		angle += angleSpeed;
//		sketch.rotate(angle);
//		sketch.noFill();
//		sketch.ellipse(0, 0, 90, 90);
//		sketch.fill(0);
//		sketch.ellipse(90/2, 0, 4, 4);
//		sketch.pop();
//	}
//
//
//};
//// We start the sketch and add a div tag (so we can position it inside our html)
//var mySketchB = new p5(sB, 'positionB');
//
//
//
//// - - - - - - - - - - - - - - - - - - - - - - - - - - - /
//// - - - - - - CANVAS #3 - - - - - - - - - - - - - - - - \
//// - - - - - - - - - - - - - - - - - - - - - - - - - - - /
//var sC = function(sketch){
//
//	// 2. Setup
//	sketch.setup = function(){
//		sketch.createCanvas(50,50);
//		sketch.background('#eeeeee');
//	};
//
//	// 3. We Draw
//	sketch.draw = function(){
//		sketch.background('#eeeeee');
//		sketch.fill(0);
//		// sketch.noStroke();
//		sketch.noStroke();
//		if(sketch.random(10)>2){
//			sketch.beginShape();
//			sketch.vertex(0, 0);
//			sketch.vertex(25, 0);
//			sketch.vertex(0, 25);
//			sketch.endShape();
//		}
//	};
//
//
//};
//
//// We start the sketch and add a div tag (so we can position it inside our html)
//var mySketchC = new p5(sC, 'positionC');
