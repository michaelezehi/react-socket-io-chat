import * as React from "react";
import StyledUnreadMessagesCounter from "./styles";

interface IUnreadMessagesCounterProps {
  count: number;
}

const MessagesCounter: React.FC<IUnreadMessagesCounterProps> = (props) => {
  const { count } = props;

  return count > 0 ? (
    <StyledUnreadMessagesCounter>{count}</StyledUnreadMessagesCounter>
  ) : (
    <></>
  );
};

export default MessagesCounter;
