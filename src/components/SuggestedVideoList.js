import useVideoList from "../utils/useVideoList";
import { SuggestedVideoCard } from "./index";
import { Link } from "react-router-dom";

const SuggestedVideoList = () => {
  const videoList = useVideoList();

  if (!videoList) return null;

  return (
    <div className="suggested-video-list">
      {videoList?.map((video) => (
        <Link to={"/watch/" + video?.id} key={video?.id}>
          <SuggestedVideoCard video={video} />
        </Link>
      ))}
    </div>
  );
};

export default SuggestedVideoList;
