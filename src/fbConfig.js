// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
import firebase from "firebase/compat/app";

const firebaseConfig = {
  apiKey: "AIzaSyDh2TSCcctHwUu-U_wEMOvmXjUh_2Dprjs",
  authDomain: "veggie-ecommerce.firebaseapp.com",
  projectId: "veggie-ecommerce",
  storageBucket: "veggie-ecommerce.appspot.com",
  messagingSenderId: "944946160495",
  appId: "1:944946160495:web:cc7f1bab5f8f3f48827e9a",
};

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
firebase.initializeApp(firebaseConfig);

// const db = getFirestore(app);
export default firebase;
