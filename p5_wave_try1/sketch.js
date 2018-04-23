let x;

function setup() {
	createCanvas(400, 400);
    
    
}

function draw() {
    background(150);
    //stroke(255);
    //strokeWeight(4);
    noStroke();
    //noFill();
    fill(100, 30, 200);
    beginShape();
    vertex(0, 200)
    bezierVertex(100, 50, 300, 350,  400, 200);
    vertex(400, 380);
    bezierVertex(200, 380, 100, 150, 0, 200);
    endShape(CLOSE);
 
}

