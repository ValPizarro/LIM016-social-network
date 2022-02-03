import {collection, addDoc, db} from '../configuraciones.js';

export const saveTask = (title, description, like ) => {
  addDoc(collection(db, 'post'), {
    title,
    description,
    like});
};
