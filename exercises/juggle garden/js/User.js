class User {

    constructor() {
        this.x = 100;
        this.y = 100;
        this.size = 50;
        this.vx = 0;
        this.vy = 0;
    }

    waterPlant(flower) {
        let d = dist(flower.x, flower.y, user.x, user.y);
        if (d < flower.size / 2 + user.size / 2) {
          flower.polinate(); 
        }
      }
    
    show() {
        fill(0);
        imageMode(CENTER,CENTER);
        image(img, user.x, user.y, user.size, user.size);
        user.x = mouseX;
        user.y = mouseY;
        noCursor();
      }
}





  