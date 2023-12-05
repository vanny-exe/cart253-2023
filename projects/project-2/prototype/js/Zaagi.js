class Zaagi {

    constructor(mouseX, mouseY, size) {
        this.x = mouseX;
        this.y = mouseY;
        this.size = size;
        this.color = { 
          r: 0,
          g: 0,
          b: 0,
        };

       this.display();
    }

// DISPLAY - default is black circle
    display() {
      push();
      noFill();
      stroke(this.color.r, this.color.g, this.color.b);
      ellipse(this.x, this.y, this.size);
      noCursor();
      pop();
    }

// VARIABLE FUNCTIONS
  // case 0: change color to red
    changetoRed() {
      console.log("is it red?")
          push();
          noFill();
          stroke(255,0,0);
          strokeWeight(2);
          ellipse(mouseX, mouseY, this.size);
          noCursor();
          pop(); 
      
    }
  // case 1: adding shape - square 
    addSquare() {
            push();
            noFill();
            stroke(255,0,0);
            rect(mouseX, mouseY, 50, 50);
            noCursor();
            pop(); 
        }
    

  // // case 2: no stroke (appears invisible)
  //   changetoInvisible() {
  //       this.d = dist(this.manidoo.x, this.manidoo.y, mouseX, mouseY);
  //       if (this.d < this.manidoo.size / 2 + this.size / 2 ) {
  //               push();
  //               noFill();
  //               noStroke();
  //               noCursor();
  //               pop(); 
  //       }
  //   }

    
  // // case 3: size / shape change - increase in side, more oval in shape
  //   changetoEllipse() {
  //       this.d = dist(this.manidoo.x, this.manidoo.y, mouseX, mouseY);
  //       if (this.d < manidoo.size / 2 + this.size / 2 ) {
  //               push();
  //               noFill();
  //               stroke(0, 0, 255);
  //               ellipse(mouseX, mouseY, 90, 70);
  //               noCursor();
  //               pop(); 
  //       }
  //   }


  // // case 4: solid fill (default color)
  //   changetoFill() {
  //       this.d = dist(this.manidoo.x, this.manidoo.y, mouseX, mouseY);
  //       if (this.d < manidoo.size / 2 + this.size / 2 ) {
  //               push();
  //               fill(0, 0 , 0);
  //               rect(mouseX, mouseY, this.size, this.size);
  //               noCursor();
  //               pop(); 
  //       }
  //   }


  // // case 5: change shape to square 
  //   changetoSquare() {
  //       this.d = dist(this.manidoo.x, this.manidoo.y, mouseX, mouseY);
  //       if (this.d < this.manidoo.size / 2 + size / 2 ) {
  //               push();
  //               noFill();
  //               stroke(0, 0, 255);
  //               rect(mouseX, mouseY, this.size, this.size);
  //               noCursor();
  //               pop(); 
  //       }
  //   }


  // // case 6: change shape to square 
  //   changetoSquare() {
  //       this.d = dist(this.manidoo.x, this.manidoo.y, mouseX, mouseY);
  //       if (this.d < this.manidoo.size / 2 + this.size / 2 ) {
  //               push();
  //               noFill();
  //               stroke(0, 0, 255);
  //               rect(mouseX, mouseY, this.size, this.size);
  //               noCursor();
  //               pop(); 
  //       }
  //   }



}

