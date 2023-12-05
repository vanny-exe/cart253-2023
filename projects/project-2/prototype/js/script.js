/**
 * functional love
 * vanessa racine
 * 
 * a drawing simulator in which the user co creates with machine. 
 */

"use strict";
// ZAAGI
    let zaagi;
    let size = 30;

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
        background(255,255,255);
        createManidoog(); // Create manidoog ('invisible' elements changing upon user interactions) by counting up to the number of manidoog



}


/**
* Description of draw()
*/
    function draw() {
        zaagiidiwin(); // displays states (title screen and simulator, titled zaagi())

    }



// MANIDOOG
    // array - found in setup
    function createManidoog() {
        for (let i = 0; i < universe.numManidoog; i++) {
            let x = random(0, width);
            let y = random(0, height);
            let size = random(100, 200);
            let manidoo = new Manidoo(x, y, size, i);
            universe.manidoog.push(manidoo);
            universe.manidoog.sort(sortByY);

        console.log(universe.manidoog)
        }

        for (let i = 0; i<universe.manidoog.length ; i++){
        
            console.log(universe.manidoog[i])
    
        }
    }

    // loop - found in draw -- changes in array 
    function loopManidoo() {
        for (let i = 0; i < universe.manidoog.length; i++) {
            if (universe.manidoog[i].alive) {
                universe.manidoog[i].shrink();
                universe.manidoog[i].display();
                caus(universe.manidoog[i]);

                let d = dist(universe.manidoog[i].x, universe.manidoog[i].y, zaagi.x, zaagi.y);
                if (d < universe.manidoog[i].size / 2 + universe.manidoog[i].size / 2) {
                    switch(i){     
                        case 0:
                            zaagi.changetoRed();
                        break;

                        case 1:
                            zaagi.addSquare(); // the display() is still visible - replace not add? if not, woohoo then there are two shapes instead
                        break;

                        default:
                            console.log("this is not a registered manidoo")
                    }
                }
            }
        }   
    }

// CONSTRAIN - so they don't lay overtop each other in a terrible way
    function sortByY(manidoo1, manidoo2) {
    return manidoo1.y - manidoo2.y;
    }


    // user action caus() - growth triggered inside of loopManidoo()
        function caus(manidoo) {
                    idi(manidoo);
        }


        function idi(manidoo) {
            let d = dist(manidoo.x, manidoo.y, mouseX, mouseY); // growth
            if (d < manidoo.size / 2 + size / 2) {
                let growth = 0.3;
                manidoo.size = manidoo.size + growth; 
            }
        }
// STATES
    // display states
    function zaagiidiwin() { // draw 
        if (state === `title`) {
            push();
            background(255);
            textTitle(); // displays title text
            keyPressed(); // press enter to go to game state
            pop();
        }
        else if (state === `game`) {
            push();
            zaagi = new Zaagi(mouseX, mouseY, size); // display cursor - i have to change to an object  
            loopManidoo(); // loop through all the manidoog in the array and display them
            pop();
        }
    };

// CHANGE STATES
    // title to game
    function keyPressed() {
        if (state === `title`) {
            if(keyCode === ENTER) {
                background(255);
                state = `game`;
            }
        }
    }


// TEXT
    // title page 
    function textTitle() {
        push();
        fill(0,0,0);
        textSize(20);
        noStroke();
        textAlign(CENTER, CENTER);
        textFont('Space Grotesk')
        text(titleString, width/2,height/2);
        pop();
    }


  