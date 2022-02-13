// import {onAuth} from './auth_state_listener.js';
import {
  auth, createUserWithEmailAndPassword,
  sendEmailVerification,
} from '../configuraciones.js';
import {showErrorRegister} from '../../view/signup.js';
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
        showErrorRegister(errorCode);
      });
};

export const userVerification = () => {
  return sendEmailVerification(auth.currentUser);
};
