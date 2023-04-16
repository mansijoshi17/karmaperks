// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  collection,
  addDoc,
  getFirestore,
  getDocs,
  updateDoc,
  doc,
  deleteDoc,
  query,
  where, 
} from "firebase/firestore";
 import {getStorage} from 'firebase/storage';

const firebaseConfig = {
  apiKey: process.env.REACT_APP_apiKey,
  authDomain: process.env.REACT_APP_authDomain, 
  projectId: process.env.REACT_APP_projectId,
  storageBucket: process.env.REACT_APP_storageBucket,
  messagingSenderId: process.env.REACT_APP_messagingSenderId,
  appId: process.env.REACT_APP_appId,
  measurementId: process.env.REACT_APP_measurementId,
};
 
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);

// for use who apply for campaign
const userApplications = collection(db, "userApplications");

// for create profile
const profiles = collection(db, "userProfiles");

// const storage = getStorage(firebaseApp, "gs://my-custom-bucket");

export { collection, addDoc, getDocs, db, updateDoc, doc, deleteDoc, query, where, storage, userApplications , profiles};