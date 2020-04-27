import React from "react";
import "./SideDrawer.scss";
import { NavLink } from "react-router-dom";
// import Logo from "../../../img/logo.png";

export default function SideDrawer(props) {
  console.log(props.details);

  let drawerClasses = "side-drawer";
  if (props.show) {
    drawerClasses = "side-drawer open";
  }

  return (
    <div onClick={props.clicked}>
      <nav className={drawerClasses}>
        {/* <div className="logo">
          <img src={Logo} alt="logo" />
        </div> */}
        <h2>SBT</h2>
        <ul>
          {props.details.map((option, index) => {
            return (
              <li key={index}>
                <NavLink to={option.route} exact className="top-link2">
                  {option.title}
                </NavLink>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
}
