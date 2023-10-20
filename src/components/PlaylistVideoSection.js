import { PlaylistVideoList } from "./index";
import "../styles/PlaylistVideoSection.css";

const PlaylistVideoSection = ({ channelTitle, playlistId, index }) => {
  return (
    <div className="playlist-video-section">
      <div className="playlist-details">
        <h2>Playlist</h2>
        <p>{channelTitle}</p>
      </div>
      <PlaylistVideoList playlistId={playlistId} index={index} />
    </div>
  );
};

export default PlaylistVideoSection;
