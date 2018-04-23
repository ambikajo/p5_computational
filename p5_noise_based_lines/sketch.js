var xoff = 0.0;

function setup() {
	createCanvas(600, 600);
}

function draw() {
    background(0);
    strokeWeight(2);
    stroke(255, 110);
   // translate(0, height/2)
    beginShape(POINTS);
    fc = frameCount*0.02;
    for (var x = 0; x < width; x += 5) {
        for (var y = 0; y < height; y += 5){
           let n = map (noise(x, y), 0, 1, 0, height);
           vertex(x, n);
        }

    }
    endShape();
}