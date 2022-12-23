import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyDO4khyh_7QxSbujcrOHR3_LsZLgCWSkLM",
    authDomain: "texnoma-a60c9.firebaseapp.com",
    projectId: "texnoma-a60c9",
    storageBucket: "texnoma-a60c9.appspot.com",
    messagingSenderId: "484908428492",
    appId: "1:484908428492:web:d6a3d49af547af1de0e669",
    measurementId: "G-MW32TTVSZG"
};

firebase.initializeApp(firebaseConfig)

const db = firebase.firestore()

const auth = firebase.auth()

const storage = firebase.storage()

const collectionTodos = db.collection("todos")

export {
    db,
    auth,
    storage,
    collectionTodos
}
