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
// adding 'noise/glitch' to the broken state
let numStatic = 500;
// exit 'button' that isnt really a button but the actually button function is terrible for right now
let leave = 180;




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


};


/**
 * DRAW: 
*/
function draw() {
    background(0);
  


// state 1: title - introducing the user into this simulation and pressing enter to begin
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

// state 3: zaagi - opening the folder zaagi leads to an interaction of collecting spirits
    else if (state === `zaagi`) {
        push();
        background(bgz);

        // spirits displaying and moving inside of this state
        for (let i =0; i < manidoo.length; i++) {
            moveSpirit(manidoo[i]);
            displaySpirit(manidoo[i]);
        }
        // at what point is treasuring equated to greed? is it possible to have too many treasures.
        if (manidoo.length === 0) {
            state = `broken`;
        }

        // the 'exit' button to return to homepage - really tried to hide the button but i dont know enough about DOM
        if (state === `zaagi`) {
            fill(leave);
            rect(box.x,box.y,box.sizeX, box.sizeY);
        }

        for (let i = 0; i < manidoo.length; i++) {
            let spirit = manidoo[i];
            let d = dist(mouseX, mouseY, spirit.x, spirit.y);
            if (d < spirit.size / 2) {
              manidoo.splice(i, 1);
              break;
            }
          }
        
        // change cursor to net / void - note: button is taking the cursor out of the homepage when clicked.... interesting... 
        
        fill(0);
        ellipse(user.x, user.y, user.size);

        user.x = mouseX;
        user.y = mouseY;


        pop();
    }

// state 4: broken - you are the outsider to this mini cyberspace, and therefore taking too much treasure / value (that was never yours to take
// and yet, it is people do in foreign spaces and foreign land. 
    else if (state === `broken`) {
        background(bg); 
        brokenStatic();

        fill(0);
        image(folder.img,folder.x,folder.y,folder.size, folder.size);

        fill(0);
        ellipse(dark.x,dark.y,dark.size);
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
    // display spirit
function displaySpirit(spirit) {
    push();
    fill(255,0,0);
    noStroke();
    ellipse(spirit.x,spirit.y,spirit.size);
    pop();
};
    // remove spirit with mouse pressed 
function mousePressed() {

    if (leave === 180) {
        state = `homepage`;
    };



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

function exit() {
    state = `homepage`;
}

// zaagi to homepage via clicking grey square 


// EXTRA FUNCTIONS FOR AESTHETICS

    // static in broken state (overides on top of everything
    function brokenStatic() {
       
        for(let i = 0; i < numStatic; i++) {
            let x = random(0,width);
            let y = random(0,height);
            stroke(0)
            strokeWeight(1.5);
            point(x,y);
        }
        for(let i = 0; i < numStatic; i++) {
            let x = random(0,width);
            let y = random(0,height);
            stroke(255)
            strokeWeight(1.5);
            point(x,y);
        


        }

    }




