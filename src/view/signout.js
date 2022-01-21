import {signOutUser} from '../firebase/auth/auth_sign_out.js';

const signOut = () => {
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

  divElemt.querySelector('#btnSignOut').addEventListener('click', signOutUser);

  return divElemt;
};

export default signOut;
