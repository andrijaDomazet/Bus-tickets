import React from "react";
import "./Header.scss";

export default function Header() {
  const DATE_OPTIONS = {
    year: "numeric",
    month: "short",
    day: "numeric",
    weekday: "long",
  };
  // const currYear = new Date().getFullYear();
  const currYear = new Date().toLocaleDateString("sr", DATE_OPTIONS);
  return (
    <div className="header">
      <div className="header-line1">
        <i className="fas fa-arrow-circle-right" />
        <p>
          Polasci -{` `} {currYear}
        </p>
        {/* <p>Departures 21.08.2019 Wednesday</p> */}
      </div>
      <div className="header-line2">
        <div style={{ flex: "0.5" }}>info</div>
        <div style={{ flex: "3" }}>POLAZAK / DOLAZAK</div>
        <div style={{ flex: "1" }}>USLUGE</div>
        <div style={{ flex: "1" }}>SL. SEDIŠTA</div>
        <div style={{ flex: "1" }}>CENA</div>
        <div style={{ flex: "1" }} />
      </div>
    </div>
  );
}
