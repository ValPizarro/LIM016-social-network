import {updatePost} from '../src/firebase/firestore/fb-test.js';

jest.mock('../src/firebase/configuraciones.js');

describe('updatePost', () => {
  it('Actualiza el post', async () => {
    const result = await updatePost('valor');
    expect(result).toStrictEqual({description: 'valor'});
  });
  it('No recibe valor', () => {});
});
