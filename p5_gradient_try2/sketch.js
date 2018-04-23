let circles = [];

function setup() {
    createCanvas(600, 400);
    for (let i = 350; i > 10; i--) {
        //map the colors from 0 to 255 to i which is 10 to 350
        let col = map(i, 10, 350, 0, 255);
        let alp = map(i, 10, 350, 20, 170);
        let xpos = 150 + random(width/2);
        circles[i] = new Circle(300, 200, i, col, alp);
    }

}


function draw() {
    background(0);
    for (let i = 350; i < circles.length; i--) {
        //circles[i].move();
        circles[i].show();

    }

}

class Circle {
    constructor(x, y, r, c, a) {
        this.x = x;
        this.y = y;
        this.r = r; //radius
        this.c = c; //color
        this.a = a; //alpha
    }

    move() {
        this.x = this.x + random(-5, 5);
        this.y = this.y + random(-5, 5);

    }

    show() {
        noStroke();
        fill(this.c, 127.5, 127.5, this.a);
        ellipse(this.x, this.y, this.r);

    }

}