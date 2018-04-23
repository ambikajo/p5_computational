var r = 0;
var b = 255;

function setup() {
  // put setup code here
    createCanvas(600, 400);
    
}

function draw() {
  // put drawing code here
    r = map(mouseX, 0, 600, 0, 255);
    b = map(mouseX, 0, 600, 255, 0);
    background(r, 0, b);
    noStroke();
    fill(255,200,150);
    ellipse (mouseX, 200, 64, 64);
}
