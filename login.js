document.getElementById('loginForm').addEventListener('submit', login);
document.getElementById('signupForm').addEventListener('submit', signup);
document.addEventListener("DOMContentLoaded", function() {
    const loginForm = document.getElementById("loginForm");
    const signupForm = document.getElementById("signupForm");
    const signupLink = document.getElementById("signupLink");
    const loginLink = document.getElementById("loginLink");

    signupLink.addEventListener("click", function(e) {
        e.preventDefault();
        loginForm.classList.remove("active");
        signupForm.classList.add("active");
    });

    loginLink.addEventListener("click", function(e) {
        e.preventDefault();
        loginForm.classList.add("active");
        signupForm.classList.remove("active");
    });
});


function login(e) {
    e.preventDefault();
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;
    // Validate login credentials
    // Send request to server (not implemented in this example)
    // Redirect to main page if login successful
    window.location.href = "index.htm";
}

function signup(e) {
    e.preventDefault();
    const name = document.getElementById('signupName').value;
    const email = document.getElementById('signupEmail').value;
    const password = document.getElementById('signupPassword').value;
    // Validate signup inputs
    // Send request to server to save user data in MongoDB (not implemented in this example)
    // Redirect to main page if signup successful
    window.location.href = "index.htm";
}


// Get the container element
var container = document.querySelector('.container');

// Add the 'shake' class to trigger the animation
container.classList.add('shake');

// Remove the 'shake' class after the animation ends
container.addEventListener('animationend', function() {
    container.classList.remove('shake');
});
