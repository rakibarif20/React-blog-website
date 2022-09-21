import React, { useState } from "react";
import "./style.scss";

const ContactFrom = () => {
  return (
    <div className="form-test">
      <form className="form">
        <div className="form__contact">
          <div className="form__field">
            <label>name</label>
            <input className="form__field__input" name="title" />
          </div>
          <div className="form__field">
            <label>email</label>
            <input className="form__field__input" name="description" />
          </div>
        </div>
        <div className="form__field">
          <label>Message</label>
          <textarea rows={6} cols={40}></textarea>
        </div>
        <div className="form__btn">
          <button type="submit">submit</button>
        </div>
      </form>
    </div>
  );
};

export default ContactFrom;
