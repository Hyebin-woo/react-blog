import React from "react";
import { Link } from "react-router-dom";

function Post({ post }) {
  return (
    <li>
      <Link to={"/postviewpages/" + post.id} className="post">
        <article>
          <img src={process.env.PUBLIC_URL + post.thumbnail} alt="" />
          <div className="contents-wrap">
            <dl className="category">
              <dt className="a11y-hidden">Category</dt>

              {post.category.map((cate) => (
                <dd key={cate}>{cate}</dd>
              ))}
            </dl>

            <h3>{post.title}</h3>

            <dl className="author-wrap">
              <dt className="a11y-hidden">Author</dt>
              <dd className="author">
                <img
                  src={process.env.PUBLIC_URL + "/assets/profile.jpg"}
                  alt=""
                />
                Chilli
              </dd>
              <dt className="a11y-hidden">Created</dt>
              <dd className="created">{post.created}</dd>
            </dl>
            <p className="post-description">{post.contents[0].text}</p>
          </div>
        </article>
      </Link>
    </li>
  );
}

export default Post;
