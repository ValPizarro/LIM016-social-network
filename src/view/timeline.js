<<<<<<< HEAD
import {saveTask} from '../firebase/firestore/firestore-add.js';
import {getTastks} from '../firebase/configuraciones.js';

// NO BORRAR
/* window.addEventListener('DOMContentLoaded',async()=>{
=======
import { saveTask  } from "../firebase/firestore/firestore-add.js";
import { getTastks,onGetTasks,delateTask,getTask} from "../firebase/configuraciones.js"; 
/* import { template } from "./template.js"; */
//NO BORRAR
/*  window.addEventListener('DOMContentLoaded',async()=>{
>>>>>>> db1269bd72e5c26a00875a9bd6c46b8d22fa38ca
  const querySnapshot=await getTastks()
  //console.log(querySnapshot);
  querySnapshot.forEach(doc => {
    console.log(doc.data());
    console.log(taskContainer);
<<<<<<< HEAD
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
=======
  }); 
});   */
let taskTitle
let taskDescription
const post = (e) => {
  e.preventDefault();
  taskTitle= e.target.closest('form').querySelector('#task-title').value;
  //console.log(taskTitle);
  taskDescription= e.target.closest('form').querySelector('#task-description').value;
  //console.log(taskDescription);
  saveTask(taskTitle,taskDescription);

>>>>>>> db1269bd72e5c26a00875a9bd6c46b8d22fa38ca
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
    <div id="tasks-container"></div>
  </div>

  <div id="showAllPosts"> </div>
  </div>

`;
  const divElemt = document.createElement('div');
  divElemt.setAttribute('class', 'flexSection');

  divElemt.innerHTML = showTimeline;
<<<<<<< HEAD
  divElemt.querySelector('#btn-task-save').addEventListener('click', post);

  const prueba =divElemt.querySelector('#tasks-container');
  console.log(prueba);
  printPost();

=======

  divElemt.querySelector('#btn-task-save').addEventListener("click",post);

  let allPosts;
  let showAllPosts;
  let taskForm
  const funcion = async()=>{

  await onGetTasks((querySnapshot)=>{
>>>>>>> db1269bd72e5c26a00875a9bd6c46b8d22fa38ca

    allPosts='';
    querySnapshot.forEach(doc => {
    //console.log(doc.id);

<<<<<<< HEAD
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
=======
     allPosts +=`
     <form class="form-publication">
      <textarea class='publication-title' disabled>${doc.data().Title}</textarea>
      <textarea class='publication-description' disabled>${doc.data().Descripción}</textarea>
      <button class='btn-delete' data-id="${doc.id}"> Delate</button>
      <button class='btn-edit' data-id="${doc.id}"> Edit</button>
     </form>
     `
    }); 
     showAllPosts=document.querySelector('#tasks-container');

    showAllPosts.innerHTML=allPosts;
    //para eliminar
    const btnDelete=divElemt.querySelectorAll(".btn-delete");
    btnDelete.forEach(btn => {
      btn.addEventListener('click',async(e) => {
        //console.log(e.currentTarget.dataset.id)
        await delateTask(e.currentTarget.dataset.id);
        //console.log(e.currentTarget.dataset.id)
      });
    });
    const btnEdit=divElemt.querySelectorAll(".btn-edit");
    let publicationTitle= divElemt.querySelectorAll(".publication-title");
    
    btnEdit.forEach(btn => {
      btn.addEventListener('click',async (e) =>{
        
       const doc = await getTask(e.currentTarget.dataset.id)
       console.log(doc);
       const task =doc.data();
       console.log(task);
       e.disabled=false;

      })
    }); 
   /*  publicationTitle.forEach(evt =>{
         evt.addEventListener()
       }) */

    
/*     btnDelete.forEach(btn => {
      btn.addEventListener('click',async({ target:{ dataset }}) => {
        await delateTask(dataset.id);
        console.log(dataset.id)
      });
    }); */
>>>>>>> db1269bd72e5c26a00875a9bd6c46b8d22fa38ca

/*     const btnEdit=document.querySelectorAll(".btn-edit")
    const taskForm=document.querySelector('.task-form')
    btnEdit.forEach(btn=>{
      btn.addEventListener('click',async (e)=>{
        //console.log(e.target.dataset.id);
        const doc=await getTask(e.target.dataset.id)
        console.log(doc.data());
        taskForm['task-title'].value=doc.data().taskTitle;
        taskForm['task-description'].value=doc.data().taskDescription;
        
      });
      
    }); */
  });  
  }
  funcion();
  return divElemt; 

};

export default timeline;






















  //const querySnapshot=await getTastks()
  //{}
    //console.log(querySnapshot);

/*   let allPosts 
  const funcion = async()=>{
    const querySnapshot=await getTastks()
    //console.log(querySnapshot);
    querySnapshot.forEach(doc => {
   
      let title=doc.data().Title;
      let Descripción=doc.data().Descripción;
      console.log(doc.data());
      allPosts += template(title,Descripción);

    }); 
    const showAllPosts=document.querySelector('#tasks-container');
    showAllPosts.innerHTML=allPosts;
  }
  funcion();
  return divElemt; */


