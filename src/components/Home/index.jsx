import React from "react";
import Navbar from "../Navbar/index";
import Hero from "../Home/Hero/index";
import Footer from "../Footer/index";

const index = () => {
  return (
    <div className="max-w-[90%] mx-auto">
      <Navbar />
      <Hero />
      <Footer />
    </div>
  );
};

export default index;
