import React from "react";

const ConversationBubble = (props) => {
  const { photo, message, messageTime, isUser } = props;
  return (
    <div className="chats">
      <div className={isUser ? "messageRight" : "messageLeft"}>
        <div className="column1">
          <img src={photo} />
        </div>
        <div className="column2">
          <p className="timestamp">
            <small>{messageTime}</small>
          </p>
          <p className={isUser ? "speechBubbleRight" : "speechBubbleLeft"}>
            {message}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ConversationBubble;
