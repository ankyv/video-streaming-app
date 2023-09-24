import { configureStore } from "@reduxjs/toolkit";
import sidebarSlice from "./sidebarSlice";
import themeSlice from "./themeSlice";

const store = configureStore({
  reducer: {
    sidebar: sidebarSlice,
    theme: themeSlice,
  },
});

export default store;
