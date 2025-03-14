const loginSec = document.querySelector('.login-section');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
const termsCheckboxes = document.querySelectorAll('.remember-password input[type="checkbox"]');
const loginButton = document.querySelector('.login .btn');
const signUpButton = document.querySelector('.register .btn');

registerLink.addEventListener('click', () => {
    loginSec.classList.add('active');
});

loginLink.addEventListener('click', () => {
    loginSec.classList.remove('active');
});

// Function to toggle button state based on checkbox
function toggleButtonState(checkbox, button) {
    button.disabled = !checkbox.checked;
}

// Initial check in case the page loads with checkbox already checked
toggleButtonState(termsCheckboxes[0], loginButton);
toggleButtonState(termsCheckboxes[1], signUpButton);

// Event listeners for checkboxes
termsCheckboxes[0].addEventListener('change', () => {
    toggleButtonState(termsCheckboxes[0], loginButton);
});

termsCheckboxes[1].addEventListener('change', () => {
    toggleButtonState(termsCheckboxes[1], signUpButton);
});

