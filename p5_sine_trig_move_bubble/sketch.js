let x;
let y;
let angle;
let circle = [];

function setup() {
    createCanvas(600, 600);

}


function draw() {
    background(0);
    //x = 0;
    translate(50, height / 2);
    for (let i = 0; i < 5; i++) {
            let p = new Circle(0, 0, 0);
            circle.push(p);
        if (circle[i].finished()) {
            circle.splice(i, 5);
        }
    }
        
   
    for (let i = circle.length-1; i >= 0; i--) {
        circle[i].show();
        circle[i].update();
        
    }
}
class Circle {

    constructor(x, y, angle) {
        this.x = x;
        this.y = y;
        this.angle = angle;
        this.alpha = 150;
    }


    update() {
        this.angle = this.angle + .3;
        this.alpha = this.alpha - 2;
    }


    finished() {
        return this.alpha < 0;
    }

    show() {
        noStroke();
        fill(255, 120, this.alpha, this.alpha);
        if (this.x < width && this.angle < TWO_PI){
        
            this.x = this.angle * 80;
            this.y = sin(this.angle) * 80;
            ellipse(this.x, this.y, this.y, this.y);
    }
    //else {
    //this.x = 0;
    //this.y = 0;
    //}
}
}
