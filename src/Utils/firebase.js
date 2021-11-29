

import { initializeApp } from 'firebase/app';
import {getAuth} from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyAEjewLwvqF_NnEh4shiSvda0d-_DVuhvY",
    authDomain: "tadpoles-7a00c.firebaseapp.com",
    projectId: "tadpoles-7a00c",
    storageBucket: "tadpoles-7a00c.appspot.com",
    messagingSenderId: "723499820447",
    appId: "1:723499820447:web:2c97c1d135a1b8d77709aa"
};

const app = initializeApp(firebaseConfig);


export const auth = getAuth(app)

/*import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';


import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';

export const app =firebase.initializeApp({
    apiKey: "AIzaSyAEjewLwvqF_NnEh4shiSvda0d-_DVuhvY",
    authDomain: "tadpoles-7a00c.firebaseapp.com",
    projectId: "tadpoles-7a00c",
    storageBucket: "tadpoles-7a00c.appspot.com",
    messagingSenderId: "723499820447",
    appId: "1:723499820447:web:2c97c1d135a1b8d77709aa"
})

export const auth = firebase.auth();
export const firestore = firebase.firestore();

*/
