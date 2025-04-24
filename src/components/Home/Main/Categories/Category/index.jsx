import axios from "axios";
import React, { useEffect, useState } from "react";

const api = import.meta.env.VITE_API;

const Category = () => {
  const [data, setData] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  const getData = async () => {
    try {
      const res = await axios.get(
        `${api}/flower/category?access_token=6506e8bd6ec24be5de357927`
      );
      setData(res?.data?.data);
    } catch (err) {
      console.error("Error data", err);
    } finally {
      setIsLoading(false);
    }
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
        {isLoading
          ? Array.from({ length: 9 }).map((_, i) => (
              <LoadingCategoryItem key={i} />
            ))
          : data?.map(({ title, count }, index) => {
              const isActive = activeIndex === index;
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

const LoadingCategoryItem = () => (
  <div className="flex items-center h-[40px] justify-between py-2 animate-pulse">
    <div className="bg-gray-200 h-4 w-24 rounded" />
    <div className="bg-gray-200 h-4 w-10 rounded" />
  </div>
);
