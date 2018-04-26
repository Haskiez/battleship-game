// FUNCTIONS FOR MODEL
var player = {
    "id": 1,
    "last_shot": null,
    "wins": 0
};
var computer = {
    "id": 2,
    "last_shot": null,
    "first_hit": null,
    "last_hit": null,
    "direction": null,
    "orphanHits": [],
    "step": 1,
    "wins": 0
};
var playerShots = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
];
var computerShots = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
];
var playerShips = [
    {
        "name": "carrier",
        "id": 1,
        "head_location": null,
        "length": 5,
        "orientation": null,
        "hits": 0,
        "sunk": false
    },
    {
        "name": "battleship",
        "id": 2,
        "head_location": null,
        "length": 4,
        "orientation": null,
        "hits": 0,
        "sunk": false
    },
    {
        "name": "cruiser",
        "id": 3,
        "head_location": null,
        "length": 3,
        "orientation": null,
        "hits": 0,
        "sunk": false
    },
    {
        "name": "submarine",
        "id": 4,
        "head_location": null,
        "length": 3,
        "orientation": null,
        "hits": 0,
        "sunk": false
    },
    {
        "name": "destroyer",
        "id": 5,
        "head_location": null,
        "length": 2,
        "orientation": null,
        "hits": 0,
        "sunk": false
    }
];
var computerShips = [
    {
        "name": "carrier",
        "id": 1,
        "head_location": null,
        "length": 5,
        "orientation": null,
        "hits": 0,
        "sunk": false
    },
    {
        "name": "battleship",
        "id": 2,
        "head_location": null,
        "length": 4,
        "orientation": null,
        "hits": 0,
        "sunk": false
    },
    {
        "name": "cruiser",
        "id": 3,
        "head_location": null,
        "length": 3,
        "orientation": null,
        "hits": 0,
        "sunk": false
    },
    {
        "name": "submarine",
        "id": 4,
        "head_location": null,
        "length": 3,
        "orientation": null,
        "hits": 0,
        "sunk": false
    },
    {
        "name": "destroyer",
        "id": 5,
        "head_location": null,
        "length": 2,
        "orientation": null,
        "hits": 0,
        "sunk": false
    }
];
var playerShipPlacement = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
];
var computerShipPlacement = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
];
var gameOver = false;
var turn = 1;

// SHOT function
// returns 1 on a hit and 0 on a miss
function shot(id, row, col) {
    // determine which player it is
    if (id == 1) {
        if (playerShots[row][col] == 1) {
            alert("Already shot here, try again.");
        }
        else {
            if (computerShipPlacement[row][col] != 0) {
                playerShots[row][col] = 1;
                var ship = findShip(computerShips, computerShipPlacement[row][col]);
                ship.hits++;
                if (ship.hits == ship.length) {
                    alert("You sunk the enemy " + ship.name + '!');
                    turn = 2;
                    return 2;
                } else {
                    turn = 2;
                    return 1;
                }
            }
            else {
                playerShots[row][col] = 1;
                turn = 2;
                return 0;
            }
        }
    }
    else {
        if (playerShipPlacement[row][col] != 0) {
            computerShots[row][col] = 2;
            var ship = findShip(playerShips, playerShipPlacement[row][col]);
            ship.hits++;
            if (ship.hits == ship.length) {
                alert("The computer has sunk your " + ship.name + "!");
                turn = 1;
                return 2;
            } else {
                turn = 1;
                return 1;
            }
        }
        else {
            computerShots[row][col] = 1;
            turn = 1;
            return 0;
        }
    }
}

// COMPUTERCALCSHOT function
// calls the shot function on a random index
function computerCalcShot() {
    if (computer.step == 1) {
        console.log("Finding a ship...");
        return findHit();
    }
    else if (computer.step == 2) {
        console.log("Finding a second hit...");
        return secondHit();
    }
    else if (computer.step == 3) {
        console.log("Shooting to sink ship...");
        return sinkShip();
    }
    else if (computer.step == 4) {
        console.log("Resetting to step 2...")
        return populateOrphanHit();
    }
    else {
        debugger;
        console.log("We should never hit here.");
    }
}

