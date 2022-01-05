import {auth, provider, signInWithPopup} from './configuraciones.js';

export const googleAuth = () => {
  return signInWithPopup(auth, provider)
      .then((result) => {
        console.log('Nombre:', result.user.displayName);
        console.log('Email:', result.user.email);
        mailVerificado('Verfica2:', result.user.emailVerified);
      })
      .catch((error) => {
        console.log(error.code);
        manejarErrores(error.code);
      });
};

const manejarErrores = (errorCode) => {
  if (errorCode === 'auth/popup-closed-by-user') {
    console.log('El usuario cerró la ventana');
  }
};

const mailVerificado = (verificado) => {
  if (verificado) {
    console.log('si esta verficado');
  } else {
    // funcion que manda mail verificacion
  }
};
