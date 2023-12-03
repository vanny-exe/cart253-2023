class Zaagi {

    constructor(mouseX, mouseY, size) {
        this.x = mouseX;
        this.y = mouseY;
        this.size = size;
        this.color = { // Color information
          r: 255,
          g: 0,
          b: 0,
        };

        this.display();
    }

// DISPLAY
    display() {
      push();
      noFill();
      stroke(this.color.r, this.color.g, this.color.b);
      strokeWeight(2);
      ellipse(this.x, this.y, this.size);
      noCursor();
      pop();
    }

}