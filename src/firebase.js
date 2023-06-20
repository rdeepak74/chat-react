import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB4bTF79mH_BTPg5wZAc7GutvBw9OY7l58",
  authDomain: "chat-user-7cbf3.firebaseapp.com",
  projectId: "chat-user-7cbf3",
  storageBucket: "chat-user-7cbf3.appspot.com",
  messagingSenderId: "1099054887024",
  appId: "1:1099054887024:web:1c65e7f3453bc0d97104b5"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()
