import { useEffect, useState } from "react";

const usePlaylistItems = (playlistId) => {
  const [playlistItems, setPlaylistItems] = useState(null);

  useEffect(() => {
    getPlaylistItems();
  }, []);

  async function getPlaylistItems() {
    const response = await fetch(
      `https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet%2CcontentDetails&maxResults=25&playlistId=${playlistId}&key=${process.env.API_KEY}`
    );
    const json = await response.json();
    console.log(json);
    setPlaylistItems(json?.items);
  }

  return playlistItems;
};

export default usePlaylistItems;
