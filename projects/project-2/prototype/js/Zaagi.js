class Zaagi {

    constructor() {
        this.x = x;
        this.y = y;
        this.size = size;
        this.color = { // Color information
          r: 255,
          g: 0,
          b: 0,
        };
    }

// DISPLAY
    display() {
      noFill();
      stroke(this.color.r, this.color.g, this.color.b);
      strokeWeight(2);
      ellipse(mouseX, mouseY, size);
      noCursor();
    }

}