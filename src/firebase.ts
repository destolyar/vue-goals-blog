import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAnalytics } from "firebase/analytics";

export const firebaseApp = initializeApp({
  apiKey: "AIzaSyAJCZnLQixhYykGIf5IoiK9g5iqzXaHjo0",
  authDomain: "goals-blog.firebaseapp.com",
  projectId: "goals-blog",
  storageBucket: "goals-blog.appspot.com",
  messagingSenderId: "250030626410",
  appId: "1:250030626410:web:dfc1b3f3861fae3cfe5c13",
  measurementId: "G-ZBL5479MDV"
})

// !firebase.apps.length ? firebase.initializeApp(config) : firebase.app();

export const db = getFirestore(firebaseApp)
export const analytics = getAnalytics(firebaseApp);