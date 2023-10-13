import { Outlet } from "react-router-dom";
import { RecentLinks, SearchContainer } from "./index";
import "../styles/Main.css";

const Main = () => {
  return (
    <div className="main">
      <div className="main-search-box">
        <SearchContainer />
      </div>
      <RecentLinks />
      <Outlet />
    </div>
  );
};

export default Main;
