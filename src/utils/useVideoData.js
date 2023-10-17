import { useEffect, useState } from "react";
import {
  getDuration,
  getPublishTime,
  getThumbnailSrc,
  getCount,
} from "./helper";

const useVideoData = (videoId) => {
  const [video, setVideo] = useState(null);

  const id = video?.id; // string
  const caption = video?.contentDetails?.caption; // string(boolean)
  const duration = getDuration(video?.contentDetails?.duration); // string
  const licensedContent = video?.contentDetails?.licensedContent; // boolean
  const channelId = video?.snippet?.channelId; // string
  const channelTitle = video?.snippet?.channelTitle; // string
  const description = video?.snippet?.description; // string
  const liveBroadcastContent = video?.snippet?.liveBroadcastContent; // string
  const publishedAt = getPublishTime(video?.snippet?.publishedAt); // string(date)
  const tags = video?.snippet?.tags; // array(strings)
  const thumbnailSrc = getThumbnailSrc(video?.snippet?.thumbnails);
  const title = video?.snippet?.title; // string
  const commentCount = getCount(video?.statistics?.commentCount); // string(number)
  const favoriteCount = getCount(video?.statistics?.favoriteCount); // string(number)
  const likeCount = getCount(video?.statistics?.likeCount); // string(number)
  const viewCount = getCount(video?.statistics?.viewCount); // string(number)

  useEffect(() => {
    getVideoData();
  }, []);

  async function getVideoData() {
    const response = await fetch(
      `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&key=${process.env.API_KEY}`
    );
    const json = await response.json();
    setVideo(json?.items?.[0]);
  }

  return {
    id,
    caption,
    duration,
    licensedContent,
    channelId,
    channelTitle,
    description,
    liveBroadcastContent,
    publishedAt,
    tags,
    thumbnailSrc,
    title,
    commentCount,
    favoriteCount,
    likeCount,
    viewCount,
  };
};

export default useVideoData;
