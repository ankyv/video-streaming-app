import { useState, useEffect } from "react";
import { SearchIcon } from "../icons";
import { Link } from "react-router-dom";

const SearchContainer = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState(null);

  const modifiedQuery = searchQuery.replace(" ", "%20");

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
  );
};

export default SearchContainer;
