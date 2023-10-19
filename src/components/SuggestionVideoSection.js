import { PlaylistVideoList, SuggestionVideoList } from "./index";
import "../styles/SuggestionVideoSection.css";

const SuggestionVideoSection = ({ playlistId }) => {
  return (
    <div className="suggestion-video-section">
      {playlistId ? (
        <PlaylistVideoList playlistId={playlistId} />
      ) : (
        <SuggestionVideoList />
      )}
    </div>
  );
};

export default SuggestionVideoSection;
