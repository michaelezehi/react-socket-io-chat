import * as React from "react";
import Emojify from "react-emojione";
import StyledMessage from "./styles";
import Username from "../username";
import Timestamp from "../time-stamp";
import MicrolinkCard from "@microlink/react";
import Linkify from "linkifyjs/react";
import * as getUrls from "get-urls";

export interface IMessage {
  from: string;
  content: string;
  time: string;
  type: string;
}

export const Message: React.FC<{ message: IMessage }> = (props) => {
  const { message } = props;
  const parseURLs = (text: string) => {
    const urls = getUrls(text);
    if (!urls.size) {
      return;
    }

    const parsedUrls = Array.from(urls).map((url: string, idx: number) => (
      <MicrolinkCard url={url} key={idx} />
    ));
    return <>{parsedUrls}</>;
  };
  return (
    <>
      <div id="username-container">
        {message.type === "received" && <Username value={message.from} />}
        <Timestamp
          value={message.time}
          floatToRight={message.type === "sent"}
        />
      </div>
      <StyledMessage type={message.type}>
        <Linkify>
          <Emojify>
            {message.content} {parseURLs(message.content)}
          </Emojify>
        </Linkify>
      </StyledMessage>
    </>
  );
};

export default Message;
