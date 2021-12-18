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
// const btnLog = document.getElementById('btnLog');
const btnSingUp = document.getElementById('btnSignUp');

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
  btnSingUp.addEventListener('click', () => {
    welcomeSection.classList.add('hidden');
    loginSection.classList.add('hidden');
    registerSection.classList.remove('hidden');
  });
} register();
