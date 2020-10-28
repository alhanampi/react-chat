import React, { Fragment, useState } from "react";
import { activeUser, chatsContact1 } from "../../../data/chatData";
import ConversationBubble from "./ConversationBubble";

import { v4 as uuidv4 } from "uuid";

export const ConversationBody = () => {
  const [newMessage, setNewMessage] = useState("");
  const [chats, setChats] = useState(chatsContact1);

  const handleSend = (e) => {
    console.log(newMessage);
    e.preventDefault();
    const newList = chats.concat({
      contactName: activeUser[0].name,
      message: newMessage,
      id: uuidv4(),
      isUser: true,
      //ver como mostrar solo hora y minutos
      messageTime: new Date(),
      photo: activeUser[0].photo,
    });
    console.log(newList);
    setChats(newList);
    setNewMessage("");
    //ver cómo visualizar
  };

  return (
    <Fragment>
      <div className="conversationBody">
        {chatsContact1.map((data, key) => {
          return (
            <ConversationBubble
              key={key}
              id={data.id}
              photo={data.photo}
              message={data.message}
              messageTime={data.messageTime}
              isUser={data.isUser}
            />
          );
        })}
      </div>

      <div className="messageBox">
        <form className="formBox">
          <input
            type="text"
            className="newMessage"
            placeholder="Type your message..."
            onChange={(e) => setNewMessage(e.target.value)}
          />
          <button type="submit" className="sendMessage" onClick={handleSend}>
            SEND
          </button>
        </form>
      </div>
    </Fragment>
  );
};
