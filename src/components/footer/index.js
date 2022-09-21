import React from "react";
import { footerMenu, socialIcons } from "./utiles";
import logo from "../../images/logo-white.svg";
import './style.scss'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__container__item">
        <div className="footer_logo">
              <a className="">
                <img className="" src={logo} alt="logo" />
              </a>
            </div>
          
          <div className="footer__container__item__contact">
            <a href="https://www.gmail.com/rakibarif20@gmail.com">rakibarif20@gmail.com</a>
            <p>+880-18523-33510</p>
          </div>
        </div>
        {footerMenu.map((item) => (
          <div key={item.id} className="footer__container__item">
            <h2 className="footer__container__item__category">{item.category}</h2>
            {item.items.map((meneItem, index) => (
              <ul key={index} className="footer__container__item__menuList">
                <li key={meneItem.id}>
                  <a href={meneItem.url}>{meneItem.lable}</a>
                </li>
              </ul>
            ))}
          </div>
        ))}
        <div className="footer__container__item">
          <h2 className="footer__container__item__category">address</h2>
          <div className="footer__container__item__address">
            <p>Nesarabad, Pirojpur, Barisal, <br /> Bangladesh</p>
          </div>
        </div>
      </div>
      <div className="footer__copyRight">
            <div className="footer__copyRight__textArea">
                <p>© 2020 Copyright Diaryforlife. Allright reverved.</p>
            </div>
            <div className="footer__copyRight__socialIconsArea">
                <ul>
                {socialIcons.map(item=>(
                    <li key={item.id}>
                        <a href={item.url}>
                            {item.icon}
                        </a>
                    </li>
                ))}
                </ul>
            </div>
      </div>
    </footer>
  );
};

export default Footer;
