import {
  collection,
  addDoc,
  db,
  deleteDoc,
  getDoc,
  doc,
  onSnapshot,
} from '../configuraciones.js';

// import {query, getDocs} from '../configuraciones.js';

export const saveTask = (user, title, description, like) => {
  addDoc(collection(db, 'post'), {
    user,
    title,
    description,
    like,
  });
};


export const onGetTasks = (callback) =>
  onSnapshot(collection(db, 'post'), callback);
export const delateTask = async (id) => await deleteDoc(doc(db, 'post', id));
export const getTask = (id) => getDoc(doc(db, 'post', id));

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

export const saveUser = async (email, password, name, nickname) => {
  const docRef = await addDoc(collection(db, 'user'), {
    email,
    password,
    name,
    nickname,
  });
  console.log('Documento escrito con su ID: ', docRef.id);
};
