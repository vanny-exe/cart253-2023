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


// state
let state = `start`; // options: start, simulation, ending1, ending2

// firefly array
let fireflies = [];
let firefliesSize = 7;

/**
 * PRELOAD: load user sprite, fireflies, sam sprite
*/
function preload() {
  
}


/**
 * SETUP: Arrays for displaying fireflies, canvas properties
*/
function setup() {
    createCanvas(600,500);

    // array - displaying the fireflies 
    for (let i = 0; i < firefliesSize; i++) {
        fireflies[i] = createFirefly(random(0,width), random(0,height));
   
    };
}


/**
 * DRAW: 
*/
function draw() {
    background(10, 15, 9);
    stateChange();
    
}

// STATE CHANGES

function stateChange() {
    if (state === `start`) {
        start();
    }
    else if (state === `simulation`) {
        simulation();
        
    }
    else if (state === `ending1`) {
        ending1();
    }
    else if (state === `ending2`) {
        ending2();
    }
};

// STATES
    // START STATE + starting game function (pressing space to begin)
function start() {
    push();
      textSize(20);
      fill(202, 227, 200);
      textAlign(CENTER,CENTER);
      textFont('Pixelify Sans');
      text(`oh, to tresure beautiful nights to yourself`, width/2, height/2);
      textSize(15);
      text(`( press ENTER to begin )`, width/2, 290);
    pop();
  }

  /// START GAME



function keyPressed() {
    if (keyCode === ENTER) { 
        if (state === `start`) {
            state = `simulation`;
        };
    };
    
};
    // simulation state
  function simulation() {
    showFirefly();
    createFirefly();
    displayFirefly();
    for (let i = 0; i < fireflies.length; i++) {
        moveFirefly(fireflies[i]);
        displayFirefly(fireflies[i]);
    };

  };
// firefly functions - create, move and display

function createFirefly(x,y) {
    let firefly  = {
        x: x,
        y: y,
        size: 30,
        vx: 0,
        vy: 0,
        speed:2,
    };
    return firefly;
};

function moveFirefly (firefly) {
    let change = random(0,1);
    if (change <0.05) {
        firefly.vx = random(-firefly.speed,firefly.speed);
        firefly.vy = random(-firefly.speed,firefly.speed);
    };

    firefly.x = firefly.x+firefly.vx;
    firefly.y = firefly.y+firefly.vy;

    firefly.x = constrain(firefly.x,0,width);
    firefly.y = constrain(firefly.y,0,height);

};

function displayFirefly(firefly) {
    push();
    fill(200,100,150);
    ellipse(firefly.x,firefly.y,firefly.size);
    pop();
};

function showFirefly() {
    for (let i = 0; i < fireflies.length; i++) {
        moveFirefly(fireflies[i]);
        displayFirefly(fireflies[i]);
    };
}