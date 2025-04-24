import React, { useState } from "react";
import { Modal, Input, Button, message } from "antd";
import axios from "axios";
import google from "../../../../../assets/svg/google.svg";
import facebook from "../../../../../assets/svg/facebook.svg";

const api = import.meta.env.VITE_API;
const token = import.meta.env.VITE_ACCESS_TOKEN;

const Login = ({ open, onClose }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        `${api}/user/sign-in?access_token=${token}`,
        { email, password }
      );
      if (res.data?.data?.token) {
        localStorage.setItem("token", res.data.data.token);
        message.success("Muvaffaqiyatli kirildi!");
        onClose();
      } else {
        message.error("Login xato");
      }
    } catch (err) {
      console.error("Xato:", err);
      message.error("Server xatoligi");
    }
  };

  return (
    <div>
      <Modal
        open={open}
        onCancel={onClose}
        footer={null}
        style={{ width: 500, height: 600 }}
        bodyStyle={{ height: "500px", padding: "50px 100px" }}
      >
        <form onSubmit={handleLogin} className="flex flex-col gap-3">
          <h1 className=" font-normal text-[13px] leading-[123%] text-[#3d3d3d]">
            Enter your username and password to login.
          </h1>
          <div className="flex flex-col gap-4 items-end justify-end">
            <Input
              type="email"
              placeholder="almamun_uxui@outlook.com"
              value={email}
              className="border w-[300px] h-10 rounded-[5px] font-normal text-sm text-[#a5a5a5] border-[#46a358]"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <Input.Password
              placeholder="***********"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="border w-[300px] h-10 rounded-[5px] font-normal text-sm text-[#a5a5a5] border-[#46a358] hover:border-[#46a358] focus:border-[#46a358]"
            />

            <h3 className="font-normal text-sm leading-[114%] text-[#46a358]">
              Forgot Password?
            </h3>
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
            Login
          </Button>
          <div className="flex gap-2.5 items-center">
            <div className="border w-[90px] border-solid border-[#eaeaea]"></div>
            <h3 className="font-normal text-[12px] leading-[123%] text-[#3d3d3d]">
              Or login with
            </h3>
            <div className="border w-[90px] border-solid border-[#eaeaea]"></div>
          </div>
          <div className="flex flex-col gap-4 mt-6">
            <button className="border flex items-center justify-center gap-2.5 h-10 rounded-[5px] border-solid border-[#eaeaea] w-full">
              <img src={google} alt="" />
              Login with Google
            </button>
            <button className="border flex items-center justify-center gap-2.5 h-10 rounded-[5px] border-solid border-[#eaeaea] w-full">
              <img src={facebook} alt="" />
              Login with Facebook
            </button>
          </div>
        </form>
      </Modal>
    </div>
  );
};

export default Login;
