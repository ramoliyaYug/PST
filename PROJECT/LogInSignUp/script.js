let loginbtn = document.getElementById("login_btn");
let signupbtn = document.getElementById("signup_btn");
let signUpPage = document.getElementById("signup");
let logInPage = document.getElementById("login");

loginbtn.addEventListener('click', (e) => {
    e.preventDefault();
    signUpPage.style.display = 'none';
    logInPage.style.display = 'block';
});

signupbtn.addEventListener('click', (e) => {
    e.preventDefault();
    signUpPage.style.display = 'block';
    logInPage.style.display = 'none';
});

const signupForm = document.querySelector("#signup form");
signupForm.addEventListener("submit", (e) => {
    e.preventDefault();

    let email = document.getElementById("email").value.trim();
    let password = document.getElementById("password").value.trim();

    if (!email || !password) {
        alert("Email and password cannot be empty.");
        return;
    }

    if (localStorage.getItem(email)) {
        alert("User already exists");
        return;
    }

    localStorage.setItem(email, password);
    alert("New user registered");

    signUpPage.style.display = 'none';
    logInPage.style.display = 'block';
});

const loginForm = document.querySelector("#login form");
loginForm.addEventListener("submit", (e) => {
    e.preventDefault();

    let email = document.getElementById("email_login").value.trim();
    let password = document.getElementById("password_login").value.trim();

    if (!email || !password) {
        alert("Email and password cannot be empty.");
        return;
    }

    if (localStorage.getItem(email) === password) {
        alert("Login successful");
    } else {
        alert("Invalid email or password");
    }
});
