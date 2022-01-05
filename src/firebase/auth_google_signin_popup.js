import {auth, provider, signInWithPopup} from './configuraciones.js';

export const googleAuth = () => {
  return signInWithPopup(auth, provider).then((result) => {
    console.log(result);
  }); /* .catch((error) => {
console.log(error);
});  */
};
