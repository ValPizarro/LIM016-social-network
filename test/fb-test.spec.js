// // importamos la funcion que vamos a testear
// import {updatePost} from '../src/firebase/firestore/fb-test.js';
// import {doc} from '../src/firebase/configuraciones.js';

// jest.mock('../src/firebase/configuraciones.js');

// describe('updatePost', () => {
//   it('Actualiza el post', async () => {
//     const result = await updatePost('valor');
//     expect(result).toStrictEqual({description: 'valor'});

//     expect(doc.mock.calls[0][1]).toBe('usuarios');
//     expect(doc.mock.calls[0][2]).toBe('fake-user-id');
//     expect(typeof updateDoc.mock.calls[0][0]).toBe('object');
//   });
//   it('No recibe valor', () => { });
// });
