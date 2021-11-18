/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from "react";
import {
  Avatar,
  Divider,
  IconButton,
  Link,
  Menu,
  MenuItem,
  Paper,
} from "@mui/material";
import { KeyboardArrowDown, PlaylistAddCheck } from "@mui/icons-material";
import { blue, grey } from "@mui/material/colors";

// MUI Color
const cGrey = grey[400];
const cBlue = blue[900];

const Navbar = () => {
  const [menuAnchor, setMenuAnchor] = useState(null);
  const open = Boolean(menuAnchor);

  // Handler
  const handleClick = (event) => {
    setMenuAnchor(event.currentTarget);
  };
  const handleClose = () => {
    setMenuAnchor(null);
  };
  const handleLogout = () => {
    setMenuAnchor(null);
  };

  return (
    <div className="flex justify-between items-center px-3 md:px-8 py-1 md:py-3 box-border text-lg z-[105] border-b-{0.5px} border-gray-400">
      <div className="flex justify-center items-center">
        <PlaylistAddCheck sx={{ color: cBlue, fontSize: "50px" }} />
        <h1 className="ml-1 font-qahiri font-bold text-3xl text-blue-900">
          Todo List
        </h1>
      </div>
      <div className="flex justify-end items-center gap-[0.7rem]">
        <div
          className="flex justify-center items-center cursor-pointer"
          onClick={handleClick}
          role="menu"
          tabIndex="0"
        >
          <div className="flex justify-center items-center text-xl text-gray-400">
            <h3>Tazu</h3>
          </div>
          <div>
            <KeyboardArrowDown sx={{ color: cGrey }} />
          </div>
        </div>

        <Menu
          id="profile-menu"
          anchorEl={menuAnchor}
          open={open}
          onClose={handleClose}
        >
          <Paper
            variant="outlined"
            square
            sx={{ width: 120, textAlign: "center" }}
          >
            <IconButton onClick={handleClose}>
              <Link
                href="https://github.com/XxTazuxX/todo-app"
                underline="none"
              >
                <MenuItem sx={{ color: cGrey }}>Profile</MenuItem>
              </Link>
            </IconButton>
            <Divider />
            <IconButton onClick={handleLogout}>
              <MenuItem sx={{ color: cGrey }}>Logout</MenuItem>
            </IconButton>
          </Paper>
        </Menu>
        <div>
          <Avatar src="" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
