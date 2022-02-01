import {showHome} from '../../view/signin.js';
// import {auth} from '../configuraciones.js';
import profile from '../../view/perfil.js';

export const profileUser = (user) => {
  // const usuarioActual = auth.currentUser;

  if (user !== null) {
    const displayName = user.displayName;
    const email = user.email;
    const photoURL = user.photoURL;
    // const emailVerified = user.emailVerified;
    profile(displayName, email, photoURL);
    showHome(user);
    console.log('El correo del usuario es:', email);
  } else {
    console.log('No se pudo iniciar sesión');
  }
  return;
};
