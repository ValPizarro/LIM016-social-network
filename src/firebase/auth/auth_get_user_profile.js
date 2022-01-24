import {showHome} from '../../view/signin.js';
import {auth} from '../configuraciones.js';

export const profileUser = (user) => {
  const currentUser = auth.currentUser;

  if (user !== null) {
    // const displayName = user.displayName;
    const email = user.email;
    // const photoURL = user.photoURL;
    // const emailVerified = user.emailVerified;
    showHome(currentUser);
    console.log('El correo del usuario es:', email);
  } else {
    console.log('No se pudo iniciar sesión');
  }
  return currentUser;
};
