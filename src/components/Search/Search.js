import React, { Component } from "react";
import Button from "../../containers/UI/Button/Button";
import "./Search.scss";
import data from "../../data";

export default class Search extends Component {
  state = {
    search: "",
    oneWay: true,
    searchDeparture: "",
    searchArrival: "",
  };

  redirectToTimetable = () => {
    console.log(this.props.value);

    this.props.history.push("./redvoznje");
    this.searchProps();
  };

  setTripDirection = () => {
    this.setState({ oneWay: !this.state.oneWay });
  };
  oneWayTrip = () => {
    return this.state.oneWay ? (
      <i className="far fa-check-circle" />
    ) : (
      <div onClick={this.setTripDirection} className="radio" />
    );
  };
  returnTrip = () => {
    return this.state.oneWay ? (
      <div onClick={this.setTripDirection} className="radio" />
    ) : (
      <i className="far fa-check-circle" />
    );
  };
  search = (event) => {
    this.setState({ searchDeparture: event.target.value.substr(0, 20) });
  };
  search2 = (event) => {
    this.setState({ searchArrival: event.target.value.substr(0, 20) });
  };
  searchProps = () => {
    let search = this.props.lines.filter((line) => {
      return (
        line.departure
          .toLowerCase()
          .indexOf(this.state.searchDeparture.toLowerCase()) !== -1
      );
    });
    let search2 = this.props.lines.filter((line) => {
      return (
        line.arrival
          .toLowerCase()
          .indexOf(this.state.searchArrival.toLowerCase()) !== -1
      );
    });
    var searchResult = search.filter((line) => search2.includes(line));
    this.props.onSearch(searchResult);
  };
  render() {
    return (
      <div className={this.props.classes}>
        <div className="procceses">
          <div className="procces-select">
            <div className="procces-symbol">1</div>
            <p>odabir polaska i sedišta</p>
          </div>
          <div className="procces-select">
            <div className="procces-symbol">2</div>
            <p>informacije plaćanja</p>
          </div>
          <div className="procces-select">
            <div className="procces-symbol">3</div>
            <p>potvrda rezervacije</p>
          </div>
        </div>
        <div className="search">
          <div className="search__title">
            <div />
            <div />
            Е-KARTE
          </div>
          <div className="search-options">
            {this.oneWayTrip()}
            <span>Jedan smer</span>
            {this.returnTrip()}
            <span>Povratna</span>
            <div className="pcl-btn">
              <i className="fas fa-user"></i>Registracija korisnika
            </div>
          </div>
          <div className="search-routes">
            {/* <div>{this.props.lines[]}</div> */}
            {options.map((option, index) => {
              let lines = [...new Set(data.map((line) => line[option.list]))];
              return (
                <div key={index} className={`search-${option.name}`}>
                  <input
                    type="text"
                    placeholder={option.name}
                    onChange={`this.${option.foo}`}
                    list={option.name}
                  />
                  <datalist id={option.name}>
                    {lines.map((line, index) => {
                      return <option key={index} value={line} />;
                    })}
                  </datalist>
                </div>
              );
            })}
            <i className="fas fa-sync-alt changeDirection" />
            <div className="search-dateD">
              <input type="date" data-date="" data-date-format="DD MMMM YYYY" />
            </div>
            <div className="search-dateA">
              <input type="date" disabled={this.state.oneWay} />
            </div>
            <div className="search-list">
              <Button
                classes="buttons__normal"
                clicked={this.redirectToTimetable}
                children="Pretraga"
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
const options = [
  {
    name: "polazak",
    foo: "search",
    list: "departure",
  },
  { name: "dolazak", foo: "search2", list: "arrival" },
];
