function setup() {
    createCanvas(400, 400);
    angleMode(DEGREES);
}

function draw() {
    background(51);
    var x = 100;
    var y = 300;

    stroke(255);
    strokeWeight(8);
    point(x, y);

    var angle = -45;
    //var angle = map(mouseX, 0, width, -90, 90);
    var r = 100;

    var dx = r * cos(angle);
    var dy = r * sin(angle);
    
    stroke(255, 0, 0);
    line(x, y, x+dx, y+dy);

}
