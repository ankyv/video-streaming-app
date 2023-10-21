import useVideoData from "../utils/useVideoData";
import useChannelData from "../utils/useChannelData";
import { VideoWrapper } from "./index";
import "../styles/VideoWatchPageSuggestion.css";

const VideoWatchPageSuggestion = ({ video }) => {
  const videoId = video?.id?.videoId;
  const channelId = video?.snippet?.channelId;

  const {
    duration,
    channelTitle,
    publishedAt,
    thumbnailSrc,
    title,
    viewCount,
  } = useVideoData(videoId);

  const { thumbnailSrc: channelThumbnailSrc } = useChannelData(channelId);

  if (!channelThumbnailSrc) return null;

  return (
    <div className="video-watch-page">
      <VideoWrapper
        id={videoId}
        thumbnailSrc={thumbnailSrc}
        duration={duration}
        channelThumbnailSrc={channelThumbnailSrc}
        title={title}
        channelTitle={channelTitle}
        viewCount={viewCount}
        publishedAt={publishedAt}
      />
    </div>
  );
};

export default VideoWatchPageSuggestion;
