import React, { useEffect } from "react";
import Navbar from "../../../../Navbar";
import Footer from "../../../../Footer";
import { Link, useLocation } from "react-router-dom";
import { FaUser, FaRegHeart } from "react-icons/fa";
import { MdOutlineShoppingBag } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { IoSpeedometerOutline } from "react-icons/io5";
import { IoMdLogOut } from "react-icons/io";
import { UploadOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import { Button, message, Upload, Form, Input } from "antd";

const AccountDetails = () => {
  const [form] = Form.useForm();

  const location = useLocation();
  const isActive = (path) => location.pathname === path;

  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem("user"));
    if (userData) {
      form.setFieldsValue({
        firstname: userData.name,
        lastname: userData.surname,
        email: userData.email,
        phone: userData.phone || "",
        username: userData.username || "",
      });
    }
  }, [form]);
  const navigate = useNavigate();

  return (
    <div className="max-w-[80%] m-auto">
      <Navbar />
      <div className="my-20 flex gap-15 items-start">
        <div className="left w-[250px] p-3">
          <h1 className="text-[20px] font-bold">My Account</h1>
          <div className="btns flex flex-col mt-3 gap-3 pb-[40px] border-green-600 border-b">
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

            <Link to="/account/products">
              <button
                className={`py-2 text-[16px] flex items-center gap-3 cursor-pointer pl-3 ${
                  isActive("/account/products")
                    ? "text-green-600 border-l-4 border-green-600"
                    : "hover:text-green-600 hover:border-l-4 border-green-600"
                }`}
              >
                <MdOutlineShoppingBag size={"20px"} />
                My Products
              </button>
            </Link>

            <Link to="/account/address">
              <button
                className={`py-2 text-[16px] flex items-center gap-3 cursor-pointer pl-3 ${
                  isActive("/account/address")
                    ? "text-green-600 border-l-4 border-green-600"
                    : "hover:text-green-600 hover:border-l-4 border-green-600"
                }`}
              >
                <FaLocationDot size={"20px"} />
                Address
              </button>
            </Link>

            <Link to="/account/wishlist">
              <button
                className={`py-2 text-[16px] flex items-center gap-3 cursor-pointer pl-3 ${
                  isActive("/account/wishlist")
                    ? "text-green-600 border-l-4 border-green-600"
                    : "hover:text-green-600 hover:border-l-4 border-green-600"
                }`}
              >
                <FaRegHeart size={"20px"} />
                Wishlist
              </button>
            </Link>

            <Link to="/account/track-order">
              <button
                className={`py-2 text-[16px] flex items-center gap-3 cursor-pointer pl-3 ${
                  isActive("/account/track-order")
                    ? "text-green-600 border-l-4 border-green-600"
                    : "hover:text-green-600 hover:border-l-4 border-green-600"
                }`}
              >
                <IoSpeedometerOutline size={"20px"} />
                Track Order
              </button>
            </Link>
          </div>

          <button
            onClick={() => {
              localStorage.clear();
              navigate("/");
            }}
            className="text-red-600 pt-5 text-[16px] flex items-center gap-3 cursor-pointer pl-3"
          >
            <IoMdLogOut size={"20px"} />
            Log Out
          </button>
        </div>

        <div className="right w-full">
          <Form
            form={form}
            name="wrap"
            layout="vertical"
            onFinish={(values) => {
              console.log("Submitted:", values);

              const updatedUserData = {
                ...JSON.parse(localStorage.getItem("user")),
                ...values,
              };
              localStorage.setItem("user", JSON.stringify(updatedUserData));

              message.success("Account details updated!");
              window.location.reload();
            }}
            className="grid grid-cols-2 gap-4 max-w-[800px]"
          >
            <Form.Item
              className="w-full"
              label="First Name"
              name="firstname"
              rules={[{ required: true, message: "First name is required" }]}
            >
              <Input className="w-full" />
            </Form.Item>

            <Form.Item
              className="w-full"
              label="Last Name"
              name="lastname"
              rules={[{ required: true, message: "Last name is required" }]}
            >
              <Input className="w-full" />
            </Form.Item>

            <Form.Item
              className="w-full"
              label="Email"
              name="email"
              rules={[
                { required: true, type: "email", message: "Enter valid email" },
              ]}
            >
              <Input className="w-full" />
            </Form.Item>

            <Form.Item
              className="w-full"
              label="Phone"
              name="phone"
              rules={[{ required: true, message: "Phone number is required" }]}
            >
              <Input className="w-full" />
            </Form.Item>

            <Form.Item
              className="w-full"
              label="Username"
              name="username"
              rules={[{ required: true, message: "Username is required" }]}
            >
              <Input className="w-full" />
            </Form.Item>

            <Form.Item className="w-full">
              <Upload>
                <Button icon={<UploadOutlined />}>Click to Upload</Button>
              </Upload>
            </Form.Item>

            <Form.Item className="col-span-2">
              <Button type="primary" htmlType="submit">
                Save Changes
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AccountDetails;
