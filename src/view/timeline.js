import {saveTask} from '../firebase/firestore/firestore-add.js';

/* window.addEventListener('DOMContent',()=>{
  console.log('works')
});
 const prueba = (evt) =>{
  console.log('hola');
} */
const post = (e) => {
  e.preventDefault();
  const taskTitle= e.target.closest('form').querySelector('#task-title').value;
  // console.log(taskTitle);
  const taskDescription = e.target.closest('form')
      .querySelector('#task-description').value;
  // console.log(taskDescription);
  saveTask(taskTitle, taskDescription);
};
const timeline = () => {
  const showTimeline = `
  <div class="conteinerGeneral">
  <div class="postBox">
    <h2> Publicaciones</h2>
    <form class="task-form">
      <label for="title" Title:</label>
      <input type="text" placeholder="task title" id="task-title">
      
      <label for="description">Description:</label>
      <textarea id="task-description" rows="3" 
      placeholder="Task Description" ></textarea>
      <button id="btn-task-save" class="button">Save</button>
    </form>
  </div>

  <div id="showAllPosts"> </div>
  </div>

`;
  const divElemt = document.createElement('div');
  divElemt.setAttribute('class', 'flexSection');

  divElemt.innerHTML = showTimeline;
  divElemt.querySelector('#btn-task-save').addEventListener('click', post);

  return divElemt;
};

export default timeline;
