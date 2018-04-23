var circle = {
    x:250,
    y:250,
    diameter: 15
}

function setup() {
  // put setup code here
    createCanvas(500,500);
    background(250,250,170);
    
}

function draw() {
  // put drawing code here 
    noStroke();
    
    //variable of circle diameter changes by 1
    circle.diameter = circle.diameter + 1;
    
    // if diameter is less than 400 the circle grows
    if (circle.diameter < 400) {
     ellipse(circle.x, circle.y, circle.diameter, circle.diameter);
    } 
}


