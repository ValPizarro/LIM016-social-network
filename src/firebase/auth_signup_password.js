import {auth, createUserWithEmailAndPassword} from './configuraciones.js';

export const createUser = (email, password) => {
  return createUserWithEmailAndPassword(auth, email, password).then(
      (userCredential) => {
        const user = userCredential.user;
        // console.log('usario creado', {userCredential});
        console.log('usario creado', {user});
        console.log(userCredential.user);
      },
  );
};
