/**
 * Variables Lecture
 * Vanessa Racine
 * 
 * Experiments and testing for lesson three: variables
 */

"use strict";
// variables // 
let bgShade = 0;
let circleX = 250;
let circleY= 300 
let circleSize = 100;


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
ellipse(circleX, circleY, circleSize);

}