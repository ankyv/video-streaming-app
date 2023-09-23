import { HomeIcon, LibraryIcon, ShortsIcon, SubscriptionsIcon } from "../icons";

const SidebarSmall = () => {
  return (
    <div className="sidebar-small">
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
      <div>
        <LibraryIcon />
        <p>Library</p>
      </div>
    </div>
  );
};

export default SidebarSmall;
