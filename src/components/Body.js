import SidebarSmall from "./SidebarSmall";
import SidebarLarge from "./SidebarLarge";
import { useSelector } from "react-redux";

const Body = () => {
  const isVisible = useSelector((store) => store.sidebar.isVisible);

  return (
    <div className="body">
      {isVisible ? <SidebarLarge /> : <SidebarSmall />}
    </div>
  );
};

export default Body;
