import {
  AccountIcon,
  DarkIcon,
  LightIcon,
  LogoIcon,
  MenuIcon,
  MicIcon,
  NotificationIcon,
  SearchIcon,
  VideoAddIcon,
} from "../icons";
import { useDispatch } from "react-redux";
import { toggleSidebar } from "../utils/sidebarSlice";
import { toggleTheme } from "../utils/themeSlice";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { SearchContainer } from "./index";
import { Link } from "react-router-dom";
import "../styles/Header.css";

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
        <Link to="/">
          <div className="logo-container">
            <LogoIcon color={"var(--text-clr)"} />
            <h1>AVTube</h1>
          </div>
        </Link>
      </div>
      <div className="header-mid">
        <SearchContainer />
        <div className="mic-icon">
          <MicIcon color={"var(--text-clr)"} />
        </div>
      </div>
      <div className="header-right">
        <div className="search-icon">
          <Link to={"/search"}>
            <SearchIcon color={"var(--text-clr)"} />
          </Link>
        </div>
        <div
          className="theme-icon"
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
        <div className="video-add-icon">
          <VideoAddIcon color={"var(--text-clr)"} />
        </div>
        <div className="notification-icon">
          <NotificationIcon color={"var(--text-clr)"} />
        </div>
        <div className="account-icon">
          <AccountIcon color={"var(--text-clr)"} />
        </div>
      </div>
    </div>
  );
};

export default Header;
