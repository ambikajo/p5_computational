function setup() {
	createCanvas(600, 600);
}

function draw() {
    background(0);
    noFill();
    strokeWeight(1);
    stroke(255);
    let fc = frameCount * 0.08;
    beginShape(TRIANGLE_STRIP);
    for (let i = TWO_PI; i >= 0; i-=0.6) {
        let r = 100 ;
        let x = r * cos(i) + width/2;
        let y = r * sin(i) + height/2;
        vertex(x,y);
       
    }
    endShape();
    
}