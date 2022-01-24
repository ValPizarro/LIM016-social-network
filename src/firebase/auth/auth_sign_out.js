import {auth, signOut} from '../configuraciones.js';

export const signOutUser = () => {
  return signOut(auth)
      .then(() => {
        window.location.hash = '#/signIn';
        ;
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log('Error', errorMessage, errorCode);
      });
};
