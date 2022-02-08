
import {
  savePost,
  onGetPosts,
  deletePost,
  getPost,
  updatePost,
  addLike,
} from '../firebase/firestore/firestore-add.js';

let postDescription;
let postLike;
let postUser;

export const currentUser = (UID) => {
  postUser = UID;
  // console.log(postUser);
};
currentUser();


const addPost = (e) => {
  e.preventDefault();

  postDescription = e.target.closest('form')
      .querySelector('#postDescription').value;
  // console.log(postDescription);
  postLike = [];
  console.log(postDescription, postLike, postUser);
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
      <button id="btnSave">Guardar</button>
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
        const likes = doc.data().like.length;
        if (likes == 0) {
          allLikes = '';
        } else {
          allLikes = doc.data().like.length;
        };

        allPosts += `
      <form class="postForm">
        <textarea class='postDescription' data-id="${doc.id}" disabled>
        ${doc.data().description}</textarea>
        <div>
          <span class='postsLike' data-like="${doc.id}">
          ${allLikes}</span>        
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


      btnLike.forEach((btn) => {
        btn.addEventListener('click', async (e) => {
          e.preventDefault();

          const likeID = e.target.dataset.id;
          // const likeContent = divElemt
          // .querySelector(`[data-like="${likeID}"]`);
          // console.log(likes);
          // console.log(likeID);
          // console.log(likeContent);
          const doc = await getPost(likeID);
          const dataLikes = doc.data().like;
          // console.log(dataLikes);
          const totalLikes = dataLikes;
          // console.log(totalLikes);

          if (totalLikes.includes(postUser) == false) {
            const totalLikesLength = totalLikes.push(postUser);
            console.log(totalLikesLength);
            // likeContent.textContent = totalLikesLength;
            await addLike(likeID, totalLikes);
          } else {
            console.log(
                ' El usuario', postUser, 'ya dio like');
          }
        });
      });

      // para eliminar
      const btnDelete = divElemt.querySelectorAll('.btnDelete');

      btnDelete.forEach((btn) => {
        btn.addEventListener('click', async (e) => {
          e.preventDefault();
          await deletePost(e.target.dataset.id);
        // console.log(e.currentTarget.dataset.id)
        });
      });


      const btnEdit = divElemt.querySelectorAll('.btnEdit');

      let btnEditID;
      let textAreaEdit;

      btnEdit.forEach((btn) => {
        btn.addEventListener('click', async (e) => {
          e.preventDefault();
          btnEditID = e.target.dataset.id;
          // console.log(btnEditID);
          textAreaEdit = divElemt.querySelector(`[data-id="${btnEditID}"]`);

          const doc = await getPost(btnEditID);
          const dataUser = doc.data().user;

          console.log(dataUser);
          console.log(postUser);

          if (postUser == dataUser) {
            console.log('El post es tuyo');
            textAreaEdit.disabled = false;
          } else {
            console.log('El post NO es tuyo');
          }
        });
      });

      const btnUpdate = divElemt.querySelectorAll('.btnUpdate');

      btnUpdate.forEach((btn)=>{
        btn.addEventListener('click', async (e) => {
          e.preventDefault();
          const btnUpdateID = e.target.dataset.id;
          // console.log(btnUpdateID);
          const textAreaEdit = divElemt
              .querySelector(`[data-id="${btnUpdateID}"]`);
          // console.log(textAreaEdit.dataset.id, textAreaEdit.value);
          const doc = await getPost(btnEditID);
          const dataUser = doc.data().user;

          if (postUser == dataUser) {
            await updatePost(textAreaEdit.dataset.id, textAreaEdit.value);
          }
        });
      });
    });
  };

  timelineFuntion();
  return divElemt;
};

export default timeline;
