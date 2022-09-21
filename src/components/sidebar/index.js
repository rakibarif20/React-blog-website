import React from "react";
import { Link } from "react-router-dom";
import { MdOutlineCancel } from "react-icons/md";
import { FaInstagram } from "react-icons/fa";
import { TbBrandTwitter } from "react-icons/tb";
import { FiLinkedin, FiFacebook } from "react-icons/fi";
import logoDark from "../../images/logo-dark.svg";
import { navMenu } from "./utiles";
import { useDispatch } from "react-redux";
import { setSidebarOpen } from "../../redux-toolkit/features/modal/modalSlice";
import { setModalOpen } from "../../redux-toolkit/features/modal/modalSlice";
import { setClick } from "../../redux-toolkit/features/navbar/navbarSlice";
import "./style.scss";

const Sidebar = () => {
  const dispatch = useDispatch();
  const closeSidebar = () => {
    dispatch(setSidebarOpen(false));
    dispatch(setClick(false));
  };
  const createButtonClick = () => {
    dispatch(setSidebarOpen(false));
    dispatch(setModalOpen(true));
    dispatch(setClick(false));
  };
  return (
    <div className="sidebar_full">
      <div className="sidebar">
        <div className="sidebar__titleArea">
          <div className="sidebar__titleArea__logo">
            <img src={logoDark} alt="lgo" />
          </div>
          <button type="button" onClick={closeSidebar}>
            <MdOutlineCancel />
          </button>
        </div>
        <div className="sidebar__menuList">
          <ul>
            {navMenu.map((item) => (
              <li className="" key={item.id}>
                {/* <a href={item.url}>{item.label}</a> */}
                <Link className="" onClick={closeSidebar} to={item.url}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="sidebar__btn">
          <button className="btn" onClick={createButtonClick}>
            Create
          </button>
        </div>
        <div className="sidebar__socialIcons">
          <ul>
            <li>
              <FiFacebook size={25} />
            </li>
            <li>
              <TbBrandTwitter size={25} />
            </li>
            <li>
              <FaInstagram size={25} />
            </li>
            <li>
              <FiLinkedin size={25} />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
