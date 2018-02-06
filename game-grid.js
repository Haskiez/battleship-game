document.onreadystatechange = function() {
    if (document.readyState == "interactive") {
        // create two table elements that go in table-div element
        var tableDiv = document.getElementById("table-div");
        tableDiv.innerHTML = "<table id='player-board'><thead></thead><tbody></tbody></table><table id='computer-board'><thead></thead><tbody></tbody></table>";
        // createPlayerGrid(11, 11);
        // createComputerGrid(11, 11);
        generateGrid(11, 11, "player-board");
        generateGrid(11, 11, "computer-board");
    }
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
                    lastTr.innerHTML += "<td class='hit-box'><i class='fa fa-circle-thin'></i></td>";
                }
            }
        }
    }
}