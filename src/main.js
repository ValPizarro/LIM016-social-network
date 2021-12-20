// Este es el punto de entrada de tu aplicacion

import {myFunction} from './lib/index.js';

myFunction();

// --- declaración de variables ----->
// Section:
const welcomeSection = document.getElementById('welcome');
const loginSection = document.getElementById('login');
const registerSection = document.getElementById('register');

// Botones:
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
} join();

/**
 * funciones mostrar sección registro */
function register() {
  btnSingUp.addEventListener('click', (e) => {
    e.preventDefault();

    welcomeSection.classList.add('hidden');
    loginSection.classList.add('hidden');
    registerSection.classList.remove('hidden');
  });
} register();

/**
 * funciones firebase*/
const logInForm = document.querySelector('#formLogIn');

logInForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const email = document.querySelector('#logEmail').value;
  const password = document.querySelector('#logPassword').value;

  console.log(email, password);
});


const registerForm = document.querySelector('#formResgister');
registerForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const email = document.querySelector('#registerEmail').value;
  const password = document.querySelector('#registerPassword').value;

  auth
      .createUserWithEmailAndPassword(email, password);
  // .then(userCredential => {
  //   console.log('sing up');
  // });
});
