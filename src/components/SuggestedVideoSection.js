import "../styles/SuggestedVideoSection.css";
import { PlaylistVideoList, SuggestedVideoList } from "./index";

const SuggestedVideoSection = ({ playlistId }) => {
  return (
    <div className="suggested-video-section">
      {playlistId ? (
        <PlaylistVideoList playlistId={playlistId} />
      ) : (
        <SuggestedVideoList />
      )}
    </div>
  );
};

export default SuggestedVideoSection;
