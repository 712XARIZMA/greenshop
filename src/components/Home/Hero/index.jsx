import React from "react";
import { Carousel } from "antd";
import HeroImg from "../../../assets/png/hero.png";
import HeroImg2 from "../../../assets/png/hero2.png";

const contentStyle = {
  height: "450px",
  color: "#fff",
  background: "rgba(128,128,128,0.101)",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: "0 40px",
};

const Index = () => {
  return (
    <div className="my-3">
      <Carousel autoplay>
        <div>
          <div
            className="flex items-center justify-between relative"
            style={contentStyle}
          >
            <div className="left max-w-[575px] text-black flex flex-col gap-2 ">
              <h3 className="font-medium text-sm leading-[114%] tracking-widest uppercase text-[#3d3d3d]">
                Welcome to GreenShop
              </h3>
              <h1 className=" font-black text-[70px] leading-[100%] uppercase text-[#3d3d3d]">
                Let’s Make a Better{" "}
                <span className="text-[#46a358]">Planet</span>
              </h1>
              <p className="font-normal text-sm leading-[171%] text-[#727272]">
                We are an online plant shop offering a wide range of cheap and
                trendy plants. Use our plants to create a unique Urban Jungle.
                Order your favorite plants!
              </p>
              <button className="cursor-pointer border text-white bg-[#46a358] w-fit text-[16px] py-2 mt-9 px-6 rounded-[6px] ">
                SHOP NOW
              </button>
            </div>
            <div className="right ">
              <img className="w-[500px]  object-cover" src={HeroImg} alt="" />
              <img
                className="absolute w-[135px] bottom-4 "
                src={HeroImg2}
                alt=""
              />
            </div>
          </div>
        </div>
        <div>
          <div
            className="flex items-center justify-between relative"
            style={contentStyle}
          >
            <div className="left max-w-[575px] text-black flex flex-col gap-2 ">
              <h3 className="font-medium text-sm leading-[114%] tracking-widest uppercase text-[#3d3d3d]">
                Welcome to GreenShop
              </h3>
              <h1 className=" font-black text-[70px] leading-[100%] uppercase text-[#3d3d3d]">
                Let’s Make a Better{" "}
                <span className="text-[#46a358]">Planet</span>
              </h1>
              <p className="font-normal text-sm leading-[171%] text-[#727272]">
                We are an online plant shop offering a wide range of cheap and
                trendy plants. Use our plants to create a unique Urban Jungle.
                Order your favorite plants!
              </p>
              <button className="cursor-pointer border text-white bg-[#46a358] w-fit text-[16px] py-2 mt-9 px-6 rounded-[6px] ">
                SHOP NOW
              </button>
            </div>
            <div className="right ">
              <img className="w-[500px]  object-cover" src={HeroImg} alt="" />
              <img
                className="absolute w-[135px] bottom-4 "
                src={HeroImg}
                alt=""
              />
            </div>
          </div>
        </div>
        <div>
          <div
            className="flex items-center justify-between relative"
            style={contentStyle}
          >
            <div className="left max-w-[575px] text-black flex flex-col gap-2 ">
              <h3 className="font-medium text-sm leading-[114%] tracking-widest uppercase text-[#3d3d3d]">
                Welcome to GreenShop
              </h3>
              <h1 className=" font-black text-[70px] leading-[100%] uppercase text-[#3d3d3d]">
                Let’s Make a Better{" "}
                <span className="text-[#46a358]">Planet</span>
              </h1>
              <p className="font-normal text-sm leading-[171%] text-[#727272]">
                We are an online plant shop offering a wide range of cheap and
                trendy plants. Use our plants to create a unique Urban Jungle.
                Order your favorite plants!
              </p>
              <button className="cursor-pointer border text-white bg-[#46a358] w-fit text-[16px] py-2 mt-9 px-6 rounded-[6px] ">
                SHOP NOW
              </button>
            </div>
            <div className="right ">
              <img className="w-[500px]  object-cover" src={HeroImg} alt="" />
              <img
                className="absolute w-[135px] bottom-4 "
                src={HeroImg}
                alt=""
              />
            </div>
          </div>
        </div>
      </Carousel>
    </div>
  );
};

export default Index;
