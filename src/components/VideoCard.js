const VideoCard = ({ video }) => {
  // const videoId = video?.id;
  // const channelId = video?.snippet?.channelId;
  const duration = video?.contentDetails?.duration;
  // const channelSrc = "";
  const videoTitle = video?.snippet?.title;
  const channelTitle = video?.snippet?.channelTitle;
  const viewCount = video?.statistics?.viewCount;
  const publishTime = video?.snippet?.publishedAt;

  const thumbnails = video?.snippet?.thumbnails;
  let thumbnailSrc;

  if (thumbnails?.maxres?.url) {
    thumbnailSrc = thumbnails?.maxres?.url;
  } else if (thumbnails?.standard?.url) {
    thumbnailSrc = thumbnails?.standard?.url;
  } else if (thumbnails?.high?.url) {
    thumbnailSrc = thumbnails?.high?.url;
  } else if (thumbnails?.medium?.url) {
    thumbnailSrc = thumbnails?.medium?.url;
  } else if (thumbnails?.default?.url) {
    thumbnailSrc = thumbnails?.default?.url;
  }

  return (
    <div className="video-card">
      <div className="video-card-thumbnail">
        <div className="video-thumbnail">
          <img src={thumbnailSrc} />
        </div>
        <div className="video-timestamp">
          <p>{duration}</p>
        </div>
      </div>
      <div className="video-card-details">
        <div className="video-channel">
          <div className="video-channel-image"></div>
        </div>
        <div className="video-details">
          <h2 className="video-title">{videoTitle}</h2>
          <p className="channel-title">{channelTitle}</p>
          <div className="video-stats">
            <p className="video-viewcount">{viewCount}</p>
            <p className="interpunct">•</p>
            <p className="video-publish-time">{publishTime}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
