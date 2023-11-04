/**
 * galaxies of possobility
 * vanessa racine
 * 
 * two endings: timer and lose 5 galaxies 
 */

"use strict";
// user
let user = {
        x: 100,
        y: 100,
        size: 30,
        vx: 0,
        vy: 0,
}

// Our universe
let universe = {
   
    galaxies: [],  // array to store individual galaxies
    numGalaxies: 20, // How many galaxies in the universe
    manidoog: [], // An array to our the manidoog
    numManidoog: 4, // How many manidoog in the universe
    meteors: [],
    numMeteors: 3,
  };
// countdown timer for 'game'
let timer = 20; // twenty seconds

// text

  // title state
    let titleString = `hover over galaxies to keep their possibilities\ntry not to lose five!\n\n( press ENTER to play )`
  // ending 1 - timer runs out
    let ending1String = `\n(refresh for new possibilities)`
  // ending 2 - 5 galaxies disappear
    let ending2String = `we must treasure the possbilities we allow to grow.`

// STATE
let state = `title`; // state for title, game, ending 1 and ending 2


/**
 * Description of preload
*/
function preload() {
}


/**
 * Description of setup
*/
function setup() {
  createCanvas(600, 600);
  createGalaxies(); // Create galaxies by counting up to the number of the galaxies
  createManidoog(); // Create our manidoog by counting up to the number of manidoog
  createMeteors(); // creates meteors by counting up to number of meteors

  }
  

/**
 * Description of draw()
*/
function draw() {
   background(16, 13, 26);
   displayStates();

 }



// GALAXIES
  // array - found in setup
    function createGalaxies() {
      for (let i = 0; i < universe.numGalaxies; i++) {
        let x = random(0, width);
        let y = random(0, height);
        let size = random(40,80);
        let petalColor = {
            r: 53,
            g: 1,
            b: 82,
        }
      let galaxy = new Galaxy(x, y, size, petalColor);
      universe.galaxies.push(galaxy);
      universe.galaxies.sort(sortByY);
      }
    }
  // loop - found in draw -- includes state change
    function loopGalaxy() {
      for (let i = 0; i < universe.galaxies.length; i++) {
        let galaxy = universe.galaxies[i];
        if (galaxy.alive) {
           galaxy.shrink();
           galaxy.display();
           waterPlant(galaxy);
        }
  
        if (galaxy.size > 120) {
          state = `ending2`;
        }
      }
    }
  // constrain y value for galaxies
    function sortByY(galaxy1, galaxy2) {
      // We achieve the above by subtracting galaxy2's y position
      // from galaxy1's! How elegant!
      return galaxy1.y - galaxy2.y;
    }
 

// MANIDOOG
  // array - found in setup 
    function createManidoog() {
      for (let i = 0; i < universe.numManidoog; i++) {
        let x = random(0, width);
        let y = random(0, height);
        let manidoo = new Manidoo(x, y);
        universe.manidoog.push(manidoo);
      }
    }
  // loop - found in draw
    function loopManidoo() {
      for (let i = 0; i < universe.manidoog.length; i++) {
        let manidoo = universe.manidoog[i];
        // Check if this manidoo is alive
        if (manidoo.alive) {
          // Update the manidoo by shrinking, moving and displaying it
          manidoo.shrink();
          manidoo.move();
          // go through the entire galaxy array and try to breathe the galaxies
          for (let j = 0; j < universe.galaxies.length; j++) {
            let galaxy = universe.galaxies[j];
            manidoo.tryToBreathe(galaxy);
          }
          manidoo.display();
          }
        }
      }

// METEORS
  // array - found in setup 
  function createMeteors() {
    for (let i = 0; i < universe.numMeteors; i++) {
      let x = random(0, width);
      let y = random(0, height);
      let meteor = new Meteor(x, y);
      universe.meteors.push(meteor);
    }
  }
// loop - found in draw
  function loopMeteor() {
    for (let i = 0; i < universe.meteors.length; i++) {
      let meteor = universe.meteors[i];
      // Check if this manidoo is alive
      if (meteor.alive) {
 
        meteor.move();
        // go through the entire galaxy array and try to breathe the galaxies
        for (let j = 0; j < universe.galaxies.length; j++) {
          let galaxy = universe.galaxies[j];
          meteor.tryToEat(galaxy);
        }
        meteor.display();
        }
      }
    }

// USER
  // display user 
    function showUser() {
      fill(252, 225, 136);
      ellipse(user.x, user.y, user.size);
      user.x = mouseX;
      user.y = mouseY;
      noCursor();
    }
  // user action - watering plant  triggered inside of loopgalaxy()
    function waterPlant(galaxy) {
      let d = dist(galaxy.x, galaxy.y, user.x, user.y);
      if (d < galaxy.size / 2 + user.size / 2) {
        let growth = 0.3;
        galaxy.size = galaxy.size + growth; 
      }
    }

// COUNTDOWN
  // causing to change state
    function timerCount() {
      textAlign(CENTER, CENTER);
      textSize(50);
      fill(227, 227, 227);
      text(timer, 30, 30);

        if (frameCount % 60 == 0 && timer > 0) { // if the frameCount is divisible by 60, then a second has passed. it will stop at 0
          timer --;
        }
        if (timer == 0) {
          state = `ending1`;
        }
    }

// STATES
  // display states
    function displayStates() {
      if (state === `title`) {
        push();
        textTitle(); // displays title text
        keyPressed(); // press enter to go to game state
        pop();
      }
      else if (state === `game`) {
        push();
        timerCount();
        showUser(); // display cursor as a watering can 
        loopGalaxy(); // loop through all the galaxies in the array and display them
        loopManidoo(); // loop through all the manidoog in the array and display them
        loopMeteor(); // loop through meteors in array and display them
        pop();
      }
      else if (state === `ending1`) {
        push();
        textEnding1(); // time spans
        pop();
      }
      else if (state === `ending2`) {
        push();
        textEnding2(); // galaxies disappear
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


  // TEXT
    // title page 
    function textTitle() {
      push();
      fill(227, 227, 227);
      textSize(20);
      textAlign(CENTER, CENTER);
      textFont('Pixelify Sans')
      text(titleString, width/2,height/2);
      pop();
    }
    // ending 1
    function textEnding1() {
      push();
      fill(227, 227, 227);
      textSize(20);
      textAlign(CENTER, CENTER);
      textFont('Pixelify Sans')
      text(ending1String, width/2, height/2);
      pop();

    }
    // edning 2
    function textEnding2() {
      push();
      fill(227, 227, 227);
      textSize(20);
      textAlign(CENTER, CENTER);
      textFont('Pixelify Sans')
      text(ending2String, width/2, height/2);
      pop();
    };








