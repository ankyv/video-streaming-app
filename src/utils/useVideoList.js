import { useEffect, useState } from "react";
import { API_DATA_URL } from "../constants";

const useVideoList = () => {
  const [videoList, setVideoList] = useState(null);

  const API_URL = API_DATA_URL + process.env.API_KEY;

  useEffect(() => {
    getVideoList();
  }, []);

  async function getVideoList() {
    const response = await fetch(API_URL);
    const json = await response.json();
    setVideoList(json?.items);
  }

  return videoList;
};

export default useVideoList;
