import React from "react";

const index = () => {
  return (
    <div className="">
      <h1 className=" font-bold text-lg leading-[89%] text-[#3d3d3d]">Size</h1>
      <div className="px-3 py-2">
        <div className="flex items-center justify-between ">
          <h3 className="font-normal text-[15px] leading-[267%] text-[#3d3d3d]">
            Small
          </h3>
          <span className="font-normal text-[15px] leading-[267%] text-[#3d3d3d]">
            (119)
          </span>
        </div>
        <div className="flex items-center justify-between">
          <h3 className="font-normal text-[15px] leading-[267%] text-[#3d3d3d]">
            Medium
          </h3>
          <span className="font-normal text-[15px] leading-[267%] text-[#3d3d3d]">
            (86)
          </span>
        </div>
        <div className="flex items-center justify-between">
          <h3 className="font-normal text-[15px] leading-[267%] text-[#3d3d3d]">
            Large
          </h3>
          <span className="font-normal text-[15px] leading-[267%] text-[#3d3d3d]">
            (78)
          </span>
        </div>
      </div>
    </div>
  );
};

export default index;
