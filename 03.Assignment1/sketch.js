

var x;
var y;
var a;
var b;

function setup() {
  
  createCanvas( 1200, 400 );
  background( 255, 0, 0 );
  frameRate(60)

  x = 150;
  y = 150;

  // movement
  a = 1;
  b = 2;

}

function draw() {
  
  x = x + a
  y = y + b

  
  if ( x > width ) {
  	a = -a;
  }

  if ( y > height ) {
  	b = -b;
  }

  if ( x < 0 ) {
  	a =-a;
  }

  if ( y < 0 ) {
  	b =-b;
  }

  
  ellipse( x, y, random(15, 20) , random(15, 20) );
  fill ( 255, 255, 255 );
  strokeWeight(1)
}

