function setup() {
    createCanvas(600, 600);
}

function draw() {
    //background(255, 182, 190);
    //background(0);
    background(255);
    //stroke(255);
    translate(width / 2, height / 2);
    beginShape();
    for (var i = 0; i < TWO_PI; i += 0.3) {
        for (var r = width / 2; r >= 5; r -= 5) {
            noStroke();
            fill(100, r, 225,10);
            //strokeWeight(4);
            //vertex(cos(i)*r, sin(i)*r);
            ellipse(cos(i) * r, sin(i) * r, r, r);

        }

        // ellipse(cos(i)*75, sin(i)*75, 75, 75);
        // ellipse(cos(i)*100, sin(i)*100, 100, 100);
    }
    endShape();
}
