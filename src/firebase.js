import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCtdmZ_sUocrYoWNetsA3PF_FYUzXirLAg",
    authDomain: "todo-app-ad9dd.firebaseapp.com",
    databaseURL: "https://todo-app-ad9dd.firebaseio.com",
    projectId: "todo-app-ad9dd",
    storageBucket: "todo-app-ad9dd.appspot.com",
    messagingSenderId: "1008204405228",
    appId: "1:1008204405228:web:ee96752ab373c56293c8c9",
    measurementId: "G-QTS2T3SJ50"
});

const db = firebaseApp.firestore();
export default db;