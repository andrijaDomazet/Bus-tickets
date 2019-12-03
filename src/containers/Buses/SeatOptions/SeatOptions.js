import React from "react";
import Seats from "../Seats/Seats";

export default function SeatOptions() {
  return <div className="seatOptions">{seat()}</div>;
}

const seat = () => {
  return seatOptions.map((seat, index) => {
    return (
      <div key={index} style={{ display: "flex" }}>
        <p>{seat.title}</p>
        <Seats color={`${seat.color}`} />
      </div>
    );
  });
};

const seatOptions = [
  { title: "Free", color: "white" },
  { title: "Selected", color: "#58BC82" },
  { title: "Woman", color: "#F977C3" },
  { title: "Man", color: "#73A2D1" }
];
