// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBL3sz_M6etZm9FcAo5ezQ4VuXWMOe-lOc",
  authDomain: "pinter-a7fb9.firebaseapp.com",
  projectId: "pinter-a7fb9",
  storageBucket: "pinter-a7fb9.appspot.com",
  messagingSenderId: "207857525923",
  appId: "1:207857525923:web:2ec24fb3bf4d4961838b16",
  measurementId: "G-QDJK5Y01SV"
};

// Initialize Firebase
 const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export default app;
