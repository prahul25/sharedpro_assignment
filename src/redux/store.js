import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authSlice";
import chatReducer from "./chatSlice";

const store = configureStore({
  reducer: {
    auth: authReducer, ///for authentication
    chat: chatReducer, // for chat
  },
});

export default store;
