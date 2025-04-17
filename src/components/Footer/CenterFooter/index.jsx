import React from "react";
import Logo from "../../../assets/svg/logo.svg";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import EmailIcon from "@mui/icons-material/Email";
import CallIcon from "@mui/icons-material/Call";

const index = () => {
  return (
    <div>
      <div className="bg-[rgba(70,163,88,0.1)] w-full flex items-center py-7 px-6 gap-17">
        <div className="logo">
          <img src={Logo} alt="" />
        </div>
        <div className="location flex items-center gap-2">
          <LocationOnIcon />
          70 West Buckingham Ave. <br /> Farmingdale, NY 11735
        </div>
        <div className="contact flex items-center gap-2.5">
          <EmailIcon />
          <a href="mailto:contact@greenshop.com">contact@greenshop.com</a>
        </div>
        <div className="call flex items-center gap-2">
          <CallIcon />
          <a href="tel:+88 01911 717 490">+88 01911 717 490</a>
        </div>
      </div>
    </div>
  );
};

export default index;
