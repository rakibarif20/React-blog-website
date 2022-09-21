import React, { useState } from "react";
import { useLocation } from "react-router-dom";

import "./style.scss";

const PostCard = ({ category, img, title, creator, date, desc }) => {
  const postPageLocation = useLocation().pathname === "/posts";
  const [readMore, setReadMore] = useState(false);
  return (
    <div className="postCard">
      <div className="postCard__imgSection">
        <a className="postCard__imgSection__category">{category}</a>
        <img src={img} alt="post card img" />
      </div>
      <div className="postCard__contentArea">
        <h3>{title}</h3>
        <div className="postCard__contentArea__nameDate">
          <span>Created By : {creator}</span>
          <span>Publish Date : {date}</span>
        </div>
        <p>
          {
            postPageLocation ? readMore ? desc : (`${desc.substring(0, 100) }...`)  : (`${desc.substring(0, 100)} ...`)
          }
         
          {postPageLocation && (
            <button type="button" onClick={() => setReadMore(!readMore)}>{readMore ? "Show less" : "Read More ..."}</button>
          )}
        </p>
      </div>
    </div>
  );
};

export default PostCard;
