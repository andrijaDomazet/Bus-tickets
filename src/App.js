import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.scss";
import PageHeader from "./components/PageHeader/PageHeader";
import Background from "./components/Background/Background";
import Home from "./containers/Home/Home";
import Timetable from "./containers/Timetable/Timetable";
import NoMatch from "./components/NoMatch/NoMatch";
import AboutUs from "./containers/AboutUs/AboutUs";
import Footer from "./components/Footer/Footer";
import WarningCard from "./components/WarningCard/WarningCard";

export default function App() {
  return (
    <div className="App">
      <Router>
        <WarningCard
          show="none"
          classes="black"
          children="This page is made through practice for personal use only. The site is not intended for commercial purposes."
        />
        <PageHeader />
        <Background />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/aboutUs" exact component={AboutUs} />
          <Route path="/redvoznje" exact component={Timetable} />
          <Route component={NoMatch} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}
