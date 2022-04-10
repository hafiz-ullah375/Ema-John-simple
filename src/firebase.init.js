// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/firebase-auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAmSnVGAisoW6uuk2IpgXOVuWuvBgec4-s",
    authDomain: "ema-john-simple-40660.firebaseapp.com",
    projectId: "ema-john-simple-40660",
    storageBucket: "ema-john-simple-40660.appspot.com",
    messagingSenderId: "428276198457",
    appId: "1:428276198457:web:502f7bb6bf20d3c8bd31e8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export default auth;