import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBUOCz-6vgKjzlIXThkhMoQ92Ptnz_ZMWo",
  authDomain: "ehliyet-926d7.firebaseapp.com",
  projectId: "ehliyet-926d7",
  storageBucket: "ehliyet-926d7.appspot.com",
  messagingSenderId: "354536312148",
  appId: "1:354536312148:web:6a86f9d0d206d09510ccc1",
  measurementId: "G-723FR2DNJE",
};

if (!firebase.apps.length){
    firebase.initializeApp(firebaseConfig)
}

export {firebase}