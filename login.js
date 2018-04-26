// make sure the document is ready
document.onreadystatechange = function() {
    if (document.readyState == "interactive") {
        document.getElementById('loginBtn').addEventListener('click', function(e) {
            // get the username and password information
            var username = document.getElementById('username');
            var name = document.getElementById('name');
            // store them in local storage
            var nameVal = name.value;
            var usernameVal = username.value;
            // set up an array of months
            var months = [
                'Jan',
                'Feb',
                'Mar',
                'Apr',
                'May',
                'Jun',
                'Jul',
                'Aug',
                'Sep',
                'Oct',
                'Nov',
                'Dec'
            ];
            // store the info in local storage
            var now = new Date();
            localStorage.setItem('name', username.value);
            localStorage.setItem('username', name.value);
            localStorage.setItem('date', months[now.getMonth()] + " " + now.getDate() + " " + now.getFullYear());
            window.location.href = 'game-grid.html';
        });
    }
}