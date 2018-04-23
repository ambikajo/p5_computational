let angle = 0;


function setup() {
	createCanvas(400, 400);
    angleMode(DEGREES);
    rectMode(CENTER);
    frameRate(30);
}

function draw() {
    background(0);
    
    push();
    translate(50, 50)
    rotate(angle);
    fill(255, 100, 100);
    rect(0, 0, 100, 50);
    pop();
    
    
    translate(300, 300);
    rotate(-angle * 3);
    fill(100, 255, 100);
    rect(0, 0, 100, 50);
  
    angle = angle + 1;

}