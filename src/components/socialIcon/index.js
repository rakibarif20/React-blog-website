import React from 'react'
import { socialIconList } from './utilize';

import './style.scss';

const SocialIcon = () => {
  return (
    <div className='socialIconList'>
       {
         socialIconList.map((item)=>{
            const {id,name,url} = item ;
            return <a key={id} href={url} className="socialIconList__item">{name}</a>
        })
       }
    </div>
  )
}

export default SocialIcon