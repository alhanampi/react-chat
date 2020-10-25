import React from 'react'
import { chats } from "../../../data/chatData";
import ConversationBubble from './ConversationBubble';

export const ConversationBody = () => {
    return (
        <div className="conversationBody">
             {chats.map((data, key) => {
        return (
          <ConversationBubble
            key={key}
            photo={data.photo}
            message={data.message}
            messageTime={data.messageTime}
            isUser={data.isUser}
          />
        );
      })}
        </div>
    )
}
