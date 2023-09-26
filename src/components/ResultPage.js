import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ChannelContent from "./ChannelContent";
import PlaylistContent from "./PlaylistContent";
import VideoContent from "./VideoContent";

const ResultPage = () => {
  let { searchQuery } = useParams();
  searchQuery = searchQuery.replace(" ", "%20");

  const [resultData, setResultData] = useState(null);

  useEffect(() => {
    getSearchResult();
  }, []);

  async function getSearchResult() {
    const response = await fetch(
      `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${searchQuery}&key=${process.env.API_KEY}`
    );
    const json = await response.json();
    setResultData(json?.items);
  }

  if (!resultData) return null;

  return (
    <div>
      {resultData.map((item) => {
        if (item?.id?.kind === "youtube#channel") {
          return <ChannelContent key={item?.etag} channel={item} />;
        } else if (item?.id?.kind === "youtube#playlist") {
          return <PlaylistContent key={item?.etag} playlist={item} />;
        } else if (item?.id?.kind === "youtube#video") {
          return <VideoContent key={item?.etag} video={item} />;
        } else {
          return null;
        }
      })}
    </div>
  );
};

export default ResultPage;
