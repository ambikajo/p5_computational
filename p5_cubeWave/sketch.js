let angle = 0;
let maxD;

function setup() {
	createCanvas(400, 400, WEBGL);
    maxD = dist(0, 0, 200, 200);
}

function draw() {
    background(250);
    
    
    //let offset = 0;
    for (let x = 0; x <= width; x+=20){
        for (let y = 0; y <= height; y+=20){    
            let d = dist(x, y, width/2, height/2);
            let offset = map(d, 0, maxD, -PI, PI);
            let a = angle + offset;
            let h = map(sin(a), -1, 1, 0, 15);
            noStroke();
            let c = map(sin(a), -1, 1, 0, 255);
            fill(c,200,200);
            rectMode(CENTER);
            rect(x, y, h, h);
            //c += 1;   
        }   
    }
    angle += 0.05;
}
