import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/svg/logo.svg";
import SearchIcon from "@mui/icons-material/Search";
import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Button } from "antd";
import Tab from "../Home/Main/Register/Tab/index";
import { LoginOutlined } from "@ant-design/icons";

const Index = () => {
  const [loading, setLoading] = useState(false);
  const [isTabOpen, setIsTabOpen] = useState(false);

  const openTab = () => setIsTabOpen(true);
  const closeTab = () => setIsTabOpen(false);

  useEffect(() => {
    if (loading) {
      const timeout = setTimeout(() => setLoading(false), 2000);
      return () => clearTimeout(timeout);
    }
  }, [loading]);

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
        <Tooltip title="Search">
          <button className="cursor-pointer">
            <SearchIcon />
          </button>
        </Tooltip>

        <Tooltip title="Cart">
          <IconButton onClick={() => setLoading(true)}>
            {loading ? (
              <div className="animate-spin h-5 w-5 border-2 border-black border-t-transparent rounded-full"></div>
            ) : (
              <ShoppingCartIcon />
            )}
          </IconButton>
        </Tooltip>

        <Tooltip title="Login">
          <Button
            type="primary"
            onClick={openTab}
            style={{
              backgroundColor: "#46a358",
              color: "white",
              padding: "20px 17px",
              display: "flex",
              alignItems: "center",
              gap: "5px",
              fontSize: "16px",
            }}
          >
            <LoginOutlined
              style={{
                fontSize: "20px",
              }}
            />
            Login
          </Button>
        </Tooltip>
        <Tab open={isTabOpen} onClose={closeTab} />
      </div>
    </div>
  );
};

export default Index;
