import { useState } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import axios from 'axios';

const CreateAccounts = () => {
  const [name, setName] = useState('');
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name)
      return alert('You need to provide a name');

    if (name.includes(' '))
      return alert("Invalid username. Don't use spaces");

    axios.post(`/api/post/${name}`)
      .then(({ data }) => {
        const { status, message } = data;

        if (status === 'error')
          return alert(message);

        alert(`The user "${data.name}" has been created successfully`);
        router.push('/');
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <Head>
        <title>Admin page</title>
      </Head>

      <div>
        <h1>Create a new account</h1>
        <form onSubmit={handleSubmit}>
          <label htmlFor="account-name">
            Account name:
            <input
              type="text"
              name="account-name"
              id="account-name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Type the name for the new account page" />
          </label>

          <button type="submit">Create account</button>
        </form>
      </div>
    </>
  );
};

export default CreateAccounts;
