/**
 * E1: I Like to Move It
 * Vanessa Racine
 * 
 * A humbling pass at woodland style... javascript-style. 
 * a story about the raven who steals the sun (and why the sun goes a certain direction... which we will pretend is the right one here...)
 */

"use strict";
let bg = { 
   
        r: 184,
        g: 167,
        b: 143,
    
}

let star1 = {
    x: 20,
    y: 400,
    size: 0,
    speed: 0.5,
    fill: 255,
    
}

let star2 = {
    x: 80,
    y: 400,
    size: 0,
    speed: 0.5,
    fill: 255,
    
}

let star3 = {
    x: 100,
    y: 400,
    size: 0,
    speed: 0.5,
    fill: 255,
}

let star4 = {
    x: 240,
    y: 400,
    size: 0,
    speed: 0.5,
    fill: 255,
    
}

let star5 = {
    x: 320,
    y: 400,
    size: 0,
    speed: 0.5,
    fill: 255,
    
}

let sun = {
    x: 60,
    y: 110,
    width: 100,
    height: 100,
    stroke: 4,
    speed: 1
    
}
let headExterior = {
    x: 320,
    y: 200,
    width: 60,
    height: 90,
    rotate: 20,
 
}
let headEye = {
    x: 320,
    y: 190,
    width: 20,
    height: 22
}
let headPupil = {
    x: 320,
    y: 190,
    width: 8,
    height:10
}

let beak = {
    stroke: 2,
    x1: 310,
    y1: 190,
    x2: 350,
    y2: 180,
    x3: 390,
    y3: 140,
    
}

let bodyExterior = {
    x: 300,
    y: 300,
    width: 90,
    height: 150,
    stroke: 4,
     
}

let bodyInterior1 = {
    x: 300,
    y: 280,
    width: 50,
    height: 70,
    stroke: 0,
}

let bodyInterior2 = {
    x: 300,
    y: 320,
    width: 50,
    height: 70,
    stroke: 0,
}

let bodyInterior3 = {
    x: 300,
    y: 280,
    width: 20,
    height: 30,
    stroke: 0,
}

let bodyInterior4 = {
    x: 300,
    y: 320,
    width: 20,
    height:30,
    stroke: 0,
}

let wingLeft = {
    x: 210,
    y: 250,
    width: 130,
    height: 50,
    stroke: 4,
    rotate: 200
}

let wingRight = {
    x: 390,
    y: 250,
    width: 130,
    height: 50,
    stroke: 4,
    rotate: -200


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
    createCanvas(500,400);    
}


