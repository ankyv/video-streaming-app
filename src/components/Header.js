import {
  AccountIcon,
  DarkIcon,
  LightIcon,
  LogoIcon,
  MenuIcon,
  MicIcon,
  NotificationIcon,
  VideoAddIcon,
} from "../icons";
import { useDispatch } from "react-redux";
import { toggleSidebar } from "../utils/sidebarSlice";
import { toggleTheme } from "../utils/themeSlice";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { SearchContainer } from "./index";

const Header = () => {
  const dispatch = useDispatch();

  const theme = useSelector((store) => store.theme.theme);

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return (
    <div className="header">
      <div className="header-left">
        <div
          onClick={() => {
            dispatch(toggleSidebar());
          }}
          className="menu-icon"
        >
          <MenuIcon color={"var(--text-clr)"} />
        </div>
        <div className="logo-container">
          <LogoIcon color={"var(--text-clr)"} />
          <h1>Project</h1>
        </div>
      </div>
      <div className="header-mid">
        <SearchContainer />
        <div className="mic-icon">
          <MicIcon color={"var(--text-clr)"} />
        </div>
      </div>
      <div className="header-right">
        <div
          onClick={() => {
            dispatch(toggleTheme());
          }}
        >
          {theme === "light" ? (
            <DarkIcon color={"var(--text-clr)"} />
          ) : (
            <LightIcon color={"var(--text-clr)"} />
          )}
        </div>
        <div>
          <VideoAddIcon color={"var(--text-clr)"} />
        </div>
        <div>
          <NotificationIcon color={"var(--text-clr)"} />
        </div>
        <div>
          <AccountIcon color={"var(--text-clr)"} />
        </div>
      </div>
    </div>
  );
};

export default Header;
