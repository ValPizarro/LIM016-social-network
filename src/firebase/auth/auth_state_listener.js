import {auth, onAuthStateChanged} from '../configuraciones.js';
import {profileUser} from './auth_get_user_profile.js';
import {backSignIn} from '../../view/signup.js';
import {currentUser} from '../../view/timeline.js';


export const onAuth = () => {
  return onAuthStateChanged(auth, (user) => {
    if (user) {
      const uidUser = user.uid;
      profileUser(currentUser);
      currentUser(uidUser);
    } else {
      console.log('El usuario se desconecto');
      backSignIn();
    }
  });
};
