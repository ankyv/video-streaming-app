import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setVideoCategoryList } from "./videoCategoryListSlice";

const useVideoCategoryList = () => {
  const videoCategoryList = useSelector(
    (store) => store.videoCategoryList.videoCategoryList
  );

  const [videoCategories, setVideoCategories] = useState(null);

  const dispatch = useDispatch();

  useEffect(() => {
    if (!videoCategoryList) getVideoCategories();
  }, []);

  async function getVideoCategories() {
    const response = await fetch(
      `https://youtube.googleapis.com/youtube/v3/videoCategories?part=snippet&regionCode=IN&key=${process.env.API_KEY}`
    );
    const json = await response.json();
    setVideoCategories(json?.items);
    dispatch(setVideoCategoryList(json?.items));
  }

  return videoCategoryList;
};

export default useVideoCategoryList;
