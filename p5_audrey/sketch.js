
function setup() {
    createCanvas(600, 600);
    pixelDensity(5.0);
   // saveFrames("aud_p5_", "png", 4, 22);
    
}

function draw() {
    background(255);
    fill(255, 182, 193);
    noStroke();
    rect(20, 20, 560, 560);

    noStroke();
    // strokeWeight(2);
    // stroke(255);    
    translate(width / 2, height / 2);
    beginShape(POINTS);
    fill(255);
    for (var a = 0; a < TWO_PI; a += 0.003) {
        r = 150;
        let x = 250 * cos(a);
        let y = r * sin(a * 900 + frameCount * 0.01);
        //vertex(x,y);
        ellipse(x, y, 2, 2);
    }
    endShape();

}
