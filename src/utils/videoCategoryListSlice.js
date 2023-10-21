import { createSlice } from "@reduxjs/toolkit";

const videoCategoryListSlice = createSlice({
  name: "videoCategoryList",
  initialState: {
    videoCategoryList: null,
  },
  reducers: {
    setVideoCategoryList: (state, action) => {
      state.videoCategoryList = action.payload;
    },
  },
});

export const { setVideoCategoryList } = videoCategoryListSlice.actions;

export default videoCategoryListSlice.reducer;
