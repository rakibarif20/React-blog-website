// import React, {  } from "react";
import { createSlice } from "@reduxjs/toolkit";
// import { useDispatch } from "react-redux";
import { db } from "../../../firebase";
import { collection, getDocs } from "firebase/firestore";
// import { useSelector } from "react-redux";

const initialState = {
  posts: null,
};

export const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    setGetPost: (state, action) => {
      // state.value  = state.posts.push(action.payload);
      state.posts = action.payload;
    },
    getData:() => {
      // const dispatch = useDispatch();
      const collectionData = collection(db, "blog-post");
      const data = getDocs(collectionData);
      const mapBujena = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
      setGetPost(mapBujena);
      console.log("getData call from postSlice");
    },
  },
});

export const { setGetPost, getData } = postsSlice.actions;
export default postsSlice.reducer;
