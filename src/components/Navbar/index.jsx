import React from "react";
import Logo from "../../assets/svg/logo.svg";
import { Link } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import LoginIcon from "@mui/icons-material/Login";

const Index = () => {
  const [loading, setLoading] = React.useState(false);

  React.useEffect(() => {
    let timeout;
    if (loading) {
      timeout = setTimeout(() => {
        setLoading(false);
      }, 2000);
    }
    return () => clearTimeout(timeout);
  }, [loading]);

  return (
    <div className="flex items-center justify-between  py-6 border-b-[#46A358] border-b border-solid">
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
        <button className="cursor-pointer" title="Search">
          <SearchIcon />
        </button>
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
          <button className="border bg-[#46A358] border-none text-white py-2 px-4 rounded-[6px] flex items-center gap-1">
            <LoginIcon />
            Login
          </button>
        </Tooltip>
      </div>
    </div>
  );
};

export default Index;
