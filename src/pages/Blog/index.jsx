import React from "react";
import Navbar from "../../components/Navbar/index";
import Footer from "../../components/Footer/index";
import AddToCart from "../../components/Navbar/cart";

const index = () => {
  return (
    <div className="max-w-[80%] m-auto">
      <AddToCart />
    </div>
  );
};

export default index;
