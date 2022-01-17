// Este es el punto de entrada de tu aplicacion
import {changeView} from './view-controler/router.js';

// Inicilización

const init = () => {
  changeView(window.location.hash);

  window.addEventListener('hashchange', () =>
    changeView(window.location.hash));
};

window.addEventListener('load', init);

/*  window.addEventListener('DOMContentLoaded',()=>{

}); */
const taskForm=document.getElementById('task-form');
taskForm.addEventListener('submit', (e)=>{
  e.preventDefault();

  const title=taskForm['task-title'];
  const description= taskForm['task-description'];
  saveTask(title.value, description.value);
});
