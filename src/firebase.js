// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCLbqh9KdL_kQbjW6MuvFWghtNZq9vW3Dg",
  authDomain: "reactauthx.firebaseapp.com",
  projectId: "reactauthx",
  storageBucket: "reactauthx.appspot.com",
  messagingSenderId: "985874815819",
  appId: "1:985874815819:web:684612fb24b42a928966ce",
  measurementId: "G-JTH2HMSN0Y",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export default app;