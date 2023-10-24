/**
 * project 1: little treasures
 * vanessa racine
 * 
 * a small simulator for small treasures 
 * 
 */

"use strict";


// VARIABLES 
    // variable for state changing
let state = `title`;
    // background variable for the vintage look 
let bg;
    // background for zaagi (made an image i refuse to draw it out in js)
let bgz;
    // adding 'noise/glitch' to the broken state
let numStatic = 600;


// OBJECTS
    // user: the black circle in `zaagi` state
let user = {
    x: 300,
    y: 200,
    size: 50,
    vx: 0,
    vy: 0,
};
    // folder found on homepage
let folder = {
    x: 15,
    y: 15,
    size: 60
};
    // fake folder for fake homepage (broken state)
let folder2 = {
    x:15,
    y:15,
    size:60
}
    // dark circle that appears on broken
let dark = {
    x: 600,
    y: 300,
    size: 100,
};
    // 'exit' button to return to homepage state
let box = {
    x: 560,
    y: 11,
    sizeX: 15,
    sizeY: 15
};
    // image for the fake login 
let start = {
    x: 300,
    y: 200,
    size: 160
};

    // image for memo pad (homepage)
let memo = {
    x: 80,
    y:156,
    sizeX: 300,
    sizeY: 210,
};


// TEXT
    // title state
let titleString = `( press ENTER to log in )`
    // homepage 
let boozhooString = `you're new here, aren't you?\nit's nice to meet you.\nstay for a while!\n\nyou can open the folder\nby pressing TAB.\nand come back with ESCAPE.\n(don't forget to click the screen\nto stay with us)`
    // zaagi states
        // on spirits and collecting
let spiritString = `look at all these treasures\nyou can treasure some for yourself if you'd like.`
        // warning about collecting to much 
let warningString = `are you sure?`
let finalwarningString = `you don't have to take everything. things can be as is.`
    // broken ending
let endingString = `look at what you've done!\nyou took too much.\nafter all everything i gave you`

// ARRAYS
    // Manidoo array - the spirit circles that we treasure (found in zaagi state) (manidoo is anishinaabemowin for spirit)
let manidoo = [];
let manidooSize = 7
;



/**
 * PRELOAD: load images required (folder and backgrounds)
*/
function preload() {
    inputImages();
};
/**
 * SETUP: Array for displaying spirits, canvas properties
*/
function setup() {
    createCanvas(600,400);
    manidooArray();
};
/**
 * DRAW: create four states with varying functions (title as 'login', homepage with double click, zaagi folder, broken page)
*/
function draw() {
    background(42, 106, 209);   
    displayStates();
};


// DISPLAY STATES

    function displayStates() {
// state 1: title - introducing the user into this simulation and pressing enter to begin
        if (state === `title`) {
            push();
            keyPressed(); // lets you press enter on title state
            displayLogin(); // displays image
            textTitle(); // title text display
            pop();
        }
        // state 2: homepage
        else if (state === `homepage`) {
            push();
            background(bg); // background screen
            displayMemo(); // display screen background
            textHomepage(); // display text
            keyPressed(); // change state to zaagi
            displayFolder(); // display folder image
            pop();
        }

        // state 3: zaagi - opening the folder zaagi leads to an interaction of collecting spirits
        else if (state === `zaagi`) {
            push();
            background(bgz);
            noCursor();
            textSpirit(); // displays text conversation
            displayUser() // black circle to collect spirits
            displayManidoo()  // spirits displaying and moving inside of this state
            zaagi(); // for loop of collecting spirits
            checkLength(); // check length for # of spirits remaining - triggers text
            displayExit(); // the 'exit' button to return to homepage 
            keyPressed(); // change state to homepage
            pop();
        }

        // state 4: broken - taking too much treasure / habits people do in foreign spaces and foreign land 
        else if (state === `broken`) {
            background(bg); 
            displayFolder2(); // folder 2 is a replica of #1 but used to prevent double clicking
            displayGlitch(); // a little 'glitch' looking drawing using lines and ellipses
            displayMemo(); // memo box, purposefully misaligned with text
            textBroken(); // displays text
            glitchLine2(); // aesthetics
            glitchLine3(); // aesthetics
            glitchLine(); // aesthetics
            brokenStatic(); // drawing of broken screen lookalike 
        }

    };


//SHAPES
    // exit 'button' (found in zaagi state)
    function displayExit() {
        push();
        fill(180);
        rect(box.x,box.y,box.sizeX, box.sizeY);
        pop();
    };
    // glitch drawing that kind of resembles a really messed up screen (broken state)
    function displayGlitch() {
        push(0);
        noStroke();
        fill(0);
        ellipse(dark.x,dark.y,dark.size);
        pop();
    };
    // user circle to collect treasures (zaagi state)
    function displayUser() {
        fill(0);
        ellipse(user.x, user.y, user.size);
        user.x = mouseX;
        user.y = mouseY;
    }

    function glitchLine() {
        push();
        fill(255);
        strokeWeight(2);
        line(580,0,580,height);
        pop();
    }

    function glitchLine2() {
        push();
        fill(255);
        strokeWeight(8);
        line(592,0,592,height);
        pop();
    }

    function glitchLine3() {
        push();
        fill(255);
        strokeWeight(4);
        line(575,0,575,height);
        pop();
    }





