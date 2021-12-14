// Este es el punto de entrada de tu aplicacion

import { myFunction } from './lib/index.js';

myFunction();

// --- declaración de variables ----->
    // Section:
let welcomeSection = document.getElementById("welcome");
let loginSection = document.getElementById("login");
let registerSection = document.getElementById("register");

    // Botones: 
const btnjoin = document.getElementById("btnJoin");
const btnLog = document.getElementById("btnLog");
const btnSingUp = document.getElementById("btnSignUp");

// -------  funciones mostrar secciones ----->

function join() {
    btnjoin.addEventListener("click", () => {
    welcomeSection.classList.add("hidden");
    loginSection.classList.remove("hidden");
    registerSection.classList.add("hidden");
    })
} join();

function register() {
    btnSingUp.addEventListener("click", () => {
    welcomeSection.classList.add("hidden");
    loginSection.classList.add("hidden");
    registerSection.classList.remove("hidden");
  })
} register();
