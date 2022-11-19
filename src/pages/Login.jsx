import React, { useState } from "react";
import "./Login.css"
import { Container } from "react-bootstrap";

export default function Login() {
    const [username, setUsername] = useState("Enter Username");
    const [password, setPassword] = useState("Enter Password");
  return (
    <Container>
      <form className="Login-form">
        <div className="Login-form-content">
          <h3 className="Login-form-title">Sign In</h3>
          <div className="form-group mt-3">
            <label style={{display:"flex"}}>Username</label>
            <input
              type="text"
              className="form-control mt-1"
              placeholder={username}
            />
          </div>
          <div className="form-group mt-3">
            <label style={{display:"flex"}}>Password</label>
            <input
              type="password"
              className="form-control mt-1"
              placeholder={password}
            />
          </div>
          <div className="d-grid gap-2 mt-3">
            <button type="submit" className="btn btn-primary">
              Sign In
            </button>
          </div>
         
        </div>
      </form>
    </Container>
  );
}
