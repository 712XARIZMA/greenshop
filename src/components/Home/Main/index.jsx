import React from "react";
import Categories from "./Categories/index";
import Cards from "../../Home/Main/Cards/index";

const index = () => {
  return (
    <div>
      <div className="flex justify-between gap-9 items-start ">
        <Categories />
        <Cards />
      </div>
    </div>
  );
};

export default index;
