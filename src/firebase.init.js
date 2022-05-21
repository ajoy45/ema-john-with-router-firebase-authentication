// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import{getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB2JXhxCLZKLMbyxvuxfc9dwjh9fz2428c",
  authDomain: "ema-jon-e5dfb.firebaseapp.com",
  projectId: "ema-jon-e5dfb",
  storageBucket: "ema-jon-e5dfb.appspot.com",
  messagingSenderId: "276238466389",
  appId: "1:276238466389:web:8e3c5ee8c0eff3658703dc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app);
export default auth;