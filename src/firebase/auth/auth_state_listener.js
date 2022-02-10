import {auth, onAuthStateChanged} from '../configuraciones.js';
// import {profileUser} from './auth_get_user_profile.js';
import {backSignIn} from '../../view/signup.js';
import {currentUser, timeline} from '../../view/timeline.js';
import {showHome} from '../../view/signin.js';
import nav from '../../view/nav.js';

export const onAuth = () => {
  return onAuthStateChanged(auth, (user) => {
    if (user !== null) {
      const uidUser = user.uid;
      // const name = user.displayName;
      const email = user.email;
      // const photoURL = user.photoURL;
      // // const emailVerified = user.emailVerified;
      currentUser(uidUser, email);
      showHome(currentUser);
      timeline();
      nav(uidUser);
    } else {
      console.log('El usuario se desconecto');
      backSignIn();
    }
  });
};
