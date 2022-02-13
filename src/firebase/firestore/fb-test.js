import {
  db,
  doc,
  updateDoc,
  // collection,
  // addDoc,
} from '../configuraciones.js';

// export const savePost = async (description, like, name, photo, user) => {
//   const realCollection = await collection(db, 'posts');
//   return addDoc(realCollection, {
//     description,
//     like,
//     name,
//     photo,
//     user,
//   });
// };

export const updatePost = async (id, valor) => {
  const realUpdate = await doc(db, 'post', id);
  return updateDoc( realUpdate, {
    description: valor,
  });
};

export const addLike = async (id, arrayLikes) => {
  const realLike = await doc(db, 'post', id);
  return updateDoc(realLike, {
    like: arrayLikes,
  });
};