// DISPLAYING SPIRIT 

    // create spirit as object 
    function createSpirit(x,y) {
        let spirit = {
            x: x,
            y: y,
            size: 30,
            vx: 0,
            vy: 0,
            speed: 2
        }
        return spirit; 
    };

    // move spirit
    function moveSpirit(spirit) {
        let change = random(0,1);
        if (change < 0.08) {
            spirit.vx = random(-spirit.speed,spirit.speed);
            spirit.vy = random(-spirit.speed,spirit.speed);
        }
        // moving the spirit
        spirit.x = spirit.x + spirit.vx;
        spirit.y = spirit.y + spirit.vy;
        // constrain spirit to canvas
        spirit.x = constrain(spirit.x, 30, 570);
        spirit.y = constrain(spirit.y, 70,350);
    };

    // display spirit
    function displaySpirit(spirit) {
        push();
        fill(255,0,0);
        noStroke();
        ellipse(spirit.x,spirit.y,spirit.size);
        pop();
    };

// ARRAY FOR MANIDOO
    // array for manidoo
    function manidooArray() {
        for (let i = 0; i < manidooSize; i++) {
            manidoo[i] = createSpirit(random(0, width), random(0, height));
        }
    };
    
    // for loop - collecting manidoo 
    function zaagi() {
        for (let i = 0; i < manidoo.length; i++) {
            let spirit = manidoo[i];
            let d = dist(mouseX, mouseY, spirit.x, spirit.y);
            if (d < spirit.size / 2) {
              manidoo.splice(i, 1);
              break;
            }
          }
    };
    // displaying manidoo in zaagi state
    function displayManidoo() {
        for (let i =0; i < manidoo.length; i++) {
            moveSpirit(manidoo[i]);
            displaySpirit(manidoo[i]);
        }
    };
     // length check for triggering text (x2)
    function checkLength() {
        if (manidoo.length === 2) {
            textWarning(); // displays warning text
        }
        if (manidoo.length === 1) {
            textFinalwarn(); // displays final warning text
        }
        // STATE CHANGE (zaagi -> broken)
        if (manidoo.length === 0) {
            state = `broken`;
        }
    };

//STATE CHANGES

  // key pressed to change between each states of program except 'broken' - as it is triggered by checkLength()
    function keyPressed() {
        if (state === `title`) {
            if (keyCode === ENTER) {
                state = `homepage`;
            }
        }
        else if (state === `homepage`) {
            if (keyCode === TAB) {
                state = `zaagi`
            }
        }
        else if (state === `zaagi`) {
            if (keyCode === ESCAPE) {
                state = `homepage`;
            }
        }
        else; 
  };
  


// AESTHETICS/ADD ONS
    // static in broken state (overides on top of everything
    function brokenStatic() {
        
        for(let i = 0; i < numStatic; i++) {
                let x = random(0,width);
                let y = random(0,height);
                stroke(0)
                strokeWeight(1.5);
                point(x,y);
        }
        for(let i = 0; i < numStatic; i++) {
                let x = random(0,width);
                let y = random(0,height);
                stroke(255)
                strokeWeight(1.5);
                point(x,y);
        }

    };


// IMAGES 

    // loading images
    function inputImages() {
        bg = loadImage('assets/images/bliss.png');
        bgz = loadImage('assets/images/zaagi.png');
        folder.img = loadImage('assets/images/folder.png');
        folder2.img = loadImage('assets/images/folder2.png');
        start.img = loadImage('assets/images/start.png');
        memo.img = loadImage('assets/images/memo.png')
    };

    // image display: title
    function displayLogin() {
        imageMode(CENTER,CENTER);
        image(start.img, start.x,start.y,start.size,start.size);
    };

    // image display: homepage folder
    function displayFolder() {
        push();
        fill(0);
        image(folder.img,folder.x,folder.y,folder.size, folder.size);
        pop();

    };

    // image display: folder 2
    function displayFolder2() {
        fill(0);
        image(folder2.img,folder2.x,folder2.y,folder2.size, folder2.size);
    };

    // image display: memo
    function displayMemo() {
        fill(0);
        image(memo.img, memo.x,memo.y,memo.sizeX,memo.sizeY);
    };


// TEXT DISPLAYS 
    //text display: title
    function textTitle() {
        push();
        fill(255);
        textSize(15);
        textAlign(CENTER, CENTER);
        textFont('Pixelify Sans')
        text(titleString, width/2,300);
        pop();
    }

    // text display: homepage
    function textHomepage() {
        push();
        fill(0);
        textSize(14);
        textAlign(LEFT);
        textFont ('Pixelify Sans')
        text(boozhooString, 100, height/2);
        pop();
    }
    // text display: zaagi
    function textSpirit() {
        push();
        textSize(15);
        textAlign(LEFT);
        textFont('Pixelify Sans')
        text(spiritString, 15,150);
        pop();    
    }
    function textWarning() {
        push();
        textSize(15);
        textAlign(LEFT);
        textFont('Pixelify Sans')
        text(warningString, 15,250);
        pop();
    };

    function textFinalwarn() {
        push();
        textSize(15);
        textAlign(LEFT);
        textFont('Pixelify Sans')
        text(finalwarningString, 15,300);
        pop();
    }

    // text display: broken
    function textBroken() {
        push();
        noStroke();
        textSize(15);
        textAlign(LEFT);
        textFont('Pixelify Sans');
        text(endingString, 210,210);
        pop();
    };