/**
 * Exercise 3: dodge em
 * Vanessa Racine
 * 
 * A simulation of avoiding the impending void and the exhaustion of avoiding friends.  
 */



"use strict";

let tree = {
    x: 100,
    y: 500,
    w: 200,
    h: 250,
    size: 200,
    fill: {
        r: 255,
        g: 255,
        b: 255,
    },
    image: undefined,
    totalSegments: 5,
    segmentSize: 200,
    segmentSpacing: 100,
    
}


let space = {
    x: 200,
    y: 200,
    size: 90,
    fill: {
        r: 148,
        g: 105,
        b: 72,
    },
    vx: 0,
    vy: 0,
    ax: 0,
    ay:0,
    maxSpeed: 2, 
    acceleration: 0.05,
    image: undefined, 
};


let player = {
    x: 350,
    y: 350,
    size: 100,
    fill: {
        r: 148,
        g: 105,
        b: 72,
    },
    image: undefined, 
    vx: 0,
    vy:0,
}

let friend = {
    x: 230,
    y: 0,
    size:80,
    vx: 0,
    vy: 0,
    speed: 3,
    fill: {
        r: 35,
        g: 31,
        b: 38
    },
    image: undefined,


}
let numStatic = 1000;
let move = 5;

/**
 * Description of preload
*/
function preload() {

   player.image = loadImage("assets/images/user.png");
   space.image = loadImage("assets/images/void.png");
   friend.image = loadImage("assets/images/friend.png");
   tree.image = loadImage("assets/images/tree.png");
   
}


/**
 * Description of setup
*/
function setup() {
    createCanvas(600,600);
    noCursor();
    
    friend.x = random(0,width);
    friend.vy = friend.speed;

     
    imageMode(CENTER);
}


/**
 * Description of draw()
*/
function draw() {
    background(15,9,18);
    


// display static

for (let i = 0; i < numStatic; i++) {
    let x = random(0,width); // these dont need to be at the top because we only need it for this moment, not tracking over time
    let y = random(0,height);
    stroke(255);
    point(x,y);
}


// player boundaries in frame
    if (player.x < 0)  {
    player.x = player.x + move;
    }
    if (player.x > width)  {
    player.x = player.x - move;
    }
    if (player.y < 0)  {
    player.y = player.y + move;
    }
    if (player.y > height)  {
    player.y = player.y - move;
    }

    
    
    
   
// space movement - moving around player and expands/ends when touches player
    // acceleration 
    if (player.x > space.x) {
        space.ax = space.acceleration;
    }
    else if (player.x < space.x) {
        space.ax = -space.acceleration;
    };

    if (player.y > space.y) {
        space.ay = space.acceleration;
    }
    else if (player.y < space.y) {
        space.ay = -space.acceleration;
    };
    // adjusting velosity and constraining it
    space.vx = space.vx + space.ax;
    space.vx = constrain(space.vx, -space.maxSpeed, space.maxSpeed);
    space.vy = space.vy + space.ay;
    space.vy = constrain(space.vy, -space.maxSpeed, space.maxSpeed);
    // applying the changes to space position
    space.x = space.x + space.vx;
    space.y = space.y + space.vy;
    // image at position 
    fill(space.fill.r,space.fill.g,space.fill.b);
    image(space.image,space.x,space.y,space.size,space.size)

//  catching the space void
    let d = dist(player.x,player.y,space.x,space.y); // pixels between player and space void
    if (d < space.size/2.2 + player.size/2.2) {
    noLoop();
    };

// friend movement
    friend.x = friend.x + friend.vx; // standard movement code
    friend.y = friend.y + friend.vy;

    if (friend.y > height) {
        friend.y = 0;
        friend.x = random(0,width);// if statements should go before the fill/ellipse
    };

// catching friend
let d2 = dist(player.x,player.y,friend.x,friend.y); // pixels between player and friend
if (d2 < friend.size/2.5 + player.size/2.5) {
    noLoop();
}


// player movement 

    if (keyIsDown(LEFT_ARROW)) {
      player.x -= move;
    }
  
    if (keyIsDown(RIGHT_ARROW)) {
      player.x += move;
    }
  
    if (keyIsDown(UP_ARROW)) {
      player.y -= move;
    }
  
    if (keyIsDown(DOWN_ARROW)) {
      player.y += move;
    }



   
//friend display
    fill(friend.fill.r,friend.fill.g,friend.fill.b);
    image(friend.image,friend.x,friend.y,friend.size,friend.size);

 //player display
    fill(player.fill.r,player.fill.g,player.fill.b);
    image(player.image, player.x,player.y,player.size, player.size);

    // loop trees along x axis 

let x = tree.x;
for (let i = 0; i < tree.totalSegments; i++) {
    image(tree.image,x, tree.y, tree.h,tree.segmentSize);
    x = x + tree.segmentSpacing;
}
//tree display
    fill(tree.fill.r,tree.fill.g,tree.fill.b);
    image(tree.image, tree.x,tree.y,tree.size, tree.size);
 



 

}





