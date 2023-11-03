class Flower {
    constructor(x, y, size, stemLength, petalColor) {
// Position and size information
this.x = x;
this.y = y;
this.size = size;
this.maxSize = size; // NEW! To limit growth
this.stemLength = stemLength;
this.stemThickness = 10;
this.petalThickness = 10;
this.maxPetalThickness = 10; // NEW! To limit growth
// Color information
this.stemColor = {
  r: 50,
  g: 150,
  b: 50
};
this.petalColor = petalColor;
this.centreColor = {
  r: 50,
  g: 0,
  b: 0
};
this.alive = true;
        }
// shrink the flowers
    shrink() {
        let shrinkage = random(0, 0.1);
        this.size = this.size - shrinkage;
        this.petalthickness = this.petalThickness - shrinkage/10;

        if (this.size <= 0 || this.petalThickness <=0) {
            this.alive = false;
        }
    }

      //pollinate() handles the flower being pollinated (it grows)
  pollinate() {
    // Choose a random amount to grow
    let growth = random(0, 0.5);
    // Increase the petal thickness (divide by 10 to make it less rapid)
    this.petalThickness = this.petalThickness + growth / 10;
    // Increase the centre of the flower
    this.size = this.size + growth;

    // Constrain the elements
    this.petalThickness = constrain(this.petalThickness, 0, this.maxPetalThickness);
    this.size = constrain(this.size, 0, this.maxSize);
  }

    display() {
        push();
            // Draw a line for the stem
        strokeWeight(this.stemThickness);
        stroke(this.stemColor.r, this.stemColor.g, this.stemColor.b);
        line(this.x, this.y, this.x, this.y + this.stemLength);
            // Draw a circle with a heavy outline for the flower
        strokeWeight(this.petalThickness);
        fill(this.centreColor.r, this.centreColor.g, this.centreColor.b);
        stroke(this.petalColor.r, this.petalColor.g, this.petalColor.b);
        ellipse(this.x, this.y, this.size);
        pop();
        }


}