import firebase from 'firebase/compat/app';
import 'firebase/compat/storage';
import 'firebase/compat/firestore';
const firebaseConfig = {
    apiKey: "AIzaSyB-RZyect2zX8p8-4ei5Qwd0Uavia1RfOk",
    authDomain: "gallery-ac977.firebaseapp.com",
    projectId: "gallery-ac977",
    storageBucket: "gallery-ac977.appspot.com",
    messagingSenderId: "17511185180",
    appId: "1:17511185180:web:e67e1a76b20fb8f7b498d9"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp }