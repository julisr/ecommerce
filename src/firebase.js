import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDEwofiYFzeDtW0c3yxN4omQYttSsQA9ME",
  authDomain: "primerproyecto-10916.firebaseapp.com",
  projectId: "primerproyecto-10916",
  storageBucket: "primerproyecto-10916.firebasestorage.app",
  messagingSenderId: "204625738742",
  appId: "1:204625738742:web:9128623741d2178f4f65d7"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);