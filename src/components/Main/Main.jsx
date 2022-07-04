import React from "react";
import "./main.css";
import Aside from "./Aside/Aside";
import Post from "./Posts/Post";

function Main({ posts, users }) {
  return (
    <main>
      <div className="max-width">
        <h2 className="a11y-hidden">Post</h2>
        <ul className="posts">
          {posts.map((post) => <Post post={post} key={post.id} />).reverse()}
        </ul>
        <Aside users={users} />
      </div>
    </main>
  );
}

export default Main;
