/**
 * Exercise 3: dodge em
 * Vanessa Racine
 * 
 * A simulation of avoiding the impending void, 
 */

/** THE PLAN: 
 * 1) change the way user controls circle: 
 *      -   change to keys (done!)
 * 2) add a new if-statement: 
 *      -   if you touch the void, circle grows to fill screen 
 *      -   if circle fills screen, then game ends (implies theres a way to stop it... but thats a problem for another day)
 * 3) change the looks: 
 *     -    add more things to avoid, the void being the game-ender
 *     -    add objects that your sprite can't run into (trees? maybe? if you have time)
 * 4) use an image: swap out circle for pixel sprite, swap out covid for new variable (gitchi manitou aka manitou)*/ 


"use strict";

let userImage;
let voidImage;
let friendImage;

let user= {
    x: 350,
    y: 350,
    size: 100,
    fill: {
        r: 148,
        g: 105,
        b: 72,
    }
}

let covid = {
    x: 0,
    y: 250,
    size:100,
    vx: 0,
    vy: 0,
    speed: 5,
    fill: {
        r: 35,
        g: 31,
        b: 38
    }


}
let numStatic = 1000;
    

/**
 * Description of preload
*/
function preload() {
   userImage = loadImage("assets/images/user.png");
   voidImage = loadImage("assets/images/void.png");
   friendImage = loadImage("assets/images/friend.png");
}


/**
 * Description of setup
*/
function setup() {
    createCanvas(800,600);
    
    covid.y = random(0,height);
    covid.vx = covid.speed;

    noCursor(); 
}


/**
 * Description of draw()
*/
function draw() {
    background(91,83,112);

// display static

for (let i = 0; i < numStatic; i++) {
    let x = random(0,width); // these dont need to be at the top because we only need it for this moment, not tracking over time
    let y = random(0,height);
    stroke(255);
    point(x,y);
}





// COVID movement
    covid.x = covid.x + covid.vx; // standard movement code
    covid.y = covid.y + covid.vy;

    if (covid.x > width) {
        covid.x = 0;
        covid.y = random(0,height);// if statements should go before the fill/ellipse
    }

// Check for catching covid
let d = dist(user.x,user.y,covid.x,covid.y); // pixels between user and covid
if (d < covid.size/2 + user.size/2) {
    noLoop();
}

// User movement 

    if (keyIsDown(LEFT_ARROW)) {
      user.x -= 5;
    }
  
    if (keyIsDown(RIGHT_ARROW)) {
      user.x += 5;
    }
  
    if (keyIsDown(UP_ARROW)) {
      user.y -= 5;
    }
  
    if (keyIsDown(DOWN_ARROW)) {
      user.y += 5;
    }

//COVID display
    fill(covid.fill.r,covid.fill.g,covid.fill.b);
    ellipse(covid.x,covid.y,covid.size);

 //USER display
    fill(user.fill.r,user.fill.g,user.fill.b);
    ellipse(user.x,user.y,user.size);

//IMAGES
    image(userImage,0,0,80,80);
    image(voidImage,100,100,80,80);
    image(friendImage,200,200,80,80);
}

// User Movement




