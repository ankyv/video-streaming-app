import { useState } from "react";
import { RecentLinks, VideoSection, VideoCategorySection } from "./index";
import "../styles/VideoPage.css";

const VideoPage = () => {
  const [link, setLink] = useState("all");

  return (
    <div className="video-page">
      <RecentLinks
        handleClick={(value) => {
          setLink(value);
        }}
      />
      {link === "all" ? <VideoSection /> : <VideoCategorySection link={link} />}
    </div>
  );
};

export default VideoPage;
