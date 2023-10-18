import firebase from "firebase/compat/app";
import "firebase/compat/auth"
import "firebase/compat/firestore"
import "firebase/compat/storage"

const firebaseConfig = {
    apiKey: "AIzaSyC5hVc-FyRvk1XMy6ZljrXUjsKNXb7hIHU",
    authDomain: "file-manager-test-24587.firebaseapp.com",
    projectId: "file-manager-test-24587",
    storageBucket: "file-manager-test-24587.appspot.com",
    messagingSenderId: "579825001758",
    appId: "1:579825001758:web:9079f189a73f3da57d950f",
};

const fire = firebase.initializeApp(firebaseConfig);
export default fire



