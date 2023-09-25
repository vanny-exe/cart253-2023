/**
 * Title of Project
 * Author Name
 * 
 * This is a template. You must fill in the title, author, 
 * and this description to match your project!
 */

"use strict";

let user = {
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
   
}


/**
 * Description of setup
*/
function setup() {
    createCanvas(windowWidth,windowHeight);
    
    covid.y = random(0,height);
    covid.vx = covid.speed;

    noCursor(); 
}


/**
 * Description of draw()
*/
function draw() {
    background(125,145,118);

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
    user.x = mouseX;
    user.y = mouseY;
//COVID display
    fill(covid.fill.r,covid.fill.g,covid.fill.b);
    ellipse(covid.x,covid.y,covid.size);

 //USER display
    fill(user.fill.r,user.fill.g,user.fill.b);
    ellipse(user.x,user.y,user.size);
    
}