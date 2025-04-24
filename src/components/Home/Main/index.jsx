import React from "react";
import Categories from "./Categories/index";
import Cards from "../../Home/Main/Cards/index";
import Register from "../../Home/Main/Register/index";

const index = () => {
  return (
    <div>
      <div className="flex justify-between gap-9 items-start ">
        <Categories />
        <Cards />
        <Register />
      </div>
    </div>
  );
};

export default index;
