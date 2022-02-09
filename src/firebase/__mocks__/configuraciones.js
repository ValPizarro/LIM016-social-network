export const auth = jest.fn();
auth.currentUser = {
  uid: 'fake-user-id',
};

export const setDoc = jest.fn((document, values) => Promise.resolve({}));

export const doc = jest.fn((db, collection, docID) => Promise.resolve({}));

export const db = jest.fn({});
