var pg 
function setup(){
    canvas=createCanvas(700,700);
    canvas.position(500,200);
    slider = createSlider(0,255,127)
    pixelDensity(1);
    pg = createGraphics(200,200);
    pg.background(51);
}

function draw(){
    background(100,0,0);
    if(mouseIsPressed){
        pg.fill(mouseX, mouseY, slider.value());
        pg.noStroke();
        pg.ellipse(mouseX,mouseY,slider.value());
        
    }
    image(pg,0,0);
    image(pg,250,0);
    image(pg,500,0);
    image(pg,0,250);
    image(pg,250,250);
    image(pg,250,500);
    image(pg,500,250);
    image(pg,500,500);
    image(pg,0,500);
    
    if (mouseIsPressed){
        fill(mouseX,mouseY,slider.value());
        rect(mouseX,mouseY,30,30);
    }
}

function keyPressed(){
    pg.background(51);
}

