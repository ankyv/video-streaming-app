import useVideoSearchList from "../utils/useVideoSearchList";
import { Link } from "react-router-dom";
import { VideoWatchPageSuggestion } from "./index";
import "../styles/SuggestionVideoList.css";

const SuggestionVideoList = ({ searchQuery }) => {
  const videoList = useVideoSearchList(searchQuery);

  if (!videoList) return null;

  return (
    <div className="suggestion-video-list">
      {videoList?.map((video) => (
        <Link to={"/watch/" + video?.id?.videoId} key={video?.id?.videoId}>
          <VideoWatchPageSuggestion video={video} />
        </Link>
      ))}
    </div>
  );
};

export default SuggestionVideoList;
