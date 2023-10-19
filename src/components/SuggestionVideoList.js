import useVideoList from "../utils/useVideoList";
import { Link } from "react-router-dom";
import { VideoWatchPageSuggestion } from "./index";
import "../styles/SuggestionVideoList.css";

const SuggestionVideoList = () => {
  const videoList = useVideoList();

  if (!videoList) return null;

  return (
    <div className="suggestion-video-list">
      {videoList?.map((video) => (
        <Link to={"/watch/" + video?.id} key={video?.id}>
          <VideoWatchPageSuggestion video={video} />
        </Link>
      ))}
    </div>
  );
};

export default SuggestionVideoList;
