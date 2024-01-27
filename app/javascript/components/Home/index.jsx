import React from "react";
import Navbar from "./Navbar/Navbar";
import Banner from "./Banner/Banner";
import Stories from "./Stories/Stories";
import Blog from "./Blog/Blog";
import Footer from "./Footer/Footer";

const index = () => {
  return (
    <>
      <Navbar />
      <Banner/>
      <Blog/>
      <Stories/>
      <Footer/>
    </>
  );
};

export default index;
