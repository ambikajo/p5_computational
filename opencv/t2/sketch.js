let vid;
let poses = [];
let poseNet;
let maxPoseDetections = 8;
let outputStride = 16;
let helFont;
let instruct = ['OBEY', 'CONSUME', 'SUBMIT', 'CONFORM', 'NO THOUGHT', 'WORK', 'SLEEP'];
let current = 0;
let final = 0;
let score = 0;

function preload() {
    helFont = loadFont('SFCompactDisplay-Black.otf');
}

function setup() {
    createCanvas(innerWidth, innerHeight);
    vid = createCapture(VIDEO);

    //  vid = createVideo('IMG_8616_small.mov');
    vid.hide();
    poseNet = ml5.poseNet(vid, modelLoaded);
    poseNet.on('pose', function (results) {
        poses = results;
    });
    //    instruct = 
}
// When the model is loaded
function modelLoaded() {
    console.log('Model Loaded!');
}
// Listen to new 'pose' events
function mousePressed() {
    vid.loop(); // set the video to loop and start playing
}

function draw() {
    background(50);
    //translate(width/2, height/2);
    //imageMode(CENTER);
    image(vid, 0, 0);
    filter(GRAY);
    drawKeypoints();
//    drawInstruct();
}

function drawKeypoints() {
    current = final;
    final = 0;
    for (let i = 0; i < poses.length; i++) {

        let pr = poses[i].pose.keypoints[0];
        final += pr.position.x/poses.length;
//        let pl = poses[i].pose.keypoints[2];
//        console.log(poses);
        if (poses[i].pose.score > 0.20) {
            fill(255);
            noStroke();
            ellipse(pr.position.x, pr.position.y, 10);
            
//            rectMode(CORNERS);
//            rect(pl.position.x - 50, pl.position.y - 20, pr.position.x + 50, pr.position.y + 30);
//            fill(0);
//            d = float(dist(pl.position.x, pl.position.y, pr.position.x, pr.position.y));
        }
        
    }
    if (final - current > 10 && current != 0) {
//        fill(220);
//        noStroke();
//        ellipse(final, 100, 20);
        score += 6.5;
        console.log(score);
        
//        alert("error");
    } 
//    fill(255);
//    textFont(helFont);
//    textSize(100);
//    text(score, innerWidth/2, innerHeight/2);
}

//function drawInstruct() {
//    for (let t = 0; t < poses.length; t++) {
//        let posinst1 = poses[t].pose.keypoints[1];
//        let posinst2 = poses[t].pose.keypoints[2];
//        if (poses[t].pose.score > 0.20) {
//           // d = float(dist(posinst1.position.x, posinst1.position.y, posinst2.position.x, posinst2.position.y));
//            fill(0);
//            textFont(helFont);
//           // textSize(d / 2);
//            text(instruct[t], posinst2.position.x, posinst2.position.y + 20);
//        }
//
//    }
//}
