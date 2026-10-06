//Simulate login
function login() {
    sessionStorage.setItem('isLoggedIn', 'true');
    alert('You are logged in (session only).');
}

login()
// Check login state
function checkLogin()  {
    if (sessionStorage.getItem('isLoggedIn')) {
        alert('Welcome back (session active).');

    }   else {
        alert('Please log in');
    }
}

checkLogin()
// Simulate logout
function logout()  {
    sessionStorage.removeItem('isLoggedIn');
    alert('You are logged out.');
}

logout()