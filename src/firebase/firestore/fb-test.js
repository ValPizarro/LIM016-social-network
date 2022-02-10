import {
  db,
  doc,
  updateDoc,
} from '../configuraciones.js';

export const updatePost = async (id, valor) => {
  const realUpdate = await doc(db, 'post', id);
  return updateDoc( realUpdate, {
    description: valor,
  });
};
