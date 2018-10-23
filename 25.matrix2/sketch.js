
var mySong, fft;
var capture;
var canvas;
var mic;

function preload(){
    mySong = loadSound("piano.mp3");  
}
function setup(){
    
    canvas = createCanvas(1500, 800, WEBGL); //3d canvas
    canvas.position(CENTER);
	canvas.style('z-index', '-99');
//    var fov = 60 / 180 * PI;
//    var cameraZ = height / 2.0 / tan(fov / 2.0);
//    
//    perspective(40 / 180 * PI, width /height, cameraZ * 0.1, cameraZ * 10);
    
    //capture web cam
    capture = createCapture(VIDEO);
    capture.size(100,100,WEBGL);
    capture.hide();  // hide little capture canvas 
    
    //play song/ find FFT
    mySong.setVolume(0.4);
	mySong.play();
	fft = new p5.FFT();
    
    //get audio from mic
    mic = new p5.AudioIn(); 
    mic.start();


}

function draw() {
    background(150);
    
    //play each part with mouse pressed
    mousePressed();
}

function mousePressed(){
    //don't repeat song after the cubes 
    if(mouseIsPressed == true){
        mySong.stop();
        createVid();
    }else{
        music();
        music2();
    }
}


function music(){
    var waveform = fft.waveform();
//    translate(width/3.6, -height/6, 0);
    
    
    /*
    // GNAW METHOD
	for (var i =0; i <waveform.length/2; i++){
        if (i%50 == 0) {
            //A calculate the height of each slice
            var h = map(waveform[i],-1,1,-80, 80); // originally 0, 80
            
            //console.log(spectrum[i]);

            //B calculating the x position
           // var xx = map(i, 0, spectrum.length, 0, width);

            //C We draw!
            ambientLight(30);
            translate(-60,h,0);
            strokeWeight(0.3);
            sphere(30);     
        }

	}
    */
    
    // Escalante Method
    var totalSpheres = 43;
    
    for(var i = 0; i < totalSpheres; i++){
        
        var findPos = int(map(i, 0, totalSpheres, 0, waveform.length-1));// finding the position of the array
        
        var h = map(waveform[findPos], -1, 1, -500, 500);//mapping index of waveform
            
        // We draw the spheres
        pointLight(255, 0, 0, mouseX-200, 0, mouseY-200);
        
        //two lines of sphere
        push();
        
        translate(width/3.6, -height/6, 0);
        ambientMaterial(255);
        var sphereSize = 10;
        translate((-sphereSize*2)*i,h,0);
        strokeWeight(0.3);
        sphere(sphereSize);
        
        pop();
        
        
        push();
        
        translate(width/3.6, height/6, 0);
        ambientMaterial(255);
        var sphereSize = 10;
        translate((-sphereSize*2)*i,h,0);
        strokeWeight(0.3);
        sphere(sphereSize); 
        
        pop();
        
//            push();
//            translate(width/3.6, 0, 0);
//            ambientMaterial(255, 239, 0);
//            var sphereSize = 10;
//            translate((-sphereSize*2)*i,h,0);
//            strokeWeight(0.3);
//            sphere(sphereSize); 
//            pop();   
        
    }
    
}

function music2(){
    var vol = mic.getLevel();
    
    //translate to the middle of canvas
    translate(-width/3.6,0,0);
    
    //create an array of sparcer circles
    for(var w = 0; w <450; w=w+50){
        
        //map the height of them all at once 
        var h1 = map(vol, 0, 1, -10, 500);
        
        push();
        
        translate(w,0,0);
        translate(w-h1,h1,0);
        sphere(10);
        
        pop();
    }
}

function createVid(){
    
    //standard perspective with a closer view 
    var fov = PI/6;
    var cameraZ = (height / 2.0) / tan(fov / 2.0);
    perspective(fov, float(width)/float(height), cameraZ/10.0, cameraZ*10.0);
    orbitControl();
    
    for (var i = -10; i < 2; i++) {
        for (var j = -13; j < 3; j++) {
            
            push();
            
            translate(i * 160, 0, j * 160);
            stroke(255,0,0);
            strokeWeight(3);
            box();
            texture(capture);
            box(40, 40, 40);
            
            pop();
          
        }
    }
    
}







