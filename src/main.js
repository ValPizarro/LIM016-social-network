// Este es el punto de entrada de tu aplicacion
import {changeView} from './view-controler/router.js';
import {getFirestore, collection, getDocs, addDoc} from 'https://www.gstatic.com/firebasejs/9.6.1/firebase-firestore.js';
const db = getFirestore();///alamacena nuestra base de datos

const init = () => {
  changeView(window.location.hash);

  window.addEventListener('hashchange', () =>
    changeView(window.location.hash));
};

window.addEventListener('load', init);


