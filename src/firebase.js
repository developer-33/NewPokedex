import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getMessaging } from "firebase/messaging";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyBf5zuGzoWhovs61jd70WxLURo2a457KDY",
    authDomain: "projectpokemon-c7f6b.firebaseapp.com",
    databaseURL: "https://projectpokemon-c7f6b-default-rtdb.firebaseio.com",
    projectId: "projectpokemon-c7f6b",
    storageBucket: "projectpokemon-c7f6b.appspot.com",
    messagingSenderId: "690820132205",
    appId: "1:690820132205:web:0995e67467da3ccf55be64",
    measurementId: "G-S2HNKJ7YED"
  };
  
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { auth, db, storage, GoogleAuthProvider, signInWithPopup, getMessaging };

