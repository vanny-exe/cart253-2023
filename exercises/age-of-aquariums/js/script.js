/**
 * Title of Project
 * Author Name
 * 

 * to do:
 * change mouse to 'user' with a net 
 * add two endings (add some text and states)
 * 
 */

"use strict";

// NON-USER array and size
let school = []; 
let schoolSize = 10;


// USER 

let user = {
    x: 300,
    y:250,
    size: 100,
    speed: 5,
};

// firefly image

let fireflies;

/**
 * PRELOAD: images of sprites, assets and other items
*/
function preload() {
fireflies = loadImage('assets/images/firefly.png');

}


/**
 * Description of setup
*/
function setup() {
   createCanvas(500,500);
   arrayFirefly(); // sets up fireflies as an array
};


  // Moves and displays our Firefly
  function draw() {
    background(0);
    displayFirefly(); // displays fireflies in the canvas
    collectFireflies(); // allows the user to collect fireflies by hovering

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
