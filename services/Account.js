import Account from '../models/Account'

const getAllAccounts = async () => {
  const accounts = await Account.getAllAccounts()
  return accounts;
};

const createAccount = async (name) => {
  if (!name)
    return { status: 'error', message: 'You need to provide a name' };

  const alreadyExists = await Account.findUserByName(name.toLowerCase());

  if (alreadyExists)
    return { status: 'error', message: 'User already exists' };

  const { insertedId } = await Account.createAccount(name.toLowerCase());

  const createdAccount = { _id: insertedId, name };

  return createdAccount;
};

const findUserByName = async (name) => {
  const user = await Account.findUserByName(name.toLowerCase());
  return user;
};

export default {
  getAllAccounts,
  createAccount,
  findUserByName,
};
