import React, { useEffect } from "react";
import Categories from "../../components/categories";
import { useSelector } from "react-redux";

import NewsLetter from "../../components/newsLetter";
import SingleBlogPost from "../../components/singleBlogPost";
import StorisCard from "../../components/story";

import backgroundImg from "../../images/hero.jpg";
import "./style.scss";

import {getData} from '../../redux-toolkit/features/post/postSlice'

const Home = () => {
  const { posts } = useSelector((state) => state.posts);
  // console.log(posts);
  const style = {
    backgroundImage: `url(${backgroundImg})`,
  };
  useEffect(()=>{
    getData()
    console.log('home page useEffect called');
  },[posts])
  return (
    <>
      <section id="home" className="home" style={style}>
        <div className="home__content">
          <a className="home__content__thinkingBtn">thinking</a>
          <h1 className="home__content__title">one simple word to success</h1>
          <a className="home__content__continue" href="#">
            continue reading
          </a>
        </div>
      </section>
      <div className="top-trending">
        <div className="top-trending__content">
          <h2>top trending</h2>
        </div>
        <div className="top-trending__blog-list">
          {posts && posts.map((post, index) => {
            // console.log("post id", post.id);
            // console.log("index", index);
            // console.log(post);
            const { title, publishDate, imgUrl } = post;
            return <SingleBlogPost key={index} img={imgUrl} date={publishDate} title={title} />;
          })}
        </div>
      </div>
      <StorisCard />
      <NewsLetter />
    </>
  );
};

export default Home;
