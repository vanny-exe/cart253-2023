class Manidoo {
    constructor(x, y, size) {
      // Position and size information
      this.x = x;
      this.y = y;
      this.size = size;
      this.maxSize = 200; // To limit growth
      this.ManidooColor = { // Color information
        r: 0,
        g: 0,
        b: 0
      };
      this.alive = true;
        }

// SHRINK
    shrink() {
        let shrinkage = random(0, 0.1);
        this.size = this.size - shrinkage;

        if (this.size <= 0) {
            this.alive = false;
        }
    };

// DISPLAY
    display() {
        push();
        noStroke();
        fill(this.ManidooColor.r, this.ManidooColor.g, this.ManidooColor.b);
        ellipse(this.x, this.y, this.size);
        pop();
        }


}