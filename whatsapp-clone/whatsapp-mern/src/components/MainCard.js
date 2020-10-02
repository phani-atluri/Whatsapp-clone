import React, { useEffect, useState } from "react";
import "../css/maincard.css";
import Chatwindow from "./Chatwindow";
import Sidebar from "./Sidebar";
import Pusher from "pusher-js";
import axios from "../axios";
function MainCard() {
  const [messages, setMessages] = useState([]);
  useEffect(() => {
    axios.get("/messages/view").then((res) => {
      setMessages(res.data);
    });
  }, []);

  useEffect(() => {
    var pusher = new Pusher("4f0ec8b3b2793124de4c", {
      cluster: "us2",
    });
    var channel = pusher.subscribe("messages");
    channel.bind("inserted", function (data) {
      setMessages([...messages, data]);
    });
  }, [messages]);
  console.log(messages);
  return (
    <div className="maincard">
      <div className="maincard__sidebar">
        <Sidebar />
      </div>
      <div className="maincard__chatwindow">
        <Chatwindow messages={messages} />
      </div>
    </div>
  );
}

export default MainCard;
