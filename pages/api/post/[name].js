import Account from '../../../services/Account';

export default async (req, res) => {
  const { name } = req.query

  const data = await Account.createAccount(name)

  if (data.status === 'error')
    return res.status(200).send(data);

  res.status(201).json(data);
};
