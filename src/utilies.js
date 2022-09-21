import { db } from "./firebase";
import { collection, getDocs } from "firebase/firestore";

export const getData = async () => {
  const collectionData = collection(db, "blog-post");
  const data = await getDocs(collectionData);

  const mapBujena = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
  console.log('get data :', mapBujena);
  return mapBujena;

  // // console.log('main id :', mapBujena)
  // dispatch(setGetPost(mapBujena));
  console.log("get data call from app js");
  console.log("get data call from app js 2");
};
