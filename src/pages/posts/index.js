import React from "react";
import PageHeaderContent from "../../components/pageHeaderContent";
import { db } from "../../firebase";
import { useSelector, useDispatch } from "react-redux";
import { deleteDoc, doc, updateDoc } from "firebase/firestore";
import PostCard from "../../components/postCard";
import {
  setModalOpen,
  setModalTitle,
  setModalUrl,
  setModalCategory,
  setModalCreatorName,
  setModalPublishDate,
  setModalDescription,
  setEditModal,
  setPostId,
} from "../../redux-toolkit/features/modal/modalSlice";
import { getData } from "../../redux-toolkit/features/post/postSlice";

import "./style.scss";

const Posts = () => {
  const { posts } = useSelector((state) => state.posts);
  const dispatch = useDispatch();
  const editOpenMdoal = (id, title, url, category, name, date, desc) => {
    // console.log("edit modalopen function called");
    dispatch(setPostId(id));
    dispatch(setModalOpen(true));
    dispatch(setModalTitle(title));
    dispatch(setModalUrl(url));
    dispatch(setModalCategory(category));
    dispatch(setModalCreatorName(name));
    dispatch(setModalPublishDate(date));
    dispatch(setModalDescription(desc));
    dispatch(setEditModal(true));
    // console.log("edit button form ", name);
  };

  const deletePost = async (id) => {
    // console.log("delete item funcion called");
    // console.log("delete post ", postId);
    dispatch(setPostId(id));
    const deleteItem = doc(db, "blog-post", id);
    try {
      // console.log(deleteItem);
      await deleteDoc(deleteItem);
      updateDoc();
    } catch (err) {
      // alert(err);
    }
    getData();
  };
  return (
    <>
      <PageHeaderContent
        bgImg="https://images.pexels.com/photos/2273580/pexels-photo-2273580.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        title="posts"
      />
      <div className="posts">
        {posts &&
          posts.map((post, index) => {
            // console.log("post id test", post.id);
            const { title, imgUrl, description, publishDate, creatorName, category, id } = post;
            return (
              <div key={index}>
                <PostCard
                  title={title}
                  img={imgUrl}
                  desc={description}
                  creator={creatorName}
                  category={category}
                  date={publishDate}
                />
                <button
                  onClick={() => editOpenMdoal(id, title, imgUrl, category, creatorName, publishDate, description)}
                >
                  Edit
                </button>
                <button onClick={() => deletePost(id)}>Delete</button>
              </div>
            );
          })}
      </div>
    </>
  );
};

export default Posts;
