import {
  AccountIcon,
  LogoIcon,
  MenuIcon,
  MicIcon,
  NotificationIcon,
  SearchIcon,
  VideoAddIcon,
} from "../icons";

const Header = () => {
  return (
    <div className="header">
      <div className="header-left">
        <div className="menu-icon">
          <MenuIcon />
        </div>
        <div className="logo-container">
          <LogoIcon />
          <h1>Project</h1>
        </div>
      </div>
      <div className="header-mid">
        <div className="search-container">
          <input type="text" placeholder="Search" />
          <button>
            <SearchIcon />
          </button>
        </div>
        <div className="mic-icon">
          <MicIcon />
        </div>
      </div>
      <div className="header-right">
        <div>
          <VideoAddIcon />
        </div>
        <div>
          <NotificationIcon />
        </div>
        <div>
          <AccountIcon />
        </div>
      </div>
    </div>
  );
};

export default Header;
