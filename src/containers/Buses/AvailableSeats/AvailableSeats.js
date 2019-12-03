import React from "react";

export default function AvailableSeats(props) {
  return (
    <div className="available">
      {availableSeats()}
      <i className="fas fa-user" />
    </div>
  );
}
function availableSeats(props) {
  console.log("idemoo");
  //   return console.log("idemoo");
  // this.props.numberOfSeats.length -
  //   return this.props.tickets.length - this.state.seat.length;
  // return availableSeats + "/" + this.props.numberOfSeats.length;
}
