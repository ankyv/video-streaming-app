import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import { SidebarSmall, SidebarLarge } from "./index";

const Body = () => {
  const isVisible = useSelector((store) => store.sidebar.isVisible);

  return (
    <div className="body">
      {isVisible ? <SidebarLarge /> : <SidebarSmall />}
      <Outlet />
    </div>
  );
};

export default Body;
