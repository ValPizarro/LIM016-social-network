import {
  collection,
  addDoc,
  db,
  deleteDoc,
  getDoc,
  getDocs,
  doc,
  onSnapshot,
  query,
  orderBy,
  // updateDoc,
} from '../configuraciones.js';

// import {query, getDocs} from '../configuraciones.js';

export const savePost = (date, description, like, name, photo, user) => {
  return addDoc(collection(db, 'post'), {
    date,
    description,
    like,
    name,
    photo,
    user,
  });
};

export const onGetPosts = (callback) => {
  return onSnapshot(collection(db, 'post'), callback);
};

export const deletePost = (id) => {
  return deleteDoc(doc(db, 'post', id));
};

export const getPosts = () => {
  return getDocs(query(collection(db, 'post'), orderBy('date', 'desc')));
};

export const getPost = (id) => {
  return getDoc(doc(db, 'post', id));
};


// export const updatePost = (id, valor) => {
//   return updateDoc(doc(db, 'posts', id), {
//     description: valor,
//   });
// };

// export const addLike = (id, arrayLikes) => {
//   return updateDoc(doc(db, 'posts', id), {
//     like: arrayLikes,
//   });
// };

// export const saveProfile = (uid, name, nickname, email ) => {
//   addDoc(collection(db, 'profile'), {
//     uid,
//     name,
//     nickname,
//     email,
//   });
// };

// variable q y condiciones  where() con orderBy() y limit() https://firebase.google.com/docs/firestore/query-data/order-limit-data?hl=es-419

// export const getTastks = () => getDocs(query(collection(db, 'post')));

export const saveUser = (displayname, email, name) => {
  return addDoc(collection(db, 'users'), {
    displayname,
    email,
    name,
  });
};

export const onGetUser = (callback) => {
  return onSnapshot(collection(db, 'users'), callback);
};
