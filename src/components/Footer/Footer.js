import React from "react";
import "./Footer.scss";
import logo from "../../bus.png";
import { headerList } from "../../shared/routing";
import { footerInfo } from "../../shared/footerInfo";
import { NavLink } from "react-router-dom";

export default function Footer() {
  return (
    <div className="footer">
      <div className="footer__links">
        <img src={logo} alt="logo" />
        {headerList.map((item, index) => {
          return (
            <NavLink className="footer__link" exact key={index} to={item.route}>
              {item.title}
            </NavLink>
          );
        })}
      </div>
      <div className="footer__info">
        {footerInfo.map((item, index) => {
          return (
            <span key={index}>
              <i className={`fas fa-${item.icon}`}></i>
              {item.title}
            </span>
          );
        })}
      </div>
      <div>
        Created by <span>andrijaDomazet</span>
      </div>
    </div>
  );
}
