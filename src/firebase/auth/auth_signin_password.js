import {auth, signInWithEmailAndPassword} from '../configuraciones.js';
import {onAuth} from './auth_state_listener.js';
import {showError} from '../../view/signin.js';

export const signIn = (email, password) => {
  return signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user.uid;
        const userC = userCredential.user;
        console.log(userC);
        onAuth(user);
      })
      .catch((error) => {
        showError(error.code);
      });
};