// RANDOMSHOT FOR COMPUTER
// calculates a random shot on the board that hasn't been shot at yet
function findHit() {
    // get a random row and col index
    var gridIndexes = [0,1,2,3,4,5,6,7,8,9];
    // Init variables
    var rRow = 0;
    var rCol = 0;
    var rand1 = 0;
    var rand2 = 0;
    // Get a good location to fire
    do {
        rand1 = Math.floor(Math.random() * 10);
        rand2 = Math.floor(Math.random() * 10);
        rRow = gridIndexes[rand1];
        rCol = gridIndexes[rand2];
        console.log(rRow);
        console.log(rCol);
    }
    while(rRow > gridIndexes.length || rCol > gridIndexes.length || computerShots[rRow][rCol] != 0)
    // Shoot and store what is returned
    let shotVal = shot(computer.id, rRow, rCol);
    // Update last shot array
    computer.last_shot = [rRow, rCol];
    // If it was a hit, Increase the step, and store the first_hit location
    if (shotVal == 1) {
        computer.first_hit = [rRow, rCol];
        computer.step++;
    }
    return shotVal;
}

// GET SECOND HIT FUNCTION
function secondHit() {
    // If we have orphan hits, we are coming from step 4
    if (computer.orphanHits.length != 0) {
        // We assign the first one as the last shot and remove it from the orphan elements
        computer.last_shot = orphanHits.shift();
    }
    // Get the row and col of the first hit I got (don't care about where my last shot was)
    let firstHitRow = computer.first_hit[0];
    let firstHitCol = computer.first_hit[1];
    
    // Variable to tell which direction we are going
    let direction = null;

    // If up 1 hasn't been shot at yet, shoot there
    if ((firstHitRow - 1) >= 0 && computerShots[firstHitRow - 1][firstHitCol] == 0) {
        firstHitRow--;
        direction = "up";
    }
    // Else if to the right 1 hasn't been shot at yet, shoot there
    else if ((firstHitCol + 1) < 10 && computerShots[firstHitRow][firstHitCol + 1] == 0) {
        firstHitCol++;
        direction = "right";
    }
    // Else if down 1 hasn't been shot yet, shoot there
    else if ((firstHitRow + 1) < 10 && computerShots[firstHitRow + 1][firstHitCol] == 0) {
        firstHitRow++;
        direction = "down";
    }
    // Else if to the left 1 hasn't been shot yet, shoot there
    else if ((firstHitCol - 1) >= 0 && computerShots[firstHitRow][firstHitCol - 1] == 0) {
        firstHitCol--;
        direction = "left";
    }
    // variable to store what is returned from shot function
    let shotVal = shot(computer.id, firstHitRow, firstHitCol);
    // if we sink the ship in this step (should only apply to the destroyer which is two spaces long)
    if (shotVal == 2) {
        // Makes step go back to 1
        computer.step = 1;
        // Null out first hit
        computer.first_hit = null;
    }
    // else if shotVal is a 1
    else if (shotVal == 1) {
        // increase to step 3
        computer.step++;
        // set the location of our last hit
        computer.last_hit = [firstHitRow, firstHitCol];
        // find the direction
        computer.direction = direction;
    }
    // update last shot
    computer.last_shot = [firstHitRow, firstHitCol];
    return shotVal;
}

