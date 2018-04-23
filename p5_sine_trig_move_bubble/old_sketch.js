let x;
let y;
let angle;

function setup() {
	createCanvas(1200, 600);
    //frameRate(120);
    }


function draw() {
    background(0);
    //x = 0;
    if (angle < TWO_PI*2) {
        angle = angle + .02;
        //console.log(sin(angle));
    } else {
        angle = 0;
    }
    
    translate(0,150);    
    if (x < width && angle < TWO_PI*2){
        x = angle * 80;
        y = sin(angle) * 80;
        ellipse(x, y, 20, 20);
    } else {
        x = 0;
        y = 0;
    }
    
    
}


