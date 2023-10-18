import usePlaylistItems from "../utils/usePlaylistItems";
import { SuggestedVideoCard } from "./index";

const PlaylistVideoList = ({ playlistId }) => {
  const playlistItems = usePlaylistItems(playlistId);

  return (
    <div className="playlist-video-list">
      {playlistItems?.map((video) => (
        <SuggestedVideoCard key={video?.id} video={video} />
      ))}
    </div>
  );
};

export default PlaylistVideoList;
