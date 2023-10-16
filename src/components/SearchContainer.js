import { useState, useEffect } from "react";
import { SearchIcon } from "../icons";
import { Link } from "react-router-dom";
import "../styles/SearchContainer.css";

const SearchContainer = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState(null);

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
      `https://corsproxy.io/?http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=${searchQuery}`
    );
    const json = await response.json();
    setSearchResults(json[1]);
  }

  return (
    <div className="search-container">
      <input
        type="text"
        placeholder="Search"
        value={searchQuery}
        onChange={(e) => {
          setSearchQuery(e.target.value);
        }}
      />
      <Link to={"/results/" + searchQuery}>
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
              <Link to={"/results/" + searchResult}>
                <li
                  key={searchResult}
                  onClick={() => {
                    setSearchQuery("");
                    setSearchResults(null);
                  }}
                  className="search-result"
                >
                  <SearchIcon color={"var(--text-clr)"} size={18} />
                  <p>{searchResult}</p>
                </li>
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default SearchContainer;
