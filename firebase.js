// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.19.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/12.19.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/12.19.0/firebase-firestore.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAFBSuvM_0U-Dajy2vMdPBV5BM53AoA17E",
  authDomain: "fitness-club-dc189.firebaseapp.com",
  projectId: "fitness-club-dc189",
  storageBucket: "fitness-club-dc189.firebasestorage.app",
  messagingSenderId: "939697977483",
  appId: "1:939697977483:web:44e942e898d879aa4efc8e",
  measurementId: "G-R4H6TTKGWE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);