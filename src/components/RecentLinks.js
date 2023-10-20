import "../styles/RecentLinks.css";

const RecentLinks = ({ handleClick }) => {
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
      {links.map((linkText) => {
        return (
          <div
            key={linkText}
            className="recent-link"
            onClick={() => {
              handleClick(linkText.toLowerCase());
            }}
          >
            <p>{linkText}</p>
          </div>
        );
      })}
    </div>
  );
};

export default RecentLinks;
