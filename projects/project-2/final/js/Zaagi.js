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
      strokeWeight(.2);
      ellipse(this.x, this.y, this.size);
      noCursor();
      pop();
    }

// VARIABLE FUNCTIONS
  // case 0: change color to red
    changetoRed() {
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
            rect(mouseX, mouseY, 70, 70);
            noCursor();
            pop(); 
    }
    

  // case 2: no stroke (appears invisible)
    changetoInvisible() {
      console.log("possibility lives in void spaces") // a common 
                push();
                noFill();
                noStroke();
                noCursor();
                pop(); 
    }

  // case 3: size / shape change - increase in side, more oval in shape

    changetoEllipse() {
                push();
                noFill();
                stroke(0,0,0);
                ellipse(mouseX, mouseY, 90, 30);
                noCursor();
                pop(); 
     }


  // case 4: giant circles
    bigCircles() {
                push();
                noFill();
                stroke(0,0,255)
                ellipse(mouseX, mouseY, 200);
                noCursor();
                pop(); 
    }


  // case 5: large circles 
    enlargeCircle() {
                push();
                noFill();
                stroke(4, 138, 1);
                ellipse(mouseX, mouseY, 100, 100);
                noCursor();
                pop(); 
    }


  // // case 6: tiny ovals 
    tinyOvals() {
                push();
                noFill();
                stroke(4, 138, 1);
                ellipse(mouseX, mouseY, 20, 60);
                noCursor();
                pop(); 
    }



}

