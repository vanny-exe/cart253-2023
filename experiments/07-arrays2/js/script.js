/**
 * Title of Project
 * Author Name
 * 
 * This is a template. You must fill in the title, author, 
 * and this description to match your project!
 */

"use strict";

let circle = {
    x: 0,
    y:0,
    size:40,
    trail: [],
    trailSize: 20,
};


let currentIndex = 0;


/**
 * Description of preload
*/
function preload() {

};


/**
 * Description of setup
*/
function setup() {
    createCanvas (600,600);


};


/**
 * Description of draw()
*/
function draw() {
    background(0);

    circle.x = mouseX;
    circle.y = mouseY;

    for (let i = 0; i < circle.trail.length;i++) {
        let position = circle.trail[i];
        ellipse(position.x,position.y,circle.size)
    }

    ellipse(circle.x,circle.y,circle.size);

    let newTrailPosition = {
        x: circle.x,
        y: circle.y,
    };
    circle.trail.push(newTrailPosition);

    if (circle.trail.length > circle.trailSize) {
        circle.trail.shift();
    }
   
};




