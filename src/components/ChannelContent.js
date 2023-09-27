import { useEffect, useState } from "react";
import { getCount, getThumbnailSrc } from "../utils/helper";

const ChannelContent = ({ channel }) => {
  const [channelData, setChannelData] = useState(null);

  const channelId = channel?.id?.channelId;
  const channelSrc = getThumbnailSrc(channel?.snippet?.thumbnails);
  const channelTitle = channel?.snippet?.channelTitle;
  const channelUsername = channelData?.snippet?.customUrl;
  const channelSubscriberCount = getCount(
    channelData?.statistics?.subscriberCount
  );
  const channelDescription = channel?.snippet?.description;

  useEffect(() => {
    getChannelData();
  }, []);

  async function getChannelData() {
    const response = await fetch(
      `https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${channelId}&key=${process.env.API_KEY}`
    );
    const json = await response.json();
    setChannelData(json?.items[0]);
  }

  return (
    <div className="channel-content">
      <div className="channel-content-image">
        <div className="channel-image">
          <img src={channelSrc} />
        </div>
      </div>
      <div className="channel-data">
        <div className="channel-title">
          <h2>{channelTitle}</h2>
        </div>
        <div className="channel-info">
          <p className="channel-username">{channelUsername}</p>
          <p className="interpunct">•</p>
          <p className="channel-subscriber-count">
            {channelSubscriberCount} subscribers
          </p>
        </div>
        <div className="channel-description">
          <p>{channelDescription}</p>
        </div>
        <button className="subscribe-btn">Subscribe</button>
      </div>
      <button className="subscribe-btn">Subscribe</button>
    </div>
  );
};

export default ChannelContent;
