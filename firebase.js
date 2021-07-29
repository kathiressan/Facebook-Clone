import firebase from "firebase";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyA5eeT7yTe0fSXhM5McfhivbZUspDMbcuw",
  authDomain: "facebook-clone-32085.firebaseapp.com",
  projectId: "facebook-clone-32085",
  storageBucket: "facebook-clone-32085.appspot.com",
  messagingSenderId: "525691679623",
  appId: "1:525691679623:web:d1b65d4363fd91a3fe9922",
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();
const storage = firebase.storage();

export { db, storage };
