const RecentLinks = () => {
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
          <div className="recent-link">
            <p>{linkText}</p>
          </div>
        );
      })}
    </div>
  );
};

export default RecentLinks;
