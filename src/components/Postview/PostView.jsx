import React from "react";
import { Link } from "react-router-dom";
import "./postview.css";

function PostView({ post }) {
  return (
    <>
      <div className="view">
        <div className="max-width">
          <section className="wrap-box">
            <div className="inner">
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

              <dl className="category">
                <dt className="a11y-hidden">Category</dt>
                {post.category.map((cate) => (
                  <dd key={cate}>{cate}</dd>
                ))}
              </dl>

              <div className="title-wrap">
                <h2>{post.title}</h2>
                <button className="btn-like">Like</button>
              </div>
              <hr />
              <div className="view-contents">
                <p>{post.contents[0].text}</p>
                <img src={process.env.PUBLIC_URL + post.mainBg} alt="" />
                <p>{post.contents[0].text}</p>
              </div>
              <div className="btn-group">
                <a href="#" className="btn-modify">
                  <span className="a11y-hidden">modify</span>
                </a>
                <button type="button" className="btn-delete">
                  <span className="a11y-hidden">delete</span>
                </button>
              </div>
              <Link to="/" className="btn-back">
                <span className="a11y-hidden">Back</span>
              </Link>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}

export default PostView;
