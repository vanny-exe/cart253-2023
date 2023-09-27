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
    createCanvas(500,500);
}


/**
 * Description of draw()
*/
function draw() {
    background(108, 135,115);
    parallels(125,100,20,1,200, 25);
    parallels(200,220,5,5,70,10);
    parallels(200,320,30,2,120,6);

   

}
function parallels(x,y,numLines,lineWidth,lineHeight, lineSpacing) {
    //let x = 50; we dont need these variables when we have (x,y) in the function
    //let y = 250;
    for (let i = 0; i < numLines; i++) {
        noStroke();
        fill(212, 193, 227);
        rectMode(CENTER);
        rect(x,y,lineWidth,lineHeight);
        x = x+ lineSpacing;
    }
}

