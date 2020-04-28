import React from "react";
import "./ArticalCard.scss";

export default function ArticalCard(props) {
  return (
    <div className="articalCard">
      {title(props)}
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
const title = (props) => {
  if (props.details[0].length > 0) {
    return <div className="articalCard__title">{props.details[0]}</div>;
  }
};
