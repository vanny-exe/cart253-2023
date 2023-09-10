/**
 * class 2, draing your code
 * vanessa racine
 * 
 * results of going through curriculum for week 2 of course
 */

"use strict";

/**
 * Description of preload
*/
function preload() {

}


/**
 * Description of setup
*/
function setup() {
   createCanvas(500, 500);
// green background
    background(173, 223, 179);


// my silly cone
    noStroke();
    
    ellipseMode(CORNER);
    fill(133, 235, 207);
    ellipse(250, 250, 100, 100);
    fill(133, 135, 207, 100);
    ellipse(250, 250, 80, 80);
    fill(253, 235, 217);
    ellipse(250, 250, 60, 60);
    fill(263, 265, 167);
    ellipse(250, 250, 40, 40);

// a little face
    ellipseMode(CENTER);
    fill(250, 200, 200);
    ellipse(150, 150, 200, 200);
// little eyes
    fill(0, 0, 0);
    ellipse(100, 150, 20, 20);
    ellipse(200, 150, 20, 20);

// little mouth 
    stroke(0, 0, 0);
    strokeWeight(10);
    line(110, 200, 190, 200);
}


/**
 * Description of draw()
*/
function draw() {

}