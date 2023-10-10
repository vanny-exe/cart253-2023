/**
 * lesson 5 - sound
 * v-racine
 * 
 * rundown of lesson 5 video 
 */

"use strict";
let music; 
/**
 * Description of preload
*/
function preload() {
music = loadSound(`assets/sounds/bark.wav`);
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
}

function mousePressed() {
    tryMusic();
}

function keyPressed() {
    music.loop();
}

function tryMusic() {
    if (!music.isPlaying()) {
        music.loop();
    }
}