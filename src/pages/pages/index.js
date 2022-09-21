import React from "react";
import user from "../../images/user.jpeg";

import "./style.scss";
const Pages = () => {
  return (
    <div className="pages">
      <div className="pages__user">
        <img src={user} alt="image" />
      </div>
      <div className="pages__desc">
        <h2>Hi, I am Md Rakib Hasan Arif</h2>
        <h4>I am a Front-end Developer</h4>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi corporis ea sunt voluptatum? Assumenda atque
          commodi consectetur cum cumque, dolore doloremque eaque ipsam magni optio sit voluptatum! Libero, optio totam!
          <br />
          <br />
          On refusa continuar payar custosi traductores. At solmen va esser necessi far uniform grammatica,
          pronunciation e plu sommun paroles. Ma quande lingues coalesce, li grammatica del resultant lingue es plu
          simplic e regulari quam ti del coalescent lingues.
        </p>
        <div className="pages__desc__regard">
          <p>Best Regard,</p>
          <h3>Rakib</h3>
        </div>
      </div>
    </div>
  );
};

export default Pages;
