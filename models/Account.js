import connection from './connection';

const handleError = (err) => {
  console.log(err);
  throw new Error(err);
};

const getAllAccounts = () => connection()
  .then(db => db.collection('accounts').find().toArray())
  .catch(handleError);

const createAccount = (name) => connection()
  .then(db => db.collection('accounts').insertOne({ name }))
  .then(result => result)
  .catch(handleError);

const findUserByName = (name) => connection()
  .then(db => db.collection('accounts').findOne({ name }))
  .catch(handleError);

export default {
  getAllAccounts,
  createAccount,
  findUserByName,
};
