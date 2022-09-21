import React from "react";
import { v4 as uuidv4 } from "uuid";
import { db } from "../../firebase";
import { collection, addDoc, Timestamp, updateDoc, doc, getDocs } from "firebase/firestore";
import { getData, setGetPost } from "../../redux-toolkit/features/post/postSlice";

import { useDispatch, useSelector } from "react-redux";
import {
  setModalOpen,
  setModalReuse,
  setModalTitle,
  setModalUrl,
  setModalCategory,
  setModalCreatorName,
  setModalPublishDate,
  setModalDescription,
  resetModalForm,
  setEditModal,
  setPostId,
} from "../../redux-toolkit/features/modal/modalSlice";
import "./style.scss";

const Modal = () => {
  const {
    modalOpen,
    modalTitle,
    modalUrl,
    modalCategory,
    modalCreatorName,
    modalPublishDate,
    modalDescription,
    editModal,
    postId,
  } = useSelector((state) => state.modaldb);
  const dispatch = useDispatch();
  // console.log(postId);
  const submitModal = async (e) => {
    // console.log('submit modal called')
    e.preventDefault();
    dispatch(resetModalForm(""));
    dispatch(setModalReuse(true));

    try {
      await addDoc(collection(db, "blog-post"), {
        userId: uuidv4(),
        title: modalTitle,
        imgUrl: modalUrl,
        category: modalCategory,
        creatorName: modalCreatorName,
        publishDate: modalPublishDate,
        description: modalDescription,
        // created: Timestamp.now(),
      });
      // alert("Successfully created post");
      getData();
    } catch (err) {
      alert(err);
    }
  };

  const modalClose = () => {
    dispatch(setModalOpen(false));
    dispatch(setModalReuse(false));
    dispatch(resetModalForm(""));
    dispatch(setEditModal(false));
  };
  const switchPostButton = () => {
    dispatch(setEditModal(false));
  };

  const updateModal = async (e) => {
    e.preventDefault();
    modalClose();
    dispatch(setModalReuse(false));
    console.log("update modal called");
    switchPostButton();
    const updateFile = {
      title: modalTitle,
      imgUrl: modalUrl,
      category: modalCategory,
      creatorName: modalCreatorName,
      publishDate: modalPublishDate,
      description: modalDescription,
    };
    console.log(modalTitle);
    const newDoc = doc(db, "blog-post", postId);
    try {
      await updateDoc(newDoc, updateFile);
      dispatch(getData());
    } catch (err) {
      // alert(err);
      console.log(err)
    }
    dispatch(setPostId(false));
    dispatch(setEditModal(false));
    getData();
  };

  // const getData2 = async () => {
  //   const collectionData = collection(db, "blog-post");
  //   const data = await getDocs(collectionData);

  //   const mapBujena = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
  //   // console.log('main id :', mapBujena)
  //   dispatch(setGetPost(mapBujena));
  //   // console.log("getData2 called");
  // };
  return modalOpen ? (
    <>
      <div className="newModal" id="newModal">
        <h3>Please fill up the form for create a new post</h3>
        <form className="modalForm" onSubmit={editModal ? updateModal : submitModal}>
          <div className="modalForm__content">
            <div className="modalForm__field">
              <label>post title</label>
              <input
                type="text"
                className="modalForm__field__input"
                value={modalTitle}
                onChange={(e) => dispatch(setModalTitle(e.target.value))}
              />
            </div>
            <div className="modalForm__field">
              <label> image url</label>
              <input
                type="text"
                className="modalForm__field__input"
                value={modalUrl}
                onChange={(e) => dispatch(setModalUrl(e.target.value))}
              />
            </div>
          </div>
          <div className="modalForm__content">
            <div className="modalForm__field">
              <label>category of post</label>
              <input
                type="text"
                className="modalForm__field__input"
                value={modalCategory}
                onChange={(e) => dispatch(setModalCategory(e.target.value))}
              />
            </div>
            <div className="modalForm__field">
              <label> creator name</label>
              <input
                type="text"
                className="modalForm__field__input"
                value={modalCreatorName}
                onChange={(e) => dispatch(setModalCreatorName(e.target.value))}
              />
            </div>
            <div className="modalForm__field">
              <label>pusbish date</label>
              <input
                type="text"
                className="modalForm__field__input"
                value={modalPublishDate}
                onChange={(e) => dispatch(setModalPublishDate(e.target.value))}
              />
            </div>
          </div>
          <div className="modalForm__field">
            <label>post description</label>
            <textarea
              rows="5"
              value={modalDescription}
              onChange={(e) => dispatch(setModalDescription(e.target.value))}
            ></textarea>
          </div>
          <div className="modalForm__btn">
            <button type="submit">{editModal ? "Update" : "Submit"} post</button>
            <button type="button" onClick={modalClose}>
              cancel
            </button>
          </div>
        </form>
      </div>
    </>
  ) : null;
};

export default Modal;
