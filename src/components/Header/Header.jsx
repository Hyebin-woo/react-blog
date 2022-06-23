import React from "react";
import "./header.css";
import Login from "./Login";
import Logout from "./Logout";
import { ReactComponent as Logo } from "../../assets/Logo.svg";
import { ReactComponent as WriteBtn } from "../../assets/icon-modify-white.svg";
import { ReactComponent as LogoutBtn } from "../../assets/icon-modify-white.svg";

function Header() {
  return (
    <header>
      <div className="max-width">
        <h1>
          <a href="./">
            <Logo />
          </a>
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
          <li>
            <a href="#" class="button">
              <WriteBtn />
              <span>Write</span>
            </a>
          </li>
          <li>
            <a href="#" class="button">
              <LogoutBtn />
              <span>Logout</span>
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Header;
