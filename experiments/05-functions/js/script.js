/**
 * Title of Project
 * Author Name
 * 
 * This is a template. You must fill in the title, author, 
 * and this description to match your project!
 */

"use strict";

let circle = {
    x:0,
    y:250,
    size:100,
    vx: 1,
    vy: 0,
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
    background(0);
    move();
    wrap();
    display();
}

function reset() {
    circle.x = 0;
    circle.vx = circle.vx +2;
    circle.vy = circle.vy - 0.25;
    circle.size = circle.size +5;
}

function undo() {
    circle.x = 0;
    circle.vx = circle.vx -2;
    circle.size = circle.size -2;
}

function mousePressed() {
    undo();
}

function wrap() {
    if (circle.x > width){
        reset();
    }
}
function move() {
    circle.x = circle.x + circle.vx;
    circle.y = circle.y + circle.vy;
}

function display() {
    ellipse(circle.x,circle.y,circle.size);
}