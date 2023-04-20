import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage'

const firebaseConfig = {
  apiKey: "AIzaSyA5TqMxCWndWky4Qpp_Y3MxJRyF6cxNGbc",
  authDomain: "ecommercetest-3dc20.firebaseapp.com",
  projectId: "ecommercetest-3dc20",
  storageBucket: "ecommercetest-3dc20.appspot.com",
  messagingSenderId: "1060393462215",
  appId: "1:1060393462215:web:41d8059e925173298c91e2",
  measurementId: "G-2FTMQVB5R6"
};
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export default firebase;