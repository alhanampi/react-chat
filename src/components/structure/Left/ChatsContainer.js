import React, { useRef } from "react";
import ChatBox from "./ChatBox";
import LogoContainer from "./LogoContainer";
import { users } from "../../../data/chatData";

const ChatsContainer = () => {
  return (
    <div id="leftSide">
      <LogoContainer appName={"React Chat"} />
      {users.map((data, key) => {
        return (
          <ChatBox
            key={key}
            id={data.userId}
            userName={data.name}
            photo={data.photo}
            title={data.lastMessage}
            lastLogin={data.lastLogin}
            isActive={data.isActive}
          />
        );
      })}
      <div>
        <button className="newUser"> + Create New</button>
      </div>
    </div>
  );
};

export default ChatsContainer;