function sinkShip() {
    // if our last shot was a miss, switch direction
    if (computerShots[computer.last_shot[0]][computer.last_shot[1]] == 1) {
        if (computer.direction == "left") {
            computer.direction = "right";
        }
        else if (computer.direction == "right") {
            computer.direction = "left";
        }
        else if (computer.direction == "up") {
            computer.direction = "down";
        }
        else if (computer.direction == "down") {
            computer.direction = "up";
        }
    }

    // get our row and column from the last shot
    let row = computer.last_shot[0];
    let col = computer.last_shot[1];

    // Determine which direction we are moving
    if (computer.direction == "left") {
        // move to the left of the last shot until we see a spot we haven't shot in or that is a miss or that is outside the grid
        while (computer.direction == "left") {
            // Decrement to go to the left
            col--;
            // If I have missed here or if I'm outside the bounds of the grid, I need to switch directions
            if (col < 0 || computerShots[row][col] == 1) {
                // If col is negative move column back to a spot we haven't checked this round
                if (col < 0) { col += 2; }

                // Switch directions
                computer.direction = "right";
                // Break out of this while loop
                break;
            }
            // Else if I haven't shot here...
            else if (computerShots[row][col] == 0) {
                let shotVal = shot(computer.id, row, col);
                // Update the last shot location
                computer.last_shot = [row, col];
                // If shotval is a hit
                if (shotVal != 0) {
                    // Update the last hit location
                    computer.last_hit = [row, col];
                    // if it was a sink
                    if (shotVal == 2) {
                        // Find which ship it was that we sunk
                        let ship = findShip(playerShips, playerShipPlacement[row][col]);

                        // mark the ship we sunk on computer grid so we know
                        for (let i = 0; i < ship.length; ++i) {
                            computerShots[row][col + i] = 3;
                        }

                        // see if we have any orphan hits and push them onto the orphan array
                        for (let i = 0; i < computerShots.length; ++i) {
                            for (let k = 0; k < computerShots.length; ++k) {
                                if (computerShots[i][k] == 2) {
                                    computer.orphanHits.push([i,k]);
                                }
                            }
                        }

                        // If we don't have any orphans
                        if (computer.orphanHits.length == 0) {
                            // move back to step 1
                            computer.step = 1;
                            // clear out hit locations, first and last, and direction
                            computer.last_hit = null;
                            computer.first_hit = null;
                            computer.direction = null;
                        }
                        // If we do have orphans
                        else {
                            computer.step = 2;
                            computer.last_hit = null;
                            computer.direction = null;
                        }
                    }
                }
                // Return shotVal regardless of the result
                return shotVal;
            }
        }
        if (computer.direction != "left") {
            console.log("This is supposed to happen, changing directions.");
            
            // loop until we find a miss or are off the grid
            while(computer.direction != "left") {
                // Increment col to move to the right now
                col++;
            
                // see if we hit the end of the grid or are at a miss
                if (col > 9 || computerShots[row][col] == 1) {
                    // we missed again... MEANING we need to find all the orphan hits
                    // and push them into the orphan hits array and go back to step two
                    for (let i = 0; i < computerShots.length; ++i) {
                        for (let k = 0; k < computerShots.length; ++i) {
                            if (computerShots[i][k] == 2) {
                                computer.orphanHits.push([i,k]);
                            }
                        }
                    }
                    computer.step = 2;
                    computer.last_hit = null;
                    computer.direction = null;
                    return computerCalcShot();
                }
                else if (computerShots[row][col] == 0) {
                    // shoot here
                    let shotVal = shot(computer.id, row, col);
                    // Update the last shot location
                    computer.last_shot = [row, col];
                    // If shotval is a hit
                    if (shotVal != 0) {
                        // Update the last hit location
                        computer.last_hit = [row, col];
                        // if it was a sink
                        if (shotVal == 2) {
                            // Find which ship it was that we sunk
                            let ship = findShip(playerShips, playerShipPlacement[row][col]);

                            // mark the ship we sunk on computer grid so we know
                            for (let i = 0; i < ship.length; ++i) {
                                computerShots[row][col - i] = 3;
                            }

                            // see if we have any orphan hits and push them onto the orphan array
                            for (let i = 0; i < computerShots.length; ++i) {
                                for (let k = 0; k < computerShots.length; ++i) {
                                    if (computerShots[i][k] == 2) {
                                        computer.orphanHits.push([i,k]);
                                    }
                                }
                            }

                            // If we don't have any orphans
                            if (computer.orphanHits.length == 0) {
                                // move back to step 1
                                computer.step = 1;
                                // clear out hit locations, first and last, and direction
                                computer.last_hit = null;
                                computer.first_hit = null;
                                computer.direction = null;
                            }
                            // If we do have orphans
                            else {
                                computer.step = 2;
                                computer.last_hit = null;
                                computer.direction = null;
                            }
                        }
                    }
                    // Return shotVal regardless of the result
                    return shotVal;
                }
            }
        }
        else {
            console.log("This should never be possible");
        }
    }
    else if (computer.direction == "right") {
        // move to the right of the last shot until we see a spot we haven't shot in or that is a miss
    }
    else if (computer.direction == "up") {
        // move up from the last shot until we see a spot we haven't shot in or that is a miss
    }
    else if (computer.direction == "down") {
        // move down from the last shot until we see a spot we haven't shot in or that is a miss
    }
}

