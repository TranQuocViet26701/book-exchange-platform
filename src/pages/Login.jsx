import React, { useState } from 'react';
import './Login.css';
import { Container } from 'react-bootstrap';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

export default function Login() {
  const history = useHistory();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const loginRes = await axios.post(
      'https://afternoon-brook-19976.herokuapp.com/users/login-user',
      {
        username: username,
        password: password,
      }
    );
    if (loginRes.data.code === 102) {
      localStorage.setItem('useId', loginRes.data.data.user._id);
      history.push('/');
    }
  };

  return (
    <Container>
      <form className="Login-form">
        <div className="Login-form-content">
          <h3 className="Login-form-title">Sign In</h3>
          <div className="form-group mt-3">
            <label style={{ display: 'flex' }}>Username</label>
            <input
              type="text"
              className="form-control mt-1"
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Enter username"
              value={username}
            />
          </div>
          <div className="form-group mt-3">
            <label style={{ display: 'flex' }}>Password</label>
            <input
              type="password"
              className="form-control mt-1"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter password"
            />
          </div>
          <div className="d-grid gap-2 mt-3 mb-4">
            <button className="btn btn-primary" onClick={handleSubmit}>
              Sign In
            </button>
          </div>
          <p>
            Don't have an account yet? <a href="/register">Sign up now</a>
          </p>
        </div>
      </form>
    </Container>
  );
}
