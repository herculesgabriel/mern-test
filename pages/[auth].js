import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';

const Auth = ({ query }) => {
  const [user, setUser] = useState({});
  const router = useRouter();

  useEffect(() => {
    const { auth } = query;

    axios.get(`/api/${auth}`)
      .then(res => {
        if (!res.data) {
          alert(`User "${auth}" doesn't exist`);
          return router.push('/');
        }

        setUser(res.data);
      })
      .catch(err => console.log(err))
  }, []);

  if (user.name) {
    return <h1>This page is for {user.name}</h1>
  }

  return <h1>Loading...</h1>;
};

Auth.getInitialProps = ({ query }) => ({ query });

export default Auth;
