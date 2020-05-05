import React, { Component } from "react";
import "./Carousel.scss";
import { images } from "../../shared/images.js";

export default class Carousel extends Component {
  state = {
    currentNumber: 0,
  };
  componentDidMount = () => {
    let intervalId = setInterval(this.setCuraselNumber, 10000);
    this.setState({ intervalId: intervalId });
  };
  componentWillUnmount = () => {
    clearInterval(this.state.intervalId);
  };
  setCuraselNumber = () => {
    if (this.state.currentNumber === 2) {
      return this.setState({ currentNumber: 0 });
    }
    this.setState({ currentNumber: this.state.currentNumber + 1 });
  };
  render() {
    return (
      <div className="carousel">
        {/* <div></div>
      <div></div>
      <div></div>
      <div></div> */}
        <img src={images[this.state.currentNumber].img} alt="carousel" />
        <div
          className="overlay"
          style={{ background: images[this.state.currentNumber].overlay }}
        ></div>
      </div>
    );
  }
}
