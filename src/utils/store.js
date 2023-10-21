import { configureStore } from "@reduxjs/toolkit";
import sidebarSlice from "./sidebarSlice";
import themeSlice from "./themeSlice";
import videoCategoryListSlice from "./videoCategoryListSlice";
import liveChatSlice from "./liveChatSlice";

const store = configureStore({
  reducer: {
    sidebar: sidebarSlice,
    theme: themeSlice,
    videoCategoryList: videoCategoryListSlice,
    liveChat: liveChatSlice,
  },
});

export default store;
