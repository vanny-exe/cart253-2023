/**
 * 04-conditionals
 * vanessa-racine
 * 
 * testing playing crying screaming learning
 */

"use strict";
let bgShade = 0;

let caterpillar = {
    x:100,
    y:250,
    segmentSize: 50,
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
    noStroke();
    fill(100,200,100);

    // let x = caterpillar.x;
    // let numSegments = 8;
    // let segmentsDrawn = 0;

    // while (segmentsDrawn < numSegments) {
    //     ellipse(x, caterpillar.y, caterpillar.segmentSize);
    //     x = x + 40;
    //     segmentsDrawn ++; 
    // }

let x = caterpillar.x;
let numSegments = 10;
// more common way of doing above comments
for (let segmentsDrawn=0; segmentsDrawn < numSegments; segmentsDrawn++) {
    ellipse(x, caterpillar.y, caterpillar.segmentSize);
    x = x + 40;
}
}