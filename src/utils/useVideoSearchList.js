import { useEffect, useState } from "react";

const useVideoSearchList = (searchQuery) => {
  const [videoList, setVideoList] = useState(null);

  const API_URL = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=50&q=${searchQuery}&key=${process.env.API_KEY}`;

  useEffect(() => {
    getSearchResult();
  }, [searchQuery]);

  async function getSearchResult() {
    const response = await fetch(API_URL);
    const json = await response.json();
    const resultData = json?.items?.filter(
      (video) => video?.id?.kind === "youtube#video"
    );
    console.log(resultData);
    setVideoList([...resultData]);
  }

  return videoList;
};

export default useVideoSearchList;
