/**
 * Title of Project
 * Author Name
 * 
 * This is a template. You must fill in the title, author, 
 * and this description to match your project!
 */

"use strict";

let hello = {
    string: `hello, world!`,
    x: 0,
    y:250,
    vx: 5,
    vy: 1,
    size: 65
}

/**
 * Description of preload
*/
function preload() {

}


/**
 * Description of setup
*/// why is this not working? 
function setup() {
    createCanvas(500,500);

  
}


/**
 * Description of draw()
*/
function draw() {
    background(127);

   hello.x = hello.x +hello.vx;
   hello.y = hello.y + hello.vy;

    textAlign(CENTER,CENTER);
    textSize(hello.size);
    textStyle(BOLD);

    stroke(0);
    strokeWeight(5);
    fill(255,0,0);

    text(hello.string, hello.x, hello.y);


}
