function setup() {
	createCanvas(400, 400);
    
    
}

function draw() {
    background(0);
    noStroke();
    let offset = 0;
    let shft = 25;
    let y;
    for (let y = 0; y <=height; y += 50){ 
        for (let x = 0; x <= width; x += 50){
            //white circles  
            fill(255);
            offset = 5 * sin(PI);        
            ellipse(x + offset/2, y*2, 12, 12);
            ellipse(x + shft + offset, 50+y*2, 12, 12);  
            //black circles    
            fill(10);
            ellipse(x, y*2  + offset/4 , 12, 12);
            ellipse(x + shft, 50+y*2  + offset/4, 12, 12); 
        }
      PI += 0.004;
    }
}
          