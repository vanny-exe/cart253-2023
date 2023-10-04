/**
 * exericise 3L love, actually
 * vanessa racine
 *
 * a gentle simulator 
 */

"use strict";

let player = {
    x: undefined,
    y:180,
    size: 100,
    vx: 0,
    vy: 0,
    speed: 3,
};

let firefly = {
    x: undefined,
    y:250,
    size: 40,
    vx: 0,
    vy: 0,
    speed: 0.7,
};

let plant = {
    x: 150,
    y: 300,
    size: 40,
    vx: 0,
    vy: 0,
    speed: 1.5,
};

let seat = {
    x: undefined,
    y: 100,
    size: 100,
    vx:0,
    vy:0,
};

let tree = {
    x: 90,
    y: 420,
    size: 160,
    totalSegments: 3,
    segmentSize: 160,
    segmentSpacing: 150,
};
let walk = 5;
let state = `title`; // can be title, simulation, love or refuse or care

/**
 * Description of preload
*/
function preload() {
    player.image = loadImage("assets/images/user.png");
    firefly.image = loadImage("assets/images/firefly.png");
    plant.image = loadImage("assets/images/plant.png");
    seat.image = loadImage("assets/images/bench.png");
    tree.image =loadImage("assets/images/tree.png");
}


/**
 * Description of setup
*/
function setup() {
    createCanvas(500,500);
    //position of circles
    player.x = width / 3;
    firefly.x = 2 * width / 3;
    seat.x = 400;

}


/**
 * Description of draw()
*/
function draw() {
    background(52,66,50);
    playerMove();
    playerBoundary();
    fireflyBoundary();
    fireflyMovement();
    stateChange();
    
    
}




/// STATE CHANGES



function stateChange() {
    if (state === `title`) {
        title();
    }
    else if (state === `simulation`) {
        simulation();
    }
    else if (state === `love`) {
        love();
    }
    else if (state === `refuse`) {
        refuse();
    }
    else if (state === `care`) {
        care();
    }

}



/// TYPES OF STATES



function title() {
  push();
    textSize(50);
    fill(202, 227, 200);
    textAlign(CENTER,CENTER);
    textFont('Pixelify Sans');
    text(`a gentle simulator`, width/2, height/2);
    textSize(20)
    text(`( press shift to begin )`, width/2, 290);
  pop();
}

function simulation() {
    move();
    checkOverlap();
    checkEngagement();
    checkLeave();
    display();
    treeLoop();
};

function love() {
    textSize(20);
    fill(202, 227, 200);
    textAlign(LEFT,CENTER);
    textFont('Pixelify Sans');
    text(`sometimes being gentle is holding a firefly`, 50, 250);
};

function refuse() {
    textSize(20);
    fill(202, 227, 200);
    textAlign(LEFT,CENTER);
    textFont('Pixelify Sans');
    text(`sometimes being gentle is sitting on a bench`, 50, 250);
    text(`and watching the plants and fireflies pass by.`, 50, 270);

};

function care() { 
    textSize(20);
    fill(202,227,200);
    textAlign(LEFT, CENTER);
    textFont('Pixelify Sans');
    text(`sometimes being gentle`, 50, 250);
    text(`is to watch things grow`, 50, 270);
};



// TREE LOOP



function treeLoop() {
    let x = tree.x;
    for (let i = 0; i < tree.totalSegments; i++) {
    image(tree.image,x, tree.y, tree.h,tree.segmentSize);
    x = x + tree.segmentSpacing;}
}



// FIREFLY MOVEMENTS



function fireflyBoundary() {
    if (firefly.x < 0)  {
        firefly.x = firefly.x + walk;
        }
        if (player.x > width)  {
        firefly.x = firefly.x - walk;
        }
        if (firefly.y < 0)  {
        firefly.y = firefly.y + walk;
        }
        if (firefly.y > height)  {
        firefly.y = firefly.y - walk;
        }
};

function fireflyMovement() {
    let change = random(); 

    
    if (change < 0.01) {
      
      firefly.vx = random(-firefly.speed, firefly.speed);
      firefly.vy = random(-firefly.speed, firefly.speed);
    }
};




// PLAYER MOVEMENTS




function playerBoundary() {
    if (player.x < 0)  {
        player.x = player.x + walk;
        }
        if (player.x > width)  {
        player.x = player.x - walk;
        }
        if (player.y < 0)  {
        player.y = player.y + walk;
        }
        if (player.y > height)  {
        player.y = player.y - walk;
        }
}
function playerMove() {
        if (keyIsDown(LEFT_ARROW)) {
          player.x -= 5;
        }
      
        if (keyIsDown(RIGHT_ARROW)) {
          player.x += 5;
        }
      
        if (keyIsDown(UP_ARROW)) {
          player.y -= 5;
        }
      
        if (keyIsDown(DOWN_ARROW)) {
          player.y += 5;
        }
};



// VELOCITY MOVEMENT



function move() {

    player.x = player.x + player.vx;
    player.y = player.y + player.vy;
    firefly.x = firefly.x + firefly.vx;
    firefly.y = firefly.y + firefly.vy;

};



// check for 'overlap'/engagement with player and plant



function checkEngagement() {
    let d = dist(player.x,player.y,plant.x,plant.y)
    if (d < player.size/2 + plant.size/2) {
        plant.size = plant.size + 0.5;
        
    }
    if (plant.size > 90) {
        state = `care`;
    }
}

function checkOverlap() {



// check for overlap with firefly and player



    let d = dist(player.x,player.y,firefly.x,firefly.y)
    if (d < player.size/2 + firefly.size/2) {
        state = `love`;
    }
};



//display circles



function display() {
    fill(219, 206, 145);
    imageMode(CENTER);
    image(seat.image,seat.x,seat.y,seat.size);
    image(player.image,player.x,player.y,player.size, player.size);
    image(firefly.image,firefly.x,firefly.y,firefly.size, firefly.size);
    image(plant.image,plant.x,plant.y,plant.size, plant.size);
    
    
};




/// START GAME



function keyPressed() {
    if (keyCode === SHIFT) { 
        if (state === `title`) {
            state = `simulation`;
        };
    };
    
};



//check if player leaves room



function checkLeave() {

    let d = dist(player.x,player.y,seat.x,seat.y)
    if (d < player.size/2 + seat.size/2) {
        state = `refuse`;
        
    }
 
}