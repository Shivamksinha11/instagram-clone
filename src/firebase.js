// For Firebase JS SDK v7.20.0 and later, measurementId is optional

import firebase from "firebase";
    const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyAO7iU07f2eJWys1T4VfUGGbn9HpnhrmXI",
    authDomain: "instagram-clone-react-caec7.firebaseapp.com",
    projectId: "instagram-clone-react-caec7",
    storageBucket: "instagram-clone-react-caec7.appspot.com",
    messagingSenderId: "127585946593",
    appId: "1:127585946593:web:117c2f255917034b0d60a0",
    measurementId: "G-G857ZXXRVK"
});
const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };
//export default db;