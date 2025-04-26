import React, { useState } from "react";
import { Input, Button, message } from "antd";
import axios from "axios";
import google from "../../../../../assets/svg/google.svg";
import facebook from "../../../../../assets/svg/facebook.svg";
import { signInWithGoogle } from "../../../../../../firebase";

const api = import.meta.env.VITE_API;
const token = import.meta.env.VITE_ACCESS_TOKEN;

const SignUp = ({ onClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    surname: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Yuborilayotgan ma'lumotlar:", formData);
    try {
      const res = await axios.post(
        `${api}/user/sign-up?access_token=${token}`,
        formData
      );

      if (res.data?.success) {
        message.success("Muvaffaqiyatli ro'yxatdan o'tdingiz!");
        onClose();
      } else {
        message.error("Ro‘yxatdan o‘tishda xatolik yuz berdi.");
      }
    } catch (err) {
      console.error("register error:", err);
      message.error("Server bilan bog'lanishda xatolik.");
    }
    console.log("Server javobi:", res.data);
    const res = await axios.post(
      `${api}/user/sign-up?access_token=${token}`,
      formData
    );
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="flex flex-col gap-3">
        <h1 className="font-normal text-[13px] leading-[123%] text-[#3d3d3d]">
          Enter your email and password to register.
        </h1>

        <div className="flex flex-col gap-4 items-end justify-end">
          <Input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            className="border w-[300px] h-10 rounded-[5px] font-normal text-sm text-[#a5a5a5] border-[#46a358]"
            onChange={handleChange}
            required
          />
          <Input
            type="text"
            name="surname"
            placeholder="Surname"
            value={formData.surname}
            className="border w-[300px] h-10 rounded-[5px] font-normal text-sm text-[#a5a5a5] border-[#46a358]"
            onChange={handleChange}
            required
          />
          <Input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            className="border w-[300px] h-10 rounded-[5px] font-normal text-sm text-[#a5a5a5] border-[#46a358]"
            onChange={handleChange}
            required
          />
          <Input.Password
            name="password"
            placeholder="password"
            value={formData.password}
            onChange={handleChange}
            required
            className="border w-[300px] h-10 rounded-[5px] font-normal text-sm text-[#a5a5a5] border-[#46a358] hover:border-[#46a358] focus:border-[#46a358]"
          />
        </div>

        <Button
          style={{
            backgroundColor: "#46a358",
            height: "45px",
            color: "white",
            border: "none",
            fontWeight: 700,
            fontSize: "16px",
            lineHeight: "100%",
          }}
          htmlType="submit"
        >
          Register
        </Button>
      </form>
      <div className="flex gap-2.5 items-center justify-center">
        <div className="border w-[90px] border-solid border-[#eaeaea]"></div>
        <h3 className="font-normal text-[12px] leading-[123%] text-[#3d3d3d]">
          Or login with
        </h3>
        <div className="border w-[90px] border-solid border-[#eaeaea]"></div>
      </div>
      <div className="flex flex-col gap-4 mt-6">
        <button
          onClick={() => signInWithGoogle()}
          className="border flex items-center justify-center gap-2.5 h-10 rounded-[5px] border-solid border-[#eaeaea] w-full"
        >
          <img src={google} alt="" />
          Login with Google
        </button>
        <button className="border flex items-center justify-center gap-2.5 h-10 rounded-[5px] border-solid border-[#eaeaea] w-full">
          <img src={facebook} alt="" />
          Login with Facebook
        </button>
      </div>
    </div>
  );
};

export default SignUp;
