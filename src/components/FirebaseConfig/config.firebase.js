// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCs_Gj-wv-EylEo4NNQui-KynqCku29__g",
  authDomain: "connecthub-ac04f.firebaseapp.com",
  projectId: "connecthub-ac04f",
  storageBucket: "connecthub-ac04f.appspot.com",
  messagingSenderId: "297763150760",
  appId: "1:297763150760:web:77d42b9c80f4fba4dbdb9d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const Auth = getAuth(app)