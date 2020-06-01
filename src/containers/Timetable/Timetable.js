import React, { Component } from "react";
import "./Timetable.scss";
import Buses from "../Buses/Buses";
import Search from "../../components/Search/Search";
import axios from "axios";
import Header from "../../components/Header/Header";
import WarningCard from "../../components/WarningCard/WarningCard";

export default class Timetable extends Component {
  state = {
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
    axios.get("../../data1.json").then((res) => {
      const result = res.data;
      console.log(result);
      this.setState({ lines: res.data });
    });
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
  };
  dataSearchMap = () => {
    if (this.state.new_search.length === 0) {
      return <WarningCard children="Molimo Vas prilagodite pretragu." />;
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
      <div style={{ minHeight: "150vh" }}>
        <Search
          classes="searchDiv"
          onSearch={this.searchDeparture}
          lines={this.state.lines}
          {...this.props}
        />
        <Header />
        {this.dataSearchMap()}
      </div>
    );
  }
}
