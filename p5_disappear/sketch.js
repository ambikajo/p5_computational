function setup() {
	createCanvas(400, 400);
}

function draw() {
    background(170);
    noStroke();
    let offset = 0;
    for (let y = 30; y <=height-30; y+=15) {
        for (let x = 30; x <=width-30; x+=15) {
            let r = (5 * sin(HALF_PI)) + offset;
            ellipse(x, y, r, r);
            
        }
        offset += 0.05;
    }
    HALF_PI += 0.01;
}