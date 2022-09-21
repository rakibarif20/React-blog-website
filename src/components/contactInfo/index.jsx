import React from "react";
import "./style.scss";

const ContactInfo = () => {
  return (
    <div className="contactInfo">
      <div className="contactInfo__content">
        <div className="contactInfo__content__desc">
          <h3>Address</h3>
          <p>112 Whiblue, Road 112, London, UK</p>
        </div>
        <div className="contactInfo__content__desc">
          <h3>Email</h3>
          <p>hello@pantera.info</p>
        </div>
        <div className="contactInfo__content__desc">
          <h3>Phone</h3>
          <span>+82 112 99872</span>
          <span>+82 112 11234</span>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
