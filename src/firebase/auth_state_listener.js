import {auth, onAuthStateChanged} from './configuraciones.js';

export const onAuth = () => {
  return onAuthStateChanged(auth, (user) => {
    if (user) {
      const uid = user.uid;
      console.log(uid);
    } else {
      // User is signed out
      // const uid = null;
      console.log('El usuario no existe');
    }
  });
};
