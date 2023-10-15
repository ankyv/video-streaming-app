import { useState, useEffect } from "react";
import { SuggestedVideoCard } from "./index";
import { API_DATA_URL } from "../constants";
import { Link } from "react-router-dom";
import "../styles/SuggestedVideoSection.css";

const SuggestedVideoSection = () => {
  const [videoList, setVideoList] = useState(null);

  const API_URL = API_DATA_URL + process.env.API_KEY;

  useEffect(() => {
    getVideoList();
  }, []);

  async function getVideoList() {
    const response = await fetch(API_URL);
    const json = await response.json();
    setVideoList(json?.items);
  }

  if (!videoList) return null;

  return (
    <div className="suggested-video-section">
      {videoList?.map((video) => (
        <Link to={"/watch/" + video?.id} key={video?.id}>
          <SuggestedVideoCard video={video} />
        </Link>
      ))}
    </div>
  );
};

export default SuggestedVideoSection;
