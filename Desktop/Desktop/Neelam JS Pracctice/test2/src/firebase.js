// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
export const firebaseConfig = {
  apiKey: "AIzaSyAYENIVnhavfvW0iYSLwp2m-XKdr37ERHw",
  authDomain: "edunova-erp-c020f.firebaseapp.com",
  databaseURL: "https://edunova-erp-c020f-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "edunova-erp-c020f",
  storageBucket: "edunova-erp-c020f.firebasestorage.app",
  messagingSenderId: "840046113701",
  appId: "1:840046113701:web:cf92df5e0f9afb9e6e2e4c",
  measurementId: "G-JM5F0EMDZ1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);