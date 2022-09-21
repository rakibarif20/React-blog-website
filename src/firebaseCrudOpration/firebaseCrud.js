// import React, { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { db } from "../firebase";
// import { addDoc, collection, deleteDoc, doc, getDocs, updateDoc } from "firebase/firestore";
// import { setGetPost } from "../redux-toolkit/features/post/postSlice";

// const FirebaseCrud = async () => {
//   const posts = useSelector((state) => state.posts);
//   const dispatch = useDispatch();
//   const collectionData = collection(db, "blog-post");

//   const getData = async () => {
//     const data = await getDocs(collectionData);
//     dispatch(setGetPost(data.docs.map((doc) => ({ ...doc.data(), id: doc.id }))));
//   };
//   console.log(posts)
//   useEffect(() => {
//     getData();
//   }, [posts]);
//   return;
// };

// export default FirebaseCrud;
