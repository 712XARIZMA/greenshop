import React from "react";
import Navbar from "../Navbar/index";
import Hero from "../Home/Hero/index";
import Footer from "../Footer/index";
import Main from "../Home/Main/index";

const index = () => {
  return (
    <div className="max-w-[80%] mx-auto">
      <Navbar />
      <Hero />
      <Main />
      <Footer />
    </div>
  );
};

export default index;
