let rows;
let cols;

let scl = 20;
let w = 600;
let h = 600;
let xoff = 0.0;
let yoff = 0.0;

function setup() {
    createCanvas(600, 600);
    cols = w / scl;
    rows = h / scl;
}

function draw() {
    background(0);
    noFill();
    //fill(255, 182, 192);
    //noStroke();
    stroke(255, 182, 192);
    beginShape();
    for (let y = 0; y < rows; y++) {
        for (let x = 0; x < cols; x++) {
            xpos = map(noise(x, yoff), 0, 1, -0.1, 0.3);
            vertex(x * scl, y * scl);
            vertex((x+xpos) * scl, (y + 1) * scl);
            x += 0.2
        }
    }

    yoff += 0.03
    endShape();


}
