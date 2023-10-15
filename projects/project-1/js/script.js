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
// variable for state changing
let state = `title`;
// background variable
let bg;
// value for double clicking folder (still not entirely sure how this works.. but if its not here my code breaks)
let value = 255;



// text interaction with zaagi room




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

let box = {
    x: 300,
    y:200,
    sizeX: 200,
    sizeY: 120
};

let titleString = `to treasure (verb, transitive)`
let endingString = `zaagi'- (vta)`

// spirit - the spirit circles that we treasure (found in zaagi state)

let spirit1;
let spirit2;
let spirit3;
let spirit4;


/**
 * PRELOAD: load images required
*/
function preload() {
 
}


/**
 * SETUP: Arrays for displaying spirits, canvas properties
*/
function setup() {
    createCanvas(600,400);
    bg = loadImage('assets/images/bliss.png');
    folder.img = loadImage('assets/images/folder.png');
   
    // create four spirit circles (spirit)
    spirit1 = createSpirit(random(0, width), random(0, height));
    spirit2 = createSpirit(random(0, width), random(0, height));
    spirit3 = createSpirit(random(0, width), random(0, height));
    spirit4 = createSpirit(random(0, width), random(0, height));

   // text settings
   textSize(20);
   textAlign(CENTER, CENTER);

    cursor('assets/images/cursor.png');

    
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
        // background screen 
        background(bg);
        fill(value);
        image(folder.img,folder.x,folder.y,folder.size, folder.size);
        

        // placehodler for moveable object
        fill(255,100,100);
        ellipse(user.x, user.y, user.size);

        // moveable object via mouse
        user.x = mouseX;
        user.y = mouseY;
        

        pop();
    }

// state 3: zaagi 
    else if (state === `zaagi`) {
        push();
        background(28, 30, 33);
        
        // spirits

        moveSpirit(spirit1);
        moveSpirit(spirit2);
        moveSpirit(spirit3);
        moveSpirit(spirit4);

        displaySpirit(spirit1);
        displaySpirit(spirit2);
        displaySpirit(spirit3);
        displaySpirit(spirit4);



        // placeholder for something 
        fill(0);  
        rect(box.x,box.y,box.sizeX,box.sizeY);


        pop();
    }

// state 4: broken 
    else if (state === `broken`) {
        background(bg);
        text(endingString, width/2,height/2);    
        fill(255,100,100);
        ellipse(user.x, user.y, user.size);

        fill(value);
        image(folder.img,folder.x,folder.y,folder.size, folder.size);

        fill(0);
        ellipse(dark.x,dark.y,dark.size);

        user.x = mouseX;
        user.y = mouseY;
    }

    else if (state === `end`) {
        background(0);
        text(endingString, width/2,height/2);   
    }

};

// DISPLAYING SPIRIT

    // create spirit as object 
function createSpirit(x,y) {
    let spirit = {
        x: x,
        y: y,
        size: 30,
        vx: 0,
        vy: 0,
        speed: 2
    }
    return spirit; 
};

    // move spirit
function moveSpirit(spirit) {
    let change = random(0,1);
    if (change < 0.08) {
        spirit.vx = random(-spirit.speed,spirit.speed);
        spirit.vy = random(-spirit.speed,spirit.speed);
    }
    // moving the spirit
    spirit.x = spirit.x + spirit.vx;
    spirit.y = spirit.y + spirit.vy;

    // constrain spirit to canvas
        spirit.x = constrain(spirit.x, 0, width);
        spirit.y = constrain(spirit.y,0,height);
};

function displaySpirit(spirit) {
    push();
    fill(255,0,0);
    noStroke();
    ellipse(spirit.x,spirit.y,spirit.size);
    pop();
}

// STATE CHANGES

    // start page switching to homepage
function keyPressed() {
    if (keyCode === ENTER) {
        state = `homepage`;
    };
}

    // homepage to zaagi via double clicking folder (very proud of this)
function doubleClicked() {
    if (value === 255) {
        state = `zaagi`;
    }
}




