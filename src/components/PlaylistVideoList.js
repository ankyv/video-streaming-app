import { useEffect, useRef } from "react";
import usePlaylistItems from "../utils/usePlaylistItems";
import { Link } from "react-router-dom";
import { VideoWatchPagePlaylist } from "./index";
import "../styles/PlaylistVideoList.css";

const PlaylistVideoList = ({ playlistId, index }) => {
  const listRef = useRef();

  const playlistItems = usePlaylistItems(playlistId);

  useEffect(() => {
    listRef.current?.querySelector("a.active")?.classList?.remove("active");
    listRef.current
      ?.querySelectorAll("a")
      ?.[index - 1]?.classList?.add("active");
  }, [playlistItems, index]);

  if (!playlistItems) return null;

  return (
    <div ref={listRef} className="playlist-video-list">
      {playlistItems?.map((video, index) => (
        <Link
          to={
            "/watch/" +
            video?.contentDetails?.videoId +
            "/" +
            playlistId +
            `/${index + 1}`
          }
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
