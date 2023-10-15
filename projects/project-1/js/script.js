/**
 * project 1: little treasures
 * vanessa racine
 * 
 * a small simulator for small treasures 
 * 
 * PROJECT OUTLINE:
 * 2 moving elements
 * beginning, middle and end
 * 
 */

"use strict";
// variable for state changing
let state = `title`;
// background variable for the vintage look 
let bg;
// background for zaagi (made an image i refuse to draw it out in js)
let bgz;
// value for double clicking folder (still not entirely sure how this works.. but if its not here my code breaks)
let value = 255;



// storing objects up here

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
    x: 560,
    y: 11,
    sizeX: 15,
    sizeY: 15
};

let titleString = `to treasure (verb, transitive)`
let endingString = `zaagi'- (vta)`

// Manidoo array - the spirit circles that we treasure (found in zaagi state) (manidoo is anishinaabemowin for spirit)
let manidoo = [];
let manidooSize = 7
;



/**
 * PRELOAD: load images required
*/
function preload() {
    bg = loadImage('assets/images/bliss.png');
    bgz = loadImage('assets/images/zaagi.png');
    folder.img = loadImage('assets/images/folder.png');
}


/**
 * SETUP: Arrays for displaying spirits, canvas properties
*/
function setup() {
    createCanvas(600,400);

   
    // create four spirit circles (spirit) with a loop
    for (let i = 0; i < manidooSize; i++) {
        manidoo[i] = createSpirit(random(0, width), random(0, height));
    }
// button?


   // text settings
   textSize(20);
   textAlign(CENTER, CENTER);

    // cursor customization 
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
        // display folder image
        fill(value);
        image(folder.img,folder.x,folder.y,folder.size, folder.size);
        pop();
    }

// state 3: zaagi 
    else if (state === `zaagi`) {
        push();
        background(bgz);
        
        // spirits displaying and moving inside of this state
        for (let i =0; i < manidoo.length; i++) {
            moveSpirit(manidoo[i]);
            displaySpirit(manidoo[i]);
        }
        // at what point is treasuring equated to greed? is it possible to have too many treasures.
        if (manidoo.length === 1) {
            state = `broken`;
        }

        // the 'exit' button to return to homepage - really tried to hide the button but i dont know enough about DOM
        if (state === `zaagi`) {
            let button = createButton('X');
            button.position(860, 260);
            button.size(15,15);
            button.mousePressed(exit);
        }
        
        // change cursor to 'medicine pouch' or net 


        // 'catch' spirits (reduce number from array)


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
        spirit.x = constrain(spirit.x, 30, 570);
        spirit.y = constrain(spirit.y, 70,350);
};

function displaySpirit(spirit) {
    push();
    fill(255,0,0);
    noStroke();
    ellipse(spirit.x,spirit.y,spirit.size);
    pop();
};

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

function exit() {
    state = `homepage`;
}

function hideButton() {
    if (state = `title` &&`homepage` && `broken` && `end`) {
        button.hide();
    }
}



