// Function to navigate to the Sign-Up page
function navigateToSignUp() {
    // Assuming your sign-up page URL is 'signup.html'
    window.location.href = 'signup.html';
}

// Event listeners for the "Get Started" button and the "Sign Up Now" button
document.addEventListener('DOMContentLoaded', () => {
    const getStartedButton = document.querySelector('.hero .btn');
    const signUpNowButton = document.querySelector('#cta .btn');

    // When "Get Started" is clicked, navigate to the sign-up page
    if (getStartedButton) {
        getStartedButton.addEventListener('click', (e) => {
            e.preventDefault(); // Prevents default action if using <a>
            navigateToSignUp();  // Navigate to sign-up page
        });
    }

    // When "Sign Up Now" is clicked, navigate to the sign-up page
    if (signUpNowButton) {
        signUpNowButton.addEventListener('click', (e) => {
            e.preventDefault();
            navigateToSignUp();
        });
    }
});

// FAQ Form Submission
document.addEventListener('DOMContentLoaded', () => {
    const faqForm = document.querySelector('#faq form');

    if (faqForm) {
        faqForm.addEventListener('submit', (e) => {
            e.preventDefault(); // Prevent page reload on form submission
            
            const faqQuestion = faqForm.querySelector('input[type="text"]').value;

            if (faqQuestion.trim() === '') {
                alert('Please enter a question.');
                return;
            }

            // Simulate sending the question to the server
            console.log('FAQ Question Submitted: ', faqQuestion);
            
            // For now, just show an alert or confirmation
            alert('Thank you for your question! We will get back to you soon.');
            
            // Clear the input field after submission
            faqForm.reset();
        });
    }
});
