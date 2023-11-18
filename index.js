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

let username_register = document.getElementById("email")
let password_register = document.getElementById("password")
let registerbutton = document.getElementById("signup")
let reenterpassword = document.getElementById("reenterpassword")

registerbutton.addEventListener("click", function(){
    if (reenterpassword.value == password_register.value){
        let username = username_register.value
        let password = password_register.value

        createUserWithEmailAndPassword(auth, username, password)
        .then((userCredential) => {
            const user = userCredential.user
            set(ref(database, "user/" + user.uid), {
                username: username,
                password: password,
            })

            alert("Account successfully created")
        })

        .catch((err) => {
            const errorCode = err.code;
            const errorMess = err.message;

            alert(errorMess)
        })
    } else if (reenterpassword.value == ""){
        alert("Please re-confirm your password")
    } else {
        alert("Re-confirmed password does not match the entered password")
    }
})