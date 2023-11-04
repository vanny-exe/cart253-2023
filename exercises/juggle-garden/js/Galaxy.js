class Galaxy {
    constructor(x, y, size, petalColor) {
      // Position and size information
      this.x = x;
      this.y = y;
      this.size = size;
      this.maxSize = 150; // To limit growth
      this.petalThickness = 3;
      this.maxPetalThickness = 3; // NEW! To limit growth
      // Color information
      this.petalColor = petalColor;
      this.centreColor = {
        r: 0,
        g: 0,
        b: 0
      };
      this.alive = true;
        }
// shrink the galaxies
    shrink() {
        let shrinkage = random(0, 0.1);
        this.size = this.size - shrinkage;
        this.petalthickness = this.petalThickness - shrinkage/10;

        if (this.size <= 0 || this.petalThickness <=0) {
            this.alive = false;
        }
    }

      //breathe() handles the galaxy being breathed into possibility (it grows)
  breathe() {
    // Choose a random amount to grow
    let growth = random(0, 0.5);
    // Increase the petal thickness (divide by 10 to make it less rapid)
    this.petalThickness = this.petalThickness + growth / 10;
    // Increase the centre of the galaxy
    this.size = this.size + growth;

    // Constrain the elements
    this.petalThickness = constrain(this.petalThickness, 0, this.maxPetalThickness);
    this.size = constrain(this.size, 0, this.maxSize);
  }

  eaten() { // Choose a random amount to grow
    let growth = random(0, 0.5); 
    this.petalThickness = this.petalThickness - growth / 10; // decrease the size outer 
    this.size = this.size - growth;  // decrease inside

    // Constrain the elements
    this.petalThickness = constrain(this.petalThickness, 0, this.maxPetalThickness);
    this.size = constrain(this.size, 0, this.maxSize);
  }

    display() {
        push();
            // Draw a circle with a heavy outline for the galaxy
        strokeWeight(this.petalThickness);
        fill(this.centreColor.r, this.centreColor.g, this.centreColor.b);
        stroke(this.petalColor.r, this.petalColor.g, this.petalColor.b);
        ellipse(this.x, this.y, this.size);
        pop();
        }


}