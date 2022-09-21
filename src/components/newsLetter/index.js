import React from "react";
import "./style.scss";

const NewsLetter = () => {
  return (
    <div className="newsLetter">
      <div className="newsLetter__content">
        <div className="newsLetter__content__textContent">
          <h3 className="newsLetter__content__textContent__title">Subscribe Newsletter</h3>
          <p className="newsLetter__content__textContent__desc">
            Get the latest blog news, trends, street-style snaps, runway coverage, <br /> party reports, and more to your
            inbox!
          </p>
        </div>
        <div className="newsLetter__content__inputField">
          <input type="text" className="newsLetter__content__inputField__input" placeholder="Enter your email..." />
          <button type="button" className="newsLetter__content__inputField__btn">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;
