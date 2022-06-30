import firebase from "firebase/app";
import 'firebase/firestore';



const firebaseConfig = {
    apiKey: "AIzaSyA2z7Vm4JHkWr_Gi6EvMi6LxvRjQZ41bFE",
    authDomain: "tasarim-uzmani.firebaseapp.com",
    databaseURL: "https://tasarim-uzmani-default-rtdb.firebaseio.com",
    projectId: "tasarim-uzmani",
    storageBucket: "tasarim-uzmani.appspot.com",
    messagingSenderId: "727939928486",
    appId: "1:727939928486:web:cee479a1be0c8c8bc7bf67",
    measurementId: "G-WWJ8LRWCL9"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)
const timestamp = firebase.firestore.FieldValue.serverTimestamp



export default firebaseApp.firestore();