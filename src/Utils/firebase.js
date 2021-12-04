import {initializeApp} from 'firebase/app';
import {getAuth} from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAEjewLwvqF_NnEh4shiSvda0d-_DVuhvY",
    authDomain: "tadpoles-7a00c.firebaseapp.com",
    projectId: "tadpoles-7a00c",
    storageBucket: "tadpoles-7a00c.appspot.com",
    messagingSenderId: "723499820447",
    appId: "1:723499820447:web:2c97c1d135a1b8d77709aa"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore();
export const auth = getAuth(app);

