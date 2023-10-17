import useVideoData from "../utils/useVideoData";

const PlaylistVideoCard = ({ video }) => {
  const videoId = video?.contentDetails?.videoId;

  const {
    id,
    thumbnailSrc,
    duration,
    title,
    channelTitle,
    viewCount,
    publishedAt,
  } = useVideoData(videoId);

  if (!id) return null;

  return (
    <div className="playlist-video-card">
      <div className="video-thumbnail">
        <div className="video-thumbnail-image">
          <img src={thumbnailSrc} />
        </div>
        <div className="video-timestamp">
          <p>{duration}</p>
        </div>
      </div>
      <div className="video-details">
        <div className="video-title">
          <h2>{title}</h2>
        </div>
        <div className="video-stats">
          <p>{channelTitle}</p>
          <p className="interpunct">•</p>
          <p>{viewCount}</p>
          <p className="interpunct">•</p>
          <p>{publishedAt}</p>
        </div>
      </div>
    </div>
  );
};

export default PlaylistVideoCard;
