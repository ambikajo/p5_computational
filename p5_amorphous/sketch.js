//ref this video https://youtu.be/rX5p-QRP6R4

let yoff = 0.0;


function setup() {
	createCanvas(600, 600);
    //frameRate(1);
}

function draw() {
    
    background(0);
    translate(width/2, height/2);
    stroke(255);
   // r = 100;
     

    fill(255);
   beginShape(); 
    var xoff = 0;
    for (let a = 0; a < TWO_PI; a+=.001) {
        let offset = map(noise(xoff, yoff), 0, 1, -25, 25);
        
        //let r = 250 * sin(a * .4 + frameCount * 0.01);
        let r = 100 + offset;
        let x = r * cos(a);
        let y = r * sin(a);
        vertex(x, y);
        xoff += .01;
    }
    
    endShape(CLOSE);
    yoff += 0.01;
}