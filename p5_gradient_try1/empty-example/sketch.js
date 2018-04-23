function setup() {
  // put setup code here
    createCanvas(500, 500);
    background(220);
    
}

function draw() {
    //circle
        for (var r = 300; r > 20; r--) {
            noStroke();
            fill(r, 100, 200);
            ellipse(250, 250, r, r);
        }
    
     
    
    
    //strip on the top - for testing
        //for (var x = 20; x < 255; x++) {
        //    noStroke();
        //    fill(x, 220, 200);
        //    for(var c = 0; c < width; c++) {
        //        ellipse(c, 20, 30, 30);
        //    }
            
        //}
}