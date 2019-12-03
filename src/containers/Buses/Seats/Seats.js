import React from "react";
import "./Seats.scss";

export default function Seats(props) {
  return (
    <button className={props.classes} onClick={props.clicked}>
      <div className="seat">
        <div className="naslon__1" style={{ backgroundColor: props.color }} />
        <div className="naslon__2" style={{ backgroundColor: props.color }} />
        <div className="naslon__3" style={{ backgroundColor: props.color }} />
        <div className="sediste" style={{ backgroundColor: props.color }}>
          {props.children}
        </div>
      </div>
    </button>
  );
}
