import React from "react";
import { ConversationBody } from "./ConversationBody";
import ConversationHeader from "./ConversationHeader";

const ConversationContainer = () => {
  return (
    <div id="rightSide">
      <ConversationHeader />
      <ConversationBody />
    </div>
  );
};

export default ConversationContainer;
