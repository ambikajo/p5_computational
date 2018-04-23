var spot = {
    x: 100,
    y: 50
}

var col = {
    r: 255,
    g: 0,
    b: 0    
}

function setup() {
  // put setup code here
    createCanvas(600, 400);
    background(0);
    
}

function draw() {
  // put drawing code here
    col.r = random(100,255);
    col.b = random(100,190);
    noStroke();
    spot.x = random(0, width);
    spot.y = random(0, height);
  fill(col.r, col.g, col.b, 100);
    ellipse(mouseX, mouseY, 24, 24);
}

function mousePressed() {
    background(0);
}
