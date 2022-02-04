import {showHome} from '../../view/signin.js';
// import {auth} from '../configuraciones.js';
// import profile from '../../view/perfil.js';

export const profileUser = (user) => {
  if (user !== null) {
    // const name = user.displayName;
    // const email = user.email;
    // // const photoURL = user.photoURL;
    // const uid = user.uid;
    // const emailVerified = user.emailVerified;

    showHome(user);
    // profile(displayName, email, uid);
    // saveProfile(uid, name, nickname, email);
  } else {
    console.log('No se pudo iniciar sesión');
  }
  return;
};
