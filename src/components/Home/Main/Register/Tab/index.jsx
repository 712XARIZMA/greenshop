// src/components/Home/Main/Register/TabModal.jsx
import React, { useState } from "react";
import { Modal, Box, Tabs, Tab } from "@mui/material";
import Login from "../Login/index";
import SignUp from "../SignUp/index";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  borderRadius: 2,
  boxShadow: 24,
  p: 4,
};

const TabPanel = ({ children, value, index }) => {
  return (
    <div hidden={value !== index}>
      {value == index && <Box sx={{ mt: 2 }}>{children}</Box>}
    </div>
  );
};

const TabModal = ({ open, onClose }) => {
  const [tab, setTab] = useState(0);

  const handleTabChange = (e, newValue) => {
    setTab(newValue);
  };

  return (
    <Modal open={open} onClose={onClose}>
      <Box sx={style}>
        <Tabs value={tab} onChange={handleTabChange} centered>
          <Tab label="Login" />
          <Tab label="Register" />
        </Tabs>

        <TabPanel value={tab} index={0}>
          <Login />
        </TabPanel>

        <TabPanel value={tab} index={1}>
          <SignUp />
        </TabPanel>
      </Box>
    </Modal>
  );
};

export default TabModal;
