
//in class assignment, not homework
//https://www.w3schools.com/jsref/prop_style_animation.asp
var x;
var y;
var a;
var b; 

function preload(){
	
}
function setup(){
	//initial settings
	createCanvas(1250,400);
	background(255, 0, 0);
	x = 350;
	y = 100;
	a = 0.75;
	b = 0.75;
	

}
//
//end of set up
//

function draw (){
	
	x = x + a;

		if (x>1250){
			a = -a;	
			x = x + a;
		}

	x = x + a;

		if (x<0){
			a = -a;
			x = x + a;
		}

	y = y + (2.3*b);

		if (y>400){
			b = -b;
			y = y + b;
		}

	y = y + (2.3*b);

		if (y<0){
			b = -b;
			y = y + b;
		}

	
	ellipse(x,y,random(10,20),random(10,20));
	fill(255,255,255);
}

