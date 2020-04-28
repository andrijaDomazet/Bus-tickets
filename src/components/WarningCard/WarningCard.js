import React from "react";
import "./WarningCard.scss";

export default function WarningCard(props) {
  return (
    <div className="warningCard">
      <span>{props.children}</span>
    </div>
  );
}
