import React from "react";
import "../../../styles/left.scss";
import ChatBox from "./ChatBox";
import LogoContainer from "./LogoContainer";

const ChatsContainer = () => {
  return (
    <div className="" id="leftSide">
      <LogoContainer appName={"React Chat"} />
      <ChatBox
        name={"Luciana Gutierrez"}
        message={"Si tengo alguna otra novedad te comento"}
        date={"10.20 am"}
      />
    </div>
  );
};

export default ChatsContainer;
