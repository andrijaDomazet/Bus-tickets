import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "./PageHeader.scss";
export default class PageHeader extends Component {
  render() {
    return (
      <div className="pageHeader">
        <div className="pageHeader__top">
          <div>
            <i className="far fa-sticky-note" /> Online Survey
          </div>
          <div>
            <i className="fas fa-user" />
            Passenger Card Login
          </div>
          <div>
            <i className="fas fa-plus" /> Passenger Card Register
          </div>
          <div>
            English
            <i className="fas fa-sort-down" />
          </div>
        </div>
        <div className="pageHeader__bottom">
          <div className="logo">SBT</div>
          {list()}
        </div>
      </div>
    );
  }
}
const list = () => {
  return headerList.map((item, index) => {
    return (
      <NavLink className="pageHeader__item" key={index} to={`${item.link}`}>
        {item.title}
      </NavLink>
    );
  });
};
const headerList = [
  { link: "/", title: "Pocetna" },
  { link: "/onama", title: "O nama" },
  { link: "/redvoznje", title: "Red voznje" },
  { link: "/basturist", title: "Basturist" },
  { link: "/dogadjaji", title: "Dogadjaji" },
  { link: "/ostalo", title: "Ostalo" },
  { link: "/kontakt", title: "Kontakt" }
];
