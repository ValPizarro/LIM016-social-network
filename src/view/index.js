import Welcome from './welcome.js';
import SignIn from './signin.js';
import SignUp from './signup.js';
import Profile from './perfil.js';
import Different from './404.js';
import UpdateUser from './updateUser.js';
import Nav from './nav.js';

const components = {
  welcome: Welcome,
  signIn: SignIn,
  signUp: SignUp,
  nav: Nav,
  profile: Profile,
  update: UpdateUser,
  different: Different,
};

export {components};
