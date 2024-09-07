let navLinks = document.getElementById("navLinks");
function showMenu(){
    navLinks.style.top = '0';
}
function hideMenu(){
    navLinks.style.top = '-800px'
}

// document.addEventListener("DOMContentLoaded", function() {
//     const navbar = document.querySelector(".nav-links");
    
//     // Check if the user is logged in (you can replace this with your actual authentication logic)
//     const isLoggedIn = true; // Example: Assume the user is logged in
    
//     // Dynamically modify the navbar based on the user's authentication status
//     if (isLoggedIn) {
//         const moodAssessmentLink = document.createElement("li");
//         moodAssessmentLink.innerHTML = '<a href="mood.htm">Mood Assessment</a>';
//         navbar.appendChild(moodAssessmentLink);
//     }
// });

// document.addEventListener("DOMContentLoaded", function() {
//     const navbar = document.querySelector(".nav-links");
    
//     // Check if the user is logged in (you can replace this with your actual authentication logic)
//     const isLoggedIn = true; // Example: Assume the user is logged in
    
//     // Dynamically modify the navbar based on the user's authentication status
//     if (isLoggedIn) {
//         const logoutButton = document.createElement("li");
//         logoutButton.innerHTML = '<a href="index.htm">Logout</a>';
//         navbar.appendChild(logoutButton);
//     } else {
//         const loginButton = document.createElement("li");
//         loginButton.innerHTML = '<a href="#">Login</a>';
//         navbar.appendChild(loginButton);
//     }
// });

