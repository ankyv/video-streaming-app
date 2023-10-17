import { useEffect, useState } from "react";

const useChannelPlaylist = (channelId) => {
  const [channelPlaylist, setChannelPlaylist] = useState(null);

  useEffect(() => {
    getChannelPlaylist();
  }, []);

  async function getChannelPlaylist() {
    const response = await fetch(
      `https://youtube.googleapis.com/youtube/v3/playlists?part=snippet%2CcontentDetails&channelId=${channelId}&maxResults=25&key=${process.env.API_KEY}`
    );
    const json = await response.json();
    setChannelPlaylist(json?.items);
  }

  return channelPlaylist;
};

export default useChannelPlaylist;
