let xoff = 0;

function setup() {
    createCanvas(600, 600);
}

function draw() {
    background(0);
    translate(width / 2, height/2);
    //noFill();
    fill(255, 10);
    //noStroke();
    stroke(255);
    beginShape();
        for (var a = 0; a < TWO_PI; a += 0.1) {
            let fc = frameCount * 0.01;
            //let r = 200;
            //let r = sin(a) * 250;
            //let r = random (-5,5);
            xoff = xoff + 0.0005;
            let r = 200;
            let x = r * cos(a);
            let y = r * sin(a);
//            let x = r * cos(a * noise(xoff));
//            let y = r * sin(a * noise(xoff));
            vertex(x, y);
            //ellipse(x, y, 4 , 4);
        }
    endShape(CLOSE);
}
