document.onreadystatechange = function() {
    if (document.readyState == "interactive") {
        // create two table elements that go in table-div element
        var tableDiv = document.getElementById("table-div");
        tableDiv.innerHTML = "<table id='player-board'><thead></thead><tbody></tbody></table><table id='computer-board'><thead></thead><tbody></tbody></table>";
        var playerGrid = document.getElementById("player-board");
        var computerGrid = document.getElementById("computer-board");
        var playerAlerts = document.getElementById("textarea-player");
        var computerAlerts = document.getElementById("textarea-computer");
        var columnsLettersArr = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"];
        // show login information
        var loginInfo = document.getElementById('loginInfoP');
        loginInfo.innerHTML = localStorage.username ? '<strong>' + localStorage.cs2550timestamp + '</strong>' : '<strong>No name</strong>';
        if (localStorage.username) {
            loginInfo.innerHTML = '<strong>' + localStorage.name + '<br>' + localStorage.username + '<br>' + localStorage.date + '</strong>';
        }
        else {
            loginInfo.innerHTML = '<strong>No Username</strong>';
        }
        // generate the game grids for each player
        generateGrid(11, 11, "player-board");
        generateGrid(11, 11, "computer-board");

        showShips("player-board", placeShipsPlayer());
        placeShipsComputer();


        // add event listener to clear storage
        document.getElementById('clearStorageBtn').addEventListener('click', function(){
            clearStorageString();
            loginInfo.innerHTML = '<strong>No Username</strong>';
        });
        // add on click event to all hit boxes in both tables
        document.querySelector('#table-div').addEventListener('click', function(e){
            if(e.target.classList.contains('hit-box')) {
                if (turn == 1) {
                    if (e.target.getAttribute("data-board-id") != 1) {
                        var cellNumStr = e.target.getAttribute("data-cell-number");
                        var row = cellNumStr[0];
                        var col = cellNumStr[2];
                        playerAlerts.innerHTML += "Shot made to " + columnsLettersArr[col] + (parseInt(row) + 1);
                        var goodShot = shot(1, row, col);
                        if (goodShot == 1 || goodShot == 2) {
                            playerAlerts.innerHTML += " - HIT\n";
                            playerAlerts.scrollTop = playerAlerts.scrollHeight;
                            var box = computerGrid.querySelector('[data-cell-number="' + row + ',' + col + '"]');
                            var icon = box.getElementsByTagName("i")[0];
                            icon.classList.remove("fa-circle-thin");
                            icon.classList.add("fa-circle");
                            box.classList.add("hit");
                            if (goodShot == 2) {
                                if (isWin(1)) {
                                    alert("YOU WON THE GAME!");
                                    document.getElementById('player-score-number').innerHTML = player.wins;
                                }
                                // Time for computer to take a shot
                                else {
                                    // Variable to hold what is returned from computerCalcShot();
                                    var computerShotVal = computerCalcShot();
                                    // Get where the last shot took place
                                    var computerLastShot = computer.last_shot;

                                    // If it was a hit
                                    if (computerShotVal != 0) {
                                        // Add the alert to the computer alerts box
                                        computerAlerts.innerHTML += "Shot made to " + columnsLettersArr[computerLastShot[1]] + "" + (parseInt(computerLastShot[0]) + 1) + " - HIT\n";
                                        // Keep textarea scrolled to bottom
                                        computerAlerts.scrollTop = computerAlerts.scrollHeight;

                                        // Change the players grid to reflect this shot
                                        var cbox = playerGrid.querySelector('[data-cell-number="' + computerLastShot[0] + ',' + computerLastShot[1] + '"]');
                                        var cicon = cbox.getElementsByTagName("i")[0];
                                        cicon.classList.remove("fa-circle-thin");
                                        cicon.classList.add("fa-circle");
                                        cbox.classList.add("hit");

                                        // if the computer shot val is equal to 2 then the game ends because the computer won
                                        if (computerShotVal == 2) {
                                            if (isWin(computer.id)) {
                                                alert("COMPUTER WON THE GAME!");
                                                document.getElementById('computer-score-number').innerHTML = computer.wins;
                                            }
                                        }
                                    }
                                    // else it was a miss
                                    else {
                                        computerAlerts.innerHTML += "Shot made to " + columnsLettersArr[computerLastShot[1]] + "" + (parseInt(computerLastShot[0]) + 1) + " - MISS\n";
                                        playerAlerts.scrollTop = playerAlerts.scrollHeight;
                                        var cbox = playerGrid.querySelector('[data-cell-number="' + computerLastShot[0] + ',' + computerLastShot[1] + '"]');
                                        var cicon = cbox.getElementsByTagName("i")[0];
                                        cicon.classList.remove("fa-circle-thin");
                                        cicon.classList.add("fa-circle");
                                        cbox.classList.add("miss");
                                    }
                                }
                            }
                            // Time for computer to take a shot
                            else {
                                // Variable to hold what is returned from computerCalcShot();
                                var computerShotVal = computerCalcShot();
                                // Get where the last shot took place
                                var computerLastShot = computer.last_shot;

                                // If it was a hit
                                if (computerShotVal != 0) {
                                    // Add the alert to the computer alerts box
                                    computerAlerts.innerHTML += "Shot made to " + columnsLettersArr[computerLastShot[1]] + "" + (parseInt(computerLastShot[0]) + 1) + " - HIT\n";
                                    // Keep textarea scrolled to bottom
                                    computerAlerts.scrollTop = computerAlerts.scrollHeight;

                                    // Change the players grid to reflect this shot
                                    var cbox = playerGrid.querySelector('[data-cell-number="' + computerLastShot[0] + ',' + computerLastShot[1] + '"]');
                                    var cicon = cbox.getElementsByTagName("i")[0];
                                    cicon.classList.remove("fa-circle-thin");
                                    cicon.classList.add("fa-circle");
                                    cbox.classList.add("hit");

                                    // if the computer shot val is equal to 2 then the game ends because the computer won
                                    if (computerShotVal == 2) {
                                        if (isWin(computer.id)) {
                                            alert("COMPUTER WON THE GAME!");
                                            document.getElementById('computer-score-number').innerHTML = computer.wins;
                                        }
                                    }
                                }
                                // else it was a miss
                                else {
                                    computerAlerts.innerHTML += "Shot made to " + columnsLettersArr[computerLastShot[1]] + "" + (parseInt(computerLastShot[0]) + 1) + " - MISS\n";
                                    playerAlerts.scrollTop = playerAlerts.scrollHeight;
                                    var cbox = playerGrid.querySelector('[data-cell-number="' + computerLastShot[0] + ',' + computerLastShot[1] + '"]');
                                    var cicon = cbox.getElementsByTagName("i")[0];
                                    cicon.classList.remove("fa-circle-thin");
                                    cicon.classList.add("fa-circle");
                                    cbox.classList.add("miss");
                                }
                            }
                        }
                        else if (goodShot == 0) {
                            playerAlerts.innerHTML += " - MISS\n";
                            playerAlerts.scrollTop = playerAlerts.scrollHeight;
                            var box = computerGrid.querySelector('[data-cell-number="' + row + ',' + col + '"]');
                            var icon = box.getElementsByTagName("i")[0];
                            icon.classList.remove("fa-circle-thin");
                            icon.classList.add("fa-circle");
                            box.classList.add("miss");


                            // Variable to hold what is returned from computerCalcShot();
                            var computerShotVal = computerCalcShot();
                            // Get where the last shot took place
                            var computerLastShot = computer.last_shot;

                            // If it was a hit
                            if (computerShotVal != 0) {
                                // Add the alert to the computer alerts box
                                computerAlerts.innerHTML += "Shot made to " + columnsLettersArr[computerLastShot[1]] + "" + (parseInt(computerLastShot[0]) + 1) + " - HIT\n";
                                // Keep textarea scrolled to bottom
                                computerAlerts.scrollTop = computerAlerts.scrollHeight;

                                // Change the players grid to reflect this shot
                                var cbox = playerGrid.querySelector('[data-cell-number="' + computerLastShot[0] + ',' + computerLastShot[1] + '"]');
                                var cicon = cbox.getElementsByTagName("i")[0];
                                cicon.classList.remove("fa-circle-thin");
                                cicon.classList.add("fa-circle");
                                cbox.classList.add("hit");

                                // if the computer shot val is equal to 2 then the game ends because the computer won
                                if (computerShotVal == 2) {
                                    if (isWin(computer.id)) {
                                        alert("COMPUTER WON THE GAME!");
                                        document.getElementById('computer-score-number').innerHTML = computer.wins;
                                    }
                                }
                            }
                            // else it was a miss
                            else {
                                computerAlerts.innerHTML += "Shot made to " + columnsLettersArr[computerLastShot[1]] + "" + (parseInt(computerLastShot[0]) + 1) + " - MISS\n";
                                playerAlerts.scrollTop = playerAlerts.scrollHeight;
                                var cbox = playerGrid.querySelector('[data-cell-number="' + computerLastShot[0] + ',' + computerLastShot[1] + '"]');
                                var cicon = cbox.getElementsByTagName("i")[0];
                                cicon.classList.remove("fa-circle-thin");
                                cicon.classList.add("fa-circle");
                                cbox.classList.add("miss");
                            }
                        }
                    }
                    else {
                        playerAlerts.innerHTML += "Wrong Board!\n";
                        playerAlerts.scrollTop = playerAlerts.scrollHeight;
                    }
                }
                else {
                    playerAlerts.innerHTML += "It's not your turn!\n";
                    playerAlerts.scrollTop = playerAlerts.scrollHeight;
                }
            } else if (e.target.parentNode.classList.contains('hit-box')) {
                if (turn == 1) {
                    if (e.target.parentNode.getAttribute("data-board-id") != 1) {
                        var cellNumStr = e.target.parentNode.getAttribute("data-cell-number");
                        var row = cellNumStr[0];
                        var col = cellNumStr[2];
                        playerAlerts.innerHTML += "Shot made to " + columnsLettersArr[col] + (parseInt(row) + 1);
                        var goodShot = shot(1, row, col);
                        if (goodShot == 1 || goodShot == 2) {
                            playerAlerts.innerHTML += " - HIT\n";
                            playerAlerts.scrollTop = playerAlerts.scrollHeight;
                            var box = computerGrid.querySelector('[data-cell-number="' + row + ',' + col + '"]');
                            var icon = box.getElementsByTagName("i")[0];
                            icon.classList.remove("fa-circle-thin");
                            icon.classList.add("fa-circle");
                            box.classList.add("hit");
                            if (goodShot == 2) {
                                if (isWin(1)) {
                                    alert("YOU WON THE GAME!");
                                    document.getElementById('player-score-number').innerHTML = player.wins;
                                }
                                else {
                                    // Variable to hold what is returned from computerCalcShot();
                                    var computerShotVal = computerCalcShot();
                                    // Get where the last shot took place
                                    var computerLastShot = computer.last_shot;

                                    // If it was a hit
                                    if (computerShotVal != 0) {
                                        // Add the alert to the computer alerts box
                                        computerAlerts.innerHTML += "Shot made to " + columnsLettersArr[computerLastShot[1]] + "" + (parseInt(computerLastShot[0]) + 1) + " - HIT\n";
                                        // Keep textarea scrolled to bottom
                                        computerAlerts.scrollTop = computerAlerts.scrollHeight;

                                        // Change the players grid to reflect this shot
                                        var cbox = playerGrid.querySelector('[data-cell-number="' + computerLastShot[0] + ',' + computerLastShot[1] + '"]');
                                        var cicon = cbox.getElementsByTagName("i")[0];
                                        cicon.classList.remove("fa-circle-thin");
                                        cicon.classList.add("fa-circle");
                                        cbox.classList.add("hit");

                                        // if the computer shot val is equal to 2 then the game ends because the computer won
                                        if (computerShotVal == 2) {
                                            if (isWin(computer.id)) {
                                                alert("COMPUTER WON THE GAME!");
                                                document.getElementById('computer-score-number').innerHTML = computer.wins;
                                            }
                                        }
                                    }
                                    // else it was a miss
                                    else {
                                        computerAlerts.innerHTML += "Shot made to " + columnsLettersArr[computerLastShot[1]] + "" + (parseInt(computerLastShot[0]) + 1) + " - MISS\n";
                                        playerAlerts.scrollTop = playerAlerts.scrollHeight;
                                        var cbox = playerGrid.querySelector('[data-cell-number="' + computerLastShot[0] + ',' + computerLastShot[1] + '"]');
                                        var cicon = cbox.getElementsByTagName("i")[0];
                                        cicon.classList.remove("fa-circle-thin");
                                        cicon.classList.add("fa-circle");
                                        cbox.classList.add("miss");
                                    }
                                }
                            }
                            else {
                                // Variable to hold what is returned from computerCalcShot();
                                var computerShotVal = computerCalcShot();
                                // Get where the last shot took place
                                var computerLastShot = computer.last_shot;

                                // If it was a hit
                                if (computerShotVal != 0) {
                                    // Add the alert to the computer alerts box
                                    computerAlerts.innerHTML += "Shot made to " + columnsLettersArr[computerLastShot[1]] + "" + (parseInt(computerLastShot[0]) + 1) + " - HIT\n";
                                    // Keep textarea scrolled to bottom
                                    computerAlerts.scrollTop = computerAlerts.scrollHeight;

                                    // Change the players grid to reflect this shot
                                    var cbox = playerGrid.querySelector('[data-cell-number="' + computerLastShot[0] + ',' + computerLastShot[1] + '"]');
                                    var cicon = cbox.getElementsByTagName("i")[0];
                                    cicon.classList.remove("fa-circle-thin");
                                    cicon.classList.add("fa-circle");
                                    cbox.classList.add("hit");

                                    // if the computer shot val is equal to 2 then the game ends because the computer won
                                    if (computerShotVal == 2) {
                                        if (isWin(computer.id)) {
                                            alert("COMPUTER WON THE GAME!");
                                            document.getElementById('computer-score-number').innerHTML = computer.wins;
                                        }
                                    }
                                }
                                // else it was a miss
                                else {
                                    computerAlerts.innerHTML += "Shot made to " + columnsLettersArr[computerLastShot[1]] + "" + (parseInt(computerLastShot[0]) + 1) + " - MISS\n";
                                    playerAlerts.scrollTop = playerAlerts.scrollHeight;
                                    var cbox = playerGrid.querySelector('[data-cell-number="' + computerLastShot[0] + ',' + computerLastShot[1] + '"]');
                                    var cicon = cbox.getElementsByTagName("i")[0];
                                    cicon.classList.remove("fa-circle-thin");
                                    cicon.classList.add("fa-circle");
                                    cbox.classList.add("miss");
                                }
                            }
                        }
                        else if (goodShot == 0) {
                            playerAlerts.innerHTML += " - MISS\n";
                            playerAlerts.scrollTop = playerAlerts.scrollHeight;
                            var box = computerGrid.querySelector('[data-cell-number="' + row + ',' + col + '"]');
                            var icon = box.getElementsByTagName("i")[0];
                            icon.classList.remove("fa-circle-thin");
                            icon.classList.add("fa-circle");
                            box.classList.add("miss");
                            
                            
                            // Variable to hold what is returned from computerCalcShot();
                            var computerShotVal = computerCalcShot();
                            // Get where the last shot took place
                            var computerLastShot = computer.last_shot;

                            // If it was a hit
                            if (computerShotVal != 0) {
                                // Add the alert to the computer alerts box
                                computerAlerts.innerHTML += "Shot made to " + columnsLettersArr[computerLastShot[1]] + "" + (parseInt(computerLastShot[0]) + 1) + " - HIT\n";
                                // Keep textarea scrolled to bottom
                                computerAlerts.scrollTop = computerAlerts.scrollHeight;

                                // Change the players grid to reflect this shot
                                var cbox = playerGrid.querySelector('[data-cell-number="' + computerLastShot[0] + ',' + computerLastShot[1] + '"]');
                                var cicon = cbox.getElementsByTagName("i")[0];
                                cicon.classList.remove("fa-circle-thin");
                                cicon.classList.add("fa-circle");
                                cbox.classList.add("hit");

                                // if the computer shot val is equal to 2 then the game ends because the computer won
                                if (computerShotVal == 2) {
                                    if (isWin(computer.id)) {
                                        alert("COMPUTER WON THE GAME!");
                                        document.getElementById('computer-score-number').innerHTML = computer.wins;
                                    }
                                }
                            }
                            // else it was a miss
                            else {
                                computerAlerts.innerHTML += "Shot made to " + columnsLettersArr[computerLastShot[1]] + "" + (parseInt(computerLastShot[0]) + 1) + " - MISS\n";
                                playerAlerts.scrollTop = playerAlerts.scrollHeight;
                                var cbox = playerGrid.querySelector('[data-cell-number="' + computerLastShot[0] + ',' + computerLastShot[1] + '"]');
                                var cicon = cbox.getElementsByTagName("i")[0];
                                cicon.classList.remove("fa-circle-thin");
                                cicon.classList.add("fa-circle");
                                cbox.classList.add("miss");
                            }
                        }
                    }
                    else {
                        playerAlerts.innerHTML += "Wrong Board!\n";
                        playerAlerts.scrollTop = playerAlerts.scrollHeight;
                    }
                }
                else {
                    playerAlerts.innerHTML += "It's not your turn!\n";
                    playerAlerts.scrollTop = playerAlerts.scrollHeight;
                }
            }
        });
        document.getElementById("reset-button").addEventListener("click", function() {
            reset();
            document.querySelector('#player-board > tbody').innerHTML = '';
            document.querySelector('#computer-board > tbody').innerHTML = '';
            // generate the game grids for each player
            generateGrid(11, 11, "player-board");
            generateGrid(11, 11, "computer-board");
            // show the ships on the board
            showShips("player-board", placeShipsPlayer());
            placeShipsComputer();
            // reset player and computer alerts
            playerAlerts.innerHTML = "The game has been reset.\n";
            computerAlerts.innerHTML = "The game has been reset.\n";
        });

        // Load saved game data
        // document.getElementById("importSavedGame").addEventListener("click", function() {
        //     loadSavedGame();
        //     document.querySelector('#player-board > tbody').innerHTML = '';
        //     document.querySelector('#computer-board > tbody').innerHTML = '';
        //     // generate the game grids for each player
        //     generateGrid(11, 11, "player-board");
        //     generateGrid(11, 11, "computer-board");
        //     // show the ships on the board
        //     showShips("player-board", placeShipsPlayer());
        //     showShips("computer-board", placeShipsComputer());
        //     // reset player and computer alerts
        //     playerAlerts.innerHTML = "Loaded Saved Game.";
        //     computerAlerts.innerHTML = "Loaded Saved Game.";
        // });
    }
}

