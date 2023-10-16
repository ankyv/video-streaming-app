import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import { SidebarSmall, SidebarLarge } from "./index";
import "../styles/Body.css";

const Body = () => {
  const isVisible = useSelector((store) => store.sidebar.isVisible);

  return (
    <div className="body">
      <SidebarSmall />
      {isVisible && <SidebarLarge />}
      <Outlet />
    </div>
  );
};

export default Body;
