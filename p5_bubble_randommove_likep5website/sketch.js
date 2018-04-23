let bubbles = [];

function setup() {
    createCanvas(600, 400);
    for (var i = 0; i < 0; i++) {
        bubbles[i] = new Bubbles(random(width), random(height), i);
    }
}

function mousePressed() {
        let r = 20;
        let b = new Bubbles(mouseX, mouseY, r);
        bubbles.push(b);
    
        
    
}

function draw() {
    background(0);
    for (let i = 0; i < bubbles.length; i++) {
        bubbles[i].show();
        bubbles[i].move();
    }
}


class Bubbles {

    constructor(x, y, r) {
        this.x = x;
        this.y = y;
        this.r = r

    }

    
    move() {
        this.x = this.x + random(-2, 2);
        this.y = this.y + random(-2, 2);
    }

    show() {
        //stroke(255);
        //noFill();
        //noStroke();
        fill(255, 25, 102, 50);
        ellipse(this.x, this.y, this.r);
    }
}
