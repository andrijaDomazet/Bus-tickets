import React from "react";
import "./WarningCard.scss";

export default function WarningCard(props) {
  return (
    <div className={"warningCard" + " " + props.clasees}>
      <span>{props.children}</span>
    </div>
  );
}
