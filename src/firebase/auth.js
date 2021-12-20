import {
  auth, provider, createUserWithEmailAndPassword,
  signInWithEmailAndPassword, signOut, signInWithPopup,
} from './configuracion.js';

export const createUser = (email, password) => {
  return createUserWithEmailAndPassword(auth, email, password);
};

export const signIn = (email, password) => {
  return signInWithEmailAndPassword(auth, email, password);
};
export const signOutUser = () => {
  return signOut(auth);
};
export const googleAuth = () => {
  return signInWithPopup(auth, provider);
};
