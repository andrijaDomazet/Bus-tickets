import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "./PageHeader.scss";
import ToggleButton from "./SideDrawer/ToggleButton";
import SideDrawer from "./SideDrawer/SideDrawer";
import { headerList } from "../../shared/routing";

export default class PageHeader extends Component {
  state = {
    sideDrawerOpen: false,
  };
  drawerToggleClickHandler = () => {
    this.setState((prevState) => {
      return { sideDrawerOpen: !prevState.sideDrawerOpen };
    });
  };
  removeBackdrop = () => {
    this.setState({
      sideDrawerOpen: false,
    });
  };
  render() {
    return (
      <div className="pageHeader">
        {/* <div className="pageHeader__top">
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
        </div> */}
        <div className="pageHeader__bottom">
          <div className="logo">SBT</div>
          {getHeaderOptions()}
        </div>

        <ToggleButton clicked={this.drawerToggleClickHandler} />
        <SideDrawer
          show={this.state.sideDrawerOpen}
          clicked={this.drawerToggleClickHandler}
          details={headerList}
        />
      </div>
    );
  }
}
const getHeaderOptions = () => {
  return headerList.map((item, index) => {
    return (
      <NavLink className="pageHeader__item" key={index} to={`${item.route}`}>
        {item.title}
      </NavLink>
    );
  });
};
