import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { navMenu } from "./utiles";
import { FaBars } from "react-icons/fa";
import { HiX } from "react-icons/hi";
import logoDark from "../../images/logo-dark.svg";
import logoWhite from "../../images/logo-white.svg";
import { useDispatch, useSelector } from "react-redux";

import { setModalOpen, setSidebarOpen } from "../../redux-toolkit/features/modal/modalSlice";
import {
  
  setClick,
  setNavFixed,
  setOtherPage,
  setOtherPageFixed,
} from "../../redux-toolkit/features/navbar/navbarSlice";

import "./style.scss";

const NavBar = () => {
  const [renderPost, setRenderPost] = useState(false)
  const { click, otherPage, navFixed, otherPageFixed } = useSelector((state) => state.navbar);
  const location = useLocation().pathname === "/";
  const dispatch = useDispatch();
  // console.log("navbar render");

  const faBarsColorWhite = {
    color :'#fff'
  }
  const faBarsColorBlack = {
    color : '#191919'
  }

  // const { modalOpen } = useSelector((state) => state.modaldb);
  const createFormOpen = () => {
    dispatch(setModalOpen(true));
  };
  const handleClick = () => {
    dispatch(setClick(!click));
    dispatch(setSidebarOpen(true));
  };

  useEffect(() => {
    dispatch(setOtherPage(!location));
    // console.log(otherPage);
  }, [location]);

  useEffect(() => {
    const bgNavColor = () => {
      if (location) {
        dispatch(setNavFixed(window.scrollY >= 50));
        dispatch(setOtherPageFixed(false));
      } else {
        dispatch(setNavFixed(false));
      }
      if (!location) {
        if (window.scrollY >= 200) {
          dispatch(setOtherPageFixed(true));
        } else {
          dispatch(setOtherPageFixed(false));
        }
      }
    };
    window.addEventListener("scroll", bgNavColor);
  }, [location]);

  // console.log("location", location);

  // data get form firebse databse

  // const location = useLocation().pathname === "/";


  return (
    <div
      className={`nav ${navFixed ? "fixedtotop" : ""} ${otherPage ? "othernav" : ""} ${
        otherPageFixed ? "otherPageFixedToTop" : ""
      } `}
    >
      <div className="nav__container">
        <div className="nav__container__navbar">
          <div className="nav__container__navbar__logo">
            <div className="logo_img">
              <Link to="/">
                <img className="" src={otherPage || navFixed ? logoDark : logoWhite} alt="logo" />
              </Link>
            </div>
          </div>
          <ul className="nav__container__navbar__menu">
            {navMenu.map((item) => (
              <li className="nav__container__navbar__menu__li" key={item.id}>
                {/* <a href={item.url}>{item.label}</a> */}
                <Link className="nav__container__navbar__menu__li__link" to={item.url}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="nav__container__navbar__btn">
            <button className="btn" onClick={createFormOpen}>
              create
            </button>
          </div>
          <div className="navbar_icon" onClick={handleClick}>
            {click ? <HiX  size={30} /> : <FaBars style={location ? !navFixed ? faBarsColorWhite : faBarsColorBlack : faBarsColorBlack} size={30} />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