// PLACESHIPS
// places the ships for the player and computer (just a testing function)
function placeShipsPlayer() {
    // place the carrier (5)
    var pCarrier = findShip(playerShips, 1);
    // randomly place carrier
    placeShipRandom(1, pCarrier);
    placeShip(1, pCarrier);
    // place the battleship (4)
    var pBattleship = findShip(playerShips, 2);
    // randomly place carrier
    placeShipRandom(1, pBattleship);
    placeShip(1, pBattleship);
    // place cruiser (3)
    var pCruiser = findShip(playerShips, 3);
    // randomly place carrier
    placeShipRandom(1, pCruiser);
    placeShip(1, pCruiser);
    // place submarine (3)
    var pSubmarine = findShip(playerShips, 4);
    // randomly place carrier
    placeShipRandom(1, pSubmarine);
    placeShip(1, pSubmarine);
    // place destroyer (2)
    var pDestroyer = findShip(playerShips, 5);
    // randomly place carrier
    placeShipRandom(1, pDestroyer);
    placeShip(1, pDestroyer);

    return playerShipPlacement;
}
function placeShipsComputer() {
    // place the computer ships on its own
    // place the carrier (5)
    var cCarrier = findShip(computerShips, 1);
    // randomly place carrier
    placeShipRandom(2, cCarrier);
    placeShip(2, cCarrier);

    // place the battleship (4)
    var cBattleship = findShip(computerShips, 2);
    // randomly place carrier
    placeShipRandom(2, cBattleship);
    placeShip(2, cBattleship);

    // place cruiser (3)
    var cCruiser = findShip(computerShips, 3);
    // randomly place carrier
    placeShipRandom(2, cCruiser);
    placeShip(2, cCruiser);

    // place submarine (3)
    var cSubmarine = findShip(computerShips, 4);
    // randomly place carrier
    placeShipRandom(2, cSubmarine);
    placeShip(2, cSubmarine);

    // place destroyer (2)
    var cDestroyer = findShip(computerShips, 5);
    // randomly place carrier
    placeShipRandom(2, cDestroyer);
    placeShip(2, cDestroyer);

    // return the shipsGrid
    return computerShipPlacement;
}

function placeShip(id, ship) {
    var orientation = ship.orientation;
    var len = ship.length;
    var row = ship.head_location[0];
    var col = ship.head_location[1];
    
    if (id == 1) {
        if (orientation == "vertical") {
            for (var i = 0; i < len; i++) {
                playerShipPlacement[row + i][col] = ship.id;
            }
        }
        else {
            for (var i = 0; i < len; i++) {
                playerShipPlacement[row][col + i] = ship.id;
            }
        }
    }
    else {
        if (orientation == "vertical") {
            for (var i = 0; i < len; ++i) {
                computerShipPlacement[row + i][col] = ship.id;
            }
        }
        else {
            for (var i = 0; i < len; ++i) {
                computerShipPlacement[row][col + i] = ship.id;
            }
        }
    }
}

