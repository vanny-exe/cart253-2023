/**
 * Title of Project
 * Author Name
 * 
 * This is a template. You must fill in the title, author, 
 * and this description to match your project!
 */

"use strict";
let user = {
    x: 0,
    y:0,
    size:100
};


// food objects
let food1; 
let food2;
let food3; 
let food4; 
let food5;


//the fish
let school = [];
let schoolSize = 5;


/**
 * Description of preload
*/
function preload() {

};


/**
 * Description of setup
*/
function setup() {
    createCanvas(windowWidth,windowHeight);

    food1 = createFood(250,windowHeight/2);
    food2 = createFood(350,windowHeight/2);
    food3 = createFood(450,windowHeight/2);
    food4 = createFood(550,windowHeight/2);
    food5 = createFood(650,windowHeight/2);

    for (let i = 0; i < schoolSize; i++) {
        school[i] = createFish(random(0,width), random(0,height));
   
    };
};

function createFood(x,y) {
    let food = {
        x: x,
        y: y,
        size: 50,
        eaten: false
    };
    return food;
};

function createFish(x,y) {
    let fish = {
        x: x,
        y: y,
        size: 50,
        vx: 0,
        vy: 0,
        speed:2,
    };
    return fish;
};


/**
 * Description of draw()
*/
function draw() {
    background(0);

    //move user with mouse
    moveUser();

    for (let i = 0; i < school.length; i++) {
        moveFish(school[i]);
        displayFish(school[i]);
    };

    //check whether user has eaten either food
    checkFood(food1);
    checkFood(food2);
    checkFood(food3);
    checkFood(food4);
    checkFood(food5);
    //display user and food

    displayUser();
    displayFood(food1);
    displayFood(food2);
    displayFood(food3);
    displayFood(food4);
    displayFood(food5);

};


//FISH


function moveFish (fish) {
    let change = random(0,1);
    if (change <0.05) {
        fish.vx = random(-fish.speed,fish.speed);
        fish.vy = random(-fish.speed,fish.speed);
    };

    fish.x = fish.x+fish.vx;
    fish.y = fish.y+fish.vy;

    fish.x = constrain(fish.x,0,width);
    fish.y = constrain(fish.y,0,height);

};

function displayFish(fish) {
    push();
    fill(200,100,150);
    ellipse(fish.x,fish.y,fish.size);
    pop();
};


//USER


function moveUser() {
    user.x = mouseX;
    user.y = mouseY;
};

function displayUser() {
    push();
    fill(255);
    ellipse(user.x,user.y,user.size);
    pop();
};


//FOOD


function checkFood(food) {
    if(!food.eaten) {
        let d = dist(user.x,user.y,food.x,food.y);
        if (d < user.size / 2 + food1.size/2) {
            food.eaten=true;
        }
    }
};
function displayFood(food) {
    if (!food.eaten) {
        push();
        fill(255,100,100);
        ellipse(food.x,food.y,food.size);
        pop();

    }
};

function mousePressed() {
    let fish = createFish(mouseX,mouseY);
    school.push(fish);
}