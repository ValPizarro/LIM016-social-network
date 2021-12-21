import {
  auth, provider, createUserWithEmailAndPassword,
  signInWithEmailAndPassword, signOut, signInWithPopup,
} from './configuraciones.js';

export const createUser = (email, password) => {
  return createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        // console.log('usario creado', {userCredential});
        console.log('usario creado', {user});
      });
};

export const signIn = (email, password) => {
  return signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log('Inició sesión', {user});
      });
};

export const signOutUser = () => {
  return signOut(auth);
};
export const googleAuth = () => {
  return signInWithPopup(auth, provider);
};
