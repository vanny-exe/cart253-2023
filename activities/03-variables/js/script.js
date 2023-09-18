/**
 * Variables Lecture
 * Vanessa Racine
 * 
 * Experiments and testing for lesson three: variables
 */

"use strict";
// variables // 
let bgShade = 0;

let circle = {
    x: 0,
    y: 250,
    size: 200,
    speed: 2,
};


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
circle.x += circle.speed;
ellipse(circle.x, circle.y, circle.size);

}