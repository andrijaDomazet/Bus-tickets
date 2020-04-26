import React from "react";
import "./ArticalCard.scss";

export default function ArticalCard(props) {
  return (
    <div className="articalCard">
      <div className="articalCard__title">{props.details[0]}</div>
      {props.details[1].map((art, index) => {
        return (
          <div>
            <p key={index}>{art}</p>
          </div>
        );
      })}
    </div>
  );
}
