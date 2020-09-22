import firebase from "firebase";
import 'firebase/firestore'
import 'firebase/auth'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyASS2FK8PjenK8mP6HqBehCXE6c-OvywiY",
    authDomain: "clone-4bc2f.firebaseapp.com",
    databaseURL: "https://clone-4bc2f.firebaseio.com",
    projectId: "clone-4bc2f",
    storageBucket: "clone-4bc2f.appspot.com",
    messagingSenderId: "289710789065",
    appId: "1:289710789065:web:8c8af7cb9496629ea89818",
    measurementId: "G-X2EW6MYTF2"
};

// initialize the app
const firebaseApp = firebase.initializeApp(firebaseConfig);

// initialize the database
const db = firebaseApp.firestore(); //firestore is the real time database in firebase

// initialize the authentication

const auth = firebase.auth(); // this actually gives us a variable that we can use to handle all the signing in  and everything like that.

export default firebase;