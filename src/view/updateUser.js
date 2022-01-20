const UpdateUser = () => {
  const UpdateProfile = ` 
  <div>
    <h2>Editar perfil</h2>
  </div>

  <div id="formProfile" class="formProfile">

    <label>Cambiar foto de perfil</label><input type="file" id="userPhoto">
    <input type="text" placeholder=" Nombre de usuario">
    <input type="email" placeholder=" Correo Electrónico">
    <input type="number" placeholder=" Númeno de teléfono">

    <button id="btnSaveProfile" class="button">Guardar</button>
  </div>`;
  const divElemt = document.createElement('div');
  divElemt.setAttribute('class', 'flexSection');
  divElemt.innerHTML = UpdateProfile;

  divElemt.querySelector('#btnSaveProfile')
      .addEventListener('click', registerUser);

  return divElemt;
};

export default UpdateUser;
