import React from "react";
import "./bannerpostview.css";

function BannerPostView({ mainBg }) {
  return (
    <div
      className="banner"
      style={{
        backgroundImage: "url(" + process.env.PUBLIC_URL + mainBg + ")",
      }}
    >
      <div className="max-width">
        <div className="banner-contents">
          <p className="today">
            May <em>25</em> Wednesday
          </p>
        </div>
      </div>
    </div>
  );
}

export default BannerPostView;
