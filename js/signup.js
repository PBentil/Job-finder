// Handle the signup form submission
document.getElementById('signup-form').addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent form from refreshing the page

    const username = document.getElementById('username').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-password').value;

    // Validate input
    if (password !== confirmPassword) {
        alert('Passwords do not match!');
        return;
    }

    // If validation passes
    alert(`Welcome, ${username}! Your account has been created.`);
    
    // Redirect to the index page
    window.location.href = 'index.html';
});


document.getElementById('login-form').addEventListener('submit', function (e) {
    e.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;


    if (email === "pee@example.com" && password === "password") {
        alert("Login successful!");
        window.location.href = "index.html"; // Redirect to the index page
    } else {
        alert("Invalid email or password. Please try again.");
    }
});
