import updateUser from './updateUser.js';

const update= () => {
  window.location.hash = '#/update';
  updateUser;
};


export const profile = (name, email, photo) => {
  const showProfile = ` 
  <div>
    <h2> Perfil</h2>
  </div>
  <div>
    <button id="btnEditProfile" class="button">Editar perfil</button>
  </div>
  <div>
    <p>${name}</p>
    <p>${email}</p>
    <p>${photo}</p>
  </div>`;
  const divElemt = document.createElement('div');
  divElemt.setAttribute('class', 'flexSection');
  divElemt.innerHTML = showProfile;

  divElemt
      .querySelector('#btnEditProfile')
      .addEventListener('click', update);

  return divElemt;
};

export default profile;
