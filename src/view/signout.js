import {signOutUser} from '../firebase/auth/auth_sign_out.js';
// import {auth} from '../firebase/configuraciones.js';
// import {signOut} from '../firebase/configuraciones.js';

const signOutPage = () => {
  const showSignOut = ` 
  <div>
    <h2>Cerrar Sesión</h2>
  </div>

 <div>
    <button id="btnSignOut" class="button">Cerrar sesión</button>
  </div>`;
  const divElemt = document.createElement('div');
  divElemt.setAttribute('class', 'flexSection');
  divElemt.innerHTML = showSignOut;

  divElemt.querySelector('#btnSignOut')
      .addEventListener('click', signOutUser);
  // divElemt.querySelector('#btnSignOut')
  //     .addEventListener('click', signOut(auth));

  return divElemt;
};

export default signOutPage;
