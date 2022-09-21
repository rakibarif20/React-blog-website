import React from "react";
import "./style.scss";

const PageHeaderContent = ({ bgImg, title }) => {
  const style = {
    backgroundImage: `url(${bgImg})`,
  };
  return (
    <div className="pageHeader" style={style}>
      <h2>{title}</h2>
    </div>
  );
};

export default PageHeaderContent;
