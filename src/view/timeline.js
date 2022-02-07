
import {
  savePost,
  onGetPosts,
  delatePost,
  getPost,
  updatePost,
  addLike,
} from '../firebase/firestore/firestore-add.js';

let postDescription;
let postLike;
let postUser;

export const currentUser = (UID) => {
  postUser = UID;
  console.log(postUser);
};
currentUser();


const addPost = (e) => {
  e.preventDefault();

  postDescription = e.target.closest('form')
      .querySelector('#postDescription').value;
  // console.log(postDescription);
  postLike = ['like1'];
  console.log(postDescription, postLike, postUser);
  console.log(postLike);
  savePost(postDescription, postLike, postUser);
};

const timeline = () => {
  const showTimeline = `
  <div >
    <h2> Publicaciones</h2>
    <form class="postForm">
      <label for="description">Description:</label>
      <textarea id="postDescription" rows="3" 
      placeholder="¿Tienes alguna recomendación?" ></textarea>
      <button id="btnSave">Save</button>
    </form>
    <div id="postsContainer"></div>
  </div>

  <div id="showAllPosts"> </div>
  </div>

`;
  const divElemt = document.createElement('div');
  divElemt.setAttribute('class', 'flexSection');
  divElemt.innerHTML = showTimeline;
  divElemt.querySelector('#btnSave').addEventListener('click', addPost);

  let allPosts;
  let showAllPosts;
  let allLikes;

  const timelineFuntion = async ()=>{
    await onGetPosts((querySnapshot) => {
      allPosts = '';
      querySnapshot.forEach((doc) => {
        // console.log(doc.id);
        allLikes = doc.data().like;

        allPosts += `
      <form class="postForm">
        <textarea class='postDescription' data-id="${doc.id}" disabled>
        ${doc.data().description}</textarea>
        <div>
          <span class='postsLike' data-like="${doc.id}">
          ${allLikes.length}</span>        
          <i class="fas fa-heart btnLike" data-id="${doc.id}"></i>

        </div>

        <i class="fas fa-trash-alt btnDelete" data-id="${doc.id}"></i>
        <i class="fas fa-pencil-alt btnEdit" data-id="${doc.id}"></i>
        <button class='btnUpdate' data-id="${doc.id}"> Guardar</button>
      </form>
      `;
      });
      showAllPosts = document.querySelector('#postsContainer');
      showAllPosts.innerHTML = allPosts;

      // like
      const btnLike = divElemt.querySelectorAll('.btnLike');

      let likeID;
      let likeContent;

      btnLike.forEach((btn) => {
        btn.addEventListener('click', async (e) => {
          e.preventDefault();

          likeID = e.target.dataset.id;
          likeContent = divElemt.querySelector(`[data-like="${likeID}"]`);
          // console.log(likes);
          console.log(likeID);
          console.log(likeContent);
          const doc = await getPost(e.target.dataset.id);
          const dataLikes = doc.data().like;
          console.log(dataLikes);
          const totalLikes = dataLikes;
          // console.log(totalLikes);

          const totalLikesLength = totalLikes.push(postUser);
          console.log(totalLikesLength);
          likeContent.textContent = totalLikesLength;
          await addLike(likeID, totalLikes);
        });
      });

      // para eliminar
      const btnDelete = divElemt.querySelectorAll('.btnDelete');

      btnDelete.forEach((btn) => {
        btn.addEventListener('click', async (e) => {
          e.preventDefault();
          await delatePost(e.target.dataset.id);
        // console.log(e.currentTarget.dataset.id)
        });
      });

      const btnEdit=divElemt.querySelectorAll('.btnEdit');

      let btnEditID;
      let textAreaEdit;

      btnEdit.forEach((btn) => {
        btn.addEventListener('click', async (e) => {
          e.preventDefault();
          btnEditID =e.target.dataset.id;
          // console.log(btnEditID);
          textAreaEdit = divElemt.querySelector(`[data-id="${btnEditID}"]`);
          // console.log(textAreaEdit.value);
          textAreaEdit.disabled=false;
          // console.log(textAreaEdit);
        });
      });

      const btnUpdate=divElemt.querySelectorAll('.btnUpdate');
      btnUpdate.forEach((btn)=>{
        btn.addEventListener('click', async (e)=>{
          e.preventDefault();
          const btnUpdateId=e.target.dataset.id;
          // console.log(btnUpdateId);
          const textAreaEdit = divElemt
              .querySelector(`[data-id="${btnUpdateId}"]`);
          // console.log(textAreaEdit.dataset.id, textAreaEdit.value);
          await updatePost(textAreaEdit.dataset.id, textAreaEdit.value);
          // console.log(textAreaEdit.dataset.id,textAreaEdit.value);
          if (textAreaEdit.disabled=false) {
          } else {
            textAreaEdit.disabled=true;
          }
        });
      });
    });
  };

  timelineFuntion();
  return divElemt;
};

export default timeline;


// const querySnapshot=await getTastks()
// {}
// console.log(querySnapshot);

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
    const showAllPosts=document.querySelector('#postsContainer');
    showAllPosts.innerHTML=allPosts;
  }
  funcion();
return divElemt; */
