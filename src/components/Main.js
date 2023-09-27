import { Outlet } from "react-router-dom";
import RecentLinks from "./RecentLinks";
import SearchContainer from "./SearchContainer";

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
