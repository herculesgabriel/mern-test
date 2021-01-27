import { useEffect, useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import axios from 'axios';

import styles from '../styles/Home.module.css';

const Home = () => {
  const [accounts, setAccounts] = useState([]);
  const [fetching, setFetching] = useState(true);

  useEffect(() => {
    axios.get('/api/accounts')
      .then(({ data }) => {
        setAccounts(data);
        setFetching(false);
      })
      .catch(err => console.log(err));
  }, []);

  const createUserLink = (user) => {
    const { _id, name } = user;

    return (
      <Link href={`/${name}`} key={_id}>
        <p>{name}</p>
      </Link>
    );
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Home</title>
      </Head>

      <div>
        <h1>Users</h1>
        <div>
          {
            fetching ? <p>Loading users...</p>
              : accounts.length > 0 ? accounts.map(createUserLink) : <p>No users found</p>
          }
        </div>

        <Link href="/create-accounts">
          <button>Create a new account!</button>
        </Link>
      </div>
    </div>
  )
}

export default Home;
