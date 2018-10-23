//
//
var x,y;
var speedX, speedY;
var directionX, directionY;
function setup(){
	createCanvas(1500,500);
	background(0,255,0);
	x = width/2;
	y = height/2;
	speedX = 13;
	speedY = 13;
	directionY = 1;
	directionX =1;
}
function draw(){
	x += speedX*directionX;
	y += speedY*directionY;
	if(y > height){
		directionY = -1;
	}
	if (y<0){
		directionY = 1;
	}
	if(x > width){
		directionX = -1;
	}
	if (x<0){
		directionX = 1;
	}
	

	fill(random(255),random(20),0);
	noStroke();
	ellipse(x,y,x/100,50);

	stroke(255,0,0)
	line(x,y,y,random(width));

	if(random(10)>9.9){
		background(random(255));
	}

}