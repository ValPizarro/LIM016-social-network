import {googleAuth} from '../firebase/auth_google_signin_popup.js';
import {signIn} from '../firebase/auth_signin_password.js';
import {onAuth} from '../firebase/auth_state_listener.js';

export const registerUser = (e) => {
  // window.location.hash = '#/home';

  const email = e.target.closest('form').querySelector('#email').value;
  const password = e.target.closest('form').querySelector('#password').value;

  const user = signIn(email, password);

  onAuth(user);
};

const SignUp = () => {
  window.location.hash = '#/signUp';
};

const SignIn = () => {
  const showSignIn = `
    <div class="flexBox">
      <div class="SignUpBox">
        <h1>¡BIENVENIDX!</h1>
        <form>
        <div id="formLogIn" class="formLogIn">
          <input id="email" type="email" placeholder=" correo electrónico">
          <input id="password" type="text" placeholder=" contraseña">

          <button id="btnSignIn" class="button">Iniciar sesión</button>
        
          </form>

          <p>Iniciar sesión con <a id='google'> google</a></p>

        </div>

        <div>
          <p>¿No tienes una cuenta?</p>
          <a id='btnSignUp'>Regístrate</a>
        </div>
      </div>
      <div class="imgbox">
        <img src="./img/CB2.png" alt="img Welcome">
      </div>

    </div>
  `;
  const divElemt = document.createElement('div');
  divElemt.setAttribute('class', 'flexSection register');
  divElemt.innerHTML = showSignIn;

  divElemt.querySelector('#btnSignIn').addEventListener('click', registerUser);
  divElemt.querySelector('#btnSignUp').addEventListener('click', SignUp);
  divElemt.querySelector('#google').addEventListener('click', googleAuth);

  return divElemt;
};

export default SignIn;
