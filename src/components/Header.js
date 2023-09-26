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
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState(null);

  const modifiedQuery = searchQuery.replace(" ", "%20");

  const dispatch = useDispatch();

  const theme = useSelector((store) => store.theme.theme);

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  useEffect(() => {
    const timer = setTimeout(() => {
      getSearchResults();
    }, 200);

    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  async function getSearchResults() {
    const response = await fetch(
      `http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=${searchQuery}`
    );
    const json = await response.json();
    setSearchResults(json[1]);
  }

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
        <div className="search-container">
          <input
            type="text"
            placeholder="Search"
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value);
            }}
          />
          <Link to={"/results/" + modifiedQuery}>
            <button
              onClick={() => {
                setSearchQuery("");
                setSearchResults(null);
              }}
            >
              <SearchIcon color={"var(--text-clr)"} />
            </button>
          </Link>
          {searchResults?.length > 0 && (
            <div className="search-results">
              {searchResults?.map((searchResult) => {
                return (
                  <li
                    key={searchResult}
                    onClick={() => {
                      setSearchQuery(searchResult);
                    }}
                    className="search-result"
                  >
                    <SearchIcon color={"var(--text-clr)"} size={18} />
                    <p>{searchResult}</p>
                  </li>
                );
              })}
            </div>
          )}
        </div>
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
