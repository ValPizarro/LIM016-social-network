// Este es el punto de entrada de tu aplicacion

// import {myFunction} from './lib/index.js';
import {createUser} from './firebase/auth_signup_password.js';
import {signIn} from './firebase/auth_signin_password.js';
import {googleAuth} from './firebase/auth_google_signin_popup.js';


// import {signOutUser} from './auth_sign_out.js';

// myFunction();

// --- declaración de variables ----->
// Section:
const welcomeSection = document.getElementById('welcome');
const loginSection = document.getElementById('login');
const registerSection = document.getElementById('register');

// Botones:
const btnJoin = document.getElementById('btnJoin');
const btnLog = document.getElementById('btnLog');

const btnSingUp = document.getElementById('btnSignUp'); // Boton Iniciar Sesión
const btnCheckIn = document.getElementById('btnCheckIn'); // Botón Registrarse

// Formularios:
// const registerForm = document.querySelector('#formResgister');

/**
 * funciones mostrar sección log in */
function join() {
  btnJoin.addEventListener('click', () => {
    welcomeSection.classList.add('hidden');
    loginSection.classList.remove('hidden');
    registerSection.classList.add('hidden');
  });
}
join();

/**
 * funciones mostrar sección registro */
function register() {
  btnLog.addEventListener('click', (e) => {
    e.preventDefault();
    welcomeSection.classList.add('hidden');
    loginSection.classList.add('hidden');
    registerSection.classList.remove('hidden');
  });
}
register();

/**
 * funciones firebase*/

btnSingUp.addEventListener('click', (e) => {
  e.preventDefault();

  const email = document.querySelector('#logEmail').value;
  const password = document.querySelector('#logPassword').value;

  console.log(email, password);
});

/**
 * funcion usuario nuevo*/
function registerUserNew() {
  btnCheckIn.addEventListener('click', (e) => {
    e.preventDefault();

    const email = document.querySelector('#registerEmail').value;
    const password = document.querySelector('#registerPassword').value;

    const user = createUser(email, password);
    console.log(user);
  });
}
registerUserNew();

/**
 * funcion Iniciar Sesión*/
function signInUser() {
  btnSingUp.addEventListener('click', (e) => {
    e.preventDefault();

    const email = document.querySelector('#logEmail').value;
    const password = document.querySelector('#logPassword').value;

    const user = signIn(email, password);
    console.log(user);
  });
}
signInUser();

const btnStart=document.getElementById('btnStart');
btnStart.addEventListener('click', googleAuth);
