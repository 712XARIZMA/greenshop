import axios from "axios";
import React, { useEffect, useState } from "react";

const api = import.meta.env.VITE_API;

const Category = () => {
  const [data, setData] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0);

  const getData = async () => {
    const res = await axios.get(
      `${api}/flower/category?access_token=6506e8bd6ec24be5de357927`
    );
    setData(res?.data?.data);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="">
      <h1 className="font-bold text-lg leading-[89%] text-[#3d3d3d]">
        Categories
      </h1>
      <div className="py-[7px] px-3">
        {data?.map(({ title, count }, index) => {
          const isActive = activeIndex == index;

          return (
            <div
              key={index}
              className="flex items-center justify-between cursor-pointer"
              onClick={() => setActiveIndex(index)}
            >
              <h2
                className={`text-[15px] leading-[267%] ${
                  isActive
                    ? "font-bold text-[#46a358]"
                    : "font-normal text-[#3d3d3d]"
                }`}
              >
                {title}
              </h2>
              <h3
                className={`text-[15px] leading-[267%] ${
                  isActive
                    ? "font-bold text-[#46a358]"
                    : "font-normal text-[#3d3d3d]"
                }`}
              >
                ({count})
              </h3>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Category;
