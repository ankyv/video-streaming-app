import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {
  DislikeIcon,
  DownloadIcon,
  LikeIcon,
  MoreIcon,
  ShareIcon,
} from "../icons";
import { getCount, getPublishTime } from "../utils/helper";

const VideoWatch = () => {
  const { id } = useParams();

  const [video, setVideo] = useState(null);

  // const videoId = video?.id;
  // const channelId = video?.snippet?.channelId;
  // const channelSrc = "";
  const videoTitle = video?.snippet?.title;
  const channelTitle = video?.snippet?.channelTitle;
  const likeCount = getCount(video?.statistics?.likeCount);
  const viewCount = getCount(video?.statistics?.viewCount);
  const publishTime = getPublishTime(video?.snippet?.publishedAt);
  const description = video?.snippet?.description;

  useEffect(() => {
    getVideoDetails();
  }, []);

  async function getVideoDetails() {
    const response = await fetch(
      `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${id}&key=${process.env.API_KEY}`
    );
    const json = await response.json();
    setVideo(json?.items[0]);
  }

  if (!video) return null;

  return (
    <div className="video-watch">
      <div className="video-section">
        <div className="video-stream">
          <iframe
            src={`https://www.youtube.com/embed/${id}?autoplay=1&mute=1&modestbranding=1`}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
        <h1 className="video-title">{videoTitle}</h1>
        <div className="video-info">
          <div className="channel-section">
            <div className="channel-image"></div>
            <div className="channel-info">
              <h2 className="channel-title">{channelTitle}</h2>
              <p className="channel-subscribers-count">subscribers</p>
            </div>
            <button className="subscribe-btn">Subscribe</button>
          </div>
          <div className="video-options">
            <div>
              <div className="like-btn option-btn">
                <LikeIcon color={"var(--text-clr)"} size={22} />
                <p>{likeCount}</p>
              </div>
              <div className="dislike-btn option-btn">
                <DislikeIcon color={"var(--text-clr)"} />
              </div>
            </div>
            <div className="share-btn option-btn">
              <ShareIcon color={"var(--text-clr)"} />
              <p>Share</p>
            </div>
            <div className="download-btn option-btn">
              <DownloadIcon color={"var(--text-clr)"} />
              <p>Download</p>
            </div>
            <div className="more-btn option-btn">
              <MoreIcon color={"var(--text-clr)"} />
            </div>
          </div>
        </div>
        <div className="video-description">
          <div className="video-stats">
            <p className="video-viewcount">{viewCount} views</p>
            <p className="video-publish-time">{publishTime}</p>
          </div>
          <pre className="video-description-text">{description}</pre>
        </div>
        <div className="video-comments"></div>
      </div>
      <div className="suggested-video-section"></div>
    </div>
  );
};

export default VideoWatch;
