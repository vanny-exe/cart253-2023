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
*/// why is this not working? 
function setup() {
    createCanvas(500,500);

    let hotCelsius = toCelsius(100);
    console.log(`100 degrees fahrenheit is ${hotCelsius} degrees Celsius.`);

    let coldCelsius = toCelsius(10);
    console.log(`10 degrees Fahrenheit is ${coldCelsius} degrees Celsius.`);
}


/**
 * Description of draw()
*/
function draw() {
background(0);

}

function toCelsius(fahrenheight){
    let celsius = (fahrenheight-32) * 5/9;
    return celsius; 
}
