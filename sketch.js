//Brush Experiment #1
//v01– Getting Started
//-------------------
function setup (){
	createCanvas (windowWidth, windowHeight);
	background(0);

}
//-------------------
function draw(){
    mousePressed();
}

function mousePressed(){
    var circleSize = random (30);
    var colorRand = random(255);
    //don't repeat song after the cubes 
    if(mouseIsPressed == true){
        ellipse(mouseX, mouseY, circleSize, circleSize);
        fill(0,colorRand,0);
    }else{
        ellipse(mouseX, mouseY, circleSize, circleSize);
        fill(colorRand,0,0);
    }
}


function windowResized () {
    resizeCanvas (windowWidth, windowHeight); 
}
