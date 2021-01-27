import Account from '../../services/Account';

export default async (req, res) => {
  const { name } = req.query;

  const user = await Account.findUserByName(name);

  res.status(200).send(user);
};
