import { useState, useEffect } from "react";
import {
  getDuration,
  getPublishTime,
  getThumbnailSrc,
  getCount,
} from "../utils/helper";
import "../styles/SuggestedVideoCard.css";

const SuggestedVideoCard = ({ video }) => {
  const [channel, setChannel] = useState(null);

  const channelId = video?.snippet?.channelId;
  const channelThumbnailSrc = getThumbnailSrc(channel?.snippet?.thumbnails);

  const thumbnailSrc = getThumbnailSrc(video?.snippet?.thumbnails);
  const duration = getDuration(video?.contentDetails?.duration);
  const videoTitle = video?.snippet?.title;
  const channelTitle = video?.snippet?.channelTitle;
  const viewCount = getCount(video?.statistics?.viewCount);
  const publishTime = getPublishTime(video?.snippet?.publishedAt);

  useEffect(() => {
    getChannelDetails();
  }, []);

  async function getChannelDetails() {
    const response = await fetch(
      `https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${channelId}&key=${process.env.API_KEY}`
    );
    const json = await response.json();
    setChannel(json?.items[0]);
  }

  return (
    <div className="suggested-video-card">
      <div className="suggested-video-card-thumbnail">
        <div className="suggested-video-thumbnail">
          <img src={thumbnailSrc} />
        </div>
        <div className="suggested-video-timestamp">
          <p>{duration}</p>
        </div>
      </div>
      <div className="suggested-video-card-details">
        <div className="video-channel">
          <div className="video-channel-image">
            <img src={channelThumbnailSrc} />
          </div>
        </div>
        <div className="suggested-video-details">
          <h2 className="video-title">{videoTitle}</h2>
          <p className="channel-title">{channelTitle}</p>
          <div className="video-stats">
            <p className="video-viewcount">{viewCount} views</p>
            <p className="interpunct">•</p>
            <p className="video-publish-time">{publishTime}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuggestedVideoCard;
