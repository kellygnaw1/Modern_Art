var spot = {
    x:100,
    y:50
};

var col = {
    r: 255,
    g: 0,
    b: 0
};
function setup(){
    createCanvas(600,400);
    background(0);
    
    
}

function draw(){
    spot.x = random(0,width);
    spot.y = random(0, height);
    col.r = map(spot.y, 0, 400, 0, 255);
    col.b = map(spot.x, 0, 600, 0, 255);
    col.g = map(spot.x, 0, 600, 0, 255);
    noStroke();
    fill(col.r, col.g, col.b, 100);
    ellipse(spot.x, spot.y, 24, 24);
    
}

function mousePressed(){
    background(0);
}