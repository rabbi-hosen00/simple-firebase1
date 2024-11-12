// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCtrg2fRRFowujgsagz3BUJfl5hU3sgRxw",
    authDomain: "simple-firebase2-4c03e.firebaseapp.com",
    projectId: "simple-firebase2-4c03e",
    storageBucket: "simple-firebase2-4c03e.firebasestorage.app",
    messagingSenderId: "140923854083",
    appId: "1:140923854083:web:bee2d07cef8e72c93b1d36"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
export default auth;
