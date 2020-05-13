import React from "react";
import "./Button.scss";
// import "../../Bus.scss";

export default function Button(props) {
  return (
    <button
      style={{ visibility: props.visibility, background: props.color }}
      className={props.classes}
      onClick={props.clicked}
    >
      {props.children}
    </button>
  );
}
