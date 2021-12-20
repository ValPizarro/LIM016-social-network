// Este es el punto de entrada de tu aplicacion
/* import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js'; */

import { myFunction } from './lib/index.js';

myFunction();

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
