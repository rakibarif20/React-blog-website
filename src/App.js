import React, { useEffect } from "react";
import "./App.css";
import Footer from "./components/footer";
import NavBar from "./components/navbar";
import SingleBlogPost from "./components/singleBlogPost";
import Home from "./pages/home";
import { Routes, Route } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setGetPost } from "./redux-toolkit/features/post/postSlice";
import { db } from "./firebase";
import { collection, getDocs } from "firebase/firestore";

import Blog from "./pages/blog";
import Posts from "./pages/posts";
import Pages from "./pages/pages";
import Contact from "./pages/contact";
import Error from "./pages/error";
import Modal from "../src/components/modal";
import ReuseModal from "./components/reuseModal";
import Sidebar from "./components/sidebar";

const App = () => {
  const { modalOpen, modalReuse, sidebarOpen } = useSelector((state) => state.modaldb);
  const dispatch = useDispatch();
  // console.log("app component render");
  // const { posts } = useSelector((state) => state.posts);

  const getData = async () => {
      const collectionData = collection(db, "blog-post");
      const data = await getDocs(collectionData);
      const mapBujena = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
      // console.log('main id :', mapBujena)
      dispatch(setGetPost(mapBujena));
      // console.log('get data call from app js');
      // console.log('get data call from app js 2');
      // console.log(mapBujena);
      return () => {
        dispatch(setGetPost(mapBujena));
      };
  };
  getData();
  // console.log('outSide  :', getData());
  useEffect(() => {
    // console.log("app js useEffect");
    getData();
    // dispatch(setGetPost(getData()))
    // console.log(getData());
  }, []);
  return (
    <>
      {/* {console.log("app js render")} */}
      <NavBar />
      {sidebarOpen &&  <Sidebar />}
     
      {/* <Home /> */}
      {modalOpen ? <Modal /> : null}
      {modalReuse ? <ReuseModal /> : null}
      {/* Routing  */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/posts" element={<Posts />} />
        <Route path="/pages" element={<Pages />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/*" element={<Error />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
