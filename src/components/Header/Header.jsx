import React from "react";
import "./header.css";
import { ReactComponent as Logo } from "../../assets/Logo.svg";
import { ReactComponent as WriteBtn } from "../../assets/icon-modify-white.svg";
import { ReactComponent as LogoutBtn } from "../../assets/icon-logout.svg";
import { ReactComponent as RegisterBtn } from "../../assets/icon-register.svg";
import { ReactComponent as LoginBtn } from "../../assets/icon-login.svg";
import { useState } from "react";
import { Link } from "react-router-dom";

function Header() {
  const [login, setLogin] = useState(false);

  function Logout() {
    return (
      <>
        <li>
          <a href="#" className="button white" onClick={() => setLogin(true)}>
            <LoginBtn />
            <span>Login</span>
          </a>
        </li>
        <li>
          <a href="#" className="button white">
            <RegisterBtn />
            <span>Register</span>
          </a>
        </li>
      </>
    );
  }

  function Login() {
    return (
      <>
        <li>
          <a to="/" className="button">
            <WriteBtn />
            <span>Write</span>
          </a>
        </li>
        <li>
          <a href="#" className="button white" onClick={() => setLogin(false)}>
            <LogoutBtn />
            <span>Logout</span>
          </a>
        </li>
      </>
    );
  }

  return (
    <header>
      <div className="max-width">
        <h1>
          <Link to="/">
            <Logo />
          </Link>
        </h1>
        <ul>
          <li className="profile-img">
            <a href="#none">
              <img
                src={process.env.PUBLIC_URL + "/assets/profile.jpg"}
                alt="My Page"
              />
            </a>
          </li>
          {login ? <Login /> : <Logout />}
        </ul>
      </div>
    </header>
  );
}

export default Header;
