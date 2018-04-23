function setup() {
    createCanvas(windowWidth, windowHeight);
    background(255);
    noLoop();
}

function draw() {
    //background(0);

    for (let x = 0; x < width; x+=10) {
        for (let y = 0; y < height; y+=10) {
            var red = 255;
            var green = 255 - ((sin(x / 100) + 1) * 100)
            var blue = 255 - ((sin(y / 100) + 1) * 100)
            fill(red, blue, green);
            noStroke();
            rect(x,y, 10, 10);
        }
    }
}
