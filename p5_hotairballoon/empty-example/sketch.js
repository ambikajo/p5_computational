var circle1 = {
    x: 250,
    y: 480,
    diameter: 30
};

var color = 0;

function setup() {
  // put setup code here
    createCanvas(500,500);
    background(250,250,170);
}

function draw() {
  // put drawing code here
   
    fill(0,30,100);
   
    noStroke();
    ellipse(circle1.x, circle1.y, circle1.diameter, circle1.diameter);
    circle1.y = circle1.y - 1;
    circle1.diameter = circle1.diameter + 1;
  
   
    
    
}
