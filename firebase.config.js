// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
import {getStorage} from 'firebase/storage'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDiW0NUcKKs8ZzIWh7ONHLsfY_QHJ-I-CM",
  authDomain: "ecoscape-395211.firebaseapp.com",
  projectId: "ecoscape-395211",
  storageBucket: "ecoscape-395211.appspot.com",
  messagingSenderId: "151104846693",
  appId: "1:151104846693:web:4364cc856fcd61624cbf8c"
};

// Initialize Firebase
const app =getApps.length > 0 ? getApp(): initializeApp(firebaseConfig);

const db = getFirestore(app);

const storage = getStorage(app);

export {app,db,storage}