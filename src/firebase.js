import * as firebase from "firebase";

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-app.js";
const firebaseConfig = {
  apiKey: "AIzaSyCBOOU19tedM_f6xOykfJDfgbQVUU0ZLYA",
  authDomain: "react-native-course-67ad0.firebaseapp.com",
  // databaseURL:
  //   "https://react-native-course-67ad0-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "react-native-course-67ad0",
  storageBucket: "react-native-course-67ad0.appspot.com",
  // messagingSenderId: "919202730935",
  appId: "1:919202730935:web:8a23037f255dac32934e32",
};

// const app = initializeApp(firebaseConfig);
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
