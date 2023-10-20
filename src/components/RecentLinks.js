import { useRef } from "react";
import "../styles/RecentLinks.css";

const RecentLinks = ({ handleClick }) => {
  const scrollRef = useRef(null);

  let isDragging = false;
  const scrollStep = 300;

  const links = [
    "All",
    "Music",
    "Dramedy",
    "Live",
    "Gaming",
    "Lo-fi",
    "News",
    "Trailers",
    "Gadgets",
    "Cricket",
    "Science",
    "Computer programming",
    "Recently uploaded",
    "New to you",
  ];

  return (
    <div className="recent-links">
      <div className="wrapper" onMouseUp={() => (isDragging = false)}>
        <div className="icon">
          <span
            onClick={() => {
              scrollRef.current.scrollLeft -= scrollStep;
            }}
            id="left"
          >
            &#60;
          </span>
        </div>
        <ul
          ref={scrollRef}
          className="tabs-box"
          onMouseDown={() => (isDragging = true)}
          onMouseMove={(e) => {
            scrollRef.current.scrollLeft -= isDragging ? e.movementX : 0;
          }}
        >
          {links.map((linkText) => {
            return (
              <li
                key={linkText}
                className="tab"
                onClick={() => {
                  handleClick(linkText.toLowerCase());
                }}
              >
                <p>{linkText}</p>
              </li>
            );
          })}
        </ul>
        <div className="icon">
          <span
            onClick={(e) => (scrollRef.current.scrollLeft += scrollStep)}
            id="right"
          >
            &#62;
          </span>
        </div>
      </div>
    </div>
  );
};

export default RecentLinks;
