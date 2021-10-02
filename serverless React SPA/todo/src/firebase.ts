// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "./.env";
import { getFirestore, collection, getDocs, getDoc, addDoc, deleteDoc } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

const firebase = {db, collection, getDocs, getDoc, addDoc, deleteDoc};
export default firebase;