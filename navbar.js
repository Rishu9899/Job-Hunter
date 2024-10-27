// navbar.js
document.addEventListener('DOMContentLoaded', function() {
    fetch('navbar.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('navbar').innerHTML = data;
        });
});

// Function to navigate to the home page
function navigateToHome() {
    // Assuming your home page URL is 'index.html'
    window.location.href = 'index.html';
}

// Event listener for the "Job Hunter" title in the navbar
document.addEventListener('DOMContentLoaded', () => {
    const homeTitle = document.querySelector('nav h1'); // Select the Job Hunter title

    if (homeTitle) {
        homeTitle.addEventListener('click', (e) => {
            e.preventDefault(); // Prevents any default link behavior if applicable
            navigateToHome();   // Navigate to the home page
        });
    }
});
