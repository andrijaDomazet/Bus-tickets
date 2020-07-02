import React from "react";
import "./WarningCard.scss";

export default function WarningCard(props) {
  return (
    <div
      className={`warningCard ${props.classes}`}
      style={{ display: props.show }}
    >
      <span>{props.children}</span>
    </div>
  );
}