// PLACES A SHIP RANDOMLY ON THE BOARD
function placeShipRandom(id, ship) {
    // give the right shipsPlacement grid depending on id
    var grid = null;
    if (id == player.id) {
        grid = playerShipPlacement;
    } else {
        grid = computerShipPlacement;
    }

    // calculate a random direction (vertical or horizontal)
    var direction = Math.round(Math.random());
    var row = Math.floor(Math.random() * 10);
    var col = Math.floor(Math.random() * 10);
    if (direction) {
        // set ship orientation
        ship.orientation = 'vertical';
        // iterate in the proper direction
        // since this is vertical I want to iterate from top to bottom and left to right (in that order)
        // looking for an open head location, then iterating to see if there are enough spots
        for (let i = 0; i < grid.length; ++i) {
            for (let k = 0; k < grid.length; ++k) {
                // as long as row in in the bounds of the grid
                if (row < grid.length) {
                    // as long as col is in the bounds of the grid
                    if (col < grid.length) {
                        // check the grid at that spot
                        if (grid[row][col] == 0) {
                            // set a variable to see if we can place a ship here
                            var readyToPlace = true;
                            // Found an open spot, now I need to make sure the ship fits there.
                            for (let j = 0; j < ship.length; ++j) {
                                // Once we are outside the bounds of the grid before we 
                                // hit ready to place, we are done and can't place ship there
                                if (row + j < grid.length) {
                                    // if there is already a ship in this location
                                    if (grid[row + j][col] != 0) {
                                        // can't place here
                                        readyToPlace = false;
                                        // set row to this location so we don't iterate through this again.
                                        row = row + j;
                                        break;
                                    }
                                } 
                                // can't place the ship because we can't wrap ships to different levels
                                else {
                                    readyToPlace = false;
                                    row = row + j;
                                    break;
                                }
                            }
                            // if we are good to place here, then set the head location and return the ship.
                            if (readyToPlace) {
                                ship.head_location = [row, col];
                                return ship;
                            }
                            // increment row if we can't place with this head location
                            row++;
                        }
                        // increment row cause there is already a ship here 
                        else {
                            row++;
                        }
                    }
                    // need to reset col to 0 
                    else {
                        col = 0;
                        // check the grid at that spot
                        if (grid[row][col] == 0) {
                            // set a variable to see if we can place a ship here
                            var readyToPlace = true;
                            // Found an open spot, now I need to make sure the ship fits there.
                            for (let j = 0; j < ship.length; ++j) {
                                // Once we are outside the bounds of the grid before we 
                                // hit ready to place, we are done and can't place ship there
                                if (row + j < grid.length) {
                                    // if there is already a ship in this location
                                    if (grid[row + j][col] != 0) {
                                        // can't place here
                                        readyToPlace = false;
                                        // set row to this location so we don't iterate through this again.
                                        row = row + j;
                                        break;
                                    }
                                } 
                                // can't place the ship because we can't wrap ships to different levels
                                else {
                                    readyToPlace = false;
                                    row = row + j;
                                    break;
                                }
                            }
                            // if we are good to place here, then set the head location and return the ship.
                            if (readyToPlace) {
                                ship.head_location = [row, col];
                                return ship;
                            }
                            // increment row if we can't place with this head location
                            row++;
                        }
                        // increment row cause there is already a ship here 
                        else {
                            row++;
                        }
                    }
                }
                // need to reset row to 0
                else {
                    row = 0;
                    // check if col is good as well
                    if (col < grid.length) {
                        // check the grid at that spot
                        if (grid[row][col] == 0) {
                            // set a variable to see if we can place a ship here
                            var readyToPlace = true;
                            // Found an open spot, now I need to make sure the ship fits there.
                            for (let j = 0; j < ship.length; ++j) {
                                // Once we are outside the bounds of the grid before we 
                                // hit ready to place, we are done and can't place ship there
                                if (row + j < grid.length) {
                                    // if there is already a ship in this location
                                    if (grid[row + j][col] != 0) {
                                        // can't place here
                                        readyToPlace = false;
                                        // set row to this location so we don't iterate through this again.
                                        row = row + j;
                                        break;
                                    }
                                } 
                                // can't place the ship because we can't wrap ships to different levels
                                else {
                                    readyToPlace = false;
                                    row = row + j;
                                    break;
                                }
                            }
                            // if we are good to place here, then set the head location and return the ship.
                            if (readyToPlace) {
                                ship.head_location = [row, col];
                                return ship;
                            }
                            // increment row if we can't place with this head location
                            row++;
                        }
                        // increment row cause there is already a ship here 
                        else {
                            row++;
                        }
                    }
                    // else reset col too
                    else {
                        col = 0;
                        // check the grid at that spot
                        if (grid[row][col] == 0) {
                            // set a variable to see if we can place a ship here
                            var readyToPlace = true;
                            // Found an open spot, now I need to make sure the ship fits there.
                            for (let j = 0; j < ship.length; ++j) {
                                // Once we are outside the bounds of the grid before we 
                                // hit ready to place, we are done and can't place ship there
                                if (row + j < grid.length) {
                                    // if there is already a ship in this location
                                    if (grid[row + j][col] != 0) {
                                        // can't place here
                                        readyToPlace = false;
                                        // set row to this location so we don't iterate through this again.
                                        row = row + j;
                                        break;
                                    }
                                } 
                                // can't place the ship because we can't wrap ships to different levels
                                else {
                                    readyToPlace = false;
                                    row = row + j;
                                    break;
                                }
                            }
                            // if we are good to place here, then set the head location and return the ship.
                            if (readyToPlace) {
                                ship.head_location = [row, col];
                                return ship;
                            }
                            // increment row if we can't place with this head location
                            row++;
                        }
                        // there is already a ship here so we need to keep moving on 
                        else {
                            row++;
                        }
                    }
                }
            }
            // incrememnt col when we hit this outer loop
            col++;
        }
        
    } 
    else {
        // set ship orientation
        ship.orientation = 'horizontal';
        // iterate in the proper direction
        // since this is vertical I want to iterate from top to bottom and left to right (in that order)
        // looking for an open head location, then iterating to see if there are enough spots
        for (let i = 0; i < grid.length; ++i) {
            for (let k = 0; k < grid.length; ++k) {
                // as long as row in in the bounds of the grid
                if (col < grid.length) {
                    // as long as col is in the bounds of the grid
                    if (row < grid.length) {
                        // check the grid at that spot
                        if (grid[row][col] == 0) {
                            // set a variable to see if we can place a ship here
                            var readyToPlace = true;
                            // Found an open spot, now I need to make sure the ship fits there.
                            for (let j = 0; j < ship.length; ++j) {
                                // Once we are outside the bounds of the grid before we 
                                // hit ready to place, we are done and can't place ship there
                                if (col + j < grid.length) {
                                    // if there is already a ship in this location
                                    if (grid[row][col + j] != 0) {
                                        // can't place here
                                        readyToPlace = false;
                                        // set col to this location so we don't iterate through this again.
                                        col = col + j;
                                        break;
                                    }
                                } 
                                // can't place the ship because we can't wrap ships to different levels
                                else {
                                    readyToPlace = false;
                                    col = col + j
                                    break;
                                }
                            }
                            // if we are good to place here, then set the head location and return the ship.
                            if (readyToPlace) {
                                ship.head_location = [row, col];
                                return ship;
                            }
                            // increment row if we can't place with this head location
                            col++;
                        }
                        // increment row cause there is already a ship here 
                        else {
                            col++;
                        }
                    }
                    // need to reset row to 0 
                    else {
                        row = 0;
                        // check the grid at that spot
                        if (grid[row][col] == 0) {
                            // set a variable to see if we can place a ship here
                            var readyToPlace = true;
                            // Found an open spot, now I need to make sure the ship fits there.
                            for (let j = 0; j < ship.length; ++j) {
                                // Once we are outside the bounds of the grid before we 
                                // hit ready to place, we are done and can't place ship there
                                if (col + j < grid.length) {
                                    // if there is already a ship in this location
                                    if (grid[row][col + j] != 0) {
                                        // can't place here
                                        readyToPlace = false;
                                        // set row to this location so we don't iterate through this again.
                                        col = col + j;
                                        break;
                                    }
                                } 
                                // can't place the ship because we can't wrap ships to different levels
                                else {
                                    readyToPlace = false;
                                    col = col + j;
                                    break;
                                }
                            }
                            // if we are good to place here, then set the head location and return the ship.
                            if (readyToPlace) {
                                ship.head_location = [row, col];
                                return ship;
                            }
                            // increment row if we can't place with this head location
                            col++;
                        }
                        // increment row cause there is already a ship here 
                        else {
                            col++;
                        }
                    }
                }
                // need to reset col to 0
                else {
                    col = 0;
                    // check if col is good as well
                    if (row < grid.length) {
                        // check the grid at that spot
                        if (grid[row][col] == 0) {
                            // set a variable to see if we can place a ship here
                            var readyToPlace = true;
                            // Found an open spot, now I need to make sure the ship fits there.
                            for (let j = 0; j < ship.length; ++j) {
                                // Once we are outside the bounds of the grid before we 
                                // hit ready to place, we are done and can't place ship there
                                if (col + j < grid.length) {
                                    // if there is already a ship in this location
                                    if (grid[row][col + j] != 0) {
                                        // can't place here
                                        readyToPlace = false;
                                        // set row to this location so we don't iterate through this again.
                                        col = col + j;
                                        break;
                                    }
                                } 
                                // can't place the ship because we can't wrap ships to different levels
                                else {
                                    readyToPlace = false;
                                    col = col + j;
                                    break;
                                }
                            }
                            // if we are good to place here, then set the head location and return the ship.
                            if (readyToPlace) {
                                ship.head_location = [row, col];
                                return ship;
                            }
                            // increment row if we can't place with this head location
                            col++;
                        }
                        // increment row cause there is already a ship here 
                        else {
                            col++;
                        }
                    }
                    // else reset col too
                    else {
                        row = 0;
                        // check the grid at that spot
                        if (grid[row][col] == 0) {
                            // set a variable to see if we can place a ship here
                            var readyToPlace = true;
                            // Found an open spot, now I need to make sure the ship fits there.
                            for (let j = 0; j < ship.length; ++j) {
                                // Once we are outside the bounds of the grid before we 
                                // hit ready to place, we are done and can't place ship there
                                if (col + j < grid.length) {
                                    // if there is already a ship in this location
                                    if (grid[row][col + j] != 0) {
                                        // can't place here
                                        readyToPlace = false;
                                        // set row to this location so we don't iterate through this again.
                                        col = col + j;
                                        break;
                                    }
                                } 
                                // can't place the ship because we can't wrap ships to different levels
                                else {
                                    readyToPlace = false;
                                    col = col + j;
                                    break;
                                }
                            }
                            // if we are good to place here, then set the head location and return the ship.
                            if (readyToPlace) {
                                ship.head_location = [row, col];
                                return ship;
                            }
                            // increment row if we can't place with this head location
                            col++;
                        }
                        // there is already a ship here so we need to keep moving on 
                        else {
                            col++;
                        }
                    }
                }
            }
            // incrememnt col when we hit this outer loop
            row++;
        }
    }
}

