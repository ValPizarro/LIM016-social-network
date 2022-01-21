import {auth, signOut} from '../configuraciones.js';

export const signOutUser = () => {
  return signOut(auth);
};
