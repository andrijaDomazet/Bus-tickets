import React, { Component } from "react";
import Stairs from "./Stairs/Stairs";
import Seats from "./Seats/Seats";
// import { Button } from "react-bootstrap";
import Button from "../UI/Button/Button";
import SeatOptions from "./SeatOptions/SeatOptions";
import Payment from "../Payment/Payment";
import Price from "./Price/Price";
import "./Buses.scss";

export default class Buses extends Component {
  state = {
    seat: [],
    choose: "false",
    paymentClick: false,
  };

  //odabir sedista, prijava ukoliko je sediste zauzeto i ogranicenjena 4 selektovana sedista
  seatSelected = (e) => {
    if (this.props.tickets.includes(e)) {
      alert("Sediste je vec zauzeto");
    } else if (this.state.seat.includes(e)) {
      this.setState({
        seat: this.state.seat.filter((person) => {
          return person !== e;
        }),
      });
    } else if (this.state.seat.length === 4) {
      alert("Mozete selektovati maksimum 4 sedista.");
    } else {
      this.setState({
        seat: [...this.state.seat, e].sort((a, b) => {
          return a - b;
        }),
      });
    }
  };

  seatsClasses = (e) => {
    return this.props.tickets.includes(e) || this.state.seat.includes(e)
      ? "selected"
      : "";
  };

  selectedTicketPrice = (price) => {
    this.setState({ ukupnaCena: price, clear: true });
  };

  //change seats color (selected and soled tickets)
  colors = (e) => {
    if (this.state.seat.includes(e)) {
      return "#58BC82";
    } else if (this.props.woman.includes(e)) {
      return "#F977C3";
    } else if (this.props.man.includes(e)) {
      return "#73A2D1";
    }
  };

  //daje u stejtu true cime se prikazuje odredjeni bus
  chooseBus = () => {
    window.scrollTo(0, this.myRef.offsetTop);
    this.setState({ choose: !this.state.choose });
  };

  availableSeats = () => {
    var availableSeats =
      this.props.numberOfSeats.length -
      this.props.tickets.length -
      this.state.seat.length;
    return availableSeats + "/" + this.props.numberOfSeats.length;
  };

  placanje = () => {
    this.setState({ paymentClick: !this.state.paymentClick });
  };

  // daje click
  soldedTickets = () => {
    this.setState({
      paymentClick: !this.state.paymentClick,
    });
    this.promenaStejta();
  };

  bussesUtility = () => {
    console.log("Busses utillity");
  };

  promenaStejta = () => {
    var noviStejt = this.state.seat;
    this.props.promenaStejta(noviStejt);
    this.setState({ seat: [] });
  };
  render() {
    const { ...props } = this.props;

    return (
      <div className="buses__main">
        <div ref={(ref) => (this.myRef = ref)} className="buses">
          <div className="buses__info">
            <i className="fas fa-info-circle" />
          </div>
          <div className="buses__route">
            <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
              <span>{props.departure}</span>
              <span style={{ flex: 1, color: "orange" }}>
                <i className="far fa-clock"></i>
                {props.timeD}
              </span>
            </div>
            <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
              <span>{props.arrival}</span>
              <span style={{ flex: 1, color: "orange" }}>
                <i className="far fa-clock"></i>
                {props.timeA}
              </span>
            </div>
          </div>
          <div className="buses__utility" onMouseOver={this.bussesUtility}>
            <i className="fas fa-tv" />
            <i className="fas fa-wifi" />
            <i className="fas fa-plug" />
          </div>
          <div className="buses__available">
            {this.availableSeats()}
            <i className="fas fa-user" />
          </div>
          <Price
            cenaKarata={this.selectedTicketPrice}
            price={props.price}
            tickets={props.tickets}
            seat={this.state.seat}
          />
          <div className="buses__choose">
            <Button
              style={{ width: "70%", height: "40px" }}
              onClick={this.chooseBus}
              variant="danger"
            >
              {this.state.choose ? "choose" : "undo"}
            </Button>
          </div>
        </div>
        <div
          style={{
            display: this.state.choose ? "none" : "",
          }}
          className="reservationOptions"
        >
          <div className="reservationOptions-left">
            <div className="bus">
              <Stairs stairsClasses={"busStairs1"} />
              <Stairs stairsClasses={"busStairs2"} />
              <div className="allSeats">
                {props.numberOfSeats.map((e, index) => {
                  return (
                    <Seats
                      classes={this.seatsClasses(e)}
                      clicked={() => this.seatSelected(e)}
                      color={this.colors(e)}
                      key={index}
                    >
                      {e}
                    </Seats>
                  );
                })}
              </div>
              <div className="hallway">hallway</div>
            </div>
            <SeatOptions />
          </div>
          <div className="reservationOptions-right">
            <div className="selectedSeats">
              <p>Selected seat(s)</p>
              <div className="selectedSeats-box">
                {this.state.seat.map((s, index) => {
                  return (
                    <Seats key={index} color={"#58BC82"} classes={"selected"}>
                      {s}
                    </Seats>
                  );
                })}
              </div>
            </div>
            <div className="ticketAmount">
              Ticket(s) Amount: {this.state.ukupnaCena} dinara
            </div>
            <Button
              classes={"payment"}
              visibility={this.state.seat.length === 0 ? "hidden" : ""}
              clicked={this.placanje}
            >
              Go to the payment
            </Button>
          </div>
        </div>
        <Payment
          paymentClick={this.state.paymentClick}
          seat={this.state.seat}
          price={this.state.ukupnaCena}
          soldedTickets={this.soldedTickets}
          cenaKarata={this.props.selectedTicketPrice}
          upisivanjeSedista={this.upisPodataka}
        />
      </div>
    );
  }
}
