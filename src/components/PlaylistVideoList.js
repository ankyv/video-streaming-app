import { useEffect, useState } from "react";
import usePlaylistItems from "../utils/usePlaylistItems";
import { Link } from "react-router-dom";
import { VideoWatchPagePlaylist } from "./index";
import "../styles/PlaylistVideoList.css";

const PlaylistVideoList = ({ playlistId }) => {
  const [currIndex, setCurrIndex] = useState(0);

  const playlistItems = usePlaylistItems(playlistId);

  useEffect(() => {
    document
      .querySelector(".playlist-video-list a:first-child")
      ?.classList?.add("active");
  }, [playlistItems]);

  useEffect(() => {
    document
      .querySelector(".playlist-video-list a.active")
      ?.classList?.remove("active");
    document
      .querySelectorAll(".playlist-video-list a")
      ?.[currIndex]?.classList?.add("active");
  }, [currIndex]);

  if (!playlistItems) return null;

  return (
    <div className="playlist-video-list">
      {playlistItems?.map((video, index) => (
        <Link
          to={"/watch/" + video?.contentDetails?.videoId + "/" + playlistId}
          key={video?.id}
          onClick={() => {
            setCurrIndex(index);
          }}
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
