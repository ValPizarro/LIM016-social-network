// Este es el punto de entrada de tu aplicacion
/* import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js'; */

// import {myFunction} from './lib/index.js';
import {createUser, signIn} from './firebase/auth.js';

<<<<<<< HEAD
// myFunction();
=======
myFunction();
>>>>>>> 79c6f63 (se revirtieron los cambios)

// Import the functions you need from the SDKs you

// import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// --- declaración de variables ----->
// Section:

const welcomeSection = document.getElementById('welcome');
const loginSection = document.getElementById('login');
const registerSection = document.getElementById('register');

// Botones:
<<<<<<< HEAD
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
=======
const btnjoin = document.getElementById('btnJoin');
// const btnLog = document.getElementById('btnSignUp');
const btnSingUp = document.getElementById('btnLog');

/**
 * funciones mostrar sección log in */
function join() {
	btnjoin.addEventListener('click', () => {
		welcomeSection.classList.add('hidden');
		loginSection.classList.remove('hidden');
		registerSection.classList.add('hidden');
	});
>>>>>>> c48a7f5 (acepte cambios con de Sharon)
} join();

/**
 * funciones mostrar sección registro */
function register() {
<<<<<<< HEAD
  btnLog.addEventListener('click', (e) => {
    e.preventDefault();
    welcomeSection.classList.add('hidden');
    loginSection.classList.add('hidden');
    registerSection.classList.remove('hidden');
  });
=======
	btnSingUp.addEventListener('click', (e) => {
		e.preventDefault();

		welcomeSection.classList.add('hidden');
		loginSection.classList.add('hidden');
		registerSection.classList.remove('hidden');
	});
>>>>>>> c48a7f5 (acepte cambios con de Sharon)
} register();

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
} registerUserNew();

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
} signInUser();
