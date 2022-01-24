const updateUser = () => {
  const UpdateProfile = ` 
  <div class="conteinerGeneral">
    <div class="updateBoX">

      <h2 class="title">Editar perfil</h2>
      <form>
        <div id="formProfile" class="formProfile">
          <div class="formProfileControl">
          <label>Cambiar foto de perfil
          </label>
          <input type="file" id="userPhoto">
          </div>
          <div class="form-control">
           <input type="text" placeholder=" Nombre de usuario">
          </div>
          <div class="form-control">
            <input type="email" placeholder=" Correo Electrónico">
          </div>
          <div class="form-control">
            <input type="text" placeholder=" Númeno de teléfono">
          </div>

          <button id="btnSaveProfile" class="button">Guardar</button>
        </div>
      </form>
    </div>
  </div>`;
  const divElemt = document.createElement('div');
  divElemt.setAttribute('class', 'flexSection');
  divElemt.innerHTML = UpdateProfile;

  //   divElemt.querySelector('#btnSaveProfile')
  //       .addEventListener('click', registerUser);

  return divElemt;
};

export default updateUser;
