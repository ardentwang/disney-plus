import firebase from "firebase/compat/app";

const firebaseConfig = {
  apiKey: "AIzaSyAbNUPeNmoPYUVTztg7TpIDOuNEu1jQTvA",
  authDomain: "disney-plus-atwang.firebaseapp.com",
  projectId: "disney-plus-atwang",
  storageBucket: "disney-plus-atwang.appspot.com",
  messagingSenderId: "1095811440272",
  appId: "1:1095811440272:web:bcc5c29903b5c941050215",
  measurementId: "G-EWJPM2HH4Y"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;