import React from "react";
import { users } from "../../../data/chatData";

const ConversationHeader = () => {
  return (
    <div className="conversationHeader">
      <div className="column1">
        <img src={users[1].photo} alt="active contact" className="headerPhoto" />
      </div>
      <div className="column2">
        <h2>{users[1].name}</h2>
        <p>{users[1].title}</p>
      </div>
    </div>
  );
};

export default ConversationHeader;
