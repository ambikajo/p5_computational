let al;

function setup() {
    createCanvas(600, 600);
    //saveFrames("aud_p5_", "png", 2, 22);
}

function draw() {
    background(255);
    fill(255, 182, 193);
    noStroke();
    rect(20, 20, 560, 560);


    strokeWeight(2);
    stroke(76, 0, 156, 20);
    translate(width / 2, height / 2);
    al = 0;
    beginShape(POINTS);

    noFill();
    for (var a = 0; a < TWO_PI; a += 0.003) {
        r = 150;
        let x = r * cos(a * 270 + frameCount * 0.01) + al * 0.01;
        let y = r * sin(a * 270 + frameCount * 0.01) + al * 0.01;
        //vertex(x,y);

        ellipse(x, y, 40, 1);
        al = al + 2;
    }
    endShape();

}
