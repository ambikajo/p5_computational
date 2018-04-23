let alines = [];

function setup() {
	createCanvas(600, 600);
    for (let i = 30; i < width; i+=30){
        alines[i] = new Waveline(0, 0, 0);
    }
}

function mousePressed() {
    
}

function draw() {
    background(0);
    //ellipse(20, 20, 20, 20);
        
        alines[i].show();
    
    
}

class Waveline {
    
    constructor(x, y, angle) {
        this.x = x;
        this.y = y;
        this.angle = angle;
    }
    
    move() {
        if (this.angle = 0, this.angle < TWO_PI, this.angle+=10) {
            this.x = this.a;
            this.y = sin(this.a * 0.05 + frameCount*0.01) * 30;
        } 
    }
    
    show() {
        noFill();
        stroke(255);
        beginShape();
        vertex(this.x, this.y);
        endShape();
    }
}