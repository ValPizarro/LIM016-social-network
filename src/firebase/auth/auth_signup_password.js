import {onAuth} from './auth_state_listener.js';
import {
  auth, createUserWithEmailAndPassword,
  sendEmailVerification,
} from '../configuraciones.js';
import {showError} from '../../view/signin.js';

export const createUser = (email, password) => {
  return createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
        userVerification();
        onAuth();
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log('Error', errorMessage);
        showError(errorCode);
      });
};

export const userVerification = () => {
  return sendEmailVerification(auth.currentUser)
      .them(() => {
        backSignIn();
      });
};
