/**
 * project 1: little treasures
 * vanessa racine
 * 
 * a small simulator for small treasures 
 * 
 * PROJECT OUTLINE:
 * 2 moving elements
 * interactivity
 * beginning, middle and end
 * 
 */

"use strict";
let state = `title`;
let bg;

let user = {
    x: 300,
    y: 200,
    size: 50,
    vx: 0,
    vy: 0,
};

let box = {
    x: 200,
    y:200,
    size: 60
};

let dark = {
    x: 500,
    y: 400,
    size: 100,
};

let titleString = `to treasure (verb, transitive)`
let endingString = `zaagi'- (vta)`

/**
 * PRELOAD: load images required
*/
function preload() {
 
}


/**
 * SETUP: Arrays for displaying fireflies, canvas properties
*/
function setup() {
    createCanvas(600,400);
    bg = loadImage('assets/images/bliss.jpg');

   // text settings
   textSize(20);
   textAlign(CENTER, CENTER);

};


/**
 * DRAW: 
*/
function draw() {
    background(0);


// state 1: title
    if (state === `title`) {
        fill(255);
        text(titleString, width/2,height/2);
    }
// state 2: homepage
    else if (state === `homepage`) {
        push();
        background(bg);
        fill(255,100,100);
        ellipse(user.x, user.y, user.size);

        user.x = mouseX;
        user.y = mouseY;
        pop();
    }

// state 3: zaagi 
    else if (state === `zaagi`) {
        fill(255);  
        rect(box.x,box.y,box.size,box.size);
    }

// state 4: broken 
    else if (state === `broken`) {
        push();
        background(bg);
        fill(255,100,100);
        ellipse(user.x, user.y, user.size);

        fill(0);
        ellipse(dark.x,dark.y,dark.size);

        user.x = mouseX;
        user.y = mouseY;
        pop();
    }



fill(255);
text(endingString, width/2,height/2);    
}

// STATE CHANGES
