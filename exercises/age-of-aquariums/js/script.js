/**
 * Title of Project
 * Author Name
 * 
 * This is a template. You must fill in the title, author, 
 * and this description to match your project!
 */

"use strict";
let school = []; // Create an empty array and assign it to the school variable
let schoolSize = 5;
/**
 * Description of preload
*/
function preload() {

}


/**
 * Description of setup
*/
function setup() {
   createCanvas(500,500);
    for (let i = 0; i < schoolSize; i++) {
        school[i] = createFish(random(0,width),random(0,height));
      }
}

function createFish(x, y) {
    let fish = {
      x: x,
      y: y,
      size: 50,
      vx: 0,
      vy: 0,
      speed: 2
    };
    return fish;
  }
  
  // draw()
  // Moves and displays our fish
  function draw() {
    background(0);
  
    for (let i = 0; i < 4; i++) {
        moveFish(school[i]);
        displayFish(school[i]);
      }
  }
  
  // moveFish(fish)
  // Chooses whether the provided fish changes direction and moves it
  function moveFish(fish) {
    // Choose whether to change direction
    let change = random(0, 1);
    if (change < 0.05) {
      fish.vx = random(-fish.speed, fish.speed);
      fish.vy = random(-fish.speed, fish.speed);
    }
  
    // Move the fish
    fish.x = fish.x + fish.vx;
    fish.y = fish.y + fish.vy;
  
    // Constrain the fish to the canvas
    fish.x = constrain(fish.x, 0, width);
    fish.y = constrain(fish.y, 0, height);
  }
  
  // displayFish(fish)
  // Displays the provided fish on the canvas
  function displayFish(fish) {
    push();
    fill(200, 100, 100);
    noStroke();
    ellipse(fish.x, fish.y, fish.size);
    pop();
  }