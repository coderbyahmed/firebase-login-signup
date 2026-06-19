import { auth, onAuthStateChanged, signOut } from "../config/firebase.js";
import { showToast } from "../config/toast.js";

const userEmailEl = document.getElementById("userEmail");
const userEmailInfoEl = document.getElementById("userEmailInfo");
const userUidEl = document.getElementById("userUid");
const navbarEmailEl = document.getElementById("navbarEmail");
const logoutBtn = document.getElementById("logoutBtn");
const sidebarLogoutBtn = document.getElementById("sidebarLogoutBtn");
const sidebarToggle = document.getElementById("sidebarToggle");
const sidebar = document.getElementById("sidebar");
const sidebarOverlay = document.getElementById("sidebarOverlay");

onAuthStateChanged(auth, (user) => {
    if (user) {
        userEmailEl.textContent = user.email;
        userEmailInfoEl.textContent = user.email;
        userUidEl.textContent = user.uid;
        navbarEmailEl.textContent = user.email;
    } else {
        window.location.href = "../index.html";
    }
});

function handleLogout() {
    signOut(auth).then(() => {
        showToast("Logged out successfully", "success");
        setTimeout(() => {
            window.location.href = "../index.html";
        }, 1000);
    }).catch(() => {
        showToast("Logout failed", "error");
    });
}

logoutBtn.addEventListener("click", handleLogout);
sidebarLogoutBtn.addEventListener("click", handleLogout);

sidebarToggle.addEventListener("click", () => {
    sidebar.classList.toggle("sidebar--open");
    sidebarOverlay.classList.toggle("sidebar-overlay--visible");
});

sidebarOverlay.addEventListener("click", () => {
    sidebar.classList.remove("sidebar--open");
    sidebarOverlay.classList.remove("sidebar-overlay--visible");
});
