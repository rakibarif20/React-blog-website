import React from 'react'

import './style.scss';

const PopularPost = ({img, date, title}) => {
  return (
    <div className='popularPost'>
      <div className='popularPost__picture'>
        <img src={img} alt='Blog Image' />
      </div>
      <div  className='popularPost__titleArea'>
        <span className='popularPost__titleArea__date'>{date}</span>
        <p className='popularPost__titleArea__title'>{title}</p>
      </div>
    </div>
  )
}

export default PopularPost;