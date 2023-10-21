import { useState } from "react";
import { useDispatch } from "react-redux";
import { addChatMessage } from "../utils/liveChatSlice";
import { LiveChatSection } from "./index";
import "../styles/LiveChatContainer.css";

const LiveChatContainer = () => {
  const [showLiveChat, setShowLiveChat] = useState(false);
  const [textMessage, setTextMessage] = useState("");

  const dispatch = useDispatch();

  return (
    <div
      className="live-chat-container"
      style={{
        backgroundColor: !showLiveChat && "transparent",
        border: !showLiveChat && "none",
        height: !showLiveChat && "unset",
      }}
    >
      {showLiveChat && <LiveChatSection />}
      {showLiveChat && (
        <form onSubmit={(e) => e.preventDefault()} className="live-chat-send">
          <input
            type="text"
            placeholder="Chat.."
            value={textMessage}
            onChange={(e) => setTextMessage(e.target.value)}
          />
          <button
            className="send-btn"
            onClick={() => {
              dispatch(
                addChatMessage({
                  username: "Ankit",
                  message: textMessage,
                })
              );
              setTextMessage("");
            }}
          >
            Send
          </button>
        </form>
      )}
      <div className="live-chat-button">
        <button
          onClick={() => setShowLiveChat(!showLiveChat)}
          className="live-chat-btn"
        >
          {showLiveChat ? "Hide chat" : "Show chat"}
        </button>
      </div>
    </div>
  );
};

export default LiveChatContainer;
