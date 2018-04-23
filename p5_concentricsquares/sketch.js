let x;
let xoff = 0;
function setup() {
    createCanvas(400, 400);
   
   
}

function draw() {
    background(200,30, 200);
    //translate(width/4, height/4);
    //xoff = xoff + 0.01;
    var n = noise(xoff) * width;
    for (let x = 0; x < width/2; x += 5) {
        noFill();
        rectMode(CENTER);
        rect(width/4, height/4, x, x);
        rect(width - width/4, height/4, x, x);
        rect(width/4, height - height/4, x, x);
        rect(width - width/4, height - height/4, x, x);
    }
   
}

