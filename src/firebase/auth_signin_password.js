import {auth, signInWithEmailAndPassword} from './configuraciones.js';

export const signIn = (email, password) => {
  return signInWithEmailAndPassword(auth, email, password).then(
      (userCredential) => {
        const user = userCredential.user;
        console.log('Inició sesión', {user});
      },
  );
};
