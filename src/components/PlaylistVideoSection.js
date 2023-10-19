import { PlaylistVideoList } from "./index";
import "../styles/PlaylistVideoSection.css";

const PlaylistVideoSection = ({ channelTitle, playlistId }) => {
  return (
    <div className="playlist-video-section">
      <div className="playlist-details">
        <h2>Playlist</h2>
        <p>{channelTitle}</p>
      </div>
      <PlaylistVideoList playlistId={playlistId} />
    </div>
  );
};

export default PlaylistVideoSection;
