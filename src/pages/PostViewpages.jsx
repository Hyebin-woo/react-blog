import React from "react";
import Header from "../components/Header/Header";
import BannerPostView from "../components/Banner/BannerPostView";

import PostView from "../components/Postview/PostView";
import Footer from "../components/Footer/Footer";
import data from "../../src/data/data.json";
import { useParams } from "react-router-dom";

export default function PostViewpages() {
  const id = useParams().id;

  const post = data.posts.find((x) => x.id == id);

  return (
    <>
      <Header></Header>
      <BannerPostView mainBg={post.mainBg}></BannerPostView>
      <PostView post={post} users={data.users}></PostView>
      <Footer></Footer>
    </>
  );
}
