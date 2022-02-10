
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
let postEmail;
let cleanPost;

export const currentUser = (UID, email) => {
  postUser = UID;
  postEmail = email;
};
currentUser();


const addPost = (e) => {
  e.preventDefault();

  postDescription = e.target.closest('form')
      .querySelector('#postDescription').value;
  postLike = [];
  const postDescriptionVerified = postDescription.replace(/\s+/g, '');
  // console.log(postDescriptionVerified);

  if (postDescriptionVerified !== '') {
    savePost(postDescription, postLike, postUser);
    cleanPost.reset();
  };
};


export const timeline = () => {
  const showTimeline = `
  <form id="form" class="postForm">
    
    <div class="postUser">
      <div class="boxPerfil">
        <img class="perfil" src="https://i.pinimg.com/564x/be/61/99/be6199c2dcbda4e08f6f6fbb9c038db8.jpg" alt="">
      </div>
      <p class="user">${postEmail}</p>        
    </div>
    <textarea id="postDescription" class="postDescription"
    placeholder="¿Tienes alguna recomendación?" ></textarea>
    <div class="btnPost">
      <button id="btnPhoto" class="btnPhoto">
        <i class="fal fa-image"></i>Foto
      </button>
      <button id="btnSave" class="btnSave">Publicar</button>
    </div>
    

  </form>
  <div id="postsContainer"></div>
`;
  const divElemt = document.createElement('div');
  divElemt.setAttribute('class', 'containerPost');
  divElemt.innerHTML = showTimeline;
  divElemt.querySelector('#btnSave').addEventListener('click', addPost);

  cleanPost = divElemt.querySelector('#form');

  let allPosts;
  let showAllPosts;
  let allLikes;

  const timelineFuntion = async () => {
    if (postUser == null) {
      alert('Inicia sesión para disfrutar de nuestro contenido');
    } else {
      await onGetPosts((querySnapshot) => {
        allPosts = '';
        querySnapshot.forEach((doc) => {
          // console.log(doc.id);
          const likes = doc.data().like.length;
          if (likes == 0) {
            allLikes = '';
          } else {
            allLikes = doc.data().like.length;
          }

          allPosts += `
      <form class="postForm">
        <div class="divRow">
          <div class="postSection">
            <div class="postUser">
              <div class="boxPerfil">
                <img class="perfil" src="https://i.pinimg.com/564x/be/61/99/be6199c2dcbda4e08f6f6fbb9c038db8.jpg" alt="">
              </div>
              <p class="user">Lana del Rey</p> 
            </div>
            <textarea id="postDescription" class="postDescription"
              data-id="${doc.id}" disabled>
                ${doc.data().description}</textarea>
            <div class="divBtbUpdate">
              <button class='btnUpdate' data-id="${doc.id}"> Guardar</button>
            </div>
          </div>
          <div class="iconPost">
            <div class="divbtnLike">
              <span class='postsLike'
                data-like="${doc.id}">${allLikes}</span>   
              <i class="fas fa-heart btnLike" data-id="${doc.id}"></i>
            </div>
            <i class="fas fa-trash-alt btnDelete" data-id="${doc.id}"></i>
            <i class="fas fa-pencil-alt btnEdit" data-id="${doc.id}"></i>
          </div>
        </div>
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
            const doc = await getPost(likeID);
            const dataLikes = doc.data().like;
            // console.log(dataLikes);
            const totalLikes = dataLikes;
            // console.log(totalLikes);

            if (totalLikes.includes(postUser) == false) {
              totalLikes.push(postUser);
              // console.log(totalLikesLength);
              await addLike(likeID, totalLikes);
            } else {
              console.log('El usuario', postUser, 'ya dio like');
              const dislike = totalLikes.filter((user) => user !== postUser);
              // console.log(dislike);
              await addLike(likeID, dislike);
            }
          });
        });

        // para eliminar
        const btnDelete = divElemt.querySelectorAll('.btnDelete');

        btnDelete.forEach((btn) => {
          btn.addEventListener('click', async (e) => {
            e.preventDefault();
            const btnDeleteID = e.target.dataset.id;

            const doc = await getPost(btnDeleteID);
            const dataUser = doc.data().user;

            if (postUser == dataUser) {
              if (confirm('¿Desea eliminar esta publicación?')) {
                await deletePost(btnDeleteID);
              }
            }
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

        btnUpdate.forEach((btn) => {
          btn.addEventListener('click', async (e) => {
            e.preventDefault();
            const btnUpdateID = e.target.dataset.id;
            // console.log(btnUpdateID);
            const textAreaEdit = divElemt.querySelector(
                `[data-id="${btnUpdateID}"]`,
            );
            const doc = await getPost(btnEditID);
            const dataUser = doc.data().user;
            const textEditVerified = textAreaEdit.value.replace(/\s+/g, '');
            console.log(textEditVerified);
            if (postUser == dataUser) {
              if (textEditVerified !== '') {
                await updatePost(textAreaEdit.dataset.id, textAreaEdit.value);
              } else {
                alert('ups, el campo esta vacio');
              }
              // console.log(textAreaEdit.dataset.id, textAreaEdit.value);
            }
          });
        });
      });
    }
  };
  timelineFuntion();
  return divElemt;
};
