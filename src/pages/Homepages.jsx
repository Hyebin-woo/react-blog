import React from "react";
import Header from "../components/Header/Header";
import Banner from "../components/Banner/Banner";
import Main from "../components/Main/Main";
import Footer from "../components/Footer/Footer";
import data from "../../src/data/data.json";

export default function Homepages() {
  return (
    <>
      <Header />
      <Banner />
      <Main posts={data.posts} users={data.users} />
      <Footer />
    </>
  );
}
