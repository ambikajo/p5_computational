let a1 = 0;
let offset =0;
function setup() {
	createCanvas(400, 400);
}

function draw() {
    background(170);
    stroke(255);
    strokeWeight(4);
    //translate(0,height/2);
    let offset =0;
    for (let x =0; x<= width; x+=1){
        let a = a1 + offset;
        let y = 100 + sin(a) * 100;
        beginShape(POINTS);
        vertex(x,y);
        endShape();
        offset+=0.01;
    }
    a1 +=0.01;
   }