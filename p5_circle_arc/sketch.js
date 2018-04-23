function setup() {
    createCanvas(400, 400);
    //angleMode(DEGREES)
}

function draw() {
    background(230);

    let offset = 0;

    for (let a = 0; a < TAU; a += PI / 6) {
        let c = map(a, 0, TAU, 0, 255);
        fill(255, 50, c);
        noStroke();
        arc(200, 200, 300, 300, a, a + PI / 6);
    }

    
    //PI += 0.01
}
