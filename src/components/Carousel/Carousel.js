import React, { Component } from "react";
import "./Carousel.scss";
import { images } from "../../shared/images.js";

export default class Carousel extends Component {
  state = {
    currentNumber: 0,
  };
  componentDidMount = () => {
    let intervalId = setInterval(this.setCarouselNumber, 10000);
    this.setState({ intervalId: intervalId });
  };
  componentWillUnmount = () => {
    clearInterval(this.state.intervalId);
  };
  setCarouselNumber = () => {
    if (this.state.currentNumber === images.length - 1) {
      return this.setState({ currentNumber: 0 });
    }
    this.setState({ currentNumber: this.state.currentNumber + 1 });
  };
  changeCarouselPosition = (index) => {
    this.setState({ currentNumber: index });
  };
  carouselControler = (count, slide) => {
    const slideClass = (index, slide) => {
      if (index === slide) {
        return "currentSlide";
      }
    };
    return (
      <div className="slides">
        {count.map((slidePos, index) => {
          return (
            <div
              key={index}
              className={slideClass(index, slide)}
              onClick={() => this.changeCarouselPosition(index)}
            />
          );
        })}
      </div>
    );
  };
  render() {
    return (
      <div className="carousel">
        {this.carouselControler(images, this.state.currentNumber)}
        <img src={images[this.state.currentNumber].img} alt="carousel" />
        <div
          className="overlay"
          style={{ background: images[this.state.currentNumber].overlay }}
        ></div>
      </div>
    );
  }
}
