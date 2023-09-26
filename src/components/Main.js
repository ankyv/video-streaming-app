import { Outlet } from "react-router-dom";
import RecentLinks from "./RecentLinks";

const Main = () => {
  return (
    <div className="main">
      <RecentLinks />
      <Outlet />
    </div>
  );
};

export default Main;
