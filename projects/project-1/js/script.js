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
let value = 255;

let user = {
    x: 300,
    y: 200,
    size: 50,
    vx: 0,
    vy: 0,
};

let folder = {
    x: 15,
    y: 15,
    size: 60
};

let dark = {
    x: 500,
    y: 300,
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
    bg = loadImage('assets/images/bliss.png');
    folder.img = loadImage('assets/images/folder.png');

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
        keyPressed();
    }
// state 2: homepage
    else if (state === `homepage`) {
        push();
        background(bg);
        fill(value)
        image(folder.img,folder.x,folder.y,folder.size, folder.size);
        


        fill(255,100,100);
        ellipse(user.x, user.y, user.size);


        user.x = mouseX;
        user.y = mouseY;
        

        pop();
    }

// state 3: zaagi 
    else if (state === `zaagi`) {
        background(bg);
        fill(255);  
        rect(box.x,box.y,box.size,box.size);
    }

// state 4: broken 
    else if (state === `broken`) {
        background(bg);
        text(endingString, width/2,height/2);    
        fill(255,100,100);
        ellipse(user.x, user.y, user.size);

        fill(0);
        ellipse(dark.x,dark.y,dark.size);

        user.x = mouseX;
        user.y = mouseY;
    }

}

function keyPressed() {
    if (keyCode === ENTER) {
        state = `homepage`;
    };
}

function doubleClicked() {
    if (value === 255) {
        state = `zaagi`;
    }
}

function openFolder() {

}

// STATE CHANGES
