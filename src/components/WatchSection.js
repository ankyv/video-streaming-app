import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {
  DislikeIcon,
  DislikeIconFill,
  DownloadIcon,
  DownloadIconFill,
  LikeIcon,
  LikeIconFill,
  MoreIcon,
  ShareIcon,
  ShareIconFill,
} from "../icons";
import { getCount, getPublishTime, getThumbnailSrc } from "../utils/helper";
import {
  CommentSection,
  SubscribeButton,
  SuggestedVideoSection,
  ShimmerWatchSection,
} from "./index";
import "../styles/WatchSection.css";

const WatchSection = () => {
  const { id } = useParams();

  const [video, setVideo] = useState(null);
  const [channel, setChannel] = useState(null);
  const [showDescription, setShowDescription] = useState(false);
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isLike, setIsLike] = useState(false);
  const [isDislike, setIsDislike] = useState(false);
  const [isShare, setIsShare] = useState(false);
  const [isDownload, setIsDownload] = useState(false);
  const [likeCount, setLikeCount] = useState(null);
  const [subscriberCount, setSubscriberCount] = useState(null);

  const channelId = video?.snippet?.channelId;
  const channelThumbnailSrc = getThumbnailSrc(channel?.snippet?.thumbnails);
  const subscriberCountString = getCount(subscriberCount);

  const videoTitle = video?.snippet?.title;
  const channelTitle = video?.snippet?.channelTitle;
  const likeCountString = getCount(likeCount);
  const viewCount = getCount(video?.statistics?.viewCount);
  const publishTime = getPublishTime(video?.snippet?.publishedAt);
  const description = video?.snippet?.description;
  const commentCount = video?.statistics?.commentCount;

  // As soon as we get video data, we will update likeCount state variable.
  useEffect(() => {
    setLikeCount(parseInt(video?.statistics?.likeCount));
  }, [video]);

  // As soon as we get channel data, we will update subscriberCount state variable.
  useEffect(() => {
    setSubscriberCount(parseInt(channel?.statistics?.subscriberCount));
  }, [channel]);

  /*
  When clicking a suggested video, it calls WatchSection with a new ID. 
  WatchSection already has data, so it won't make new API calls, 
  displaying previous video data. To trigger API calls again, 
  we use useEffect with the ID as a dependency. When the ID changes, 
  new API calls are made to fetch updated video data.
  */
  useEffect(() => {
    getVideoDetails();
    setShowDescription(false);
    setIsSubscribed(false);
    document
      .querySelector(
        ".watch-section .video-section .video-info .channel-section .subscribe-btn"
      )
      ?.classList?.remove("subscribed");
    setIsLike(false);
    setIsDislike(false);
    setIsShare(false);
    setIsDownload(false);
    window.scrollTo(0, 0);
  }, [id]);

  useEffect(() => {
    if (channelId) {
      getChannelDetails();
    }
  }, [channelId]);

  async function getVideoDetails() {
    const response = await fetch(
      `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${id}&key=${process.env.API_KEY}`
    );
    const json = await response.json();
    setVideo(json?.items[0]);
  }

  async function getChannelDetails() {
    const response = await fetch(
      `https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${channelId}&key=${process.env.API_KEY}`
    );
    const json = await response.json();
    setChannel(json?.items[0]);
  }

  if (!video) return <ShimmerWatchSection />;

  return (
    <div className="watch-section">
      <div className="video-section">
        <div className="video-stream">
          <iframe
            src={`https://www.youtube.com/embed/${id}?autoplay=1&mute=0&modestbranding=1`}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
        <h1 className="video-title">{videoTitle}</h1>
        <div className="video-info">
          <div className="channel-section">
            <div className="channel-info">
              <div className="channel-image">
                <img src={channelThumbnailSrc} />
              </div>
              <div className="channel-data">
                <h2 className="channel-title">{channelTitle}</h2>
                <p className="channel-subscribers-count">
                  {subscriberCountString} subscribers
                </p>
              </div>
            </div>
            <SubscribeButton
              isSubscribed={isSubscribed}
              setIsSubscribed={setIsSubscribed}
              subscriberCount={subscriberCount}
              setSubscriberCount={(value) => {
                setSubscriberCount(value);
              }}
            />
          </div>
          <div className="video-options">
            <div>
              <div
                onClick={() => {
                  setIsLike(!isLike);
                  {
                    isLike
                      ? setLikeCount(likeCount - 1)
                      : setLikeCount(likeCount + 1);
                    isDislike && setIsDislike(false);
                  }
                }}
                className="like-btn option-btn"
              >
                {isLike ? (
                  <LikeIconFill color={"var(--text-clr)"} size={22} />
                ) : (
                  <LikeIcon color={"var(--text-clr)"} size={22} />
                )}
                <p>{likeCountString}</p>
              </div>
              <div
                onClick={() => {
                  setIsDislike(!isDislike);
                  {
                    isLike && setIsLike(false);
                    isLike && setLikeCount(likeCount - 1);
                  }
                }}
                className="dislike-btn option-btn"
              >
                {isDislike ? (
                  <DislikeIconFill color={"var(--text-clr)"} size={22} />
                ) : (
                  <DislikeIcon color={"var(--text-clr)"} size={22} />
                )}
              </div>
            </div>
            <div
              onClick={() => setIsShare(!isShare)}
              className="share-btn option-btn"
            >
              {isShare ? (
                <ShareIconFill color={"var(--text-clr)"} size={22} />
              ) : (
                <ShareIcon color={"var(--text-clr)"} size={22} />
              )}
              <p>Share</p>
            </div>
            <div
              onClick={() => setIsDownload(!isDownload)}
              className="download-btn option-btn"
            >
              {isDownload ? (
                <DownloadIconFill color={"var(--text-clr)"} size={22} />
              ) : (
                <DownloadIcon color={"var(--text-clr)"} size={22} />
              )}
              <p>Download</p>
            </div>
            <div className="more-btn option-btn">
              <MoreIcon color={"var(--text-clr)"} />
            </div>
          </div>
        </div>
        <div
          className="video-description"
          style={{
            height: showDescription && "unset",
            overflow: showDescription && "auto",
          }}
        >
          <div className="video-stats">
            <p className="video-viewcount">{viewCount} views</p>
            <p className="video-publish-time">{publishTime}</p>
          </div>
          <pre className="video-description-text">{description}</pre>
          <button
            onClick={() => setShowDescription(!showDescription)}
            className="more-btn"
            style={{
              position: showDescription ? "unset" : "absolute",
            }}
          >
            {showDescription ? "Show less" : "...more"}
          </button>
        </div>
        <CommentSection id={id} commentCount={commentCount} />
      </div>
      <SuggestedVideoSection />
    </div>
  );
};

export default WatchSection;
