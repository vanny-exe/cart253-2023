/**
 * 04-conditionals
 * vanessa-racine
 * 
 * testing playing crying screaming learning
 */

"use strict";
let bgShade = 0;

let circle = {
    x: 0,
    y: 250,
    size: 100,
    speed: 2
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
    background(bgShade);

    circle.x = circle.x + circle.speed; 
    fill(255,255,255);
    if (!(circle.x < width/3)) {
        fill(255,0,0);
    }
    

    ellipse(circle.x, circle.y, circle.size);


}