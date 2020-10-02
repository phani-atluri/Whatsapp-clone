import React from "react";
import AccountCircleRoundedIcon from "@material-ui/icons/AccountCircleRounded";
import SearchIcon from "@material-ui/icons/SearchOutlined";
import MoreVertRoundedIcon from "@material-ui/icons/MoreVertRounded";
import "../css/chatwindow.css";
function Chatwindow({ messages }) {
  return (
    <div className="chatwindow">
      <div className="chatwindow__header">
        <div className="header__left">
          <AccountCircleRoundedIcon />
          <div>
            <p>SVAPS</p>
          </div>
        </div>
        <div className="header__right">
          <SearchIcon />
          <MoreVertRoundedIcon />
        </div>
      </div>
      <div className="chatwindow__body">
        {messages.map((message) => (
          <div
            className={`chatwindow__msg ${
              !message.received && "chatwindow__msgReceived"
            }`}
          >
            <span className="chatwindow__msgname">{message.name}</span>
            <span>{message.message}</span>
            <div className="chatwindow__msgtime">
              <span> {message.timestamp} </span>
            </div>
          </div>
        ))}
      </div>
      <div className="chatwindow__footer">
        <div className="chatwindow__input">
          <input placeholder="type a message" />
        </div>
      </div>
    </div>
  );
}

export default Chatwindow;
