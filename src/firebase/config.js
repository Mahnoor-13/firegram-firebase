import * as firebase from "firebase/app";
import "firebase/storage";
import "firebase/firestore";

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyDOkbVNCMQuozcpmFKkn3MOJ8qDWJf1htk",
  authDomain: "firegram-1f5e5.firebaseapp.com",
  databaseURL: "https://firegram-1f5e5.firebaseio.com",
  projectId: "firegram-1f5e5",
  storageBucket: "firegram-1f5e5.appspot.com",
  messagingSenderId: "743218020342",
  appId: "1:743218020342:web:2d133cdc2c5cfdb6a9d1d7",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;
export { projectStorage, projectFirestore, timestamp };
