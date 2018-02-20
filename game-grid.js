document.onreadystatechange = function() {
    if (document.readyState == "interactive") {
        // create two table elements that go in table-div element
        var tableDiv = document.getElementById("table-div");
        tableDiv.innerHTML = "<table id='player-board'><thead></thead><tbody></tbody></table><table id='computer-board'><thead></thead><tbody></tbody></table>";
        playerGrid = document.getElementById("player-board");
        computerGrid = document.getElementById("computer-board");
        // generate the game grids for each player
        generateGrid(11, 11, "player-board");
        generateGrid(11, 11, "computer-board");

        showShips("player-board", placeShipsPlayer());
        showShips("computer-board", placeShipsComputer());


        // add on click event to all hit boxes in both tables
        var cells = document.getElementsByClassName("hit-box");
        for (var i = 0; i < cells.length; ++i) {
            cells[i].addEventListener("click", function() {
                if (turn == 1) {
                    if (this.getAttribute("data-board-id") != 1) {
                        var cellNumStr = this.getAttribute("data-cell-number");
                        var row = cellNumStr[0];
                        var col = cellNumStr[2];
                        var goodShot = shot(1, row, col);
                        if (goodShot == 1) {
                            alert("HIT");
                            var box = computerGrid.querySelector('[data-cell-number="' + row + ',' + col + '"]');
                            var icon = box.getElementsByTagName("i")[0];
                            icon.classList.remove("fa-circle-thin");
                            icon.classList.add("fa-circle");
                            box.classList.add("hit");
                        }
                        else if (goodShot == 0) {
                            alert("MISS");
                            var box = computerGrid.querySelector('[data-cell-number="' + row + ',' + col + '"]');
                            var icon = box.getElementsByTagName("i")[0];
                            icon.classList.remove("fa-circle-thin");
                            icon.classList.add("fa-circle");
                            box.classList.add("miss");
                        }
                    }
                    else {
                        alert("That is not the right board.");
                    }
                }
                else {
                    alert("It's not your turn.");
                }
            });
        }
    }
}

// FUNCTIONS FOR VIEW

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