function findShip(objs, id) {
    
    for (var i = 0; i < objs.length; i++) {
        if (objs[i]["id"] === id) {
            return objs[i];
        }
    }
    return null;
}

// FUNCTION TO SEE IF PLAYER HAS WON THE GAME
function isWin(id) {
    var win = true;
    if (player.id == id) {
        // Check computer ships to see if they are sunk
        Object.keys(computerShips).forEach(function(key) {
            // only assume win is false if any of the ships aren't hit as much as they are long
            if (computerShips[key].length != computerShips[key].hits) {
                win = false;
            }
        });
        if (win) { 
            console.log("Adding to player wins.");
            player.wins++; 
        }
    } else {
        // Go through the players ships
        Object.keys(playerShips).forEach(function(key) {
            // only assume win is false if any of the ships aren't hit as much as they are long
            if (playerShips[key].length != playerShips[key].hits) {
                win = false;
            }
        });
        if (win) {
            computer.wins++; 
        }
    }
    return win;
}

function reset() {
    console.log("Resetting");
    player = {
        "id": 1,
        "last_shot": null,
        "wins": 0
    };
    computer = {
        "id": 2,
        "last_shot": null,
        "first_hit": null,
        "last_hit": null,
        "direction": null,
        "orphanHits": [],
        "step": 1,
        "wins": 0
    };
    playerShots = [
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    ];
    computerShots = [
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    ];
    playerShips = [
        {
            "name": "carrier",
            "id": 1,
            "head_location": null,
            "length": 5,
            "orientation": null,
            "hits": 0,
            "sunk": false
        },
        {
            "name": "battleship",
            "id": 2,
            "head_location": null,
            "length": 4,
            "orientation": null,
            "hits": 0,
            "sunk": false
        },
        {
            "name": "cruiser",
            "id": 3,
            "head_location": null,
            "length": 3,
            "orientation": null,
            "hits": 0,
            "sunk": false
        },
        {
            "name": "submarine",
            "id": 4,
            "head_location": null,
            "length": 3,
            "orientation": null,
            "hits": 0,
            "sunk": false
        },
        {
            "name": "destroyer",
            "id": 5,
            "head_location": null,
            "length": 2,
            "orientation": null,
            "hits": 0,
            "sunk": false
        }
    ];
    computerShips = [
        {
            "name": "carrier",
            "id": 1,
            "head_location": null,
            "length": 5,
            "orientation": null,
            "hits": 0,
            "sunk": false
        },
        {
            "name": "battleship",
            "id": 2,
            "head_location": null,
            "length": 4,
            "orientation": null,
            "hits": 0,
            "sunk": false
        },
        {
            "name": "cruiser",
            "id": 3,
            "head_location": null,
            "length": 3,
            "orientation": null,
            "hits": 0,
            "sunk": false
        },
        {
            "name": "submarine",
            "id": 4,
            "head_location": null,
            "length": 3,
            "orientation": null,
            "hits": 0,
            "sunk": false
        },
        {
            "name": "destroyer",
            "id": 5,
            "head_location": null,
            "length": 2,
            "orientation": null,
            "hits": 0,
            "sunk": false
        }
    ];
    playerShipPlacement = [
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    ];
    computerShipPlacement = [
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    ];
    gameOver = false;
    turn = 1;
}

// INIT SAVED GAME DATA
function loadSavedGame() {
    var request = new XMLHttpRequest();
    request.open("GET", "game-info/game-data.txt", false);
    request.send();
    // data = JSON.parse(request.response);
    var data = JSON.parse(request.responseText);
    // set the saved game data
    player = data.player;
    computer = data.computer;
    playerShots = data.playerShots;
    computerShots = data.computerShots;
    playerShips = data.playerShips;
    computerShips = data.computerShips;
    playerShipPlacement = data.playerShipPlacement;
    computerShipPlacement = data.computerShipPlacement;
    gameOver = data.gameOver;
    turn = data.turn;
    // put the data in the code block on the page
    document.querySelector('#code-snippet').innerHTML = request.responseText;
}
