const SingUp = () => {
  window.location.hash = '#/home';
};

const log = () => {
  window.location.hash = '#/signIn';
};

const LogIn = () => {
  const showLogIn = `
    <div class="flexBox">
      <div class="SingUpBox">
        <p>¡BIENVENIDX!</p>
        <div id="formLogIn" class="formLogIn">
          <input id="logEmail" type="email" placeholder="correo electrónico">
          <input id="logPassword" type="text" placeholder="contraseña">

          <button id="btnSignUp" class="button">Inicia sesión</button>
          <button id="btnLog" class="button">Crear cuenta nueva</button>

        </div>

        <a href="#">iniciar sesión con google</a>

      </div>
      <div class="imgbox">
        <img src="./img/CB2.png" alt="img Welcome">
      </div>

    </div>
  `;
  const divElemt = document.createElement('div');
  divElemt.setAttribute('class', 'flexSection register');
  divElemt.innerHTML = showLogIn;

  divElemt.querySelector('#btnSignUp').addEventListener('click', SingUp);
  divElemt.querySelector('#btnLog').addEventListener('click', log);

  return divElemt;
};

export default LogIn;
