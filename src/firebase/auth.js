import {
  auth, provider, createUserWithEmailAndPassword,
  signInWithEmailAndPassword, onAuthStateChanged, signOut, signInWithPopup,
} from './configuraciones.js';

export const createUser = (email, password) => {
  return createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        // console.log('usario creado', {userCredential});
        console.log('usario creado', {user});
        console.log(userCredential.user);
      });
};

export const signIn = (email, password) => {
  return signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log('Inició sesión', {user});
      });
};

export const onUser = (user) => {
  return onAuthStateChanged(auth, user);
  // return onAuthStateChanged(auth, (user) => {
  //   if (user) {
  //     const uid = user.uid;
  //   } else {
  //   // User is signed out
  //     const uid = null;
  //   }
  // });
};

export const signOutUser = () => {
  return signOut(auth);
};

export const googleAuth = () => {
  return signInWithPopup(auth, provider).then((result) => {
    console.log(result);
  }); /* .catch((error) => {
console.log(error);
});  */
};
