// import {backSignIn} from './signup.js';

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

  divElemt.querySelector('#btnSignOut')
      .addEventListener('click', console.log('cerró sesión'));

  //   divElemt
  //       .querySelector('#btnSignOut')
  //       .addEventListener('click', backSignIn());

  return divElemt;
};

export default signOut;
