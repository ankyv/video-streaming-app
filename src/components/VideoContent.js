import { useState, useEffect } from "react";
import {
  getCount,
  getDuration,
  getPublishTime,
  getThumbnailSrc,
} from "../utils/helper";

const VideoContent = ({ video }) => {
  const [videoData, setVideoData] = useState(null);

  // const channelId = video?.snippet?.channelId;
  const channelTitle = video?.snippet?.channelTitle;
  // const channelThumbnailSrc = "";

  const videoId = video?.id?.videoId;
  const videoThumbnailSrc = getThumbnailSrc(video?.snippet?.thumbnails);
  const duration = getDuration(videoData?.contentDetails?.duration);
  const videoTitle = video?.snippet?.title;
  const viewCount = getCount(videoData?.statistics?.viewCount);
  // const publishTime = video?.snippet?.publishTime;
  const publishedAt = getPublishTime(video?.snippet?.publishedAt);
  const description = video?.snippet?.description;

  useEffect(() => {
    getVideoData();
  }, []);

  async function getVideoData() {
    const response = await fetch(
      `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&key=${process.env.API_KEY}`
    );
    const json = await response.json();
    setVideoData(json?.items[0]);
  }

  return (
    <div className="video-content">
      <div className="video-thumbnail">
        <div className="video-thumbnail-image">
          <img src={videoThumbnailSrc} />
        </div>
        <div className="video-timestamp">
          <p>{duration}</p>
        </div>
      </div>
      <div className="video-details">
        <div className="video-data">
          <div className="video-channel-image">
            <div className="channel-image"></div>
          </div>
          <div className="video-info">
            <div className="video-title">
              <h2>{videoTitle}</h2>
            </div>
            <div className="video-stats">
              <p className="video-channel-name">{channelTitle}</p>
              <p className="interpunct">•</p>
              <p className="video-viewcount">{viewCount} views</p>
              <p className="interpunct">•</p>
              <p className="video-publish-time">{publishedAt}</p>
            </div>
          </div>
        </div>
        <div className="video-channel">
          <div className="channel-image">
            {/* <img src={channelThumbnailSrc} /> */}
          </div>
          <div className="channel-name">
            <p>{channelTitle}</p>
          </div>
        </div>
        <div className="video-description">
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default VideoContent;
