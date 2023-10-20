import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ShimmerSection, VideoHomePageCategory } from "./index";
import "../styles/VideoSection.css";

const VideoCategorySection = ({ link }) => {
  const [resultData, setResultData] = useState(null);

  const videoList = resultData?.filter((result) => {
    return result?.id?.kind === "youtube#video";
  });

  const API_URL = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=50&q=${link}&key=${process.env.API_KEY}`;

  useEffect(() => {
    getResultData();
  }, [link]);

  async function getResultData() {
    const response = await fetch(API_URL);
    const json = await response.json();
    setResultData(json?.items);
  }

  if (!resultData) return <ShimmerSection />;

  return (
    <div className="video-section">
      {videoList.map((video) => {
        return (
          <Link to={"/watch/" + video?.id?.videoId} key={video?.id?.videoId}>
            <VideoHomePageCategory video={video} />
          </Link>
        );
      })}
    </div>
  );
};

export default VideoCategorySection;
