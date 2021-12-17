// Este es el punto de entrada de tu aplicacion

import { myFunction } from './lib/index.js';

myFunction();
// console.log("hola a mi mundo");

// --- declaración de variables ----->
// Section:
const welcomeSection = document.getElementById('welcome');
const loginSection = document.getElementById('login');
const registerSection = document.getElementById('register');

// Botones:
const btnjoin = document.getElementById('btnJoin');
// const btnLog = document.getElementById('btnLog');
const btnSingUp = document.getElementById('btnSignUp');

// -------  funciones mostrar secciones ----->

function join() {
  btnjoin.addEventListener('click', () => {
    welcomeSection.classList.add('hidden');
    loginSection.classList.remove('hidden');
    registerSection.classList.add('hidden');
  });
} join();

function register() {
  btnSingUp.addEventListener('click', () => {
    welcomeSection.classList.add('hidden');
    loginSection.classList.add('hidden');
    registerSection.classList.remove('hidden');
  });
} register();