/**
 * Description of draw()
*/
function draw() {
push()
    background(bg.r,bg.g,bg.b);
    bg.r = bg.r -.3;
    bg.g = bg.g -.3;
    bg.b = bg.b -.3;
pop()

    //SUN//
//sun that moves left to right
    fill(230, 176, 115),
    strokeWeight(sun.stroke)
    ellipse(sun.x, sun.y, sun.width, sun.height);
    sun.x = sun.x + sun.speed;
    sun.x = constrain(sun.x, 0, 390);

    //STARS//
//stars that grow to 5 and then changes to white / black as cursor moves up and down
//star 1
    star1.fill = map(mouseY, 400, height, 0, 255); // i dont know why this isnt working it 
    fill(255); // i dont understand how the circle are still black when fill is rgb white
    ellipse(star1.x, star1.y, star1.size);
    star1.size = star1.size + 0.005; 
    star1.size = constrain(star1.size, 0, 5); // constrain does work de

    star1.y = star1.y - star1.speed;
    star1.y = constrain(star1.y, 129, 400);    
// star 2
    star2.fill = map(mouseY, 400, height, 0, 255);    
    fill(star2.fill);
    ellipse(star2.x, star2.y, star2.size);
    star2.size = star2.size + 0.005;
    star2.size = constrain(star2.size, 0, 5); 

    star2.y = star2.y - star2.speed;
    star2.y = constrain(star2.y, 200, 400);
//star 3
    star3.fill = map(mouseY, 400, height, 0, 255);
    fill(star3.fill);
    ellipse(star3.x, star3.y, star3.size);
    star3.size = star3.size + 0.005;
    star3.size = constrain(star3.size, 0, 5); 

    star3.y = star3.y - star3.speed;
    star3.y = constrain(star3.y, 18, 400);
//star 4
    star4.fill = map(mouseY, 400, height, 0, 255);
    fill(star4.fill);
    ellipse(star4.x, star4.y, star4.size);
    star4.size = star4.size + 0.005;
    star4.size = constrain(star4.size, 0, 5); 

    star4.y = star4.y - star4.speed;
    star4.y = constrain(star4.y, 130, 400);
//star 5
    star5.fill = map(mouseY, 400, height, 0, 255);
    fill(star5.fill);
    ellipse(star5.x, star5.y, star5.size);
    star5.size = star5.size + 0.005;
    star5.size = constrain(star5.size, 0, 5); 

    star5.y = star5.y - star5.speed;
    star5.y = constrain(star5.y, 100, 400);


    //RAVEN //

//bird head exterior
push()
headExterior.rotate = headExterior.rotate - 0.4;
headExterior.rotate = constrain(headExterior.rotate, 40, 45) // was unsure how to write those two numbers but honestly it doesn't even show that well...
    ellipseMode(CENTER);
    fill(0,0,0); // 
    angleMode(DEGREES);
    translate(headExterior.x, headExterior.y);
    rotate(headExterior.rotate);
    ellipse(0,0,headExterior.width,headExterior.height);
pop()
//bird beak 
    fill(0,0,0);
    strokeWeight(beak.stroke);
    triangle(beak.x1, beak.y1, beak.x2, beak.y2, beak.x3, beak.y3);
//bird eye (base)
    fill(255, 207, 77); // red
    ellipse(headEye.x, headEye.y, headEye.width, headEye.height);
//bird eye (pupil)
    fill(212, 4, 4); // yellow
    ellipse(headPupil.x,headPupil.y,headPupil.width,headPupil.height);
    

//bird wing (left)
push()
    ellipseMode(CENTER);
    fill(28, 34, 54); // jean blue
    strokeWeight(wingLeft.stroke);
    angleMode(DEGREES);
    translate(wingLeft.x, wingLeft.y)
    rotate(wingLeft.rotate)
    ellipse(0,0,wingLeft.width,wingLeft.height);
pop()
//bird wing (right)
push()
    ellipseMode(CENTER);
    fill(28, 34, 54); // jean blue
    strokeWeight(wingRight.stroke);
    angleMode(DEGREES);
    translate(wingRight.x, wingRight.y)
    rotate(wingRight.rotate)
    ellipse(0,0,wingRight.width,wingRight.height);
pop()

//bird body exterior
    fill(28, 34, 54); // jean blue
    strokeWeight(bodyExterior.stroke);
    ellipse(bodyExterior.x, bodyExterior.y, bodyExterior.width, bodyExterior.height);
//bird body interior (top part)
    fill(99, 108, 110); // steel
    strokeWeight(bodyInterior1.stroke);
    ellipse(bodyInterior1.x, bodyInterior1.y, bodyInterior1.width, bodyInterior1.height);
//bird body interior (bottom part)
    fill(99, 108, 110); // steel
    strokeWeight(bodyInterior2.stroke);
    ellipse(bodyInterior2.x,bodyInterior2.y,bodyInterior2.width,bodyInterior2.height);
//bird body interior details (top)
    fill(84, 14, 14); // darkred
    strokeWeight(bodyInterior3.stroke);
    ellipse(bodyInterior3.x,bodyInterior3.y,bodyInterior3.width,bodyInterior3.height);
//birdbody interior detail (bottom)
    fill(84, 14, 14); // darkred
    strokeWeight(bodyInterior4.stroke);
    ellipse(bodyInterior4.x,bodyInterior4.y,bodyInterior4.width,bodyInterior4.height);


}

