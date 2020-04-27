import React from "react";
import "./toggleButton.scss";

export default function ToggleButton(props) {
  return (
    <div>
      <button className="toggle" onClick={props.clicked}>
        <div className="toggle-button-line" />
        <div className="toggle-button-line" />
        <div className="toggle-button-line" />
      </button>
    </div>
  );
}
