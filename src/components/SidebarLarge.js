import {
  HistoryIcon,
  HomeIcon,
  LibraryIcon,
  LikeIcon,
  ShortsIcon,
  SubscriptionsIcon,
  WatchLaterIcon,
} from "../icons";

const SidebarLarge = () => {
  return (
    <div className="sidebar-large">
      <div className="sidebar-section">
        <div>
          <HomeIcon />
          <p>Home</p>
        </div>
        <div>
          <ShortsIcon />
          <p>Shorts</p>
        </div>
        <div>
          <SubscriptionsIcon />
          <p>Subscriptions</p>
        </div>
      </div>
      <div className="sidebar-section">
        <div>
          <LibraryIcon />
          <p>Library</p>
        </div>
        <div>
          <HistoryIcon />
          <p>History</p>
        </div>
        <div>
          <WatchLaterIcon />
          <p>Watch later</p>
        </div>
        <div>
          <LikeIcon size={24} />
          <p>Liked videos</p>
        </div>
      </div>
    </div>
  );
};

export default SidebarLarge;
