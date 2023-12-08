class Manidoo {
    // default settings of manidoo - position, size and color information
    constructor(x, y, size, i) {
      this.manidoo = i;
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
      console.log(this.manidoo);
 
    }



// SHRINK - shrinking manidoog when they are not interacted with 
    shrink() {
        let shrinkage = random(0, 0.1);
        this.size = this.size - shrinkage;

        if (this.size <= 0) {
            this.alive = false;
        }
    };

// DISPLAY - displays the manidoog (not visible in output)
    display() {
        push();
        noStroke();
        fill(this.ManidooColor.r, this.ManidooColor.g, this.ManidooColor.b, this.ManidooColor.a);
        ellipse(this.x, this.y, this.size);
        pop();
        }


}