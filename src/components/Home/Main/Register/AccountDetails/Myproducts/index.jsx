import React from "react";
import Navbar from "../../../../../Navbar";
import Footer from "../../../../../Footer/index";
import { Link, useLocation } from "react-router-dom";
import { FaUser } from "react-icons/fa";
import { MdOutlineShoppingBag } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa";
import { IoSpeedometerOutline } from "react-icons/io5";
import { IoMdLogOut } from "react-icons/io";

const Myproducts = () => {
  const location = useLocation();
  const isActive = (path) => location.pathname === path;

  return (
    <div className="max-w-[80%] m-auto">
      <Navbar />
      <div className="my-20">
        <div className="left max-w-[250px] p-3">
          <h1 className="text-[20px] font-bold">My Account</h1>
          <div className="btns flex flex-col mt-3 gap-3 pb-[40px] border-green-600 border-b">
            {/* Account Details */}
            <Link to="/account/details">
              <button
                className={`py-2 text-[16px] flex items-center gap-3 cursor-pointer pl-3 ${
                  isActive("/account/details")
                    ? "text-green-600 border-l-4 border-green-600"
                    : "text-black hover:text-green-600 hover:border-l-4 hover:border-green-600"
                }`}
              >
                <FaUser size={"20px"} />
                Account Details
              </button>
            </Link>

            {/* My Products */}
            <Link to="/account/products">
              <button
                className={`py-2 text-[16px] flex items-center gap-3 cursor-pointer pl-3 ${
                  isActive("/account/products")
                    ? "text-green-600 border-l-4 border-green-600"
                    : "text-black hover:text-green-600 hover:border-l-4 hover:border-green-600"
                }`}
              >
                <MdOutlineShoppingBag size={"20px"} />
                My Products
              </button>
            </Link>

            {/* Address */}
            <Link to="/account/address">
              <button
                className={`py-2 text-[16px] flex items-center gap-3 cursor-pointer pl-3 ${
                  isActive("/account/address")
                    ? "text-green-600 border-l-4 border-green-600"
                    : "text-black hover:text-green-600 hover:border-l-4 hover:border-green-600"
                }`}
              >
                <FaLocationDot size={"20px"} />
                Address
              </button>
            </Link>

            {/* Wishlist */}
            <Link to="/account/wishlist">
              <button
                className={`py-2 text-[16px] flex items-center gap-3 cursor-pointer pl-3 ${
                  isActive("/account/wishlist")
                    ? "text-green-600 border-l-4 border-green-600"
                    : "text-black hover:text-green-600 hover:border-l-4 hover:border-green-600"
                }`}
              >
                <FaRegHeart size={"20px"} />
                Wishlist
              </button>
            </Link>

            {/* Track Order */}
            <Link to="/account/track-order">
              <button
                className={`py-2 text-[16px] flex items-center gap-3 cursor-pointer pl-3 ${
                  isActive("/account/track-order")
                    ? "text-green-600 border-l-4 border-green-600"
                    : "text-black hover:text-green-600 hover:border-l-4 hover:border-green-600"
                }`}
              >
                <IoSpeedometerOutline size={"20px"} />
                Track Order
              </button>
            </Link>
          </div>

          {/* Logout */}
          <Link to="/logout">
            <button className="text-red-600 pt-5 text-[16px] flex items-center gap-3 cursor-pointer pl-3">
              <IoMdLogOut size={"20px"} />
              Log Out
            </button>
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Myproducts;
