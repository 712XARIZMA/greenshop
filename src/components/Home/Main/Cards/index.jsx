import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import axios from "axios";
import LoadingCard from "../Cards/LoadingCard/index";
import { MdOutlineAddShoppingCart } from "react-icons/md";
import { FiHeart } from "react-icons/fi";
import { FaHeart } from "react-icons/fa6";

const FlowerCards = () => {
  const [flowers, setFlowers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchParams] = useSearchParams();
  const [likedFlowers, setLikedFlowers] = useState({});
  const [cartItems, setCartItems] = useState([]);

  const category =
    searchParams.get("category")?.toLowerCase().replace(/\s+/g, "-") ||
    "house-plants";

  const BASE_URL = import.meta.env.VITE_API;
  const API_KEY = import.meta.env.VITE_ACCESS_TOKEN;

  const getFlowers = async () => {
    try {
      const { data } = await axios.get(
        `${BASE_URL}/flower/category/${category}?access_token=${API_KEY}`
      );
      setFlowers(data.data);
    } catch (error) {
      console.error("Xatolik:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getFlowers();
  }, [category]);

  const toggleLike = (id) => {
    setLikedFlowers((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const addToCart = (flower) => {
    setCartItems((prev) => {
      const isAlreadyAdded = prev.some((item) => item._id === flower._id);
      if (!isAlreadyAdded) {
        const updated = [...prev, flower];
        localStorage.setItem("cart", JSON.stringify(updated));
        return updated;
      }
      return prev;
    });
  };

  return (
    <div className="flower-cards flex gap-6 p-4 flex-wrap">
      {loading
        ? Array.from({ length: 8 }).map((_, i) => <LoadingCard key={i} />)
        : flowers.map((flower) => (
            <div
              className="flower-card group flex flex-col bg-[#fbfbfb] h-full w-[250px] transition duration-300 hover:scale-[1.015] hover:shadow-[0_0_15px_3px_rgba(0,0,0,0.115)] shadow-[0_0_30px_0px_rgba(0,0,0,0.115)] rounded p-4 relative"
              key={flower._id}
            >
              <div className="img">
                <img
                  className="w-full h-60 object-cover rounded"
                  src={flower.main_image}
                  alt={flower.title}
                />
              </div>
              <h3 className="mt-3 mb-1.5 text-lg font-bold text-[#3d3d3d]">
                {flower.title}
              </h3>
              <div className="flex relative items-center gap-2.5">
                {flower.discount_price ? (
                  <>
                    <p className="line-through font-normal text-lg text-[#a5a5a5]">
                      ${flower.price}
                    </p>
                    <p className="text-lg font-bold text-green-500">
                      ${flower.discount_price}
                    </p>
                  </>
                ) : (
                  <p className="text-lg font-bold">${flower.price}</p>
                )}
              </div>

              {/* Hoverda ko‘rinadigan actions */}
              <div className="actions absolute bottom-5 right-6 flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <button
                  onClick={() => addToCart(flower)}
                  className="cursor-pointer text-xl hover:scale-[1.050] active:scale-[1] transition duration-300 hover:text-green-600"
                >
                  <MdOutlineAddShoppingCart />
                </button>
                <button
                  onClick={() => toggleLike(flower._id)}
                  className="cursor-pointer text-xl hover:scale-[1.050] active:scale-[1] transition duration-300 hover:text-red-500"
                >
                  {likedFlowers[flower._id] ? (
                    <FaHeart className="text-red-500" />
                  ) : (
                    <FiHeart />
                  )}
                </button>
              </div>
            </div>
          ))}
    </div>
  );
};
export default FlowerCards;
