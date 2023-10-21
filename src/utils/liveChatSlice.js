import { createSlice } from "@reduxjs/toolkit";
import { LIVE_CHAT_COUNT } from "../constants";

const liveChatSlice = createSlice({
  name: "liveChat",
  initialState: {
    chatMessages: [],
  },
  reducers: {
    addChatMessage: (state, action) => {
      if (state.chatMessages.length > LIVE_CHAT_COUNT) {
        state.chatMessages.splice(LIVE_CHAT_COUNT, 1);
      }
      state.chatMessages.unshift(action.payload);
    },
  },
});

export const { addChatMessage } = liveChatSlice.actions;

export default liveChatSlice.reducer;
