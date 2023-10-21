import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { VideoHomePage, ShimmerSection } from "./index";
import "../styles/ExplorePage.css";

const ExplorePage = () => {
  const { categoryId } = useParams();

  const [videoList, setVideoList] = useState(null);

  useEffect(() => {
    getVideoList();
  }, [categoryId]);

  async function getVideoList() {
    const response = await fetch(
      `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&videoCategoryId=${categoryId}&key=${process.env.API_KEY}`
    );
    const json = await response.json();
    setVideoList(json?.items);
  }

  if (!videoList) return <ShimmerSection />;

  return (
    <div className="explore-page">
      <div className="video-section">
        {videoList?.map((video) => {
          return (
            <Link to={"/watch/" + video?.id} key={video?.id}>
              <VideoHomePage video={video} />
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default ExplorePage;
