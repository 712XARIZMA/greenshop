import React from "react";
import AcceptImg from "../../../assets/png/weaccept.png";
const index = () => {
  return (
    <div>
      <div className=" flex items-start justify-between py-8 px-6 bg-[#fbfbfb]">
        <div className="myaccount flex flex-col gap-2">
          <h1 className="font-bold text-lg leading-[89%] text-[#3d3d3d]">
            My Account
          </h1>
          <p>My Account</p>
          <p>Address</p>
          <p>Wishlist</p>
        </div>
        <div className="categories flex flex-col gap-2">
          <h1 className="font-bold text-lg leading-[89%] text-[#3d3d3d]">
            Categories
          </h1>
          <p>House Plants</p>
          <p>Potter Plants</p>
          <p>Seeds</p>
          <p>Small Plants</p>
          <p>Accessories</p>
        </div>
        <div className="socialmedia flex flex-col gap-2 pr-40">
          <div className="top mb-8">
            <h1 className="font-bold text-lg mb-5 leading-[89%] text-[#3d3d3d]">
              Social Media
            </h1>
            <div className="flex items-center gap-2.5">
              <button className="flex items-center w-[30px] h-fit justify-center p-[7px]  border rounded border-solid border-[rgba(70,163,88,0.2)] ">
                <i className="fa-brands fa-facebook-f text-[16px] text-[rgba(70,163,88,0.6)]"></i>
              </button>

              <button className="flex items-center w-fit h-fit justify-center p-[7px]  border rounded border-solid border-[rgba(70,163,88,0.2)] ">
                <i className="fa-brands fa-instagram text-[16px] text-[rgba(70,163,88,0.6)]"></i>
              </button>
              <button className="flex items-center w-fit h-fit justify-center p-[7px]  border rounded border-solid border-[rgba(70,163,88,0.2)] ">
                <i className="fa-brands fa-twitter text-[16px] text-[rgba(70,163,88,0.6)]"></i>
              </button>
              <button className="flex items-center w-fit h-fit justify-center p-[7px]  border rounded border-solid border-[rgba(70,163,88,0.2)] ">
                <i className="fa-brands fa-linkedin-in text-[16px] text-[rgba(70,163,88,0.6)]"></i>
              </button>
              <button className="flex items-center w-fit h-fit justify-center p-[7px]  border rounded border-solid border-[rgba(70,163,88,0.2)] ">
                <i className="fa-brands fa-youtube text-[16px] text-[rgba(70,163,88,0.6)]"></i>
              </button>
            </div>
          </div>
          <div className="bottom flex flex-col gap-2">
            <h1 className="font-bold text-lg mb-4 leading-[89%] text-[#3d3d3d]">
              We accept
            </h1>
            <img className="w-[224px]" src={AcceptImg} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
