import React from 'react'

import './style.scss';

const RecentPost = ({img,title,date}) => {
  return (
    <div className='test'>
      <div className='recentPotst'>
          <div className='recentPotst__thumbnil'>
            <img src={img} alt='recent picture' />
          </div>
          <div className='recentPotst__content'>
            <h4 className='recentPotst__content__title'>{title}</h4>
            <span>{date}</span>
          </div>
      </div>
    </div>
  )
}

export default RecentPost;