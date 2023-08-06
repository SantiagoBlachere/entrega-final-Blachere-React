
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"


const firebaseConfig = {
  apiKey: "AIzaSyAh8c3FaYhrcDgLvlfJhHqyiRsQGlr0LVI",
  authDomain: "gotria-library---react.firebaseapp.com",
  projectId: "gotria-library---react",
  storageBucket: "gotria-library---react.appspot.com",
  messagingSenderId: "335351021790",
  appId: "1:335351021790:web:9c3c751053f53c4a67c24f"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)


