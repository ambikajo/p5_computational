function setup() {
	createCanvas(400, 400);
}

function draw() {
    background(0);
    let offset = 0;
    translate(width / 2, height / 2);
    beginShape();
    for (let x = 0; x < TAU * 8; x += 0.1) {
        let xr = 100 + map(sin(offset), -1, 1, 10, 20);
        let r = 100;
        let c = r * cos(x);
        let d = r * sin(x);
        stroke(255);
        noFill();
        vertex(c, d);
        
    }
        offset += 2;
    endShape();
}