let x;
let xpos;
let q = [];
let col;
//let padding; 

function setup() {
	createCanvas(600, 600);
    frameRate(1);
}

function draw() {
    background(255);
    let col = random(0,255);
    fill(col, 120, col, 85);
    
    noStroke();
    //stroke(0);
    //strokeWeight(1);
    //let padding = width * 0.05;
    //translate(padding, padding);
    for (let x = 0; x < width; x+=random(10,45)) {
        var y = x%50;
        beginShape();
        vertex(x, y);
        bezierVertex(x, random(100,250), 120,  20, x+250, y+50);
        //vertex(x+50, y);
        endShape();
        
     } 
    
    
}

