/**
 * catching fireflies
 * vanessa racine
 * 

 * a mini game to catch fireflies, where both endings are not inherently bad :)
 * 
 */

"use strict";

// NON-USER array and size
let school = []; 
let schoolSize = 10;

// countdown timer for 'game'
let timer = 10;

// USER 
let user = {
    x: 300,
    y:250,
    size: 100,
    speed: 5,
};


// firefly image
let fireflies;


// TEXT
    // title state
let titleString = `catching fireflies\n\n( press ENTER to play )`
    // ending 1 - catching all fireflies
let ending1String = `the net is so bright\nyou'll never be afraid of the dark again.`
    // ending 2 - not catching all the fireflies
let ending2String = `some got away\nbut thats okay, someone else will find them.`

// STATE
let state = `title`; // state for title, game, ending 1 and ending 2


/**
 * PRELOAD: images of fireflies and user
*/
function preload() {
loadImages(); // loads images of fireflies and user (net)
}


/**
 * SETUP: removing cursor and adding array to be displayed on canvas 
*/
function setup() {
   createCanvas(500,500);
   noCursor();// removes cursor display - replaced by image in draw();
   arrayFirefly(); // sets up fireflies as an array

};

/**
 * DRAW: displaystates function 
*/
  function draw() {
    background(18, 36, 23);
    displayStates();

    
  };


// LOAD IMAGES
  function loadImages() {
    fireflies = loadImage('assets/images/firefly.png');
    user.img = loadImage('assets/images/user.png');
  };


// FIREFLY
  // object
  function createFirefly(x, y) {
    let Firefly = {
      x: x,
      y: y,
      size: 50,
      vx: 0,
      vy: 0,
      speed: 2
    };
    return Firefly;
  };
  // array
   function arrayFirefly() { // in setup
      for (let i = 0; i < schoolSize; i++) {
        school[i] = createFirefly(random(0,width),random(0,height));
      }
    };
  // loop in Draw
    function displayFirefly() {
      for (let i = 0; i < school.length; i++) {
        moveFirefly(school[i]);
        drawFirefly(school[i]);
      };
    };
    // display firefly
      function drawFirefly(Firefly) {
        push();
        fill(200, 100, 100);
        noStroke();
        image(fireflies, Firefly.x, Firefly.y, Firefly.size, Firefly.size);
        pop();
      };
    // moving the fireflies 
      function moveFirefly(Firefly) {
        let change = random(0, 1);
        if (change < 0.1) {
          Firefly.vx = random(-Firefly.speed, Firefly.speed);
          Firefly.vy = random(-Firefly.speed, Firefly.speed);
        }
      
        // fireflies are moving around 
        Firefly.x = Firefly.x + Firefly.vx;
        Firefly.y = Firefly.y + Firefly.vy;
      
        // Constrain the fireflies to the canvas
        Firefly.x = constrain(Firefly.x, 0, width);
        Firefly.y = constrain(Firefly.y, 0, height);
      };
  // collecting fireflies 
    function collectFireflies() {
      for (let i = 0; i < school.length; i++) {
          let Firefly = school[i];
          let d = dist(mouseX, mouseY, Firefly.x, Firefly.y);
          if (d < Firefly.size / 2) {
            school.splice(i, 1);
            break;
          }
        }
    };


// USER
  // displaying user as image
    function displayUser() {
      fill(0);
      imageMode(CENTER,CENTER);
      image(user.img, user.x, user.y, user.size);
      user.x = mouseX;
      user.y = mouseY;
  }

// COUNTDOWN / ENDING 1 STATE CHANGE
  function timerCount() {
    textAlign(CENTER, CENTER);
    textSize(50);
    fill(125, 161, 135);
    text(timer, 30, 30);

      if (frameCount % 60 == 0 && timer > 0) { // if the frameCount is divisible by 60, then a second has passed. it will stop at 0
        timer --;
      }
      if (timer == 0) {
        state = `ending2`;
      }
  }
// STATES
  // DISPLAY STATES
    function displayStates() {
      if (state === `title`) {
        push();
        textTitle(); // displays title text
        keyPressed(); // press enter to go to game state
        pop();
      }
      else if (state === `game`) {
        push();
        displayUser(); // displays user as image (net)
        displayFirefly(); // displays fireflies in the canvas
        collectFireflies(); // allows the user to collect fireflies by hovering
        timerCount(); // countdown from 10 and when it hits 0, change to ending 2
        catchAll(); // catching all leads to ending 1
        pop();
      }
      else if (state === `ending1`) {
        push();
        textEnding1();
        pop();
      }
      else if (state === `ending2`) {
        push();
        textEnding2();
        pop();
      }
    };
  // CHANGE STATES
    // title to game
    function keyPressed() {
      if (state === `title`) {
        if(keyCode === ENTER) {
          state = `game`;
        }
      }
    }
    // game to ending 1
    function catchAll() {
      if (school.length === 0) {
        state = `ending1`;
      }
    };

// TEXT
    // title page 
    function textTitle() {
      push();
      fill(125, 161, 135);
      textSize(20);
      textAlign(CENTER, CENTER);
      textFont('Pixelify Sans')
      text(titleString, width/2,height/2);
      pop();
    }
    // ending 1
    function textEnding1() {
      push();
      fill(125, 161, 135);
      textSize(20);
      textAlign(CENTER, CENTER);
      textFont('Pixelify Sans')
      text(ending1String, width/2, height/2);
      pop();

    }
    // edning 2
    function textEnding2() {
      push();
      fill(125, 161, 135);
      textSize(20);
      textAlign(CENTER, CENTER);
      textFont('Pixelify Sans')
      text(ending2String, width/2, height/2);
      pop();
    };

    
