class Manidoo {
    // default settings of manidoo - position, size and color information
    constructor(x, y, size, i) {
      this.x = x;
      this.y = y;
      this.size = size;
      this.ManidooColor = { 
        r: 0,
        g: 0,
        b: 0,
        a: 0
      };
    // set alive as true for shrink() to work
      this.alive = true;

    // creating variables in each element of the array, for a total of 7
     switch(i){     
         case "0":
             this.changetoGreen();
         break;
         case "1":
             this.changetoGreen();
         break;
     default:
         console.log("this is not a registered manidoo")
       }



    }


// VARIABLE FUNCTIONS
    // case 1: change color to green
changetoGreen() {

}
    // case 2: 
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
        //noStroke();
        fill(this.ManidooColor.r, this.ManidooColor.g, this.ManidooColor.b, this.ManidooColor.a);
        ellipse(this.x, this.y, this.size);
        pop();
        }


}