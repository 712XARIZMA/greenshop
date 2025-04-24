// Register.jsx
import React, { useState } from "react";
import { Modal, Input, Button, message } from "antd";
import axios from "axios";
import google from "../../../../../assets/svg/google.svg";
import facebook from "../../../../../assets/svg/facebook.svg";

const api = import.meta.env.VITE_API;
const token = import.meta.env.VITE_ACCESS_TOKEN;

const Register = ({ open, onClose }) => {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        `${api}/user/sign-up?access_token=${token}`,
        {
          name,
          surname,
          email,
          password,
        }
      );
      if (res.data?.success) {
        message.success("Muvaffaqiyatli ro‘yxatdan o‘tildi!");
        onClose();
      } else {
        message.error("Ro‘yxatdan o‘tishda xatolik");
      }
    } catch (err) {
      console.error("Xato:", err);
      message.error("Server xatoligi");
    }
  };

  return (
    <Modal
      open={open}
      onCancel={onClose}
      footer={null}
      style={{ width: 500, height: 600 }}
      bodyStyle={{ height: "500px", padding: "50px 100px" }}
    >
      <form onSubmit={handleRegister} className="flex flex-col gap-3">
        <h1 className="font-normal text-[13px] leading-[123%] text-[#3d3d3d]">
          Please fill the form to register.
        </h1>
        <div className="flex flex-col gap-4 items-end justify-end">
          <Input
            type="text"
            placeholder="Ismingiz"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="border w-[300px] h-10 rounded-[5px] font-normal text-sm text-[#3d3d3d] border-[#46a358]"
          />
          <Input
            type="text"
            placeholder="Familiyangiz"
            value={surname}
            onChange={(e) => setSurname(e.target.value)}
            required
            className="border w-[300px] h-10 rounded-[5px] font-normal text-sm text-[#3d3d3d] border-[#46a358]"
          />
          <Input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="border w-[300px] h-10 rounded-[5px] font-normal text-sm text-[#a5a5a5] border-[#46a358]"
          />
          <Input.Password
            placeholder="Parol"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
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
          Ro‘yxatdan o‘tish
        </Button>

        <div className="flex gap-2.5 items-center">
          <div className="border w-[90px] border-solid border-[#eaeaea]"></div>
          <h3 className="font-normal text-[12px] leading-[123%] text-[#3d3d3d]">
            Yoki kirish uchun
          </h3>
          <div className="border w-[90px] border-solid border-[#eaeaea]"></div>
        </div>

        <div className="flex flex-col gap-4 mt-6">
          <button className="border flex items-center justify-center gap-2.5 h-10 rounded-[5px] border-solid border-[#eaeaea] w-full">
            <img src={google} alt="" />
            Google orqali
          </button>
          <button className="border flex items-center justify-center gap-2.5 h-10 rounded-[5px] border-solid border-[#eaeaea] w-full">
            <img src={facebook} alt="" />
            Facebook orqali
          </button>
        </div>
      </form>
    </Modal>
  );
};

export default Register;
