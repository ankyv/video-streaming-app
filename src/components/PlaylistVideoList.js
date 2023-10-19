import usePlaylistItems from "../utils/usePlaylistItems";
import { Link } from "react-router-dom";
import { VideoWatchPagePlaylist } from "./index";
import "../styles/PlaylistVideoList.css";

const PlaylistVideoList = ({ playlistId }) => {
  const playlistItems = usePlaylistItems(playlistId);

  if (!playlistItems) return null;

  return (
    <div className="playlist-video-list">
      {playlistItems?.map((video, index) => (
        <Link
          to={"/watch/" + video?.contentDetails?.videoId + "/" + playlistId}
          key={video?.id}
        >
          <div className="index">
            <p>{index + 1}</p>
          </div>
          <VideoWatchPagePlaylist video={video} />
        </Link>
      ))}
    </div>
  );
};

export default PlaylistVideoList;
