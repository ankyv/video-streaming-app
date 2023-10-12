import { useState, useEffect } from "react";
import { API_DATA_URL } from "../constants";
import "dotenv/config";
import { Link } from "react-router-dom";
import InfiniteScroll from "react-infinite-scroll-component";
import { VideoCard } from "./index";

const VideoSection = () => {
  const [videoList, setVideoList] = useState([]);
  const [pageToken, setPageToken] = useState("");

  const API_URL =
    API_DATA_URL +
    process.env.API_KEY +
    (pageToken && `&pageToken=${pageToken}`);

  useEffect(() => {
    getVideoList();
  }, []);

  async function getVideoList() {
    const response = await fetch(API_URL);
    const json = await response.json();
    setVideoList([...videoList, ...json?.items]);
    json?.nextPageToken ? setPageToken(json?.nextPageToken) : setPageToken("");
  }

  if (!videoList.length) return null;

  return (
    <div className="video-section">
      <InfiniteScroll
        dataLength={videoList.length}
        next={() => {
          getVideoList();
        }}
        hasMore={pageToken}
        loader={<h4>Loading..</h4>}
        className="video-section"
      >
        {videoList.map((video) => {
          return (
            <Link to={"/watch/" + video?.id} key={video?.id}>
              <VideoCard video={video} />
            </Link>
          );
        })}
      </InfiniteScroll>
    </div>
  );
};

export default VideoSection;
