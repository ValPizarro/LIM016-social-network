// Este es el punto de entrada de tu aplicacion
/* import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js'; */

import {changeView} from './view-controler/router.js';

// import {myFunction} from './lib/index.js';
// import {createUser} from './firebase/auth_signup_password.js';
// import {signIn} from './firebase/auth_signin_password.js';
// import {googleAuth} from './firebase/auth_google_signin_popup.js';
// import {signOutUser} from './auth_sign_out.js';

// myFunction();

// Import the functions you need from the SDKs you

// import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// --- declaración de variables ----->
// Section:
// const welcomeSection = document.getElementById('welcome');
// const loginSection = document.getElementById('login');
// const registerSection = document.getElementById('register');

// // Botones:
// const btnJoin = window.getElementById('btnJoin');
// const btnLog = document.getElementById('btnLog');

// const btnSingUp = document.getElementById('btnSignUp');
// const btnCheckIn = document.getElementById('btnCheckIn');

// Inicilización

const init = () => {
  changeView(window.location.hash);

  window.addEventListener('hashchange', () =>
    changeView(window.location.hash));
};

window.addEventListener('load', init);

/**
 * funciones firebase*/

// btnSingUp.addEventListener('click', (e) => {
//   e.preventDefault();

//   const email = document.querySelector('#logEmail').value;
//   const password = document.querySelector('#logPassword').value;

//   console.log(email, password);
// });

// /**
//  * funcion usuario nuevo*/
// function registerUserNew() {
//   btnCheckIn.addEventListener('click', (e) => {
//     e.preventDefault();

//     const email = document.querySelector('#registerEmail').value;
//     const password = document.querySelector('#registerPassword').value;

//     const user = createUser(email, password);
//     console.log(user);
//   });
// }
// registerUserNew();

// /**
//  * funcion Iniciar Sesión*/
// function signInUser() {
//   btnSingUp.addEventListener('click', (e) => {
//     e.preventDefault();

//     const email = document.querySelector('#logEmail').value;
//     const password = document.querySelector('#logPassword').value;

//     const user = signIn(email, password);
//     console.log(user);
//   });
// }
// signInUser();

// const btnStart=document.getElementById('btnStart');
// btnStart.addEventListener('click', googleAuth);
