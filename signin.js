// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-app.js";
import { getDatabase, set, ref, update } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-database.js";
import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
  } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-auth.js";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
    apiKey: "AIzaSyCZU-9acZn08WJIqVHtMNWFNzMQqtu2dZk",
    authDomain: "login-1f3ae.firebaseapp.com",
    databaseURL: "https://login-1f3ae-default-rtdb.firebaseio.com",
    projectId: "login-1f3ae",
    storageBucket: "login-1f3ae.appspot.com",
    messagingSenderId: "507471994358",
    appId: "1:507471994358:web:2665c5602c8a042ba9fbd7",
    measurementId: "G-JQ668K4N2J"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
const auth = getAuth()

let username_login = document.getElementById("email")
let password_login = document.getElementById("password")
let loginbutton = document.getElementById("signin")

loginbutton.addEventListener("click", function(){
    let username = username_login.value
    let password = password_login.value

    signInWithEmailAndPassword(auth, username, password)
    .then((userCredential) => {
        const user = userCredential.user
        let date = new Date()
        update(ref(database, "user/" + user.uid), {
            lastLogin: date
        })

        alert("Logged in successfully")
        localStorage.setItem("lastLoggedInUser", username_login.value)
    })

    .catch((err) => {
        const errorCode = err.code;
        const errorMess = err.message;

        alert(errorMess)
    })
})