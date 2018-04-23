let yoff = 0.0;

function setup() {
    createCanvas(600, 600);
}

function draw() {
    background(255, 182, 192);
    fill(255, 100);

    // y = x*noise(height);
    //ellipse(200, 200, ra, ra);

    translate(width / 2, height / 2);
    var xoff = 0.0;
    beginShape();
    for (let a = 0; a < TWO_PI; a += 0.03) {
        
        noFill();
        offset = xoff + map(noise(xoff, yoff, xoff+yoff), 0, 1, -20, 20);
        stroke(255, 100);
        r = 200 + offset;
        x = r * cos(a);
        y = r * sin(a);
        //vertex(x, y);
        rect(0, 0, x, y);
        //ellipse(0, 0, x*3, y*3);
        xoff += 0.09;
    }
    endShape();
    yoff += 0.01;
}
