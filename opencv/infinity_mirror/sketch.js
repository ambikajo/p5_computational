let img;
let video;

function preload() {
    img = loadImage('img.png')
}

function setup() {
    createCanvas(800, 600);
    video = createCapture(VIDEO);
    video.hide();
}

function draw() {
    background(50);
    imageMode(CENTER)
    for (let i = 240; i > 40; i -= 15) {
        image(video, width / 2, height / 2, i * 4, i * 3)
    }
   

}
