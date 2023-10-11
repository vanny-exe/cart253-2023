/**
 * Title of Project
 * Author Name
 * 
 * This is a template. You must fill in the title, author, 
 * and this description to match your project!
 */

"use strict";

// NON-USER array and size
let school = []; 
let schoolSize = 5;


// USER 

let user = {
    x: 300,
    y:250,
    size: 100,
    speed: 5,
};

/**
 * PRELOAD: images of sprites, assets and other items
*/
function preload() {

}


/**
 * Description of setup
*/
function setup() {
   createCanvas(500,500);
    for (let i = 0; i < schoolSize; i++) {
        school[i] = createFirefly(random(0,width),random(0,height));
      }
}

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
  }
  
  // draw()
  // Moves and displays our Firefly
  function draw() {
    background(0);
  
    for (let i = 0; i < 4; i++) {
        moveFirefly(school[i]);
        displayFirefly(school[i]);
      }
  }
  
  // moveFirefly(Firefly)
  // Chooses whether the provided Firefly changes direction and moves it
  function moveFirefly(Firefly) {
    // Choose whether to change direction
    let change = random(0, 1);
    if (change < 0.1) {
      Firefly.vx = random(-Firefly.speed, Firefly.speed);
      Firefly.vy = random(-Firefly.speed, Firefly.speed);
    }
  
    // Move the Firefly
    Firefly.x = Firefly.x + Firefly.vx;
    Firefly.y = Firefly.y + Firefly.vy;
  
    // Constrain the Firefly to the canvas
    Firefly.x = constrain(Firefly.x, 0, width);
    Firefly.y = constrain(Firefly.y, 0, height);
  }
  
  // displayFirefly(Firefly)
  // Displays the provided Firefly on the canvas
  function displayFirefly(Firefly) {
    push();
    fill(200, 100, 100);
    noStroke();
    ellipse(Firefly.x, Firefly.y, Firefly.size);
    pop();
  }