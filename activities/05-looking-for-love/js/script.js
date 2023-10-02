/**
 * activity 5
 * v-racine
 * 
 * completing activity 5 alongside video 
 */

"use strict";

let circle1 = {
    x: undefined,
    y:250,
    size: 100,
    vx: 0,
    vy: 0,
    speed: 3
};

let circle2 = {
    x: undefined,
    y:250,
    size: 100,
    vx: 0,
    vy: 0,
    speed: 3
};

let state = `title`; // can be title, simulation, love or sadness 

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
    //position of circles
    circle1.x = width / 3;
    circle2.x = 2 * width / 3;
    //circles moving in random direciton 
    circle1.vx = random(-circle1.speed,circle1.speed);
    circle2.vx = random(-circle2.speed,circle2.speed);
    circle1.vy = random(-circle1.speed,circle1.speed);
    circle2.vy = random(-circle2.speed,circle2.speed);
}


/**
 * Description of draw()
*/
function draw() {
    background(52,66,50);

    

    if (state === `title`) {
        title();
    }
    else if (state === `simulation`) {
        simulation();
    }
    else if (state === `love`) {
        love();
    }
    else if (state === `sadness`) {
        sadness();
    }
}
function title() {
    textSize(50);
    fill(202, 227, 200);
    textAlign(CENTER,CENTER);
    text(`zaagi'diwin`, width/2, height/2);
}

function simulation() {
    move();
    checkOffScreen();
    checkOverlap();
    display();
}

function love() {
    textSize(20);
    fill(202, 227, 200);
    textAlign(CENTER,CENTER);
    text(`a treasuring we cause to eachother reciprocally`, width/2, height/2);
}

function sadness() {
    textSize(20);
    fill(202, 227, 200);
    textAlign(CENTER,CENTER);
    text(`if you don't give love, love won't give back`, width/2, height/2);

}

function move() {
    //circles moving
    circle1.x = circle1.x + circle1.vx;
    circle1.y = circle1.y + circle1.vy;

    circle2.x = circle2.x + circle2.vx;
    circle2.y = circle2.y + circle2.vy;
}

function checkOffScreen(){
    //circles going offscreen (check)

    if(isOffScreen(circle1) || isOffScreen(circle2)) {
        state = `sadness`;
    }
}
// checks it ANY circle is off screen
function isOffScreen(circle) {
    if (circle.x < 0 || circle.x > width || circle.y < 0 || circle.y > height ) {
        return true;
    }
    else {
        return false;
    }

}
function checkOverlap() {

    // check for overlap

    let d = dist(circle1.x,circle1.y,circle2.x,circle2.y)
    if (d < circle1.size/2 + circle2.size/2) {
        state = `love`;
    }
}

function display() {

    //display circles
    fill(219, 206, 145);
    ellipse(circle1.x,circle1.y,circle1.size);
    ellipse(circle2.x,circle2.y,circle2.size);
}

function mousePressed() {
    if (state === `title`) {
        state = `simulation`;
    }
}