import React, { useEffect, useState } from "react";
import PageHeaderContent from "../../components/pageHeaderContent";
import { useSelector } from "react-redux";

// import RecentPost from "../../components/recentPost";
import SingleBlogPost from "../../components/singleBlogPost";

import './style.scss';

const Blog = () => {
  const { posts } = useSelector((state) => state.posts);

  return (
    <>
      <PageHeaderContent
        bgImg="https://images.pexels.com/photos/262508/pexels-photo-262508.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        title="blog"
      />
      <div className="blog_list">
        {posts &&
          posts.map((post, index) => {
            const { title, publishDate, imgUrl } = post;
            return <SingleBlogPost key={index} img={imgUrl} date={publishDate} title={title} />;
          })}
      </div>
    </>
  );
};

export default Blog;
