import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyAoDv5vcTkEE62YkITa1sQUJ_q6hyK3zug",
  authDomain: "shopeasy-f1540.firebaseapp.com",
  projectId: "shopeasy-f1540",
  storageBucket: "shopeasy-f1540.appspot.com",
  messagingSenderId: "966681484710",
  appId: "1:966681484710:web:fcee4ae58faf8c20760367"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };