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

// the fireflies 
let firefly1;
let firefly2;
let firefly3;
let firefly4;
let firefly;


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
    firefly = loadImage('assets/images/firefly.png');


    // fireflies
    firefly1 = createFirefly(random(0, width), random(0, height));
    firefly2 = createFirefly(random(0, width), random(0, height));
    firefly3 = createFirefly(random(0, width), random(0, height));
    firefly4 = createFirefly(random(0, width), random(0, height));
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
        
        // fireflies
        movefirefly(firefly1);
        movefirefly(firefly2);
        movefirefly(firefly3);
        movefirefly(firefly4);
      
        displayfirefly(firefly1);
        displayfirefly(firefly2);
        displayfirefly(firefly3);
        displayfirefly(firefly4); 


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


// STATE CHANGES

// fireflies
function createFirefly(x, y) {
    let firefly = {
      x: x,
      y: y,
      size: 30,
      vx: 0,
      vy: 0,
      speed: 2
    };
    return firefly;
  }

  function movefirefly(firefly) {
    // Choose whether to change direction
    let change = random(0, 1);
    if (change < 0.05) {
      firefly.vx = random(-firefly.speed, firefly.speed);
      firefly.vy = random(-firefly.speed, firefly.speed);
    }
  
    // Move the firefly
    firefly.x = firefly.x + firefly.vx;
    firefly.y = firefly.y + firefly.vy;
  
    // Constrain the firefly to the canvas
    firefly.x = constrain(firefly.x, 0, width);
    firefly.y = constrain(firefly.y, 0, height);
  }
  
  // displayfirefly(firefly)
  // Displays the provided firefly on the canvas
  function displayfirefly(firefly) {
    push();
    fill(200, 100, 100);
    noStroke();
    image(firefly.img, firefly.x, firefly.y, firefly.size);
    pop();
  }