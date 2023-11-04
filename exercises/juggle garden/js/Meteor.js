class Meteor {
//CONSTRUCT
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.size = 20;
        this.vx = 0;
        this.vy = 0;
        this.speed = 2;
        this.jitteriness = 0.1; // How likely the meteor is to change direction
        this.alive = true;
    }
// METEOR INTERACTION FOR SHRINKING
  tryToEat(galaxy) { // Calculate the distance between the meteor and the galaxy
      let d = dist(this.x, this.y, galaxy.x, galaxy.y);
      if (d < this.size / 2 + galaxy.size / 2) {
        galaxy.eaten();
      }
    }
  
    // move() moves the meteor by potentially changing direction
    // and then changing position based on velocity
  move() {
      // First check if we should change direction
      let r = random(0, 1);
      if (r < this.jitteriness) {
        this.vx = random(-this.speed, this.speed);
        this.vy = random(-this.speed, this.speed);
      }
  
      // Update position with velocity to actually move
      this.x = this.x + this.vx;
      this.y = this.y + this.vy;
  
      // Constrain to the canvas (guess it's a walled universe!)
      this.x = constrain(this.x, 0, width);
      this.y = constrain(this.y, 0, height);
    }
  
// DISPLAY
  display() {
      push();
      push();
      fill(34, 56, 52);
      noStroke();
      ellipse(this.x, this.y, this.size);
      pop();
    }
  }