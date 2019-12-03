import React from "react";
import "./Background.scss";

const lines = Array.from({ length: 100 });
export default function Background() {
  return (
    <div>
      {lines.map((line, index) => {
        return (
          <div
            key={index}
            className="lines"
            style={{
              marginLeft: "-800px",
              marginTop: `${-800 + index * 50}px`,
              transform: "rotate(60deg)"
              // border: "1px solid green"
            }}
          ></div>
        );
      })}
      {lines.map((line, index) => {
        return (
          <div
            key={index}
            className="lines"
            style={{
              marginLeft: "-1000px",
              marginTop: `${-1000 + index * 25}px`,
              transform: "rotate(-30deg)"
              // border: "1px solid red"
            }}
          ></div>
        );
      })}
      {lines.map((line, index) => {
        return (
          <div
            key={index}
            className="lines"
            style={{
              marginLeft: "-1000px",
              marginTop: `${-1000 + index * 25}px`,
              transform: "rotate(11.5deg)"
              // border: "1px solid blue"
            }}
          ></div>
        );
      })}
      {lines.map((line, index) => {
        return (
          <div
            key={index}
            className="lines"
            style={{
              marginLeft: `${-40 * index}px`,
              marginTop: `${-1000 + index * 50}px`,
              transform: "rotate(-78.5deg)"
              // border: "1px solid yellow"
            }}
          ></div>
        );
      })}
    </div>
  );
}
