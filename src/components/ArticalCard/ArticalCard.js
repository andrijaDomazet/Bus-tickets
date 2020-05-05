import React from "react";
import "./ArticalCard.scss";

export default function ArticalCard(props) {
  console.log(props.details[2]);
  const setClass = () => {
    return `articalCard ${props.classes}`;
  };
  return (
    <div className={setClass()}>
      {title(props)}
      <img src={props.details[2]} alt="slika" />
      <div>
        {props.details[1].map((art, index) => {
          return <p key={index}>{art}</p>;
        })}
      </div>
    </div>
  );
}
const title = (props) => {
  if (props.details[0].length > 0) {
    return <div className="articalCard__title">{props.details[0]}</div>;
  }
};
