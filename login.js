// make sure the document is ready
document.onreadystatechange = function() {
    if (document.readyState == "interactive") {
        document.getElementById('loginBtn').addEventListener('click', function(e) {
            // get the username and password information
            var usernameInfo = document.getElementById('userName');
            var passwordInfo = document.getElementById('password');
            // get the error text
            var usernameError = document.getElementById('usernameError');
            var passwordError = document.getElementById('passwordError');
            usernameError.style.visibility = 'hidden';
            passwordError.style.visibility = 'hidden';
            // if either field is empty, show error.
            if (usernameInfo.value == '') { 
                usernameError.style.visibility = 'visible';
            } 
            else if (passwordInfo.value == '') {
                passwordError.style.visibility = 'visible';
            }
            // else, send request
            else {
                // encode the data
                var data = usernameInfo.name + '=' + usernameInfo.value + '&' + passwordInfo.name + '=' + passwordInfo.value;
                //declare a variable to store the reponse when it comes back
                var loginInfo = null;

                // Everything we need to send the request to the server and recieve the response
                var xhr = new XMLHttpRequest();
                xhr.addEventListener("load", reqListener);
                xhr.open("POST", "http://universe.tc.uvu.edu/cs2550/assignments/PasswordCheck/check.php");
                xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
                xhr.send(data);
                function reqListener() {
                    loginInfo = JSON.parse(this.responseText);
                    // if the result is invalid, throw error
                    if (loginInfo.result == "invalid") {
                        alert("Login failed. Please try again.");
                    }
                    // else, login to game grid page and save the login info to local storage
                    else {
                        localStorage.setItem("cs2550timestamp", loginInfo.userName + ' ' + loginInfo.timestamp);
                        window.location.href = 'game-grid.html';
                    }
                }
            }
        });
    }
}