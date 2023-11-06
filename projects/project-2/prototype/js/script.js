/**
 * functional love
 * vanessa racine
 * 
 * a drawing simulator in which the user co creates with machine. 
 * caus() is being used in 104
 */

"use strict";
// USER
    let user = {
        x: 100,
        y: 100,
        size: 30,
        vx: 0,
        vy: 0,
    }

// SIMULATION 
    let universe = {

    manidoog: [],  // array to store individual manidoo
    numManidoog: 7, // How many manidoog in the universe - seven for the seven teachings?

    };


// TEXT
    // title state
    let titleString = `co create drawings by moving the mouse over the canvas\n\n( press ENTER to play )`

// STATE
    let state = `title`; // state for title, drawing, and more? an ending or way to pause the program?


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
createManidoog(); // Create our manidoog by counting up to the number of manidoog

}


/**
* Description of draw()
*/
function draw() {
background(255,255,255);
displayStates();

}



// MANIDOOG
    // array - found in setup
    function createManidoog() {
        for (let i = 0; i < universe.numManidoog; i++) {
            let x = random(0, width);
            let y = random(0, height);
            let size = random(100, 200);
            let manidoo = new Manidoo(x, y, size);
            universe.manidoog.push(manidoo);
            universe.manidoog.sort(sortByY);
        }
    }

    // loop - found in draw -- includes state change
    function loopManidoo() {
        for (let i = 0; i < universe.manidoog.length; i++) {
            let manidoo = universe.manidoog[i];
            if (manidoo.alive) {
            manidoo.shrink();
            manidoo.display();
            caus(manidoo);
            }
        }   
    }

// CONSTRAIN 
    function sortByY(manidoo1, manidoo2) {
    return manidoo1.y - manidoo2.y;
    }

// USER
    // display user 
        function showUser() {
        fill(255,0,0);
        ellipse(user.x, user.y, user.size);
        user.x = mouseX;
        user.y = mouseY;
        noCursor();
        }
    // user action caus() - growth triggered inside of loopManidoo()
        function caus(manidoo) {
        let d = dist(manidoo.x, manidoo.y, user.x, user.y);
            if (d < manidoo.size / 2 + user.size / 2) {
                let growth = 0.3;
                manidoo.size = manidoo.size + growth; 
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
            showUser(); // display cursor as a watering can 
            loopManidoo(); // loop through all the manidoog in the array and display them
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
    textFont('Space Grotesk')
    text(titleString, width/2,height/2);
    pop();
    }
