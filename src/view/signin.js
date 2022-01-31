import {googleAuth} from '../firebase/auth/auth_google_signin_popup.js';
import {signIn} from '../firebase/auth/auth_signin_password.js';

export const showHome = () => {
  window.location.hash = '#/home';
};

const SignIn = () => {
  const showSignIn = `
 <div class"conteinerGeneral">
      <div class="SingUpBox">
        <p class="title" >¡BIENVENIDX!</p>
        <form id="formLogIn" class="formLogIn">
          
          <div class="form-control">
            <input id="email" type="email" placeholder="correo electrónico">
            <i class="fa-times-circle"></i>
            <small></small>
          </div>
          
          <div class="form-control">
            <input minlength="5" id="password" type="password" 
            placeholder="Contraseña">
            <i class="fa-times-circle"></i>
            <small></small>
          </div>
          <button id="btnSignIn" class="button">Inicia sesión</button>
          
          <a class="loginInGoogle" id="google"><img class="google" src="https://brandlogos.net/wp-content/uploads/2015/09/google-favicon-vector-400x400.png" alt="google"> Iniciar sesión con google</a>
          <p>¿No tienes cuenta?</p>
          <a id="btnSignUp" 
          class="loginInCheckIn">Registrate</a>
        </form>
 
          <img src="./img/CB2.png" alt="img Welcome" class="imgRegistration">

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

const SignUp = () => {
  window.location.hash = '#/signUp';
};

export const registerUser = (e) => {
  e.preventDefault();

  const email = e.target.closest('form').querySelector('#email').value;
  const password = e.target.closest('form').querySelector('#password').value;

  signIn(email, password);
};

const setErrorInput = (input, errorMessage) => {
  const formControl = input.parentElement;
  const small = formControl.querySelector('small');

  small.innerText = errorMessage;

  formControl.addEventListener('keyup', () => {
    formControl.removeAttribute('class');
    formControl.setAttribute('class', 'form-control');
  });
};

export const showError = (error) => {
  console.log(error);

  if (error === 'auth/internal-error') {
    setErrorInput(password, 'Ingrese contraseña');
  } else if (error === 'auth/wrong-password') {
    setErrorInput(password, 'Contraseña incorrecta');
  } else if (error === 'auth/invalid-email') {
    setErrorInput(email, 'Ingrese correo electrónico');
  } else if (error === 'auth/user-not-found') {
    setErrorInput(email, 'No se encuentra registrado');
  } else {
    console.log('El correo o contraseña es incorrecta');
  }
};