// FUNCTIONS FOR VIEW

// Function to clear storage timestamp
function clearStorageString() {
    localStorage.removeItem('name');
    localStorage.removeItem('username');
    localStorage.removeItem('date');
}
// generate the game grid
// requires the number of rows and columns along with which table you are creating.
// This only table two parameters of either "player-board" and "computer-board".
function generateGrid(rows, columns, tableName) {
    var table = document.getElementById(tableName);
    var tbody = table.getElementsByTagName("tbody")[0];
    var thead = table.getElementsByTagName("thead")[0];
    for (var i = 0; i < rows; ++i) {
        // if its the first row and its the players board
        if (i == 0 && tableName == "player-board") {
            thead.innerHTML = "<tr><th></th><th>A</th><th>B</th><th>C</th><th>D</th><th>E</th><th>F</th><th>G</th><th>H</th><th>I</th><th>J</th></tr>"
        }
        // if its the first row and the computers board
        else if (i == 0 && tableName == "computer-board") {
            thead.innerHTML = "<tr><th>A</th><th>B</th><th>C</th><th>D</th><th>E</th><th>F</th><th>G</th><th>H</th><th>I</th><th>J</th><th></th></tr>"
        }
        // create rest of table
        else {
            tbody.insertRow();
            var allTrs = tbody.getElementsByTagName("tr");
            var lastTr = allTrs[allTrs.length - 1];
            // create normal table cells
            for (var j = 0; j < columns; ++j) {
                if (j == 0 && tableName == "player-board") {
                    lastTr.innerHTML += "<td class='row-number'>" + i + "</td>"
                }
                else if (j == columns - 1 && tableName == "computer-board") {
                    lastTr.innerHTML += "<td class='row-number'>" + i + "</td>"
                }
                else {
                    var id;
                    if (tableName == 'player-board') {
                        id = 1;
                        lastTr.innerHTML += "<td class='hit-box' data-cell-number='" + (i - 1) + "," + (j - 1) +"' data-board-id='" + id + "'><i class='fa fa-circle-thin'></i></td>";
                    }
                    else {
                        id = 2;
                        lastTr.innerHTML += "<td class='hit-box' data-cell-number='" + (i - 1) + "," + j +"' data-board-id='" + id + "'><i class='fa fa-circle-thin'></i></td>";
                    }
                }
            }
        }
    }
}

// Places the ships on the board for the player (and computer in testing)
function showShips(tableName, grid) {
    var table = document.getElementById(tableName);
    for (var i = 0; i < grid.length; i++) {
        var row = grid[i];
        for (var j = 0; j < row.length; j++) {
            if (row[j] != 0) {
                // show a ship in that table cell
                var searchString = 'data-cell-number="' + i + ',' + j + '"';
                var box = table.querySelector("[" + searchString + "]");
                box.classList.add("ship");
            }
        }
    }
}
