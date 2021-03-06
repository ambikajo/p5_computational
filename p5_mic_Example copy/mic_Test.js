var mic;
var amp;

var scale = 1.0;

function setup() {
    createCanvas(440, 440);
    background(0);
    rectMode(RADIUS);
    mic = new p5.AudioIn();
    mic.start();
    
    
    amp = new p5.Amplitude();
    amp.setInput(mic);
}

function draw() {
    noStroke();
    fill(0,10);
    rect(0, 0, width, height);
    scale = map(amp.getLevel(), 0, 1.0, 10, width);
    fill(155, 30, 150);
    ellipse(width/2, height/2, scale, scale);
}