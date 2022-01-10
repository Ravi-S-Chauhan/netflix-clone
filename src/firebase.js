import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyBIXrtgq1j3dVTkMsBMMenWd2G78dwpZLU",
  authDomain: "netflix-clone-c9ac2.firebaseapp.com",
  projectId: "netflix-clone-c9ac2",
  storageBucket: "netflix-clone-c9ac2.appspot.com",
  messagingSenderId: "1008845934328",
  appId: "1:1008845934328:web:fb77004707fd50a32c750d",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };
export default db;
