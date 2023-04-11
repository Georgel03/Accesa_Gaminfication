
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyCjjJ96rTDE9DBo5gXuzVHXtJMyis-uMwM",
  authDomain: "gamification-6e5cf.firebaseapp.com",
  projectId: "gamification-6e5cf",
  storageBucket: "gamification-6e5cf.appspot.com",
  messagingSenderId: "55626621974",
  appId: "1:55626621974:web:6be1f5d4082944f82bc137"
};


export const app = initializeApp(firebaseConfig);
export const database = getFirestore(app)