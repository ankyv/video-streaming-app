const VideoWrapper = (props) => {
  const {
    id,
    thumbnailSrc,
    duration,
    channelThumbnailSrc,
    title,
    channelTitle,
    viewCount,
    publishedAt,
    description,
  } = props;

  return (
    <>
      <div className="video-thumbnail">
        <div className="video-thumbnail-image">
          <img src={thumbnailSrc} />
        </div>
        <div className="video-timestamp">
          <p>{duration}</p>
        </div>
      </div>
      <div className="video-details">
        <div className="channel-thumbnail">
          <div className="channel-thumbnail-image">
            <img src={channelThumbnailSrc} />
          </div>
        </div>
        <div className="video-info">
          <div className="video-title">
            <h1>{title}</h1>
          </div>
          <div className="channel-title">
            <p>{channelTitle}</p>
          </div>
          <div className="video-stats">
            <p>{channelTitle}</p>
            <span className="interpunct">•</span>
            <p>{viewCount}</p>
            <span className="interpunct">•</span>
            <p>{publishedAt}</p>
          </div>
          <div className="channel-info">
            <div className="channel-thumbnail">
              <div className="channel-thumbnail-image">
                <img src={channelThumbnailSrc} />
              </div>
            </div>
            <div className="channel-title">
              <p>{channelTitle}</p>
            </div>
          </div>
          <div className="video-description">
            <p>{description}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default VideoWrapper;
