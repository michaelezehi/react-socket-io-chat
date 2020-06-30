import * as React from "react";
import { connect } from "react-redux";
import StyledChatArea from "./styles";
import Message from "../message";
import { scrollToBottom } from "../../utils/common";
import { IMessage } from "../message/message";

interface IChatAreaState {
  messageState: {
    messages: [];
  };
}

interface IChatAreaProps {
  messages: [];
}

export const ChatBlock: React.FC<IChatAreaProps> = (props) => {
  React.useEffect(() => {
    const chatAreaElement: Element = chatAreaRef.current as Element;
    const shouldScroll: boolean =
      chatAreaElement.scrollTop + chatAreaElement.clientHeight !==
      chatAreaElement.scrollHeight;

    if (shouldScroll) {
      scrollToBottom(chatAreaElement);
    }
  }, []);

  const chatAreaRef = React.createRef<HTMLDivElement>();

  const { messages } = props;

  return (
    <StyledChatArea ref={chatAreaRef}>
      {messages.map((element: IMessage, idx: number) => {
        return <Message message={element} key={idx} />;
      })}
    </StyledChatArea>
  );
};

const mapStateToProps = (state: IChatAreaState) => ({
  messages: state.messageState.messages,
});

export default connect(mapStateToProps)(ChatBlock);
