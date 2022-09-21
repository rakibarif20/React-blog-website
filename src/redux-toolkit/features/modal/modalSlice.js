// import React from "react";
import { createSlice } from "@reduxjs/toolkit";
// import { useDispatch } from "react-redux";

const initialState = {
  modalOpen: false,
  modalReuse: false,
  sidebarOpen:false,
  modalTitle: "",
  modalUrl: "",
  modalCategory: "",
  modalCreatorName: "",
  modalPublishDate: "",
  modalDescription: "",
  editModal: false,
  postId: false,
};

export const modalSlice = createSlice({
  name: "modaldb",
  initialState,
  reducers: {
    setModalOpen: (state, action) => {
      state.modalOpen = action.payload;
    },
    setModalReuse: (state, action) => {
      state.modalReuse = action.payload;
    },
    setSidebarOpen : (state,action) =>{
      state.sidebarOpen = action.payload
    },
    setModalTitle: (state, action) => {
      state.modalTitle = action.payload;
    },
    setModalUrl: (state, action) => {
      state.modalUrl = action.payload;
    },
    setModalCategory: (state, action) => {
      state.modalCategory = action.payload;
    },
    setModalCreatorName: (state, action) => {
      state.modalCreatorName = action.payload;
    },
    setModalPublishDate: (state, action) => {
      state.modalPublishDate = action.payload;
    },
    setModalDescription: (state, action) => {
      state.modalDescription = action.payload;
    },
    resetModalForm: (state, action) => {
      state.modalTitle = action.payload;
      state.modalUrl = action.payload;
      state.modalCategory = action.payload;
      state.modalCreatorName = action.payload;
      state.modalPublishDate = action.payload;
      state.modalDescription = action.payload;
    },
    setEditModal: (state, action) => {
      state.editModal = action.payload;
    },
    setPostId: (state, action) => {
      state.postId = action.payload;
    },
  },
});

export const {
  setModalOpen,
  setModalReuse,
  setSidebarOpen,
  setModalTitle,
  setModalUrl,
  setModalCategory,
  setModalCreatorName,
  setModalPublishDate,
  setModalDescription,
  resetModalForm,
  setEditModal,
  setPostId,
} = modalSlice.actions;

export default modalSlice.reducer;
