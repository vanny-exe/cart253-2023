/**
 * 04-conditionals
 * vanessa-racine
 * 
 * testing playing crying screaming learning
 */

"use strict";
let bgShade = 0;

let displayCircle = false;


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
    background(bgShade);
   if (keyIsPressed) {
    displayCircle = true;
   }
    if (displayCircle)
 {
    ellipse(250,250,100,100);
 }
}