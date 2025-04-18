import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const api = import.meta.env.VITE_API;
const token = import.meta.env.VITE_ACCESS_TOKEN;

const FlowerCards = () => {
  const [flowers, setFlowers] = useState([]);

  const getFlowers = async () => {
    try {
      const res = await axios.get(
        `${api}/flower/category/house-plants?access_token=${token}`
      );
      setFlowers(res.data.data);
    } catch (error) {
      console.error("Xatolik:", error);
    }
  };

  useEffect(() => {
    getFlowers();
  }, []);

  return (
    <div className="">
      <div className="title p-4 flex items-center justify-between">
        <div className="left flex items-center gap-4">
          <h1>All Plants</h1>
          <h1>New Arrivals</h1>
          <h1>Sale</h1>
        </div>
        <div className="right">Sort by</div>
      </div>
      <div className="flex flex-wrap  gap-8 p-4">
        {flowers.map(({ _id, main_image, title, price, discount_price }) => (
          <div
            key={_id}
            className=" bg-[#fbfbfb] w-[258px] transition-[5s] hover:scale-[1.015] hover:shadow-[0_0_15px_3px_rgba(0,0,0,0.115)] shadow-[0_0_30px_0px_rgba(0,0,0,0.115)] rounded p-4"
          >
            <img
              src={main_image}
              alt={title}
              className="w-full h-60 object-cover rounded"
            />
            <h2 className="mt-3 mb-1.5 text-lg font-bold text-[#3d3d3d]">
              {title}
            </h2>
            <div className="flex items-center gap-2.5">
              <p className=" font-bold text-lg leading-[89%] text-[#46a358]">
                ${price}
              </p>
              <p className="line-through font-normal text-lg leading-[89%] text-[#a5a5a5]">
                ${discount_price}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FlowerCards;
