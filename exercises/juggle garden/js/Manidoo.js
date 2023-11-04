class Manidoo {

// CONSTRUCT
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.size = 40;
        this.minSize = 10; // If we get smaller than this minimum we're dead
        this.maxSize = 40; // We can't get bigger than this
        this.vx = 0;
        this.vy = 0;
        this.speed = 4;
        this.growRate = 0.1; // How much the manidoo grows if it breathes
        this.shrinkRate = 0.05; // How much smaller we get each frame
        this.jitteriness = 0.1; // How likely the manidoo is to change direction
        this.alive = true; // The manidoo starts out alive!
    }
  
// SHRINKING OVER TIME 
    shrink() {
      this.size = this.size - this.shrinkRate;
      if (this.size < this.minSize) {
        this.alive = false; // disappears
      }
    }

// BREATHING GALAXY
    tryToBreathe(galaxy) {
      let d = dist(this.x, this.y, galaxy.x, galaxy.y);
      if (d < this.size / 2 + galaxy.size / 2) {
        this.grow();
        galaxy.breathe();
      }
    }

  // GROW GALAXY
    grow() {
      this.size = this.size + this.growRate;
      this.size = constrain(this.size, 0, this.maxSize);
    }
  
// MOVING MANIDOO
    move() {
      let r = random(0, 1);
      if (r < this.jitteriness) {
        this.vx = random(-this.speed, this.speed);
        this.vy = random(-this.speed, this.speed);
      }
  
  // Update position with velocity to actually move
    this.x = this.x + this.vx;
    this.y = this.y + this.vy;
  
  // Constrain to the canvas 
    this.x = constrain(this.x, 0, width);
    this.y = constrain(this.y, 0, height);
    }
  
// DISPLAY
    display() {
      push();
      push();
      fill(255, 0,0);
      noStroke();
      ellipse(this.x, this.y, this.size);
      pop();
    }
  }