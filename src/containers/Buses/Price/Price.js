import React, { Component } from "react";
import "./Price.scss";

export default class Price extends Component {
  state = {
    ticketsPrice: []
  };

  componentDidUpdate = (prevProps, prevState) => {
    if (this.props.seat !== prevProps.seat) {
      this.ticketValue();
    } else if (this.state.ticketsPrice !== prevState.ticketsPrice) {
      this.ukupniObracun();
    }
  };

  //a function that determines price the discounted ticket
  price2 = () => {
    if (this.props.tickets.length + this.props.seat.length < 27) {
      return this.props.price - this.props.price * 0.2;
    } else {
      return this.props.price - this.props.price * 0.1;
    }
  };
  //assigning values to tickets
  ticketValue = () => {
    if (this.props.seat.length === 0) {
      this.setState({ ticketsPrice: [] });
    } else {
      this.props.tickets.length + this.props.seat.length <= 27
        ? this.setState({
            ticketsPrice: [
              ...this.state.ticketsPrice,
              this.props.price - this.props.price * 0.2
            ]
          })
        : this.setState({
            ticketsPrice: [
              ...this.state.ticketsPrice,
              this.props.price - this.props.price * 0.1
            ]
          });
    }
  };

  //info for number of reduce ticket
  infoPrice = () => {
    if (55 - this.props.tickets.length - 28 - this.props.seat.length > 0) {
      return 55 - this.props.tickets.length - 28 - this.props.seat.length;
    } else {
      return 55 - this.props.tickets.length - this.props.seat.length;
    }
  };

  //calculation for all selected tickets
  ukupniObracun = () => {
    var ukupnaCena = this.state.ticketsPrice.reduce((a, b) => {
      return a + b;
    }, 0);
    this.props.cenaKarata(ukupnaCena);
    this.setState({ clear: true });
  };
  clear = () => {
    this.setState({ ticketsPrice: "" });
  };
  render() {
    const { ...props } = this.props;
    return (
      <div className="busesPrice">
        <span className="price1">{props.price} din</span>
        <span className="price2">{this.price2()} din</span>
        <span className="info">Sedišta po ovoj ceni: {this.infoPrice()}</span>
      </div>
    );
  }
}
