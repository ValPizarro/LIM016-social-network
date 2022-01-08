import {signIn} from '../firebase/auth_signin_password.js';

const registerUser = (e) => {
  // window.location.hash = '#/home';

  const email = e.target.closest('form').querySelector('#email').value;
  const password = e.target.closest('form').querySelector('#password').value;

  const user = signIn(email, password);
  console.log(user);
  console.log('El usuario existe');
};

const SignUp = () => {
  window.location.hash = '#/signUp';
};

const SignIn = () => {
  const showSignIn = `
    <div class="flexBox">
      <div class="SingUpBox">
        <p>¡BIENVENIDX!</p>
        <form>
        <div id="formLogIn" class="formLogIn">
          <input id="email" type="email" placeholder="correo electrónico">
          <input id="password" type="text" placeholder="contraseña">

          <button id="btnSignIn" class="button">Inicia sesión</button>
          <button id="btnSignUp" class="button">Crear cuenta nueva</button>
        </form>
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
  divElemt.innerHTML = showSignIn;

  divElemt.querySelector('#btnSignIn').addEventListener('click', registerUser);
  divElemt.querySelector('#btnSignUp').addEventListener('click', SignUp);

  return divElemt;
};

export default SignIn;
