import * as React from "react";
import ChatBlock from "../../components/chat-block";
import MessageSender from "../../components/message-sender";
import Container from "../container";
import { withTranslations } from "../../utils/withTranslations";

const ChatPage = () => (
  <Container>
    <ChatBlock />
    <MessageSender />
  </Container>
);

export default withTranslations(ChatPage);
