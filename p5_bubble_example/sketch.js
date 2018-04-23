let bubbles = [];

function setup() {
	createCanvas(600, 400);
    
}

function mouseDragged() {
        let r = random(10, 40);
        let b = new Bubble(mouseX, mouseY, r)
        //bubbles[i] = new Bubble(x, y, r);
        bubbles.push(b);
      
}

function draw() {
    background(0);
    for (let i = 0; i < bubbles.length; i++) {
        bubbles[i].move();
        bubbles[i].show();
    }
}

class Bubble {
    constructor(x, y, r) {
        this.x = x;
        this.y = y;
        this.r = r;
    }
    
    move() {
        this.x = this.x + random(-5, 5);
        this.y = this.y + random(-5, 5);
        
    }
    
    show() {
        noStroke();
        //strokeWeight(4);
        fill(255, 50);
        ellipse(this.x, this.y, this.r*2);
    }
}