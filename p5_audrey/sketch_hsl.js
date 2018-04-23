function setup() {
	createCanvas(600, 600);
    colorMode(HSL);
   // saveFrames("aud_p5_sina900", "png", 4, 22);
}

function draw() {
    background(255);
    //pin rect
    fill(351, 100, 86);
    noStroke();
    rect(20, 20, 560, 560);

    //sine dots floating gloriously
    strokeWeight(1.75);
    stroke(269, 100, 31); 
    translate(width/2, height/2);
    beginShape(POINTS);
       for (var a = 0; a < TWO_PI; a += 0.003){ 
        r = 150;
        let x = 250 * cos(a);
        let y = r * sin(a*900);
        vertex(x,y);
        //ellipse(x, y, x/3 ,2);  
        }
    endShape();
    
}

 //+ frameCount*0.01