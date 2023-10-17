import { getThumbnailSrc } from "../utils/helper";

const PlaylistCard = ({ playlist }) => {
  const videoCount = playlist?.contentDetails?.itemCount;
  const id = playlist?.id;
  const channelId = playlist?.snippet?.channelId;
  const channelTitle = playlist?.snippet?.channelTitle;
  const description = playlist?.snippet?.description;
  const publishedAt = playlist?.snippet?.publishedAt;
  const thumbnailSrc = getThumbnailSrc(playlist?.snippet?.thumbnails);
  const title = playlist?.snippet?.title;

  return (
    <div className="playlist-card">
      <div className="playlist-thumbnail">
        <div className="playlist-thumbnail-image">
          <img src={thumbnailSrc} />
        </div>
        <div className="playlist-video-banner">
          <p>{videoCount} videos</p>
        </div>
      </div>
      <div className="playlist-details">
        <h2 className="playlist-title">{title}</h2>
        <button>View full playlist</button>
      </div>
    </div>
  );
};

export default PlaylistCard;
