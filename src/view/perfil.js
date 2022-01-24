import updateUser from './updateUser.js';

const update= () => {
  window.location.hash = '#/update';
  updateUser;
};

export const post = (usuario) => {
  console.log(usuario);

  /**
   * @param{ID} IDPost
   */
  async function searchOrCreatePosts(IDPost) {
    // crea una referencia al documento
    // Revisa si existe
    // Si Si existe
    // Si no existe
  }
}; post();

const profile = (name, email, photo) => {
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
