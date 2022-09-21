// import React from "react";
import { createSlice } from "@reduxjs/toolkit";
// import { useDispatch } from "react-redux";

const initialState = {
  click: false,
  otherPage: false,
  navFixed: false,
  otherPageFixed: false,
};

export const modalSlice = createSlice({
  name: "navbar",
  initialState,
  reducers: {
    setClick: (state, action) => {
      state.click = action.payload;
    },
    setOtherPage: (state, action) => {
      state.otherPage = action.payload;
    },
    setNavFixed: (state, action) => {
      state.navFixed = action.payload;
    },
    setOtherPageFixed: (state, action) => {
      state.otherPageFixed = action.payload;
    },
  },
});

export const { setClick, setOtherPage, setNavFixed, setOtherPageFixed } = modalSlice.actions;

export default modalSlice.reducer;
