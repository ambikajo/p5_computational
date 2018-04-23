let rows;
let cols;

let scl = 20;
let w = 600;
let h = 600;
//let xoff = 0.0;
//let yoff = 0.0;

function setup() {
    createCanvas(600, 600);
    cols = w / scl;
    rows = h / scl;
}

function draw() {
    background(0);
    noFill();
    stroke(255, 182, 192);
    let x = 20;
    beginShape(TRIANGLE_STRIP);
    
    vertex(x,x);
    
    vertex(x,x+20);
    
    vertex(x+20,x);
    
    
    //vertex(x+20,x);
    
    endShape();


}
