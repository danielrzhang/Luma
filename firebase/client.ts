import { initializeApp, getApp, getApps } from "firebase/app";
import {getAuth} from "firebase/auth"
import {getFirestore} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyCTflBTxubjo_iKXF3oVQJ8-4qZVBnQ4ig",
  authDomain: "luma-31aad.firebaseapp.com",
  projectId: "luma-31aad",
  storageBucket: "luma-31aad.firebasestorage.app",
  messagingSenderId: "508180068402",
  appId: "1:508180068402:web:6ab987bbae4b477e9ca42b",
  measurementId: "G-02WKX2HF3Z"
};

const app = !getApps.length ? initializeApp(firebaseConfig) : getApp()

export const auth = getAuth(app)
export const db = getFirestore(app)