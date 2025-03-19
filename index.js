import { initializeApp } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-auth.js";

// Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCL5UmHfiSao6e3HdoZwVv-fUCOpe7fp58",
    authDomain: "login-96909.firebaseapp.com",
    projectId: "login-96909",
    storageBucket: "login-96909.firebasestorage.app",
    messagingSenderId: "1041589784359",
    appId: "1:1041589784359:web:a213e9d92307d5b831a302"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const loginSec = document.querySelector('.login-section');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
const loginButton = document.querySelector('.login .btn');
const signUpButton = document.querySelector('.register .btn');

registerLink.addEventListener('click', () => {
    loginSec.classList.add('active');
});

loginLink.addEventListener('click', () => {
    loginSec.classList.remove('active');
});

// Sign Up Function
signUpButton.addEventListener('click', (e) => {
    e.preventDefault();
    const email = document.querySelector('.register input[type="email"]').value;
    const password = document.querySelector('.register input[type="password"]').value;
    
    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            alert("Sign Up Successful!");
            loginSec.classList.remove('active');
        })
        .catch((error) => {
            alert(error.message);
        });
});

// Login Function
loginButton.addEventListener('click', (e) => {
    e.preventDefault();
    const email = document.querySelector('.login input[type="email"]').value;
    const password = document.querySelector('.login input[type="password"]').value;
    
    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            alert("Login Successful!");
            window.location.href = "https://8daudiomusicpro.github.io/8daudiomusicpr/"; // Redirect after login
        })
        .catch((error) => {
            alert(error.message);
        });
});
