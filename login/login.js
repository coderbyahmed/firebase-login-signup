import { auth, signInWithEmailAndPassword } from "../config/firebase.js";
import { showToast } from "../config/toast.js";

const loginForm = document.getElementById("loginForm");
const passwordInput = document.getElementById("log-password");
const passwordToggle = document.querySelector(".field-group__eye");

passwordToggle.addEventListener("click", () => {
    const type = passwordInput.type === "password" ? "text" : "password";
    passwordInput.type = type;
    passwordToggle.querySelector("i").className = type === "password" ? "fa-regular fa-eye" : "fa-regular fa-eye-slash";
});

loginForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const email = document.getElementById("log-email").value;
    const password = document.getElementById("log-password").value;

    signInWithEmailAndPassword(auth, email, password)
        .then(() => {
            showToast("Login Successful", "success");
            setTimeout(() => {
                window.location.href = "dashboard/home.html";
            }, 1000);
        })

        .catch((error) => {
            const message = getErrorMessage(error.code);
            showToast(message, "error");
        })

});

function getErrorMessage(code) {
    const messages = {
        "auth/user-not-found": "User Not Found",
        "auth/wrong-password": "Wrong Password",
        "auth/invalid-email": "Invalid Email",
        "auth/invalid-credential": "Invalid Email or Password",
        "auth/too-many-requests": "Too many attempts. Try again later.",
        "auth/network-request-failed": "Network Error"
    };
    return messages[code] || "Login Failed. Please try again.";
}
