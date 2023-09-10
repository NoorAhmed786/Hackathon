import { initializeApp } from "https://www.gstatic.com/firebasejs/10.3.1/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword,signInWithEmailAndPassword, signOut, } from "https://www.gstatic.com/firebasejs/10.3.1/firebase-auth.js";
import {getDatabase , set , ref,update } from "https://www.gstatic.com/firebasejs/10.3.1/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyAJ05s6r1FxWlAwxTEh8seL4_cc2iuSsXI",
  authDomain: "attendence-5dbd0.firebaseapp.com",
  projectId: "attendence-5dbd0",
  storageBucket: "attendence-5dbd0.appspot.com",
  messagingSenderId: "462028264389",
  appId: "1:462028264389:web:0e64f581e3caf8c46831ac",
  measurementId: "G-B3FT4BK6ZE"
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
const auth = getAuth(app);


export{
    database,
    auth,
    createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
    set,ref,update,
    signOut
}
  
