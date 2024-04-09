import React, { useEffect, useState } from "react";
import axios from "axios";

const Chatpage = () => {
    const [chats, setChats] = useState([]);

  const fetchChats = async () => {
    try {
      const {data} = await axios.get("/api/chats");
      setChats(data);
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchChats();
  }, []);

  return <div>{chats.map((chat) => (
    <li key={chat.chatName}>{chat.chatName}</li>
  ))}</div>;
};

export default Chatpage;
