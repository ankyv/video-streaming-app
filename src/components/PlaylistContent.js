import { getThumbnailSrc } from "../utils/helper";

const PlaylistContent = ({ playlist }) => {
  // const channelId = playlist?.snippet?.channelId;
  // const playlistId = playlist?.id?.playlistId;
  const playlistSrc = getThumbnailSrc(playlist?.snippet?.thumbnails);
  const playlistVideoCount = "";
  const playlistTitle = playlist?.snippet?.title;
  const playlistChannelTitle = playlist?.snippet?.channelTitle;

  return (
    <div className="playlist-content">
      <div className="playlist-thumbnail">
        <div className="playlist-thumbnail-image">
          <img src={playlistSrc} />
        </div>
        <div className="playlist-video-count">
          <p>{playlistVideoCount} videos</p>
        </div>
      </div>
      <div className="playlist-details">
        <div className="playlist-data">
          <div className="playlist-channel-image">
            <div className="channel-image"></div>
          </div>
          <div className="playlist-info">
            <div className="playlist-title">
              <h2>{playlistTitle}</h2>
            </div>
            <div className="playlist-stats">
              <p className="playlist-channel-name">{playlistChannelTitle}</p>
            </div>
          </div>
        </div>
        <button className="playlist-btn">VIEW FULL PLAYLIST</button>
      </div>
    </div>
  );
};

export default PlaylistContent;
