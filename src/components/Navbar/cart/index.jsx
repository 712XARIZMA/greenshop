import React, { useState, useEffect } from "react";
import Navbar from "../index";
import Footer from "../../Footer/index";
import { Link } from "react-router-dom";

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCartItems(storedCart);
  }, []);

  const calculateTotal = (item) => {
    const quantity = item.quantity || 1;
    const price = item.discount_price || item.price;

    if (!price) return 0;
    return price * quantity;
  };
  const calculateSubtotal = () => {
    return cartItems.reduce((total, item) => {
      return total + calculateTotal(item);
    }, 0);
  };

  const increaseQuantity = (item) => {
    const updatedCart = cartItems.map((cartItem) =>
      cartItem._id === item._id
        ? { ...cartItem, quantity: (cartItem.quantity || 1) + 1 }
        : cartItem
    );
    setCartItems(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const decreaseQuantity = (item) => {
    if (item.quantity > 1) {
      const updatedCart = cartItems.map((cartItem) =>
        cartItem._id === item._id
          ? { ...cartItem, quantity: Math.max(1, cartItem.quantity - 1) }
          : cartItem
      );
      setCartItems(updatedCart);
      localStorage.setItem("cart", JSON.stringify(updatedCart));
    }
  };

  return (
    <div className="max-w-[80%] m-auto">
      <Navbar />
      <h1 className="mt-5 text-[14px]">
        <Link to={"/"}>
          <span className="cursor-pointer text-gray-400">Home / </span>
        </Link>
        Shopping Card
      </h1>
      <div className="flex  mt-20 items-start justify-between">
        <table className="w-full max-w-[782px]">
          <thead>
            <tr className="border-b">
              <th className="text-start p-2">Products</th>
              <th className="text-start p-2">Price</th>
              <th className="text-start p-2">Quantity</th>
              <th className="text-start p-2">Total</th>
            </tr>
          </thead>
          <tbody>
            {cartItems.length === 0 ? (
              <tr>
                <td colSpan="4" className="text-center p-4">
                  404
                </td>
              </tr>
            ) : (
              cartItems.map((item) => (
                <tr key={item._id}>
                  <td className="flex items-center  p-2">
                    <img className="w-20" src={item.main_image} alt="" />
                    {item.title}
                  </td>
                  <td className="p-2">
                    ${item.discount_price ? item.discount_price : item.price}
                  </td>
                  <td className="p-2   ">
                    <div className="flex items-center gap-4">
                      <button
                        onClick={() => decreaseQuantity(item)}
                        className="bg-green-500 flex items-center justify-center  text-white  w-5 h-5  rounded-full"
                      >
                        -
                      </button>
                      <span className="inline">{item.quantity || 1}</span>
                      <button
                        onClick={() => increaseQuantity(item)}
                        className="bg-green-500 flex items-center justify-center text-white  w-5 h-5  text-center rounded-full"
                      >
                        +
                      </button>
                    </div>
                  </td>
                  <td className="p-2">${calculateTotal(item).toFixed(2)}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
        <div className="total ml-10 ">
          <h1 className="text-lg font-bold mb-4">Cart Total</h1>

          <form className="mb-4 border border-green-600 shadow-md rounded-[6px] flex items-center h-10 overflow-hidden">
            <input
              className="flex-grow px-3 py-2 focus:outline-none"
              placeholder="Enter coupon code here..."
              type="text"
            />
            <button
              type="submit"
              className="bg-[#46A358] text-white px-4 h-full"
            >
              Apply
            </button>
          </form>

          <div className=" flex flex-col gap-4 rounded">
            <div className="flex justify-between mb-2">
              <span className="text-[15px] leading-[107%] text-[#3d3d3d]">
                Subtotal:
              </span>
              <span className="font-semibold">
                ${calculateSubtotal().toFixed(2)}
              </span>
            </div>
            <div className="flex justify-between mb-2">
              <span className="text-[15px] leading-[107%] text-[#3d3d3d]">
                Coupon Discount:
              </span>
              <span className="font-semibold">-</span>
            </div>
            <div className="flex justify-between mb-2">
              <span className="text-[15px] leading-[107%] text-[#3d3d3d]">
                Shiping:
              </span>
              <span className="font-semibold">Today free</span>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Cart;
