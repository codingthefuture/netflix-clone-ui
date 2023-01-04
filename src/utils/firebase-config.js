import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
// Import the functions you need from the SDKs you need
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyANCsVe6ohW_bEAPnPhDnoR6yI_6cF3yJc",
  authDomain: "react-netflix-clone-ed881.firebaseapp.com",
  projectId: "react-netflix-clone-ed881",
  storageBucket: "react-netflix-clone-ed881.appspot.com",
  messagingSenderId: "1069282385928",
  appId: "1:1069282385928:web:0a42bd05d3f4199d78b1bd",
  measurementId: "G-HDWR2TMKCR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export const firebaseAuth = getAuth(app);