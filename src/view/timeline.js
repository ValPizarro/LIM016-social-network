import { saveTask  } from "../firebase/firestore/firestore-add.js";
import { getTastks,onGetTasks,delateTask,getTask} from "../firebase/configuraciones.js"; 
/* import { template } from "./template.js"; */
//NO BORRAR
/*  window.addEventListener('DOMContentLoaded',async()=>{
  const querySnapshot=await getTastks()
  //console.log(querySnapshot); 
  querySnapshot.forEach(doc => {
    console.log(doc.data());
    console.log(taskContainer);
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

};
const timeline = () => {
  const showTimeline = `
  <div >
    <h2> Publicaciones</h2>
    <form class="task-form">
      <label for="title">Title:</label>
      <input type="text" placeholder="task title" id="task-title">

      <label for="description">Description:</label>
      <textarea id="task-description" rows="3" placeholder="Task Description" ></textarea>
      <button id="btn-task-save">Save</button>
    </form>
    <div id="tasks-container"></div>
  </div>
`;
  const divElemt = document.createElement('div');
  divElemt.setAttribute('class', 'flexSection');

  divElemt.innerHTML = showTimeline;

  divElemt.querySelector('#btn-task-save').addEventListener("click",post);

  let allPosts;
  let showAllPosts;
  let taskForm
  const funcion = async()=>{

  await onGetTasks((querySnapshot)=>{

    allPosts='';
    querySnapshot.forEach(doc => {
    //console.log(doc.id);

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


