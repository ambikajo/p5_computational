function setup() {
	createCanvas(600, 600);
    angleMode(DEGREES);
    colorMode(HSL);
}

function draw() {
    background(0);
    translate(width/2, height/2);
    
    let hr = hour();
    let mn = minute();
    let sec = second();
    fill(255);
    noStroke();
    text(hr + ":" + mn + ":" + sec, 0, 0);
   
    let endHr = map(hr % 12, 0, 12, 0, 360)
    let endMn = map(mn, 0, 60, 0, 360)
    let endSec = map(sec, 0, 60, 0, 360)
    
    
    rotate(-90);
    strokeWeight(4);
    stroke(255);
    noFill();
    //arc clock
    arc (0, 0, 300, 300, 0, endHr);
    arc (0, 0, 280, 280, 0, endMn);
    arc (0, 0, 260, 260, 0, endSec);
    
    
    //map H of HSL to seconds
    
    let hueSec = map (sec, 0, 60, 0, 360);
    //regular clock with hands
    push();
    rotate (endSec);
    stroke(hueSec, 75, 50);
    line(0, 0, 100, 0);
    pop();
    
    push();
    rotate (endMn);
    line(0, 0, 75, 0);
    pop();
    
    push();
    rotate (endHr);
    line(0, 0, 50, 0);
    pop();
}