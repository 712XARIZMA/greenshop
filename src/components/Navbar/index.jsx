import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom"; // ⬅️ useNavigate qo‘shildi
import Logo from "../../assets/svg/logo.svg";
import SearchIcon from "@mui/icons-material/Search";
import Tooltip from "@mui/material/Tooltip";
import { Button } from "antd";
import Tab from "../Home/Main/Register/Tab/index";
import { LoginOutlined } from "@ant-design/icons";
import { IoMdCart } from "react-icons/io";
import Cart from "./cart/index";
import AccountDetails from "../Home/Main/Register/AccountDetails";
const Index = () => {
  const [loading, setLoading] = useState(false);
  const [isTabOpen, setIsTabOpen] = useState(false);
  const [user, setUser] = useState(null);
  const [cartCount, setCartCount] = useState(0);
  const navigate = useNavigate(); // ⬅️ navigate yaratildi

  const openTab = () => setIsTabOpen(true);
  const closeTab = () => setIsTabOpen(false);

  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    setCartCount(cart.length);
  }, []);

  useEffect(() => {
    if (loading) {
      const timeout = setTimeout(() => setLoading(false), 2000);
      return () => clearTimeout(timeout);
    }
  }, [loading]);

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser) {
      setUser(storedUser);
    }
  }, []);

  return (
    <div className="flex items-center justify-between py-6 border-b-[#46A358] border-b border-solid">
      <div className="logo">
        <img src={Logo} alt="logo" />
      </div>

      <div className="links flex items-center gap-12">
        <Link to="/">
          <h1>Home</h1>
        </Link>
        <Link to="/Blog">
          <h1>Blog</h1>
        </Link>
      </div>

      <div className="buttons flex items-center gap-7">
        <button
          style={{
            fontSize: "22px",
            cursor: "pointer",
            color: "gray",
          }}
        >
          <SearchIcon className="hover:text-[#46a358] transition duration-300" />
        </button>

        <Link to={"/Cart"}>
          <button
            className="relative w-7 h-8"
            style={{
              fontSize: "22px",
              cursor: "pointer",
              color: "gray",
            }}
          >
            <IoMdCart className="hover:text-[#46a358] transition duration-300" />
            <h1 className="absolute top-0 right-0 text-[8px] bg-[#46a359] flex items-center justify-center text-center rounded-full text-white w-4 h-4">
              {cartCount}
            </h1>
          </button>
        </Link>

        <Tooltip title={user ? "Profile" : "Login"}>
          <Button
            type="primary"
            onClick={() => {
              if (user) {
                navigate("/account/details");
              } else {
                openTab();
              }
            }}
            style={{
              backgroundColor: "#46a358",
              color: "white",
              padding: "20px 17px",
              display: "flex",
              alignItems: "center",
              gap: "5px",
              fontSize: "16px",
              cursor: "pointer",
            }}
          >
            {user ? (
              user.name
            ) : (
              <>
                <LoginOutlined style={{ fontSize: "20px" }} /> Login
              </>
            )}
          </Button>
        </Tooltip>

        <Tab open={isTabOpen} onClose={closeTab} setUser={setUser} />
      </div>
    </div>
  );
};

export default Index;
