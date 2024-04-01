// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.FIREBASE,
  authDomain: "blog-app-418604.firebaseapp.com",
  projectId: "blog-app-418604",
  storageBucket: "blog-app-418604.appspot.com",
  messagingSenderId: "896564895782",
  appId: "1:896564895782:web:c3a56e5fc5c5901b6f06e7"
};

// Initialize Firebase
 const app = initializeApp(firebaseConfig);

 
export default app;