import * firebase from 'firebase'

var firebaseConfig = {
    apiKey: "AIzaSyB8Pb8f84YoktAq2DpAFLNzfoBWxZFoApk",
    authDomain: "willy-app-171a3.firebaseapp.com",
    projectId: "willy-app-171a3",
    storageBucket: "willy-app-171a3.appspot.com",
    messagingSenderId: "989236965589",
    appId: "1:989236965589:web:3c88e7edb77ddbdb39725c"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
export default firebase.firestore()