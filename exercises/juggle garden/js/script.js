/**
 * juggle garden exercise
 * vanessa racine
 * 
 * to add: mouse as watering can (use dist to help flowers grow)
 * new class and objects: bugs that decrease the flowers
 * two endings: max out growth of 5 flowers (stop decrease/increase when growth = maxgrowth) OR lose 3 flowers 
 */

"use strict";
// user
let user = {
        x: 100,
        y: 100,
        size: 50,
        vx: 0,
        vy: 0,
}

// Our garden
let garden = {
   
    flowers: [],  // array to store individual flowers
    numFlowers: 20, // How many flowers in the garden
    bees: [], // An array to our the bees
    numBees: 5, // How many bees in the garden
    grassColor: { // The color of the grass (background)
      r: 120,
      g: 180,
      b: 120
    }
  };


/**
 * Description of preload
*/
function preload() {
  user.img = loadImage('assets/images/clown.png')
}


/**
 * Description of setup
*/
function setup() {
    createCanvas(600, 600);
    createFlowers(); // Create flowers by counting up to the number of the flowers
    createBees(); // Create our bees by counting up to the number of bees

  }
  

/**
 * Description of draw()
*/
function draw() {
   background(garden.grassColor.r, garden.grassColor.g, garden.grassColor.b); // grass
   showUser(); // display cursor as a watering can 
   loopFlower(); // loop through all the flowers in the array and display them
   loopBee(); // loop through all the bees in the array and display them
 
 }



// FLOWERS
  // flower array - found in setup
    function createFlowers() {
      for (let i = 0; i < garden.numFlowers; i++) {
        let x = random(0, width);
        let y = random(0, height);
        let size = random(50,80);
        let stemLength = random(50,100);
        let petalColor = {
            r: random(100,255),
            g: random(100,255),
            b: random(100,255)
        }
      // NEW! Create a new flower
      let flower = new Flower(x, y, size, stemLength, petalColor);
      // Add the flower to the array of flowers
      garden.flowers.push(flower);
      garden.flowers.sort(sortByY);
      }
    }
  // loop - found in draw
    function loopFlower() {
      for (let i = 0; i < garden.flowers.length; i++) {
        let flower = garden.flowers[i];
        if (flower.alive) {
           flower.shrink();
           flower.display();
           waterPlant(flower);
        }
      }
    }
  // constrain y value for flowers
    function sortByY(flower1, flower2) {
      // We achieve the above by subtracting flower2's y position
      // from flower1's! How elegant!
      return flower1.y - flower2.y;
    }
 

// BEES
  // bee array - found in setup 
    function createBees() {
      for (let i = 0; i < garden.numBees; i++) {
        let x = random(0, width);
        let y = random(0, height);
        let bee = new Bee(x, y);
        garden.bees.push(bee);
      }
    }
  // bee loop - found in draw
    function loopBee() {
      for (let i = 0; i < garden.bees.length; i++) {
        let bee = garden.bees[i];
        // Check if this bee is alive
        if (bee.alive) {
          // Update the bee by shrinking, moving and displaying it
          bee.shrink();
          bee.move();
          // go through the entire flower array and try to pollinate the flowers
          for (let j = 0; j < garden.flowers.length; j++) {
            let flower = garden.flowers[j];
            bee.tryToPollinate(flower);
          }
          bee.display();
          }
        }
      }

// USER
  // display user 
    function showUser() {
      fill(0);
      imageMode(CENTER,CENTER);
      image(user.img, user.x, user.y, user.size, user.size);
      user.x = mouseX;
      user.y = mouseY;
      noCursor();
    }
  // user action - watering plant  triggered inside of loopFlower()
    function waterPlant(flower) {
      let d = dist(flower.x, flower.y, user.x, user.y);
      if (d < flower.size / 2 + user.size / 2) {
        let growth = 0.2;
        flower.size = flower.size + growth; 
      }
    }










