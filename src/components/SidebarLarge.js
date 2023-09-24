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
          <HomeIcon color={"var(--text-clr)"} />
          <p>Home</p>
        </div>
        <div>
          <ShortsIcon color={"var(--text-clr)"} />
          <p>Shorts</p>
        </div>
        <div>
          <SubscriptionsIcon color={"var(--text-clr)"} />
          <p>Subscriptions</p>
        </div>
      </div>
      <div className="sidebar-section">
        <div>
          <LibraryIcon color={"var(--text-clr)"} />
          <p>Library</p>
        </div>
        <div>
          <HistoryIcon color={"var(--text-clr)"} />
          <p>History</p>
        </div>
        <div>
          <WatchLaterIcon color={"var(--text-clr)"} />
          <p>Watch later</p>
        </div>
        <div>
          <LikeIcon color={"var(--text-clr)"} size={24} />
          <p>Liked videos</p>
        </div>
      </div>
    </div>
  );
};

export default SidebarLarge;
