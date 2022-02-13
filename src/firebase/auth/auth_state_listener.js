import {auth, onAuthStateChanged} from '../configuraciones.js';
// import {profileUser} from './auth_get_user_profile.js';
import {backSignIn} from '../../view/signup.js';
import {currentUser} from '../../view/timeline.js';
import {showHome} from '../../view/signin.js';
import nav from '../../view/nav.js';
import {profile} from '../../view/perfil.js';

export const onAuth = () => {
  return onAuthStateChanged(auth, (user) => {
    if (user !== null) {
      const uid = user.uid;
      const name = user.displayName;
      const photo = user.photoURL;
      // const emailVerified = user.emailVerified;
      currentUser(uid, name, photo);
      showHome(user);
      nav(user);
      profile(user);
    } else {
      console.log('El usuario se desconecto');
      backSignIn();
    }
  });
};
