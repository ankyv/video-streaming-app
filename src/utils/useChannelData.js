import { useEffect, useState } from "react";
import { getPublishTime, getThumbnailSrc, getCount } from "./helper";

const useChannelData = (channelId) => {
  const [channel, setChannel] = useState(null);

  const id = channel?.id; // string
  const country = channel?.snippet?.country; // string
  const customUrl = channel?.snippet?.customUrl; // string
  const description = channel?.snippet?.description; // string
  const publishedAt = getPublishTime(channel?.snippet?.publishedAt); // string(date)
  const thumbnailSrc = getThumbnailSrc(channel?.snippet?.thumbnails);
  const title = channel?.snippet?.title; // string
  const hiddenSubscriberCount = channel?.statistics?.hiddenSubscriberCount; // boolean
  const subscriberCount = getCount(channel?.statistics?.subscriberCount); // string(number)
  const videoCount = getCount(channel?.statistics?.videoCount); // string(number)
  const viewCount = getCount(channel?.statistics?.viewCount); // string(number)

  useEffect(() => {
    getChannelData();
  }, []);

  async function getChannelData() {
    const response = await fetch(
      `https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${channelId}&key=${process.env.API_KEY}`
    );
    const json = await response.json();
    setChannel(json?.items?.[0]);
  }

  return {
    id,
    country,
    customUrl,
    description,
    publishedAt,
    thumbnailSrc,
    title,
    hiddenSubscriberCount,
    subscriberCount,
    videoCount,
    viewCount,
  };
};

export default useChannelData;
