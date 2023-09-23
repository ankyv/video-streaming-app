import SidebarSmall from "./SidebarSmall";
import SidebarLarge from "./SidebarLarge";
import { useSelector } from "react-redux";
import Main from "./Main";

const Body = () => {
  const isVisible = useSelector((store) => store.sidebar.isVisible);

  return (
    <div className="body">
      {isVisible ? <SidebarLarge /> : <SidebarSmall />}
      <Main />
    </div>
  );
};

export default Body;
