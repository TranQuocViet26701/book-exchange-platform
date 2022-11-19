import React, { useState } from "react";
import "./Login.css"
import { Container } from "react-bootstrap";

export default function Login() {
    const [fullName, setFullName] = useState("Enter Full name");
    const [username, setUsername] = useState("Enter Username");
    const [password, setPassword] = useState("Enter Password");
    const [email, setEmail] = useState("Enter Email");

  return (
    <Container>
      <form className="Login-form">
        <div className="Login-form-content">
          <h3 className="Login-form-title">Sign Up</h3>
          <div className="form-group mt-3">
            <label style={{display:"flex"}}>Full Name</label>
            <input
              type="email"
              className="form-control mt-1"
              placeholder={fullName}
            />
          </div>
          <div className="form-group mt-3">
            <label style={{display:"flex"}}>Username</label>
            <input
              type="email"
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
          <div className="form-group mt-3">
            <label style={{display:"flex"}}>Email address</label>
            <input
              type="email"
              className="form-control mt-1"
              placeholder={email}
            />
          </div>
          <div className="d-grid gap-2 mt-3">
            <button type="submit" className="btn btn-primary">
              Sign Up
            </button>
          </div>
        
        </div>
      </form>
    </Container>
  );
}
