import React from "react";
// import "../../Bus.scss";

export default function Buttons(props) {
  return (
    <button
      style={{ visibility: props.visibility }}
      className={props.classes}
      onClick={props.clicked}
    >
      {props.children}
    </button>
  );
}
