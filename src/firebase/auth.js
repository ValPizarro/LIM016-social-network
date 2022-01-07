import {
  auth,
  onAuthStateChanged} from './configuraciones.js';

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

