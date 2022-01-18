// import {auth} from './configuraciones.js';

export const profileUser = (user) => {
  // const currentUser = auth.currentUser;

  if (user !== null) {
    // const displayName = user.displayName;
    const email = user.email;
    // const photoURL = user.photoURL;
    // const emailVerified = user.emailVerified;
    console.log('El correo del usuario es:', email);
  }
  return console.log('El usuario puede continuar');
};
