
// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-analytics.js";
import { getAuth, onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyDiqzKWIPYPLCJ_LWmx4vovUk5_vzm-lc0",
  authDomain: "my-first-project-9cd31.firebaseapp.com",
  projectId: "my-first-project-9cd31",
  storageBucket: "my-first-project-9cd31.appspot.com",
  messagingSenderId: "36408870032",
  appId: "1:36408870032:web:6a5ccff1d14776cbd58415",
  measurementId: "G-F2BD5NY6D2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

const signup_email = document.getElementById("signupEmail");
const signup_password = document.getElementById("signupPassword");
const signup_button = document.getElementById("registerBtn");
const result_html = document.getElementById("overallsignupres");

const signin_email = document.getElementById("loginEmail");
const signin_password = document.getElementById("loginPassword");
const signin_button = document.getElementById("loginBtn");
const result_htmlsignin = document.getElementById("overallloginres");

signup_button.addEventListener('click', createUserAccount);
signin_button.addEventListener('click', signIn);

onAuthStateChanged(auth, (user) => {
  if (user) {
    const uid = user.uid;
  } else {

  }
});

function createUserAccount() {
  createUserWithEmailAndPassword(auth, signup_email.value, signup_password.value)
    .then((userCredential) => {
      const user = userCredential.user;
      result_html.innerHTML = `User Signup  successfully! Email: ${user.email}`;
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      result_html.innerHTML = `Error: ${errorMessage}`;
    });
}

function signIn() {
  signInWithEmailAndPassword(auth, signin_email.value, signin_password.value)
    .then((userCredential) => {
      const user = userCredential.user;
      result_htmlsignin.innerHTML = `User Logined  successfully! Email: ${user.email}`;
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      result_htmlsignin.innerHTML = `Error: ${errorMessage}`;


    });
}
document.getElementById('loginLink').addEventListener('click', function (e) {
  e.preventDefault();
  document.querySelector('.row.main').style.transform = 'translateX(-50%)';
});

document.getElementById('registerLink').addEventListener('click', function (e) {
  e.preventDefault();
  document.querySelector('.row.main').style.transform = 'translateX(0)';
});

































