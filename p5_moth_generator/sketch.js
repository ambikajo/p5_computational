let xoff = 0;
function setup() {
	createCanvas(600, 600);
    //frameRate(10);
}

function draw() {
    background(255, 182, 193);
  
    //translate(width/4, height/4);
    
    let p = new Butterfly();
    p.show();
    noLoop();
}

class Butterfly{
    
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    color() {
        
    }
    
    show() {
        //noFill();
        beginShape();
        vertex(100, 100);
        quadraticVertex(width/2+80, 120, width/2, 300);
        for (var a = 90; a < TWO_PI; a+=0.01){
            var r = 100;
            this.x = r * cos(a);
            this.y = r * sin(a);
            vertex(this.x, this.y);
        }
            
        xoff = xoff + 0.02;
        
        endShape();
    }
}