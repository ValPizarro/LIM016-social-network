// Este es el punto de entrada de tu aplicacion
import {changeView} from './view-controler/router.js';
import {
  app,
  auth,
  provider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  signInWithPopup,
  db,
  collection,
  getDocs,
  addDoc,
  doc,getDoc,setDoc,updateDoc,deleteField
}from './firebase/configuraciones'

const init = () => {
  changeView(window.location.hash);

  window.addEventListener('hashchange', () =>
    changeView(window.location.hash));
};

window.addEventListener('load', init);

let Namebox =document.getElementById("Namebox");
let Rollbox =document.getElementById("Rollbox");
let Secbox =document.getElementById("Secbox");
let Genbox =document.getElementById("Genbox");
let Insbtn =document.getElementById("Insbtn");
let Selbtn =document.getElementById("Selbtn");
let Updbtn =document.getElementById("Updbtn");
let Delbtn =document.getElementById("Delbtn");













/*  window.addEventListener('DOMContentLoaded',()=>{

}); */
// const taskForm=document.getElementById('task-form');
// taskForm.addEventListener('submit', (e)=>{
//   e.preventDefault();

//   const title=taskForm['task-title'];
//   const description= taskForm['task-description'];
//   saveTask(title.value, description.value);
// });
