import { Link, useParams } from "react-router-dom";
import { getThumbnailSrc } from "../utils/helper";
import usePlaylistItems from "../utils/usePlaylistItems";
import { PlaylistVideoCard } from "./index";
import "../styles/PlaylistPage.css";

const PlaylistPage = () => {
  const { id } = useParams();

  const playlistItems = usePlaylistItems(id);

  const thumbnailSrc = getThumbnailSrc(playlistItems?.[0]?.snippet?.thumbnails);
  const title = playlistItems?.[0]?.snippet?.title;
  const channelTitle = playlistItems?.[0]?.snippet?.channelTitle;
  const videoCount = playlistItems?.length;
  const viewCount = "";
  const publishedAt = playlistItems?.[0]?.snippet?.publishedAt;
  const description = playlistItems?.[0]?.snippet?.description;

  if (!playlistItems) return null;

  return (
    <div className="playlist-page">
      <div className="playlist-section">
        <div className="playlist-section-container">
          <Link
            to={
              "/watch/" +
              playlistItems?.[0]?.contentDetails?.videoId +
              "/" +
              id +
              "/1"
            }
          >
            <div className="playlist-thumbnail">
              <div className="playlist-thumbnail-image">
                <img src={thumbnailSrc} />
              </div>
            </div>
          </Link>
          <div className="playlist-details">
            <h1 className="playlist-title">{title}</h1>
            <h3 className="channel-title">{channelTitle}</h3>
            <p>{videoCount} videos</p>
            <p>{viewCount} views</p>
            <p>{publishedAt}</p>
            {/* <div className="playlist-buttons">
              <button></button>
              <button></button>
              <button></button>
              <button></button>
            </div> */}
            <div className="play-buttons">
              <Link
                to={
                  "/watch/" +
                  playlistItems?.[0]?.contentDetails?.videoId +
                  "/" +
                  id +
                  "/1"
                }
              >
                <button className="play-all-btn">Play all</button>
              </Link>
              {/* <button></button> */}
            </div>
          </div>
          <div className="playlist-description">
            <p>{description}</p>
          </div>
        </div>
      </div>
      <div className="video-section">
        {playlistItems?.map((video, index) => (
          <Link
            key={video?.id}
            to={
              "/watch/" +
              video?.contentDetails?.videoId +
              "/" +
              id +
              `/${index + 1}`
            }
          >
            <PlaylistVideoCard video={video} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default PlaylistPage;
