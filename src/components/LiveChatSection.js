import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addChatMessage } from "../utils/liveChatSlice";
import { LiveChatMessage } from "./index";
import { generateRandomName, generateRandomMessage } from "../utils/helper";

const LiveChatSection = () => {
  const chatMessages = useSelector((store) => store.liveChat.chatMessages);

  const dispatch = useDispatch();

  useEffect(() => {
    const interval = setInterval(() => {
      dispatch(
        addChatMessage({
          username: generateRandomName(),
          message: generateRandomMessage(),
        })
      );
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="live-chat-section">
      {chatMessages?.map((chatMessage, index) => (
        <LiveChatMessage
          key={chatMessage.username + index}
          username={chatMessage.username}
          message={chatMessage.message}
        />
      ))}
    </div>
  );
};

export default LiveChatSection;
