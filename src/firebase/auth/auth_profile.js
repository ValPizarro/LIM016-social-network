import {auth, updateProfile} from '../configuraciones.js';

export const updateUser = (name) => {
  return updateProfile(auth.currentUser, {
    displayName: name,
  }).then(() => {
    // se actualizó
  }).catch((error) => {
    console.log(error.code);
  });
};
