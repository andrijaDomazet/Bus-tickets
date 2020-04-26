import React from "react";
import Button from "../UI/Button/Button";

export default function Payment(props) {
  return (
    <div
      ref={props.refProp}
      className="ticket"
      style={{ display: props.paymentClick ? "" : "none" }}
    >
      <div className="personalDetails">
        <form className="inputForm" action="">
          <input type="text" placeholder="First name" />
          <input type="text" placeholder="Last name" />
          <input type="text" placeholder="Age" />
          <div>
            <input type="radio" placeholder="male" />
            Male
            <input type="radio" placeholder="female" />
            Female
          </div>
        </form>
      </div>
      <div className="price">
        <p>
          Seat number(s):
          {props.seat.map((e, index) => {
            return <button key={index}>{e}</button>;
          })}
        </p>
        <span>Ticket(s) price: {props.price} dinara</span>
        <Button classes={"payment"} clicked={props.soldedTickets.bind(this)}>
          Next: Final confirm >
        </Button>
      </div>
    </div>
  );
}
