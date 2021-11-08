import firebase from "firebase/compat";

import "firebase/firestore";
import "firebase/auth";
import "firebase/functions";



firebase.initializeApp({
    apiKey: "AIzaSyBQh9e1yDc1SIDh8k6eHvOROcoR8_y9clo",
    authDomain: "keeper-app-568d9.firebaseapp.com",
    projectId: "keeper-app-568d9",
    storageBucket: "keeper-app-568d9.appspot.com",
    messagingSenderId: "838744526779",
    appId: "1:838744526779:web:1100f7a93f9377e23b3e9e"
})



export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });





