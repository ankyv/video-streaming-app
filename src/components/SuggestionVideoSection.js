import { PlaylistVideoSection, SuggestionVideoList } from "./index";
import "../styles/SuggestionVideoSection.css";

const SuggestionVideoSection = (props) => {
  return (
    <div className="suggestion-video-section">
      {props.playlistId && <PlaylistVideoSection {...props} />}
      <SuggestionVideoList />
    </div>
  );
};

export default SuggestionVideoSection;
