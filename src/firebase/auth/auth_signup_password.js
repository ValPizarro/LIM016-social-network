// import {onAuth} from './auth_state_listener.js';
import {
  auth, createUserWithEmailAndPassword,
  sendEmailVerification,
} from '../configuraciones.js';
import {showError} from '../../view/signin.js';
import {backSignIn} from '../../view/signup.js';


export const createUser = (email, password) => {
  return createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
        userVerification()
            .then(() => {
              alert('Correo de verificación enviado');
              backSignIn();
            });
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error(errorMessage);
        showError(errorCode);
      });
};

export const userVerification = () => {
  return sendEmailVerification(auth.currentUser);
};
