import { SearchContainer } from "./index";
import { LeftArrowIcon } from "../icons";
import { Link } from "react-router-dom";
import "../styles/SearchPage.css";

const SearchPage = () => {
  return (
    <div className="search-page">
      <button className="left-arrow-icon">
        <Link to={"/"}>
          <LeftArrowIcon color={"var(--text-clr)"} />
        </Link>
      </button>
      <SearchContainer />
    </div>
  );
};

export default SearchPage;
