function setup() {
    createCanvas(400, 400);
}

function draw() {
    background(250, 190, 200);
    translate(width / 2, height / 2);
    let offset1 = 0;
    for (let x = 0; x < 5; x++) {
        for (let y = 0; y < 5; y++) {
            let c = x + 100 * sin(PI + offset1);
            let d = y + 100 * cos(PI + offset1);
            noStroke();
            fill(255, c + 100);
            textAlign(CENTER);
            textSize(32);
            text('love', d, c);
        }
        offset1 += 0.2;

    }

    PI += 0.03
}