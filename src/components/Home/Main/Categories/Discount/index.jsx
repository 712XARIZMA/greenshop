import axios from "axios";
import React, { useEffect, useState } from "react";

const api = import.meta.env.VITE_API;

const Discount = () => {
  const [discount, setDiscount] = useState(null);

  const getData = async () => {
    try {
      const res = await axios.get(
        `${api}/features/discount?access_token=6506e8bd6ec24be5de357927`
      );
      setDiscount(res?.data?.data || null);
    } catch (err) {
      console.error("Error fetching discount data:", err);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  if (!discount) return <p>Loading...</p>;

  return (
    <div className=" flex flex-col gap-2 bg-[linear-gradient(180deg,rgba(70,163,88,0.1)_0%,rgba(70,163,88,0.03)_100%)] p-5">
      <h2 className="font-normal text-[35px] text-center leading-[127%] text-[#46a358]">
        {discount.title}
      </h2>
      <p className="font-bold text-[16px] leading-[70%] text-center text-[#3d3d3d]">
        Discount up to:{discount.discoount_up_to}%
      </p>
      <img className=" mt-5" src={discount.poster_image_url} />
    </div>
  );
};

export default Discount;
