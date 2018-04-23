var x = 0;
var speed = 3;

function setup() {
  // put setup code here
    createCanvas(600, 400);
    
}

function draw() {
  // put drawing code here
    background(0);
    stroke(255);
    strokeWeight(4);
    noFill();
    ellipse(x,200, 100, 100);
    
    if (x > width || x < 0) {
        speed = speed * -1;
    }
    x = x + speed;
   
}
