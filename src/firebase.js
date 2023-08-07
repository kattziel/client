import { initializeApp } from 'firebase/app';

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

const firebaseConfig = {
  apiKey: "AIzaSyCBOOU19tedM_f6xOykfJDfgbQVUU0ZLYA",
  authDomain: "react-native-course-67ad0.firebaseapp.com",
  projectId: "react-native-course-67ad0",
  storageBucket: "react-native-course-67ad0.appspot.com",
  appId: "1:919202730935:web:8a23037f255dac32934e32",
  // messagingSenderId: "919202730935",
  // databaseURL:
  //   "https://react-native-course-67ad0-default-rtdb.europe-west1.firebasedatabase.app",
};

firebase.initializeApp(firebaseConfig);
// const app = initializeApp(firebaseConfig);

 const auth = firebase.auth();
 const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
 export {auth, googleAuthProvider};