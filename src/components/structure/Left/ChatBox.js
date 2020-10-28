import React, { useRef } from "react";

const ChatBox = (props) => {
  const { userName, photo, title, lastLogin, isActive, id } = props;
  const ref = useRef();

  //por qué no selecciona chat2?
  const handleActive = () => {
    console.log(`clicked element ${id}`);
    const activeChat = ref.current;
    if (!isActive) {
      activeChat.className = "chatsPreviews active";      
    } else {
      activeChat.className = "chatsPreviews";
    }
  };

  return (
    <div className="chatsPreviews" onClick={handleActive} ref={ref}>
      <div className="column1">
        <img src={photo} className="contactPhoto" alt="contact" />
      </div>

      <div className="column2">
        <h3>{userName}</h3>
        <p>{title}</p>
      </div>
      <div className="column3">
        <p>
          <small>{lastLogin}</small>
        </p>
      </div>
    </div>
  );
};

export default ChatBox;
