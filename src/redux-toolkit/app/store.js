import { configureStore } from "@reduxjs/toolkit";
import modalSlice from "../features/modal/modalSlice";
import navbarSlice from "../features/navbar/navbarSlice";
import postSlice from "../features/post/postSlice";

export const store = configureStore({
  reducer: {
    posts: postSlice,
    modaldb: modalSlice,
    navbar: navbarSlice,
  },
});
