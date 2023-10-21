import { configureStore } from "@reduxjs/toolkit";
import sidebarSlice from "./sidebarSlice";
import themeSlice from "./themeSlice";
import videoCategoryListSlice from "./videoCategoryListSlice";

const store = configureStore({
  reducer: {
    sidebar: sidebarSlice,
    theme: themeSlice,
    videoCategoryList: videoCategoryListSlice,
  },
});

export default store;
