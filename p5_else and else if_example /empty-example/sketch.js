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
    if (mouseX > 300 && mouseX < 400) {
       fill(255, 0, 200);
    } 
    
    rect(300,200,100,100);
   
}
