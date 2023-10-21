import { UserIcon } from "../icons";
import "../styles/LiveChatMessage.css";

const LiveChatMessage = ({ username, message }) => {
  return (
    <div className="live-chat-message">
      <div className="chat-message-thumbnail">
        <div className="chat-message-thumbnail-image">
          <UserIcon color={"var(--text-clr)"} />
        </div>
      </div>
      <div className="chat-message-details">
        <h4>{username}</h4>
        <p>{message}</p>
      </div>
    </div>
  );
};

export default LiveChatMessage;
