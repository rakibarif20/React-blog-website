import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteDoc, doc, updateDoc } from "firebase/firestore";
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

import PostCard from "../postCard";
import RecentPost from "../recentPost";
import { db } from "../../firebase";
import "./style.scss";
import Categories from "../categories";
import SocialIcon from "../socialIcon";
import SingleBlogPost from "../singleBlogPost";
import PopularPost from "../popularPost";

const StorisCard = () => {
  const { posts } = useSelector((state) => state.posts);
  const { postId } = useSelector((state) => state.modaldb);
  // console.log(posts);
  // const { modalOpen } = useSelector((state) => state.modaldb);
  const dispatch = useDispatch();
  // const popularPost = posts[0];
  // console.log("popularPost :", popularPost);
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

  // useEffect(() => {
  //   getData();
  // }, [popularPost]);
  return (
    <div className="storisCard_Main_section">
    <div className="storisCard">
      <div className="storisCard__leftSide">
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
      <div className="storisCard__rightSide">
        {/* <h4>popular posts</h4>
        <div className="popularPostCard">
          {popularPost && (
            <PopularPost img={popularPost.imgUrl} date={popularPost.publishDate} title={popularPost.title} />
          )}
        </div> */}

        <h4 className="recen-post-title">recent post</h4>
        <div className="recentPost">
          {posts &&
            posts.map((post, index) => {
              const { title, imgUrl, publishDate } = post;
              return <RecentPost key={index} img={imgUrl} date={publishDate} title={title} />;
            })}
        </div>

        <h4>categories</h4>
        <Categories />
        <h4>follow me</h4>
        <SocialIcon />
      </div>
    </div>
    </div>
  );
};

export default StorisCard;
