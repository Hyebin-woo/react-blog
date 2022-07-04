import React from "react";
import "./aside.css";
import Categories from "../Categories/Categories";
import Facebook from "../../../../src/assets/Facebook.svg";
import Twitter from "../../../../src/assets/Twitter.svg";
import Instagram from "../../../../src/assets/Instagram.svg";
import Github from "../../../../src/assets/Github.svg";

function Aside({ users }) {
  return (
    <aside className="about">
      <h2>About Me</h2>
      <img src={users[0].profileImg} alt="" className="user-profile" />
      <p className="user-name">{users[0].name}</p>
      <p className="user-description">{users[0].userInfo}</p>
      <h3>Categories</h3>
      <Categories />
      <h3>Follow</h3>
      <ul className="sns">
        <li>
          <a href="#">
            <img src={Facebook} alt="Facebook" />
          </a>
        </li>
        <li>
          <a href="#">
            <img src={Twitter} alt="Twitter" />
          </a>
        </li>
        <li>
          <a href="#">
            <img src={Instagram} alt="Instagram" />
          </a>
        </li>
        <li>
          <a href="#">
            <img src={Github} alt="GitHub" />
          </a>
        </li>
      </ul>
    </aside>
  );
}

export default Aside;
