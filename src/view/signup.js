import {createUser} from '../firebase/auth_signup_password.js';
import {googleAuth} from '../firebase/auth_google_signin_popup.js';

export const registerUserNew = (e) => {
  e.preventDefault();

  const email = e.target.closest('form').querySelector('#email').value;
  const password = e.target.closest('form').querySelector('#password').value;

  const user = createUser(email, password);

  console.log('Usuario creado:', user);
};

const backSignIn = () => {
  window.location.hash = '#/signIn';
};

const SignUp = () => {
  const showSignUp = `
    <div class="flexBox">
      <div class="recordTitle">
        <h1>Queer Place</h1>
      </div>

      <form>

        <div id="formResgister" class="formResgister">
          <button id="btnStartGoogle" 
          class="button">Iniciar sesión con Google </button>
          <input id="email" type="email" placeholder="  Correo electrónico">
          <input type="text" placeholder="  Nombre completo">
          <input type="text" placeholder="  Nombre de usuario">
          <input id="password" type="text" placeholder="  contraseña">
          <button  id="btnCheckIn" class="button">Registrarte</button>
        </div>

      </form>

      <div class="backLogIn">
        <p>¿Tienes una cuenta? <a id="SignIn">Entrar</a></p>
      </div>

      <div class="imgBox">
        <img class="imgRegister" src="./img/CB2.png" alt="">
      </div>
    </div>
  `;

  const divElemt = document.createElement('div');
  divElemt.setAttribute('class', 'flexSection register');
  divElemt.innerHTML = showSignUp;

  divElemt
      .querySelector('#btnCheckIn').addEventListener('click', registerUserNew);
  divElemt
      .querySelector('#btnStartGoogle').addEventListener('click', googleAuth);
  divElemt.querySelector('#SignIn').addEventListener('click', backSignIn);

  return divElemt;
};

export default SignUp;
