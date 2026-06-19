import { auth, sendPasswordResetEmail } from "../config/firebase.js";
import { showToast } from "../config/toast.js";

const forgotForm = document.getElementById("forgotForm");

forgotForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const email = document.getElementById("forgot-email").value.trim();

    if (!email) {
        showToast("Please enter your email address", "error");
        return;
    }

    sendPasswordResetEmail(auth, email)
        .then(() => {
            showToast("Password reset link has been sent to your email.", "success");
            setTimeout(() => {
                window.location.href = "../index.html";
            }, 2000);
        })

        .catch((error) => {
            const message = getErrorMessage(error.code);
            showToast(message, "error");
        })

});

function getErrorMessage(code) {
    const messages = {
        "auth/invalid-email": "Invalid Email Format",
        "auth/user-not-found": "User Not Found",
        "auth/too-many-requests": "Too Many Requests. Try again later.",
        "auth/network-request-failed": "Network Error"
    };
    return messages[code] || "Something went wrong. Please try again.";
}
