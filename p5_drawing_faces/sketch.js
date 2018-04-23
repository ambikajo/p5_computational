let bubbles = [];

function setup() {
	createCanvas(400, 400);

}

function mouseDragged() {
	let b = new Bubble(mouseX, mouseY);
	bubbles.push(b);
}
function draw() {
    background(0);
		for (let i = 0; i < bubbles.length; i++) {
			bubbles[i].show();
			//bubbles[i].move();
		}


    //noFill();
    //smile

}

class Bubble {
	constructor (x,y) {
			this.x = x;
			this.y = y;
	}

	move () {
			this.x = this.x + random(-5,5);
			this.y = this.y + random(-5,5);
	}

	show () {
		noStroke();
		fill(100, 100, 100, 200);
		ellipse(this.x, this.y, 20, 20);

	}
}
