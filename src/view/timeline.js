import {saveTask} from '../firebase/firestore/firestore-add.js';
import {getTastks} from '../firebase/configuraciones.js';

// NO BORRAR
/* window.addEventListener('DOMContentLoaded',async()=>{
  const querySnapshot=await getTastks()
  //console.log(querySnapshot);
  querySnapshot.forEach(doc => {
    console.log(doc.data());
    console.log(taskContainer);
  });
});
 */
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
  <div >
    <h2> Publicaciones</h2>
    <form class="task-form">
      <label for="title" Title:</label>
      <input type="text" placeholder="task title" id="task-title">
      
      <label for="description">Description:</label>
      <textarea id="task-description" rows="3" 
      placeholder="Task Description" ></textarea>
      <button id="btn-task-save" class="button">Save</button>
    </form>
    <div id="tasks-container">holaa</div>
  </div>

  <div id="showAllPosts"> </div>
  </div>

`;
  const divElemt = document.createElement('div');
  divElemt.setAttribute('class', 'flexSection');

  divElemt.innerHTML = showTimeline;
  divElemt.querySelector('#btn-task-save').addEventListener('click', post);

  const prueba =divElemt.querySelector('#tasks-container');
  console.log(prueba);
  printPost();


  return divElemt;
};

const printPost = ()=>{
  window.addEventListener('Load', async ()=>{
    const querySnapshot=await getTastks();
    // console.log(querySnapshot);
    querySnapshot.forEach((doc) => {
      console.log(doc.data());
      console.log(taskContainer);
    });
  });
};
printPost();


export default timeline;
