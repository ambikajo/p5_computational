let angle = 0; 

function setup() {
	createCanvas(600, 600);
    //angleMode(DEGREES);
    
    frameRate(1);
    
}

function draw() {
    background(0);
    stroke(155, 200, 30, 30);
    noFill();
    translate(50, height/2);
    for (let angle = 0; angle < TWO_PI; angle+=.01) {
        let x = angle * 80;
        let y = sin(angle) * 80
        ellipse(x, y, 20, 20);
    } 
    
}