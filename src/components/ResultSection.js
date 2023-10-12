import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import ChannelContent from "./ChannelContent";
import PlaylistContent from "./PlaylistContent";
import VideoContent from "./VideoContent";
import InfiniteScroll from "react-infinite-scroll-component";

const ResultSection = () => {
  let { searchQuery } = useParams();
  searchQuery = searchQuery.replace(" ", "%20");

  const [resultData, setResultData] = useState([]);
  const [pageToken, setPageToken] = useState("");

  const API_URL =
    `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=50&q=${searchQuery}&key=${process.env.API_KEY}` +
    (pageToken && `&pageToken=${pageToken}`);

  useEffect(() => {
    getSearchResult();
  }, []);

  async function getSearchResult() {
    const response = await fetch(API_URL);
    const json = await response.json();
    setResultData([...resultData, ...json?.items]);
    json?.nextPageToken ? setPageToken(json?.nextPageToken) : setPageToken("");
  }

  if (!resultData.length) return null;

  return (
    <div className="result-page">
      <InfiniteScroll
        dataLength={resultData.length}
        next={getSearchResult}
        hasMore={pageToken && resultData.length < 300}
        loader={<h4>Loading..</h4>}
        className="result-page"
      >
        {resultData.map((item, index) => {
          if (item?.id?.kind === "youtube#channel") {
            return <ChannelContent key={item?.etag + index} channel={item} />;
          } else if (item?.id?.kind === "youtube#playlist") {
            return <PlaylistContent key={item?.etag + index} playlist={item} />;
          } else if (item?.id?.kind === "youtube#video") {
            return (
              <Link key={item?.etag + index} to={"/watch/" + item?.id?.videoId}>
                <VideoContent video={item} />
              </Link>
            );
          } else {
            return null;
          }
        })}
      </InfiniteScroll>
    </div>
  );
};

export default ResultSection;
