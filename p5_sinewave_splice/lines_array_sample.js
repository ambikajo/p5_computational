let x = [];
let angle;

function setup() {
    createCanvas(600,600);
    for (let i = 0; i < width; i++){
        x[i] = random(0, width);
    }
    angle = random(HALF_PI, TWO_PI)
}

function draw() {
    background(0);
    for (let i = 0; i < x.length; i++) {
        x[i] += sin(angle);
        //strokeWeight(14);
        stroke(200, x[i], 100, 100);
        line(x[i], i, i, height);
    }
}
