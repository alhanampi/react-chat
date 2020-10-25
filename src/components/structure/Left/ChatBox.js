import React from "react";

const ChatBox = (props) => {
  const { userName, photo, title, lastLogin, isActive } = props;
  return (
    <div className={isActive ? 'chatsPreviews active' : 'chatsPreviews'}>
      <div className="column1">
        <img src={photo} className="contactPhoto" alt="contact" />
      </div>

      <div className="column2">
        <h3>{userName}</h3>
        <p>{title}</p>
      </div>
      <div className="column3">
        <p><small>{lastLogin}</small></p>
      </div>
    </div>
  );
};

export default ChatBox;
