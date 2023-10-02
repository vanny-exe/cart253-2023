/**
 * Title of Project
 * Author Name
 * 
 * This is a template. You must fill in the title, author, 
 * and this description to match your project!
 */

"use strict";
let bg = 125;

let circle = {
    x: 250,
    y:250,
    size: 100,
    vx: 0,
    vy:0,
    speed:2,
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
    background(bg);

    let dx = circle.x - mouseX; 
    let dy = circle.y - mouseY;

    if (dx < 0) {
        circle.vx = circle.speed;
    }
    else if (dx > 0) {
        circle.vx = -circle.speed
    }

    if (dy < 0) {
        circle.vy = circle.speed;
    }
    else if (dy > 0) {
        circle.vy = -circle.speed;
    }
       
    

    circle.x = circle.x + circle.vx;
    circle.y = circle.y + circle.vy;

    ellipse(circle.x,circle.y,circle.size);
}

