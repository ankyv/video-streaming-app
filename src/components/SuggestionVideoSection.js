import {
  LiveChatContainer,
  PlaylistVideoSection,
  SuggestionVideoList,
} from "./index";
import "../styles/SuggestionVideoSection.css";

const SuggestionVideoSection = (props) => {
  return (
    <div className="suggestion-video-section">
      <LiveChatContainer />
      {props.playlistId && <PlaylistVideoSection {...props} />}
      <SuggestionVideoList searchQuery={props.searchQuery} />
    </div>
  );
};

export default SuggestionVideoSection;
