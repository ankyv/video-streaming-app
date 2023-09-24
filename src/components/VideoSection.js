import { useState, useEffect } from "react";
import { API_DATA_URL } from "../constants";
import "dotenv/config";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";

const VideoSection = () => {
  const [videoList, setVideoList] = useState(null);

  useEffect(() => {
    const API_URL = API_DATA_URL + process.env.API_KEY;
    getVideoList(API_URL);
  }, []);

  async function getVideoList(API_URL) {
    const response = await fetch(API_URL);
    const json = await response.json();
    setVideoList(json?.items);
  }

  if (!videoList) return null;

  return (
    <div className="video-section">
      {videoList.map((video) => {
        return (
          <Link to={"/watch/" + video?.id} key={video?.id}>
            <VideoCard video={video} />
          </Link>
        );
      })}
    </div>
  );
};

export default VideoSection;
