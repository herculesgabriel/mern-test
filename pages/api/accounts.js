import Account from '../../services/Account';

export default async (req, res) => {
  const accounts = await Account.getAllAccounts();

  res.status(200).send(accounts);
}
