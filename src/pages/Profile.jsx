import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';

function Profile() {
  const [currentUser, setCurrentUser] = useState(null);
  const history = useHistory();

  useEffect(() => {
    const getUserDetail = async () => {
      const userId = localStorage.getItem('currentUser');

      if (!userId) history.push('/login');

      const res = await axios.post(
        `https://afternoon-brook-19976.herokuapp.com/users/get-detail-user`,
        {
          userId,
        }
      );
      setCurrentUser(res.data.data.user);
    };

    getUserDetail();
  }, []);

  console.log('currentUser: ', currentUser);

  return <Container>{currentUser && <h2>{currentUser.name}</h2>}</Container>;
}

export default Profile;
