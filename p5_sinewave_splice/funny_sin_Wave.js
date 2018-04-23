//let x;
let move1;
let move2;
let circles = [];

function setup() {
    createCanvas(600, 600);
    //frameRate(.5);
}

function draw() {
    background(0);
    for (var i = 0; i < 10; i++) {
        x = 0;
        y = 0;
        angle = random(0, TWO_PI * 2);
        let p = new Circle(x, y, angle);
        circles.push(p);
        circles[i].show();
        circles[i].move();
    }


}

class Circle {

    constructor(x, y, angle) {
        this.x = x;
        this.y = y;
        this.angle = angle
    }

    move() {
        this.angle = this.angle + .05;
        this.x = 0 + this.angle * 20;
        //change d\sin to tan for funny result
        this.y = 100 + sin(this.angle) * 20;
    }

    finished() {
        return this.x < width / 2;
    }

    show() {
        noStroke();
        fill(255, 200, 100, 100);
        //if (this.x > width)
        ellipse(this.x, this.y, 20, 20);
    }
}
