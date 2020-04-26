import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.scss";
import PageHeader from "./components/PageHeader/PageHeader";
import Background from "./components/Background/Background";
import Home from "./containers/Home/Home";
import Timetable from "./containers/Timetable/Timetable";
import NoMatch from "./components/NoMatch/NoMatch";
import AboutUs from "./containers/AboutUs/AboutUs";

export default function App() {
  return (
    <div className="App">
      <Router>
        <PageHeader />
        <Background />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/aboutUs" exact component={AboutUs} />
          <Route path="/redvoznje" exact component={Timetable} />
          <Route component={NoMatch} />
        </Switch>
      </Router>
    </div>
  );
}
