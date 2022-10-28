import firebase from 'firebase/compat/app';
import 'firebase/compat/storage';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyB2J9R6z1KaDEgbNf287Z9iu3a501rJ6xE",
    authDomain: "photogal-78b96.firebaseapp.com",
    projectId: "photogal-78b96",
    storageBucket: "photogal-78b96.appspot.com",
    messagingSenderId: "363039605017",
    appId: "1:363039605017:web:68436e2b77a10c3df30588"
  };
  
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };

