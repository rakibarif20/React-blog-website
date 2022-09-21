import React from 'react'

import './style.scss';

const SingleBlogPost = ({img, date, title}) => {
  return (
    <div className='singleBlog'>
      <div className='singleBlog__picture'>
        <img src={img} alt='Blog Image' />
      </div>
      <div  className='singleBlog__titleArea'>
        <span className='singleBlog__titleArea__date'>{date}</span>
        <p className='singleBlog__titleArea__title'>{title}</p>
      </div>
    </div>
  )
}

export default SingleBlogPost;