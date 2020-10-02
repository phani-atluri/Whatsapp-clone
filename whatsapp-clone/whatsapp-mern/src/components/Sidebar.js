import React from "react";
import "../css/sidebar.css";
import SearchIcon from "@material-ui/icons/SearchOutlined";
import ChatRoundedIcon from "@material-ui/icons/ChatRounded";
import AccountCircleRoundedIcon from "@material-ui/icons/AccountCircleRounded";
import MoreVertRoundedIcon from "@material-ui/icons/MoreVertRounded";
import DonutLargeRoundedIcon from "@material-ui/icons/DonutLargeRounded";
function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar__nav">
        <div className="sidebar__navLeft">
          <AccountCircleRoundedIcon fontSize="large" />
        </div>
        <div className="sidebar__navRight">
          <DonutLargeRoundedIcon />
          <ChatRoundedIcon />
          <MoreVertRoundedIcon />
        </div>
      </div>
      <div className="sidebar__search">
        <div className="sidebar__input">
          <SearchIcon />
          <input placeholder="Search or start a new chat" />
        </div>
      </div>
      <div></div>
    </div>
  );
}

export default Sidebar;
