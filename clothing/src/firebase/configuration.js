// Firebase App (the core Firebase SDK) is always required and
// must be listed before other Firebase SDKs
import * as firebase from "firebase/app";

// Add the Firebase services that you want to use
import "firebase/auth";
import "firebase/firestore";

var firebaseConfig = {
    apiKey: "AIzaSyD6RoKNuSB5D_ZIIbR0WnAgHWYjeE4wgMg",
    authDomain: "e-commerce-a1671.firebaseapp.com",
    databaseURL: "https://e-commerce-a1671.firebaseio.com",
    projectId: "e-commerce-a1671",
    storageBucket: "e-commerce-a1671.appspot.com",
    messagingSenderId: "942607823676",
    appId: "1:942607823676:web:668d384d62cb2412182439",
    measurementId: "G-ZK123CD3HB"
  };
  firebase.initializeApp(firebaseConfig);

  var provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({prompt : 'select_account'})
export const google = ()=> firebase.auth().signInWithPopup(provider);
  export default firebase;