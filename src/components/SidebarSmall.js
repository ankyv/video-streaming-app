import { HomeIcon, LibraryIcon, ShortsIcon, SubscriptionsIcon } from "../icons";

const SidebarSmall = () => {
  return (
    <div className="sidebar-small">
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
      <div>
        <LibraryIcon color={"var(--text-clr)"} />
        <p>Library</p>
      </div>
    </div>
  );
};

export default SidebarSmall;
