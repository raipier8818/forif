import { initializeApp } from "firebase/app";
import { getFirestore, doc, collection, getDocs, getDoc, addDoc, deleteDoc } from "firebase/firestore";
// import { firebaseConfig } from './.env';

export const firebaseConfig = {
    apiKey: process.env.REACT_APP_API_KEY,
  
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  
    projectId: process.env.REACT_APP_PROJECT_ID,
  
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  
    messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  
    appId: process.env.REACT_APP_APP_ID,
};

// firebaseConfig 정보로 firebase 시작
const app =initializeApp(firebaseConfig);

// firebase의 firestore 인스턴스를 변수에 저장
const db = getFirestore(app);

// 필요한 곳에서 사용할 수 있도록 내보내기
const firebase = { db, collection, doc, getDocs, getDoc, addDoc, deleteDoc };
export default firebase;