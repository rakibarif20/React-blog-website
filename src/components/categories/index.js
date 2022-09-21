import React from 'react'

import './style.scss';

const Categories = ({img,title,pubDate}) => {
  return (
    <div className='categories'>
      <ul className='categories__list'>
        <li>
          <a href="#">
            All
            <span>50</span>
          </a>
        </li>
        <li>
          <a href="#">
            All
            <span>50</span>
          </a>
        </li>
        <li>
          <a href="#">
            All
            <span>50</span>
          </a>
        </li>
        <li>
          <a href="#">
            All
            <span>50</span>
          </a>
        </li>
        <li>
          <a href="#">
            All
            <span>50</span>
          </a>
        </li>
      </ul>
    </div>
  )
}

export default Categories;