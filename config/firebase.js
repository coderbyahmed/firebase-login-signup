
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/12.14.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.14.0/firebase-analytics.js";
  import { getAuth ,createUserWithEmailAndPassword ,signInWithEmailAndPassword ,onAuthStateChanged ,signOut ,sendPasswordResetEmail } from "https://www.gstatic.com/firebasejs/12.14.0/firebase-auth.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyBsgyqffuBITn2kzCcjWwMJ4HQHuyxlWKw",
    authDomain: "login-page-c9b16.firebaseapp.com",
    projectId: "login-page-c9b16",
    storageBucket: "login-page-c9b16.firebasestorage.app",
    messagingSenderId: "119113857221",
    appId: "1:119113857221:web:da66dc19630193d4ecd8ac",
    measurementId: "G-Y9C8NVNJ3P"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  const auth = getAuth(app);
export { auth, createUserWithEmailAndPassword , signInWithEmailAndPassword , onAuthStateChanged , signOut , sendPasswordResetEmail }