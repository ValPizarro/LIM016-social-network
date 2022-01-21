import {createUser} from '../firebase/auth/auth_signup_password.js';
import {googleAuth} from '../firebase/auth/auth_google_signin_popup.js';

export const registerUserNew = (e) => {
  e.preventDefault();

  const email = e.target.closest('form').querySelector('#email').value;
  const password = e.target.closest('form').querySelector('#password').value;

  const user = createUser(email, password);

  console.log('Usuario creado:', user);
};

export const backSignIn = () => {
  window.location.hash = '#/signIn';
};

const SignUp = () => {
  const showSignUp = `
  <div class="conteinerGeneral">
    <div class="SingUpBox">
      <h1>Queer Place</h1>
      <form id="formRegister" class="formRegister">
        <a class="loginInGoogle" id="btnStartGoogle"><img class="google" src="https://brandlogos.net/wp-content/uploads/2015/09/google-favicon-vector-400x400.png" alt="google"> iniciar sesión con google</a>
        <div class="form-control">
          <input id="email" type="email" placeholder=" Correo electrónico">
            <i class="far fa-check-circle"></i>
            <i class="far fa-times-circle"></i>
            <small></small>
        </div> 
        <div class="form-control">
          <input type="text" placeholder="  Nombre completo">
            <i class="far fa-check-circle"></i>
            <i class="far fa-times-circle"></i>
            <small></small>
        </div> 
        <div class="form-control">
          <input type="text" placeholder="  Nombre de usuario">
            <i class="far fa-check-circle"></i>
            <i class="far fa-times-circle"></i>
            <small></small>
        </div> 
        <div class="form-control">
          <input id="password" type="text" placeholder="  Contraseña">
            <i class="far fa-check-circle"></i>
            <i class="far fa-times-circle"></i>
            <small></small>
        </div> 
        
        <button  id="btnCheckIn" class="button">Registrarte</button>
        <p>¿Tienes cuenta?</p>
        <a  id="SignIn" class="loginInCheckIn">Entrar</a>
        <img class="imgRegistration" src="./img/CB2.png" alt="img">
      </form>
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
