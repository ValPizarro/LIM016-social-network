import {onAuth} from './auth_state_listener.js';
import {auth, createUserWithEmailAndPassword} from '../configuraciones.js';
import {showError} from '../../view/signin.js';

export const createUser = (email, password) => {
  return createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        onAuth(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        // const errorMessage = error.message;
        // console.log('Error', errorCode);
        showError(errorCode);
      });
};
