function Particle(x,y) {
		this.x = x;
		this.y = y;



    this.history = [];

		this.update = function() {
      this.x += random(-5, 5);
      this.x += random(-5, 5);

    }
    
    var v = createVector(this.x, this.y);
    this.history.push(v);
    print(this.history.length);

    this.show = function() {
      stroke(0);
      fill(0, 150);
      ellipse(this.x, this.y, 24, 24);

      for (var i = 0; i < this.history.length; i++) {
        var pos = this.history[i];
        ellipse(pos.x, pos.y, 8, 8);
      }
    }
	}
