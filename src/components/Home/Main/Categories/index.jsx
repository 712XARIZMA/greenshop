import React from "react";

import Category from "./Category";
import PriceRange from "./PriceRange/index";

const index = () => {
  return (
    <div>
      <div className="flex flex-col  gap-9  py-3.5 px-4.5 w-[310px] bg-[#fbfbfb]  ">
        <Category />
        <PriceRange />
      </div>
    </div>
  );
};

export default index;
