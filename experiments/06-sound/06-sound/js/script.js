/**
 * lesson 5 - sound
 * v-racine
 * 
 * rundown of lesson 5 video 
 */

"use strict";
let music; 
let circle= {
    x: 0,
    y: 0,
    size:100,
}
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
}


/**
 * Description of draw()
*/
function draw() {
    background(0);

    circle.x = mouseX;
    circle.y = mouseY;
 
    ellipse(circle.x,circle.y,100);
}

