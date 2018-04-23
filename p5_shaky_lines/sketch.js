let amp = 30;

function setup() {
	createCanvas(600, 600);
}

function mousePressed() {

}

function draw() {
    background(0);
    noFill();
    //fill(255, 100, 100);
    //noStroke();
    stroke(255);
    translate(0, height/2);
    beginShape(POINTS);
    for (let a = 10; a < width ; a+=10){
        let xpos = a;
        let ypos = sin(a * 0.05 + frameCount*0.01) * amp;
        vertex(xpos, ypos);
        //ellipse(xpos, ypos, 5, 5);
    }
    endShape();

}