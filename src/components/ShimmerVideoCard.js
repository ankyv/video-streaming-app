import "../styles/ShimmerVideoCard.css";

const ShimmerVideoCard = () => {
  return (
    <div className="shimmer-video-card">
      <div className="shimmer-video-card-thumbnail"></div>
      <div className="shimmer-video-card-details">
        <div className="shimmer-video-channel"></div>
        <div className="shimmer-video-details">
          <div className="shimmer-video-detail"></div>
          <div className="shimmer-video-detail"></div>
        </div>
      </div>
    </div>
  );
};

export default ShimmerVideoCard;
