import "../styles/ShimmerWatchSection.css";

const ShimmerWatchSection = () => {
  return (
    <div className="shimmer-watch-section">
      <div className="video-section">
        <div className="video-stream"></div>
        <div className="video-title"></div>
        <div className="video-info">
          <div className="channel-section">
            <div className="channel-info">
              <div className="channel-image"></div>
              <div className="channel-data">
                <div className="channel-title"></div>
                <div className="channel-subscribers-count"></div>
              </div>
            </div>
            <div className="subscribe-btn"></div>
          </div>
          <div className="video-options">
            <div className="share-btn option-btn"></div>
            <div className="download-btn option-btn"></div>
            <div className="more-btn option-btn"></div>
          </div>
        </div>
        <div className="video-description"></div>
        {/* <CommentSection id={id} commentCount={commentCount} /> */}
      </div>
      <div className="suggested-video-section">
        {Array(10)
          .fill("")
          .map((e, index) => (
            <div key={index} className="suggested-video-card">
              <div className="suggested-video-card-thumbnail"></div>
              <div className="suggested-video-card-details">
                <div className="video-channel"></div>
                <div className="suggested-video-details">
                  <div className="suggested-video-detail"></div>
                  <div className="suggested-video-detail"></div>
                  <div className="suggested-video-detail"></div>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default ShimmerWatchSection;
