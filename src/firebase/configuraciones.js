import {initializeApp} from 'https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js';
import {getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut, GoogleAuthProvider, signInWithPopup} from 'https://www.gstatic.com/firebasejs/9.6.1/firebase-auth.js';
import {getFirestore, collection, getDocs, addDoc, query, onSnapshot, deleteDoc, doc, getDoc,updateDoc} from 'https://www.gstatic.com/firebasejs/9.6.1/firebase-firestore.js';

const firebaseConfig = {
  apiKey: 'AIzaSyCYMriyYLnj7mjwQ990OLhGaxulpUI6ONE',
  authDomain: 'queerplace-lim16.firebaseapp.com',
  projectId: 'queerplace-lim16',
  storageBucket: 'queerplace-lim16.appspot.com',
  messagingSenderId: '1092619679372',
  appId: '1:1092619679372:web:0b0ca2cc48f7cbf0256da9',
  measurementId: 'G-KEF6M5WVLL',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider(app);
// Init Services
const db = getFirestore(app);// conexión a la base de datos

export const getTastks = () =>getDocs(query(collection(db, 'post'))); //no jala los datos a tiempo real
export const onGetTasks = (callback) =>// jala los datos a tiempo real
  onSnapshot(collection(db, 'post'), callback); 
export const delateTask=async (id)=>await deleteDoc(doc(db, 'post', id));//para borrar
export const getTask=(id)=>getDoc(doc(db, 'post', id));//para editar los post 
export const updateTask=(id, newFields)=>updateDoc(doc(db, 'post', id),newFields)
export {
  app,
  auth,
  provider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  signInWithPopup,
  // updateProfile,
  db,
  collection,
  getDocs,
  addDoc,
  onSnapshot,
};
