let al;
let mic;

function setup() {
    createCanvas(600, 600);
    mic = new p5.AudioIn();
    mic.start();
    //uncomment for 15-20 frames
    //saveFrames("aud_p5_", "png", 2, 22);
}

function draw() {
    background(255);
    fill(255, 182, 193);
    noStroke();
    rect(20, 20, 560, 560);

    micLevel = mic.getLevel()
    strokeWeight(2);
    stroke(255);
    translate(width / 2, height / 2);
    
    //rose mathematics applied to var r - uncomment the one with frameCount for animation
    al = 0;
    beginShape(POINTS);
    for (var a = 0; a < TWO_PI*4; a += 0.009) {
        //let r = cos(a * 58 * micLevel  + frameCount * 0.005);
        let r = cos(a * 58);
        let x = r * cos(a) * 200 ;
        let y = r * sin(a) * 200 ;
        vertex(x,y);

        //ellipse(x, y, 40, 1);
        al = al + 2;
    }
    endShape();

}