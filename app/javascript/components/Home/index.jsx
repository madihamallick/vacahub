import React, { useEffect } from "react";
import Navbar from "./Navbar/Navbar";
import Banner from "./Banner/Banner";
import Stories from "./Stories/Stories";
import Blog from "./Blog/Blog";
import Footer from "./Footer/Footer";
import { useNavigate } from "react-router";

const index = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem("token")) {
      navigate("/signin");
    }
  }, []);

  return (
    <>
      <Navbar />
      <Banner />
      <Blog />
      <Stories />
      <Footer />
    </>
  );
};

export default index;
