/**
 * Title of Project
 * Author Name
 * 
 * This is a template. You must fill in the title, author, 
 * and this description to match your project!
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
    createCanvas(640, 480);
    background(224, 215, 188);

// body of alien
    noStroke();    
    fill(139, 156, 118);
    ellipse(320, 480, 160, 420);

// head of alien
    fill(102, 115, 86);
    ellipse(320, 210, 170, 300);

// eyes of alien
    fill(0, 0, 0);
    ellipse(280, 240, 40, 120);
    ellipse(360, 240, 40, 120);

// nostrils of alien
    ellipse (310, 300, 7, 7);
    ellipse (330, 300, 7, 7);


// mouth of alien
    fill (255, 0, 0);
    ellipse(320, 330, 40, 20);
    stroke(0);
    strokeWeight(4);
    line(300, 330, 340, 330);


}


/**
 * Description of draw()
*/
function draw() {

}