import React from "react";

import Category from "./Category/index";
import PriceRange from "./PriceRange/index";
import Sizes from "./Sizes/index";
import Discount from "./Discount/index";

const index = () => {
  return (
    <div>
      <div className="flex flex-col  gap-9  py-3.5 px-4.5 w-[310px] bg-[#fbfbfb]  ">
        <Category />
        <PriceRange />
        <Sizes />
        <Discount />
      </div>
    </div>
  );
};

export default index;
