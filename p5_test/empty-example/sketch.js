var circle1 = {
    x: 0,
    y: 300,
    diameter: 30
};

var circle2 = {
    x: 300,
    y: 0,
    diameter: 50
};

function setup() {
  // put setup code here
    createCanvas(500,500);
     background(250,250,170);
}

function draw() {
  // put drawing code here
   
    fill(circle1.x,30,100);
    noStroke();
    ellipse(circle1.x, circle1.y, circle1.diameter, circle1.diameter);
    ellipse(circle2.x, circle2.y, circle2.diameter, circle2.diameter);
    circle1.x = circle1.x + 1;
    circle2.diameter = circle2.diameter + 1;
    circle2.y = circle2.y + 1;
    
    
}
