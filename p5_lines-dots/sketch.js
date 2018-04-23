function setup() {
    createCanvas(400, 400);
    background(150);
    noLoop();
}

function draw() {
    //background(0);

    for (var count = 1; count < 80; count++) {
        var x1 = random(50, 350);
        var y1 = random(50, 350);
        var x2 = random(50, 350);
        var y2 = random(50, 350);
        stroke(250, 200, x1, 100)
        line(x1, y1, x2, y2);

        for (var step = 0; step <= 5; step+=1) {
            var formx = x2 - x1;
            var formy = y2 - y1;
            var x = x1 + (formx * step / 5);
            var y = y1 + (formy * step / 5);
            noStroke();
            fill(x, y, 100, 100)
            ellipse(x, y, random(5,20));
        }
    }

}
