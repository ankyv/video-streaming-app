import "../styles/ShimmerResultSection.css";

const ShimmerResultSection = () => {
  return (
    <div className="shimmer-result-section">
      {Array(10)
        .fill("")
        .map((e, index) => (
          <div key={index} className="shimmer-video-content">
            <div className="video-thumbnail"></div>
            <div className="video-details">
              <div className="video-data">
                <div className="video-channel-image"></div>
                <div className="video-info">
                  <div className="video-detail"></div>
                  <div className="video-detail"></div>
                  <div className="video-detail"></div>
                  <div className="video-detail"></div>
                </div>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default ShimmerResultSection;
