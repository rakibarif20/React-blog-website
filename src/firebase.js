// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDG-hZOqsstrog3MxV3BG5UknDDFIp0yuE",
  authDomain: "blog-site-6bef6.firebaseapp.com",
  projectId: "blog-site-6bef6",
  storageBucket: "blog-site-6bef6.appspot.com",
  messagingSenderId: "405634550893",
  appId: "1:405634550893:web:0e5c5c5595102f8167c364",
  measurementId: "G-KZDZJZ1CM3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const db = getFirestore(app)

export {db}