import {onAuth} from './auth_state_listener.js';
import {auth, createUserWithEmailAndPassword} from '../configuraciones.js';
import {showError} from '../../view/signin.js';

export const createUser = (email, password) => {
  return createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        const uid = userCredential.user.uid;
        const correo = userCredential.user.email;
        const correoVerificado = userCredential.user.emailVerified;
        onAuth();
        console.log(user, correo, uid, correoVerificado);
      })
      .catch((error) => {
        const errorCode = error.code;
        // const errorMessage = error.message;
        // console.log('Error', errorCode);
        showError(errorCode);
      });
};
