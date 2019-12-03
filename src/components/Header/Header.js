import React from "react";
import "./Header.scss";

export default function Header() {
  const DATE_OPTIONS = {
    year: "numeric",
    month: "short",
    day: "numeric",
    weekday: "long"
  };
  // const currYear = new Date().getFullYear();
  const currYear = new Date().toLocaleDateString("en-US", DATE_OPTIONS);
  return (
    <div className="header">
      <div className="header-line1">
        <i className="fas fa-arrow-circle-right" />
        <p>
          Departures -{` `} {currYear}
        </p>
        {/* <p>Departures 21.08.2019 Wednesday</p> */}
      </div>
      <div className="header-line2">
        <div style={{ flex: "0.5" }}>info</div>
        <div style={{ flex: "3" }}>DEPARTURE / ARRiVAL</div>
        <div style={{ flex: "1" }}>SPECIFICATIONS</div>
        <div style={{ flex: "1" }}>A. SEAT</div>
        <div style={{ flex: "1" }}>PRICE</div>
        <div style={{ flex: "1" }} />
      </div>
    </div>
  );
}
