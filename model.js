// FUNCTIONS FOR MODEL
var player = {
    "id": 1,
    "last_shot": [0,0],
    "wins": 0
};
var computer = {
    "id": 2,
    "last_shot": [0,0],
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
        // players turn, get players info
        if (playerShots[row][col] == 1) {
            alert("Already shot here, try again.");
        }
        else {
            if (computerShipPlacement[row][col] != 0) {
                playerShots[row][col] = 1;
                var ship = findShip(computerShips, computerShipPlacement[row][col]);
                ship.hits++;
                if (ship.hits == ship.length) {
                    alert("The enemies " + ship.name + " has been sunk!");
                    return 2;
                }
                return 1;
            }
            else {
                return 0;
            }
        }
    }
    else {
        // computers turn
        if (computerShots[row][col] == 1) {
            computerCalcShot();
        }
        else {
            if (playerShipPlacement[row][col] != 0) {
                return 1;
            }
            else {
                return 0;
            }
        }
    }
}

// COMPUTERCALCSHOT function
// calls the shot function on a random index
function computerCalcShot() {
    var row = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    var col = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    var r = Math.floor(Math.random() * 10);
    var c = Math.floor(Math.random() * 10);
    shot(2, r, c);
}

// PLACESHIPS
// places the ships for the player and computer (just a testing function)
function placeShipsPlayer() {
    // place the carrier (5)
    var pCarrier = findShip(playerShips, 1);
    pCarrier.head_location = [0,0];
    pCarrier.orientation = "vertical";
    placeShip(1, pCarrier);
    // place the battleship (4)
    var pBattleship = findShip(playerShips, 2);
    pBattleship.head_location = [0,1];
    pBattleship.orientation = "vertical";
    placeShip(1, pBattleship);
    // place cruiser (3)
    var pCruiser = findShip(playerShips, 3);
    pCruiser.head_location = [0,2];
    pCruiser.orientation = "vertical";
    placeShip(1, pCruiser);
    // place submarine (3)
    var pSubmarine = findShip(playerShips, 4);
    pSubmarine.head_location = [0,3];
    pSubmarine.orientation = "vertical";
    placeShip(1, pSubmarine);
    // place destroyer (2)
    var pDestroyer = findShip(playerShips, 5);
    pDestroyer.head_location = [0,4];
    pDestroyer.orientation = "vertical";
    placeShip(1, pDestroyer);

    return playerShipPlacement;
}
function placeShipsComputer() {
    // just copy player for now
    computerShipPlacement = playerShipPlacement;
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
                computerShipPlacement[row + i][col + i] = ship.id;
            }
        }
        else {
            for (var i = 0; i < len; ++i) {
                computerShipPlacement[row][col + i] = ship.id;
            }
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

function reset() {
    player = {
        "id": 1,
        "last_shot": [0,0]
    };
    computer = {
        "id": 2,
        "last_shot": [0,0]
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
