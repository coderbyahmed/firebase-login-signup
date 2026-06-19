import { auth, createUserWithEmailAndPassword } from "../config/firebase.js";
import { showToast } from "../config/toast.js";

const registerForm = document.getElementById("registerForm");
const passwordInput = document.getElementById("reg-password");
const passwordToggle = document.querySelector(".field-group__eye");

passwordToggle.addEventListener("click", () => {
    const type = passwordInput.type === "password" ? "text" : "password";
    passwordInput.type = type;
    passwordToggle.querySelector("i").className = type === "password" ? "fa-regular fa-eye" : "fa-regular fa-eye-slash";
});

registerForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const email = document.getElementById("reg-email").value;
    const password = document.getElementById("reg-password").value;

    createUserWithEmailAndPassword(auth, email, password)
        .then(() => {
            showToast("Signup Successful", "success");
            setTimeout(() => {
                window.location.href = "../index.html";
            }, 1000);
        })

        .catch((error) => {
            const message = getErrorMessage(error.code);
            showToast(message, "error");
        })

});

function getErrorMessage(code) {
    const messages = {
        "auth/email-already-in-use": "Email Already Exists",
        "auth/invalid-email": "Invalid Email",
        "auth/weak-password": "Weak Password",
        "auth/network-request-failed": "Network Error"
    };
    return messages[code] || "Registration Failed. Please try again.";
}
