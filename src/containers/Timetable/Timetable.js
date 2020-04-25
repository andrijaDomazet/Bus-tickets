import React, { Component } from "react";
import "./Timetable.scss";
import Buses from "../Buses/Buses";
import Search from "../../components/Search/Search";
// import Axios from "axios";
import Header from "../../components/Header/Header";

export default class Timetable extends Component {
  state = {
    lines: [
      {
        departure: "Beograd",
        timeD: "8:45",
        timeA: "16:00",
        arrival: "Novi Sad",
        price: 500,
      },
      {
        departure: "Beograd",
        timeD: "8:45",
        timeA: "16:00",
        arrival: "Niš",
        price: 900,
      },
      {
        departure: "Beograd",
        timeD: "8:45",
        timeA: "16:00",
        arrival: "Zrenjanin",
        price: 400,
      },
      {
        departure: "Beograd",
        timeD: "8:45",
        timeA: "16:00",
        arrival: "Pančevo",
        price: 200,
      },
      {
        departure: "Beograd",
        timeD: "8:45",
        timeA: "16:00",
        arrival: "Stari Slankamen",
        price: 480,
      },
      {
        departure: "Beograd",
        timeD: "8:45",
        timeA: "16:00",
        arrival: "Budimpešta",
        price: 2800,
      },
      {
        departure: "Beograd",
        timeD: "8:45",
        timeA: "16:00",
        arrival: "Beč",
        price: 3200,
      },
      {
        departure: "Beograd",
        timeD: "8:45",
        timeA: "16:00",
        arrival: "Novi Sad",
        price: 500,
      },
      {
        departure: "Beograd",
        timeD: "8:45",
        timeA: "16:00",
        arrival: "Niš",
        price: 900,
      },
      {
        departure: "Beograd",
        timeD: "8:45",
        timeA: "16:00",
        arrival: "Zrenjanin",
        price: 400,
      },
      {
        departure: "Beograd",
        timeD: "8:45",
        timeA: "16:00",
        arrival: "Pančevo",
        price: 200,
      },
      {
        departure: "Beograd",
        timeD: "8:45",
        timeA: "16:00",
        arrival: "Novi Sad",
        price: 500,
      },
      {
        departure: "Beograd",
        timeD: "8:45",
        timeA: "16:00",
        arrival: "Niš",
        price: 900,
      },
      {
        departure: "Smederevo",
        timeD: "8:45",
        timeA: "16:00",
        arrival: "Beograd",
        price: 400,
      },
      {
        departure: "Smederevo",
        timeD: "8:45",
        timeA: "16:00",
        arrival: "Beograd",
        price: 400,
      },
      {
        departure: "Smederevo",
        timeD: "8:45",
        timeA: "10:00",
        arrival: "Beograd",
        price: 400,
      },
      {
        departure: "Smederevo",
        timeD: "18:45",
        timeA: "10:00",
        arrival: "Beograd",
        price: 400,
      },
      {
        departure: "Smederevo",
        timeD: "8:45",
        timeA: "10:00",
        arrival: "Beograd",
        price: 400,
      },
      {
        departure: "Smederevo",
        timeD: "8:45",
        timeA: "10:00",
        arrival: "Beograd",
        price: 400,
      },
      {
        departure: "Smederevo",
        timeD: "8:45",
        timeA: "11:00",
        arrival: "Pančevo",
        price: 200,
      },
    ],

    woman: [1, 4, 6, 12, 14, 22, 25, 27, 44, 45, 51],
    man: [2, 3, 7, 8, 15, 16, 21, 26, 29, 46, 47, 52, 53, 54],
    tickets: [],
    new_search: [],
    linesAxios: [],
  };
  numberOfSeats = () => {
    var x = [];
    for (let i = 1; i <= 55; i++) {
      x = [...x, i];
    }
    return x;
  };
  //TEST UPIS, direktno kao z vlasnik karte
  upisNovogStejta = (vrednost) => {
    this.setState({ woman: [...this.state.woman, ...vrednost] });
  };
  //TEST FUNKCIJA - obrisati kada se budu do kraja regulsale karte
  componentDidMount = () => {
    // Axios.get("../public/data.JSON").then(res => {
    //   console.log(res);
    //   this.setState({ linesAxios: res.data });
    // });
    this.setState({
      tickets: [...this.state.woman, ...this.state.man].sort((a, b) => {
        return a - b;
      }),
    });
  };
  componentDidUpdate = (prevProps, prevState) => {
    if (this.state.woman !== prevState.woman) {
      // update the state
      this.setState({ tickets: [...this.state.woman, ...this.state.man] });
    }
  };
  //dodeljuje klasu sedistu u zavisnosti da li je m ili z
  seatsClasses = (e) => {
    return this.state.tickets.includes(e) ? "selected" : "";
  };

  //TEST UPIS, direktno kao z vlasnik karte
  upisNovogStejta = (vrednost) => {
    this.setState({ woman: [...this.state.woman, ...vrednost] });
  };

  searchDeparture = (search) => {
    this.setState({ new_search: search });
    console.log("App", search);
  };
  dataSearchMap = () => {
    if (this.state.new_search.length === 0) {
      return (
        <div className="home__message">
          <span>Please customize your search.</span>
        </div>
      );
    } else {
      return this.state.new_search.map((line, index) => {
        return (
          <Buses
            numberOfSeats={this.numberOfSeats()}
            man={this.state.man}
            woman={this.state.woman}
            tickets={this.state.tickets}
            departure={line.departure}
            arrival={line.arrival}
            timeD={line.timeD}
            timeA={line.timeA}
            price={line.price}
            key={index + 1}
            promenaStejta={this.upisNovogStejta}
          />
        );
      });
    }
  };
  render() {
    return (
      <div>
        <Search
          classes="searchDiv"
          onSearch={this.searchDeparture}
          lines={this.state.lines}
        />
        <Header />
        {this.dataSearchMap()}
      </div>
    );
  }
}
