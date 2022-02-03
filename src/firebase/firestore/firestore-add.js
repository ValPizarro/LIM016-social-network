import {collection, addDoc, db} from '../configuraciones.js';

export const saveTask = (Title, Descripción) =>{
  addDoc(collection(db, 'Post'), {Title, Descripción});
  // console.log(title,description);
};
